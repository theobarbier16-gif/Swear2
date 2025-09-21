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
      "https://theobarbier16-gif-sw-f1q9.bolt.host",
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

// Export HTTP Function
export const api = functions.region("us-central1").https.onRequest(app);
