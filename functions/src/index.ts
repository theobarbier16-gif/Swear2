import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import express from "express";
import cors from "cors";
import Stripe from "stripe";

// ✅ Initialisation Firebase Admin
admin.initializeApp();

// ✅ Express app
const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());
app.use(express.raw({ type: "application/json" }));

// ✅ Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-06-20",
});

// ✅ Test endpoint
app.get("/test", (_req, res) => {
  res.json({
    message: "Firebase Functions are working!",
    timestamp: new Date().toISOString(),
  });
});

// ✅ Create Checkout Session
app.post("/create-checkout-session", async (req, res) => {
  try {
    const { priceId, userId, planType } = req.body;

    const session = await stripe.checkout.sessions.create({
      mode: "subscription", // 👈 pour gérer les abonnements
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/pricing`,
      metadata: {
        userId,
        planType,
      },
    });

    res.json({ sessionId: session.id });
  } catch (error) {
    console.error("❌ Error creating checkout session:", error);
    res.status(500).json({ error: "Failed to create checkout session" });
  }
});

// ✅ Stripe webhook
app.post("/webhook", async (req, res) => {
  const sig = req.headers["stripe-signature"] as string;
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret as string);
  } catch (err: any) {
    console.error("❌ Webhook signature verification failed:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // 🎯 Handle events
  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      console.log("✅ Checkout session completed:", session.id);
      break;
    }

    case "invoice.payment_succeeded": {
      const invoice = event.data.object as Stripe.Invoice;
      console.log("💸 Payment succeeded for subscription:", invoice.subscription);

      const userId = invoice.metadata?.userId;
      const planType = invoice.metadata?.planType;

      if (userId && planType) {
        try {
          const credits = planType === "starter" ? 25 : 150;
          await admin.firestore()
            .collection("users")
            .doc(userId)
            .update({
              credits: admin.firestore.FieldValue.increment(credits),
              lastPurchase: admin.firestore.FieldValue.serverTimestamp(),
              planType,
            });
          console.log(`✨ Added ${credits} credits to user ${userId}`);
        } catch (error) {
          console.error("❌ Firestore update failed:", error);
        }
      }
      break;
    }

    case "customer.subscription.updated": {
      const subscription = event.data.object as Stripe.Subscription;
      console.log("🔄 Subscription updated:", subscription.id);
      console.log("➡️ Current items:", subscription.items.data.map(i => i.price.id));
      break;
    }

    case "customer.subscription.deleted": {
      const subscription = event.data.object as Stripe.Subscription;
      console.log("❌ Subscription cancelled:", subscription.id);
      break;
    }

    default:
      console.log(`ℹ️ Unhandled event type: ${event.type}`);
  }

  res.json({ received: true });
});

// ✅ Health check
app.get("/health", (_req, res) => {
  res.json({
    status: "healthy",
    timestamp: new Date().toISOString(),
    version: "1.0.0",
  });
});

// ✅ Export Express app en fonction Firebase
export const stripeWebhook = functions.https.onRequest(app);

// ✅ Fonction ping simple
export const ping = functions.https.onRequest((_req, res) => {
  res.json({
    message: "pong ✅",
    timestamp: new Date().toISOString(),
  });
});
