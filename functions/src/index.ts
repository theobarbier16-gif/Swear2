// functions/src/index.ts — Gen2 + Secret Manager (us-central1, UPPER_SNAKE_CASE)
import * as admin from "firebase-admin";
import Stripe from "stripe";
import { onRequest, onCall } from "firebase-functions/v2/https";
import { defineSecret } from "firebase-functions/params";

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
    cors: true,
  },
  async (request) => {
    const secret = STRIPE_SECRET_KEY.value();
    if (!request.auth) throw new Error("Unauthenticated");
    const uid = request.auth.uid;

    const { priceId, successUrl, cancelUrl } = request.data as {
      priceId: string;
      successUrl: string;
      cancelUrl: string;
    };
    if (!priceId || !successUrl || !cancelUrl) {
      throw new Error("Missing priceId/successUrl/cancelUrl");
    }

    const stripe = stripeFrom(secret);

    // Associer (ou créer) un customer Stripe pour l'utilisateur Firebase
    const userRef = db.collection("users").doc(uid);
    const snap = await userRef.get();

    let customerId = snap.data()?.stripeCustomerId as string | undefined;
    if (!customerId) {
      const userRecord = await admin.auth().getUser(uid);
      const customer = await stripe.customers.create({
        email: userRecord.email || undefined,
        metadata: { uid },
      });
      customerId = customer.id;
      await userRef.set({ stripeCustomerId: customerId }, { merge: true });
    }

    // Créer la session Checkout avec metadata.uid
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      customer: customerId,
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: successUrl,
      cancel_url: cancelUrl,
      metadata: { uid },
    });

    return { url: session.url };
  }
);

// =====================================================================
// 2) Webhook: stripeWebhook  (URL à mettre dans Stripe → Webhooks)
// =====================================================================
export const stripeWebhook = onRequest(
  {
    region: "us-central1",
    secrets: [STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET],
    cors: false,
    timeoutSeconds: 30,
    maxInstances: 1,
  },
  async (req, res) => {
    const secret = STRIPE_SECRET_KEY.value();
    const whsec = STRIPE_WEBHOOK_SECRET.value();

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
          break;
        }

        case "customer.subscription.created":
        case "customer.subscription.updated": {
          const sub = event.data.object as Stripe.Subscription;
          const customerId = sub.customer as string;
          const priceId = sub.items.data[0]?.price?.id ?? "";

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
          break;
        }

        case "customer.subscription.deleted": {
          const sub = event.data.object as Stripe.Subscription;
          const customerId = sub.customer as string;

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
          break;
        }

        default:
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
  }
);
