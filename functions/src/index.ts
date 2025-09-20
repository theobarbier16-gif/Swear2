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
app.use(cors({ 
  origin: [
    'http://localhost:5173',
    'http://localhost:3000',
    'https://theobarbier16-gif-sw-zd6o.bolt.host',
    /\.bolt\.host$/,
    /\.netlify\.app$/
  ],
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept']
}));
app.use(express.json());
app.use(express.raw({ type: "application/json" }));

// Middleware de logging pour debug
app.use((req, res, next) => {
  console.log(`📡 ${req.method} ${req.path} - Origin: ${req.headers.origin}`);
  next();
});

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
    console.log('🛒 Création session checkout:', req.body);
    
    const { priceId, userId, planType } = req.body;
    
    if (!priceId || !planType) {
      console.error('❌ Paramètres manquants:', { priceId, planType });
      return res.status(400).json({ error: 'Paramètres manquants: priceId et planType requis' });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/pricing`,
      customer_email: req.body.userEmail, // 👈 Ajouter l'email client
      metadata: {
        userId,
        planType,
      },
      subscription_data: {
        metadata: {
          userId,
          planType,
        },
      },
    });

    console.log('✅ Session Stripe créée:', session.id);
    res.json({ sessionId: session.id });
  } catch (error) {
    console.error("❌ Error creating checkout session:", error);
    res.status(500).json({ 
      error: "Failed to create checkout session",
      details: error instanceof Error ? error.message : 'Unknown error'
    });
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

      // Récupérer les métadonnées depuis la subscription
      let userId = invoice.metadata?.userId;
      let planType = invoice.metadata?.planType;
      
      // Si pas dans invoice.metadata, chercher dans subscription.metadata
      if (!userId || !planType) {
        try {
          const subscription = await stripe.subscriptions.retrieve(invoice.subscription as string);
          userId = userId || subscription.metadata?.userId;
          planType = planType || subscription.metadata?.planType;
        } catch (error) {
          console.error("❌ Erreur récupération subscription:", error);
        }
      }

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
              hasPaid: true,
              subscription: {
                plan: planType,
                creditsRemaining: credits,
                maxCredits: credits,
                renewalDate: admin.firestore.FieldValue.serverTimestamp(),
                stripeSubscriptionId: invoice.subscription,
              },
            });
          console.log(`✨ Added ${credits} credits to user ${userId}`);
        } catch (error) {
          console.error("❌ Firestore update failed:", error);
        }
      } else {
        console.error("❌ Métadonnées manquantes:", { userId, planType });
      }
      break;
    }

    case "customer.subscription.updated": {
      const subscription = event.data.object as Stripe.Subscription;
      console.log("🔄 Subscription updated:", subscription.id);
      
      const userId = subscription.metadata?.userId;
      const planType = subscription.metadata?.planType;
      
      if (userId && planType) {
        try {
          const credits = planType === "starter" ? 25 : 150;
          await admin.firestore()
            .collection("users")
            .doc(userId)
            .update({
              subscription: {
                plan: planType,
                creditsRemaining: credits,
                maxCredits: credits,
                renewalDate: admin.firestore.FieldValue.serverTimestamp(),
                stripeSubscriptionId: subscription.id,
              },
              planType,
              hasPaid: subscription.status === "active",
            });
          console.log(`🔄 Updated subscription for user ${userId}`);
        } catch (error) {
          console.error("❌ Error updating subscription:", error);
        }
      }
      break;
    }

    case "customer.subscription.deleted": {
      const subscription = event.data.object as Stripe.Subscription;
      console.log("❌ Subscription cancelled:", subscription.id);
      
      const userId = subscription.metadata?.userId;
      
      if (userId) {
        try {
          await admin.firestore()
            .collection("users")
            .doc(userId)
            .update({
              hasPaid: false,
              planType: "free",
              subscription: {
                plan: "free",
                creditsRemaining: 3,
                maxCredits: 3,
                renewalDate: admin.firestore.FieldValue.serverTimestamp(),
                stripeSubscriptionId: null,
              },
            });
          console.log(`❌ Cancelled subscription for user ${userId}`);
        } catch (error) {
          console.error("❌ Error cancelling subscription:", error);
        }
      }
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
