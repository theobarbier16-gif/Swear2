import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import Stripe from "stripe";

admin.initializeApp();

// ----- Stripe init (prend d'abord les secrets Firebase Config, sinon les env) -----
const STRIPE_SECRET_KEY =
  functions.config().stripe?.secret_key || (process.env.STRIPE_SECRET_KEY as string);
const STRIPE_WEBHOOK_SECRET =
  functions.config().stripe?.webhook_secret || (process.env.STRIPE_WEBHOOK_SECRET as string);

if (!STRIPE_SECRET_KEY) {
  throw new Error("Stripe secret key missing: set stripe.secret_key or STRIPE_SECRET_KEY");
}

const stripe = new Stripe(STRIPE_SECRET_KEY);

// ----- Express app -----
const app = express();

// CORS – whitelist tes domaines (bolt.host + local)
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:3000",
      "https://theobarbier16-gif-sw-cbqo.bolt.host",
    ],
    credentials: true,
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "Accept"],
  })
);

// JSON partout SAUF /webhook (Stripe a besoin du RAW body)
app.use((req: Request, res: Response, next: NextFunction) => {
  if (req.path === "/webhook") return next();
  return express.json()(req, res, next);
});

// Petit log
app.use((req, _res, next) => {
  console.log(`📡 ${req.method} ${req.path} - origin=${req.headers.origin || "-"}`);
  next();
});

// Health
app.get("/health", (_req: Request, res: Response) => {
  res.json({ status: "ok", at: new Date().toISOString() });
});

// Créer une Checkout Session (abonnement)
app.post("/create-checkout-session", async (req: Request, res: Response) => {
  try {
    console.log("🚀 === DEBUT CREATE CHECKOUT SESSION ===");

    const { priceId, userId, userEmail, planType } = req.body as {
      priceId: string;
      userId?: string;
      userEmail?: string;
      planType?: string;
    };

    if (!priceId) return res.status(400).json({ error: "priceId requis" });
    if (!userId) return res.status(400).json({ error: "userId requis" });
    if (!userEmail) return res.status(400).json({ error: "userEmail requis" });

    const origin =
      (req.headers.origin as string) ||
      "https://theobarbier16-gif-sw-zd6o.bolt.host"; // fallback utile

    // ✅ Construis un objet typé Stripe
    const sessionParams: Stripe.Checkout.SessionCreateParams = {
      mode: "subscription",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/pricing`,
      customer_email: userEmail,
      client_reference_id: userId,
      metadata: { userId: userId ?? "", planType: planType ?? "" },
      subscription_data: { metadata: { userId: userId ?? "", planType: planType ?? "" } },
      allow_promotion_codes: true,
      automatic_tax: { enabled: true },
    };

    console.log("🔄 Création session Stripe…");
    const session = await stripe.checkout.sessions.create(sessionParams);

    console.log("✅ Session Stripe créée:", session.id);

    return res.json({ url: session.url, sessionId: session.id });
  } catch (err: any) {
    console.error("❌ create-checkout-session error:", err);
    return res.status(500).json({ error: err.message || "unknown_error" });
  }
});

// Webhook Stripe — RAW body uniquement
app.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  async (req: Request, res: Response) => {
    if (!STRIPE_WEBHOOK_SECRET) {
      console.error("Missing STRIPE_WEBHOOK_SECRET");
      return res.status(500).send("Server misconfigured");
    }

    const sig = req.headers["stripe-signature"] as string;
    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(req.body, sig, STRIPE_WEBHOOK_SECRET);
    } catch (err: any) {
      console.error("❌ Webhook signature verification failed:", err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    try {
      switch (event.type) {
        case "checkout.session.completed": {
          const s = event.data.object as Stripe.Checkout.Session;
          console.log("✅ checkout.session.completed", s.id);
          break;
        }
        case "invoice.payment_succeeded": {
          const inv = event.data.object as Stripe.Invoice & { subscription?: string };

          let userId = inv.metadata?.userId as string | undefined;
          let planType = inv.metadata?.planType as string | undefined;

          if ((!userId || !planType) && inv.subscription) {
            const sub = await stripe.subscriptions.retrieve(inv.subscription);
            userId = userId || sub.metadata?.userId;
            planType = planType || sub.metadata?.planType;
          }

          if (userId && planType) {
            const credits = planType === "starter" ? 25 : 150;
            await admin.firestore().collection("users").doc(userId).set(
              {
                credits: admin.firestore.FieldValue.increment(credits),
                lastPurchase: admin.firestore.FieldValue.serverTimestamp(),
                planType,
                hasPaid: true,
                subscription: {
                  plan: planType,
                  creditsRemaining: credits,
                  maxCredits: credits,
                  renewalDate: admin.firestore.FieldValue.serverTimestamp(),
                  stripeSubscriptionId: inv.subscription ?? null,
                },
              },
              { merge: true }
            );
            console.log(`✨ Added ${credits} credits to user ${userId}`);
          }
          break;
        }
        case "customer.subscription.updated":
        case "customer.subscription.deleted": {
          const sub = event.data.object as Stripe.Subscription;
          const userId = sub.metadata?.userId as string | undefined;
          const planType = sub.metadata?.planType as string | undefined;
          if (userId) {
            await admin.firestore().collection("users").doc(userId).set(
              {
                hasPaid: sub.status === "active",
                planType: sub.status === "active" ? (planType || "starter") : "free",
                subscription: {
                  plan: sub.status === "active" ? (planType || "starter") : "free",
                  stripeSubscriptionId: sub.id,
                },
              },
              { merge: true }
            );
          }
          break;
        }
        default:
          console.log(`ℹ️ Unhandled event: ${event.type}`);
      }

      return res.json({ received: true });
    } catch (err: any) {
      console.error("❌ Webhook handler error:", err);
      return res.status(500).send("Webhook handler error");
    }
  }
);

// Export HTTP Function
export const api = functions.region("us-central1").https.onRequest(app);
