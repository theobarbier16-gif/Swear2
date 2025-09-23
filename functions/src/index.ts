// functions/src/index.ts — Gen2 + Secret Manager (us-central1, UPPER_SNAKE_CASE)
import * as admin from "firebase-admin";
import Stripe from "stripe";
import { onRequest, onCall } from "firebase-functions/v2/https";
import { defineSecret } from "firebase-functions/params";
import cors from "cors";

// Configuration CORS
const corsHandler = cors({
  origin: true, // Permet toutes les origines
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept', 'Origin'],
  credentials: false
});

// --- Firebase Admin ---
if (!admin.apps.length) admin.initializeApp();
const db = admin.firestore();

// --- Secrets (noms en UPPER_SNAKE_CASE) ---
// Tu as répondu "Y" → secrets créés comme STRIPE_SECRET_KEY / STRIPE_WEBHOOK_SECRET
const STRIPE_SECRET_KEY = defineSecret("STRIPE_SECRET_KEY");
const STRIPE_WEBHOOK_SECRET = defineSecret("STRIPE_WEBHOOK_SECRET");

// --- Crédits par plan ---
const PLAN_CREDITS: Record<"free" | "starter" | "pro", number> = {
  free: 3,
  starter: 25,
  pro: 150,
};

// --- Helper Stripe (pas d'apiVersion pour éviter conflits de types) ---
const stripeFrom = (key: string) => new Stripe(key);

// =====================================================================
// 1) Callable: createCheckout  (appelée depuis React)
// =====================================================================
export const createCheckout = onCall(
  {
    region: "us-central1",
    secrets: [STRIPE_SECRET_KEY],
    timeoutSeconds: 30,
    cors: true, // CORS automatique pour les fonctions callable
  },
  async (request) => {
    const secret = STRIPE_SECRET_KEY.value();
    
    console.log('🔵 createCheckout appelée', {
      auth: !!request.auth,
      uid: request.auth?.uid,
      data: request.data
    });
    
    if (!request.auth) throw new Error("Unauthenticated");
    const uid = request.auth.uid;

    const { priceId, successUrl, cancelUrl } = request.data as {
      priceId: string;
      successUrl: string;
      cancelUrl: string;
    };
    
    console.log('🔵 Données reçues:', { priceId, successUrl, cancelUrl });
    
    if (!priceId || !successUrl || !cancelUrl) {
      throw new Error("Missing priceId/successUrl/cancelUrl");
    }

    const stripe = stripeFrom(secret);

    // Associer (ou créer) un customer Stripe pour l'utilisateur Firebase
    const userRef = db.collection("users").doc(uid);
    const snap = await userRef.get();

    let customerId = snap.data()?.stripeCustomerId as string | undefined;
    if (!customerId) {
      console.log('🔵 Création nouveau customer Stripe pour:', uid);
      const userRecord = await admin.auth().getUser(uid);
      const customer = await stripe.customers.create({
        email: userRecord.email || undefined,
        metadata: { uid },
      });
      customerId = customer.id;
      await userRef.set({ stripeCustomerId: customerId }, { merge: true });
      console.log('🔵 Customer créé:', customerId);
    }

    // Créer la session Checkout avec metadata.uid
    console.log('🔵 Création session Checkout...');
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      customer: customerId,
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: successUrl,
      cancel_url: cancelUrl,
      metadata: { uid },
    });

    console.log('🔵 Session créée:', session.id);
    return { url: session.url };
  }
);

