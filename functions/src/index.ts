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
    console.log("📦 Body reçu:", JSON.stringify(req.body, null, 2));
    console.log("🌐 Origin:", req.headers.origin);
    console.log("🔑 Stripe key configurée:", STRIPE_SECRET_KEY ? "✅ OUI" : "❌ NON");
    
    const { priceId, userId, userEmail, planType } = req.body as {
      priceId: string;
      userId?: string;
      userEmail?: string;
      planType?: string;
    };

    if (!priceId) {
      console.log("❌ PriceId manquant");
      return res.status(400).json({ error: "priceId requis" });
    }
    
    if (!userId) {
      console.log("❌ UserId manquant");
      return res.status(400).json({ error: "Utilisateur non identifié. Veuillez vous reconnecter." });
    }
    
    if (!userEmail) {
      console.log("❌ UserEmail manquant");
      return res.status(400).json({ error: "Email utilisateur requis" });
    }
    
    console.log("✅ PriceId reçu:", priceId);

    const origin =
      (req.headers.origin as string) ||
      "https://theobarbier16-gif-sw-zd6o.bolt.host"; // fallback utile

    console.log("🔗 Origin utilisée:", origin);
    
    const sessionData = {
      mode: "subscription",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/pricing`,
      customer_email: userEmail,
      client_reference_id: userId,
      metadata: { userId: userId || "", planType: planType || "" },
      subscription_data: { metadata: { userId: userId || "", planType: planType || "" } },
      allow_promotion_codes: true,
      automatic_tax: { enabled: true },
    };
    
    console.log("📋 Session data à créer:", JSON.stringify(sessionData, null, 2));
    console.log("🔄 Création session Stripe...");
    
    const session = await stripe.checkout.sessions.create({
      ...sessionData
    });

    console.log("✅ Session Stripe créée avec succès!");
    console.log("🆔 Session ID:", session.id);
    console.log("🔗 Session URL:", session.url);
    console.log("💰 Montant:", session.amount_total);
    console.log("💱 Devise:", session.currency);
    
    const response = { url: session.url, sessionId: session.id };
    console.log("📤 Réponse envoyée:", JSON.stringify(response, null, 2));
    console.log("🎉 === FIN CREATE CHECKOUT SESSION SUCCES ===");
    
    return res.json(response);
  } catch (err: any) {
    console.error("💥 === ERREUR CREATE CHECKOUT SESSION ===");
    console.error("❌ Type d'erreur:", err.constructor.name);
    console.error("❌ Message:", err.message);
    console.error("❌ Code:", err.code);
    console.error("❌ Stack:", err.stack);
    console.error("❌ Stripe error type:", err.type);
    console.error("❌ Stripe error code:", err.code);
    console.error("💥 === FIN ERREUR ===");
    return res.status(500).json({ error: err.message || "unknown_error" });
  }
});

// Webhook Stripe — RAW body uniquement
app.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  async (req: Request, res: Response) => {
    console.log("🎯 === DEBUT WEBHOOK STRIPE ===");
    console.log("📦 Headers:", JSON.stringify(req.headers, null, 2));
    console.log("📏 Body length:", req.body?.length || 0);
    console.log("🔑 Webhook secret configuré:", STRIPE_WEBHOOK_SECRET ? "✅ OUI" : "❌ NON");
    
    if (!STRIPE_WEBHOOK_SECRET) {
      console.error("❌ STRIPE_WEBHOOK_SECRET manquant!");
      return res.status(500).send("Server misconfigured");
    }

    const sig = req.headers["stripe-signature"] as string;
    console.log("✍️ Signature reçue:", sig ? "✅ OUI" : "❌ NON");
    
    let event: Stripe.Event;

    try {
      console.log("🔍 Vérification signature webhook...");
      event = stripe.webhooks.constructEvent(req.body, sig, STRIPE_WEBHOOK_SECRET);
      console.log("✅ Signature valide!");
      console.log("📋 Event type:", event.type);
      console.log("🆔 Event ID:", event.id);
    } catch (err: any) {
      console.error("💥 === ERREUR SIGNATURE WEBHOOK ===");
      console.error("❌ Message:", err.message);
      console.error("❌ Type:", err.type);
      console.error("❌ Code:", err.code);
      console.error("💥 === FIN ERREUR SIGNATURE ===");
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    try {
      console.log("🔄 Traitement de l'événement:", event.type);
      
      switch (event.type) {
        case "checkout.session.completed": {
          const s = event.data.object as Stripe.Checkout.Session;
          console.log("🛒 === CHECKOUT SESSION COMPLETED ===");
          console.log("🆔 Session ID:", s.id);
          console.log("👤 Customer:", s.customer);
          console.log("📧 Customer email:", s.customer_email);
          console.log("💰 Amount total:", s.amount_total);
          console.log("💱 Currency:", s.currency);
          console.log("📋 Metadata:", JSON.stringify(s.metadata, null, 2));
          console.log("🔗 Client reference ID:", s.client_reference_id);
          break;
        }
        case "invoice.payment_succeeded": {
          const inv = event.data.object as Stripe.Invoice & { subscription?: string };
          console.log("💸 === INVOICE PAYMENT SUCCEEDED ===");
          console.log("🆔 Invoice ID:", inv.id);
          console.log("💰 Amount paid:", inv.amount_paid);
          console.log("💱 Currency:", inv.currency);
          console.log("🔗 Subscription:", inv.subscription);
          console.log("📋 Metadata:", JSON.stringify(inv.metadata, null, 2));

          let userId = inv.metadata?.userId as string | undefined;
          let planType = inv.metadata?.planType as string | undefined;
          
          console.log("👤 UserId from metadata:", userId || "non trouvé");
          console.log("📋 PlanType from metadata:", planType || "non trouvé");

          if ((!userId || !planType) && inv.subscription) {
            console.log("🔍 Récupération metadata depuis subscription...");
            const sub = await stripe.subscriptions.retrieve(inv.subscription);
            userId = userId || sub.metadata?.userId;
            planType = planType || sub.metadata?.planType;
            console.log("👤 UserId from subscription:", userId || "non trouvé");
            console.log("📋 PlanType from subscription:", planType || "non trouvé");
          }

          if (userId && planType) {
            const credits = planType === "starter" ? 25 : planType === "abonnement" ? 25 : 150;
            console.log("💳 Attribution de", credits, "crédits pour le plan", planType);
            
            const userData = {
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
            };
            
            console.log("📝 Données utilisateur à sauvegarder:", JSON.stringify(userData, null, 2));
            
            await admin
              .firestore()
              .collection("users")
              .doc(userId)
              .set(userData, { merge: true });
              
            console.log(`✨ ${credits} crédits ajoutés avec succès à l'utilisateur ${userId}`);
          } else {
            console.warn("⚠️ UserId ou planType manquant dans les metadata");
            console.warn("👤 UserId:", userId || "MANQUANT");
            console.warn("📋 PlanType:", planType || "MANQUANT");
          }
          break;
        }
        case "customer.subscription.updated":
        case "customer.subscription.deleted": {
          const sub = event.data.object as Stripe.Subscription;
          console.log("🔄 === SUBSCRIPTION", event.type.toUpperCase(), "===");
          console.log("🆔 Subscription ID:", sub.id);
          console.log("📊 Status:", sub.status);
          console.log("📋 Metadata:", JSON.stringify(sub.metadata, null, 2));
          
          const userId = sub.metadata?.userId as string | undefined;
          const planType = sub.metadata?.planType as string | undefined;
          
          if (userId) {
            const isActive = sub.status === "active";
            const finalPlanType = isActive ? (planType || "starter") : "free";
            
            console.log("📝 Mise à jour utilisateur:");
            console.log("👤 UserId:", userId);
            console.log("💳 hasPaid:", isActive);
            console.log("📋 planType:", finalPlanType);
            
            await admin
              .firestore()
              .collection("users")
              .doc(userId)
              .set(
                {
                  hasPaid: isActive,
                  planType: finalPlanType,
                  subscription: {
                    plan: finalPlanType,
                    stripeSubscriptionId: sub.id,
                  },
                },
                { merge: true }
              );
            console.log("✅ Utilisateur mis à jour avec succès");
          } else {
            console.warn("⚠️ UserId manquant dans subscription metadata");
          }
          break;
        }
        default:
          console.log(`ℹ️ Événement non géré: ${event.type}`);
      }

      console.log("✅ Événement traité avec succès");
      console.log("🎉 === FIN WEBHOOK STRIPE SUCCES ===");
      return res.json({ received: true });
    } catch (err: any) {
      console.error("💥 === ERREUR TRAITEMENT WEBHOOK ===");
      console.error("❌ Type:", err.constructor.name);
      console.error("❌ Message:", err.message);
      console.error("❌ Stack:", err.stack);
      console.error("💥 === FIN ERREUR TRAITEMENT ===");
      return res.status(500).send("Webhook handler error");
    }
  }
);

// Export HTTP Function (nom = api, région us-central1 comme ton ping)
export const api = functions.region("us-central1").https.onRequest(app);
