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
      "https://api.stripe.com",
      "https://hooks.stripe.com",
    ],
    credentials: true,
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "Accept"],
  })
);

// Middleware JSON SAUF pour /webhook
app.use((req: Request, res: Response, next: NextFunction) => {
  if (req.originalUrl === "/webhook") {
    return next(); // laisser le raw body pour Stripe
  }
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

// Test endpoint pour vérifier que les webhooks arrivent
app.post("/webhook-test", express.json(), (req: Request, res: Response) => {
  console.log("🧪 === TEST WEBHOOK ===");
  console.log("📡 Headers:", req.headers);
  console.log("📦 Body:", req.body);
  res.json({ received: true, timestamp: new Date().toISOString() });
});

// Créer une Checkout Session (abonnement)
app.post("/create-checkout-session", async (req: Request, res: Response) => {
  try {
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

    const session = await stripe.checkout.sessions.create(sessionParams);

    return res.json({ url: session.url, sessionId: session.id });
  } catch (err: any) {
    console.error("❌ create-checkout-session error:", err);
    return res.status(500).json({ error: err.message || "unknown_error" });
  }
});

// Webhook Stripe — utiliser express.raw uniquement ici
app.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  async (req: Request, res: Response) => {
    console.log("🎯 === WEBHOOK STRIPE REÇU ===");
    console.log("📡 Headers:", JSON.stringify(req.headers, null, 2));
    console.log("📦 Body length:", req.body?.length || 0);
    console.log("🔑 Signature présente:", !!req.headers["stripe-signature"]);
    
    if (!STRIPE_WEBHOOK_SECRET) {
      console.error("Missing STRIPE_WEBHOOK_SECRET");
      return res.status(500).send("Server misconfigured");
    }

    const sig = req.headers["stripe-signature"] as string;
    
    if (!sig) {
      console.error("❌ Pas de signature Stripe dans les headers");
      return res.status(400).send("No Stripe signature");
    }
    
    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(req.body, sig, STRIPE_WEBHOOK_SECRET);
      console.log("✅ Event Stripe validé:", event.type, event.id);
    } catch (err: any) {
      console.error("❌ Webhook signature verification failed:", err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    try {
      console.log("🔄 Traitement de l'événement:", event.type);
      switch (event.type) {
        case "checkout.session.completed": {
          const s = event.data.object as Stripe.Checkout.Session;
          console.log("✅ checkout.session.completed", s.id);
          console.log("📊 Session data:", {
            id: s.id,
            client_reference_id: s.client_reference_id,
            customer_email: s.customer_email,
            mode: s.mode,
            payment_status: s.payment_status
          });
          break;
        }
        case "invoice.payment_succeeded": {
          const inv = event.data.object as Stripe.Invoice & { subscription?: string };
          console.log("💰 invoice.payment_succeeded", inv.id);

          let userId = inv.metadata?.userId as string | undefined;
          let planType = inv.metadata?.planType as string | undefined;
          
          console.log("🔍 Metadata initiale:", { userId, planType });

          if ((!userId || !planType) && inv.subscription) {
            const sub = await stripe.subscriptions.retrieve(inv.subscription);
            userId = userId || sub.metadata?.userId;
            planType = planType || sub.metadata?.planType;
            console.log("🔍 Metadata depuis subscription:", { userId, planType });
          }

          if (userId && planType) {
            const credits = planType === "starter" ? 25 : 150;
            console.log(`💳 Attribution de ${credits} crédits à l'utilisateur ${userId}`);
            
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
          } else {
            console.warn("⚠️ Impossible de traiter le paiement - userId ou planType manquant");
          }
          break;
        }
        case "customer.subscription.updated":
        case "customer.subscription.deleted": {
          const sub = event.data.object as Stripe.Subscription;
          console.log(`🔄 ${event.type}:`, sub.id);
          const userId = sub.metadata?.userId as string | undefined;
          const planType = sub.metadata?.planType as string | undefined;
          
          if (userId) {
            console.log(`📝 Mise à jour subscription pour ${userId}: ${sub.status}`);
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
          } else {
            console.warn("⚠️ userId manquant dans les metadata de la subscription");
          }
          break;
        }
        default:
          console.log(`ℹ️ Unhandled event: ${event.type}`);
      }

      console.log("✅ Webhook traité avec succès");
      return res.json({ received: true });
    } catch (err: any) {
      console.error("❌ Webhook handler error:", err);
      console.error("❌ Stack:", err.stack);
      return res.status(500).send("Webhook handler error");
    }
  }
);

// Export HTTP Function
export const api = functions.region("us-central1").https.onRequest(app);