// =====================================================================
// 1b) Alternative HTTP endpoint pour createCheckout (si callable ne fonctionne pas)
// =====================================================================
export const createCheckoutHttp = onRequest(
  {
    region: "us-central1",
    secrets: [STRIPE_SECRET_KEY],
    timeoutSeconds: 30,
    cors: true,
  },
  async (req, res) => {
    // Gérer CORS manuellement
    return corsHandler(req, res, async () => {
      const secret = STRIPE_SECRET_KEY.value();
      
      console.log('🟡 createCheckoutHttp appelée', {
        method: req.method,
        headers: req.headers,
        body: req.body
      });
      
      if (req.method === 'OPTIONS') {
        res.status(204).send('');
        return;
      }
      
      if (req.method !== 'POST') {
        res.status(405).json({ error: 'Method not allowed' });
        return;
      }
      
      try {
        const { priceId, userId, userEmail, successUrl, cancelUrl } = req.body;
        
        console.log('🟡 Données reçues:', { priceId, userId, userEmail, successUrl, cancelUrl });
        
        if (!priceId || !userId || !successUrl || !cancelUrl) {
          res.status(400).json({ error: 'Missing required fields' });
          return;
        }
        
        const stripe = stripeFrom(secret);
        
        // Récupérer ou créer le customer Stripe
        const userRef = db.collection("users").doc(userId);
        const snap = await userRef.get();
        
        let customerId = snap.data()?.stripeCustomerId as string | undefined;
        if (!customerId) {
          console.log('🟡 Création nouveau customer Stripe pour:', userId);
          const userRecord = await admin.auth().getUser(userId);
          const customer = await stripe.customers.create({
            email: userRecord.email || userEmail,
            metadata: { uid: userId },
          });
          customerId = customer.id;
          await userRef.set({ stripeCustomerId: customerId }, { merge: true });
          console.log('🟡 Customer créé:', customerId);
        }
        
        // Créer la session Checkout
        console.log('🟡 Création session Checkout...');
        const session = await stripe.checkout.sessions.create({
          mode: "subscription",
          customer: customerId,
          line_items: [{ price: priceId, quantity: 1 }],
          success_url: successUrl,
          cancel_url: cancelUrl,
          metadata: { uid: userId },
        });
        
        console.log('🟡 Session créée:', session.id);
        res.json({ sessionId: session.id, url: session.url });
        
      } catch (error) {
        console.error('🟡 Erreur createCheckoutHttp:', error);
        res.status(500).json({ 
          error: error instanceof Error ? error.message : 'Internal error' 
        });
      }
    });
  }
);
// =====================================================================
// 2) Webhook: stripeWebhook  (URL à mettre dans Stripe → Webhooks)
// =====================================================================
export const stripeWebhook = onRequest(
  {
    region: "us-central1",
    secrets: [STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET],
    cors: true, // Activer CORS pour les webhooks aussi
    timeoutSeconds: 30,
    maxInstances: 1,
  },
  async (req, res) => {
    // Gérer CORS pour les webhooks
    return corsHandler(req, res, async () => {
    const secret = STRIPE_SECRET_KEY.value();
    const whsec = STRIPE_WEBHOOK_SECRET.value();
    
    console.log('🔴 stripeWebhook appelée', {
      method: req.method,
      headers: req.headers
    });
    
    if (req.method === 'OPTIONS') {
      res.status(204).send('');
      return;
    }

    if (req.method !== "POST") {
      res.set("Allow", "POST");
      res.status(405).send("Method Not Allowed");
      return;
    }

    const stripe = stripeFrom(secret);
    const signature = req.headers["stripe-signature"] as string;

    let event: Stripe.Event;
    try {
      // IMPORTANT: ne pas parser le body; utiliser req.rawBody pour vérifier la signature
      event = stripe.webhooks.constructEvent(
        (req as any).rawBody,
        signature,
        whsec
      );
      console.log('🔴 Webhook event reçu:', event.type);
    } catch (err: any) {
      console.error("❌ Bad signature:", err.message);
      res.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

    try {
      switch (event.type) {
        case "checkout.session.completed": {
          const s = event.data.object as Stripe.Checkout.Session;
          const uid = s.metadata?.uid || null;
          const customerId = (s.customer as string) || null;
          console.log('🔴 Checkout completed:', { uid, customerId });
          if (!uid || !customerId) break;

          await db.collection("users").doc(uid).set(
            {
              stripeCustomerId: customerId,
              hasPaid: true,
              subscription: {
                plan: "starter", // ajuste au plan de ce checkout
                creditsRemaining: PLAN_CREDITS.starter,
                maxCredits: PLAN_CREDITS.starter,
                renewalDate: admin.firestore.FieldValue.serverTimestamp(),
                lastUpdated: admin.firestore.FieldValue.serverTimestamp(),
              },
            },
            { merge: true }
          );
          console.log('🔴 Utilisateur mis à jour:', uid);
          break;
        }

        case "customer.subscription.created":
        case "customer.subscription.updated": {
          const sub = event.data.object as Stripe.Subscription;
          const customerId = sub.customer as string;
          const priceId = sub.items.data[0]?.price?.id ?? "";
          console.log('🔴 Subscription event:', { customerId, priceId });

          let plan: "free" | "starter" | "pro" = "free";
          if (/starter/i.test(priceId)) plan = "starter";
          else if (/pro/i.test(priceId)) plan = "pro";

          const snap = await db
            .collection("users")
            .where("stripeCustomerId", "==", customerId)
            .limit(1)
            .get();
          if (snap.empty) break;

          await snap.docs[0].ref.set(
            {
              hasPaid: plan !== "free",
              subscription: {
                plan,
                creditsRemaining: PLAN_CREDITS[plan],
                maxCredits: PLAN_CREDITS[plan],
                renewalDate: admin.firestore.FieldValue.serverTimestamp(),
                lastUpdated: admin.firestore.FieldValue.serverTimestamp(),
              },
            },
            { merge: true }
          );
          console.log('🔴 Subscription mise à jour:', { plan, customerId });
          break;
        }

        case "customer.subscription.deleted": {
          const sub = event.data.object as Stripe.Subscription;
          const customerId = sub.customer as string;
          console.log('🔴 Subscription supprimée:', customerId);

          const q = await db
            .collection("users")
            .where("stripeCustomerId", "==", customerId)
            .limit(1)
            .get();
          if (q.empty) break;

          await q.docs[0].ref.set(
            {
              hasPaid: false,
              subscription: {
                plan: "free",
                creditsRemaining: PLAN_CREDITS.free,
                maxCredits: PLAN_CREDITS.free,
                renewalDate: admin.firestore.FieldValue.serverTimestamp(),
                lastUpdated: admin.firestore.FieldValue.serverTimestamp(),
                downgradedAt: admin.firestore.FieldValue.serverTimestamp(),
              },
            },
            { merge: true }
          );
          console.log('🔴 Utilisateur remis en plan gratuit');
          break;
        }

        default:
          console.log('🔴 Event ignoré:', event.type);
          // autres events ignorés
          break;
      }

      res.json({ received: true });
      return;
    } catch (e) {
      console.error("🔥 Webhook handler error", e);
      res.status(500).send("Internal Error");
      return;
    }
    });
  }
);
