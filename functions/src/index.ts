// functions/src/index.ts — Firebase Functions (Gen2) + Stripe (callable only)

import * as admin from "firebase-admin";
import Stripe from "stripe";
import { onRequest, onCall } from "firebase-functions/v2/https";
import { defineSecret } from "firebase-functions/params";

// ---------- Firebase Admin ----------
if (!admin.apps.length) admin.initializeApp();
const db = admin.firestore();

// ---------- Secrets ----------
const STRIPE_SECRET_KEY = defineSecret("STRIPE_SECRET_KEY");
const STRIPE_WEBHOOK_SECRET = defineSecret("STRIPE_WEBHOOK_SECRET");

// ---------- Plans / Price IDs / Crédits ----------
const PRICE_IDS = {
  starter: "price_1S59Fm6LX1cwJPas3s7oS1pm",
  pro: "price_1S7z1B6LX1cwJPasibsPVll6",
} as const;

type Plan = "free" | "starter" | "pro";

const PLAN_CREDITS: Record<Plan, number> = {
  free: 3,
  starter: 25,
  pro: 150,
};

// ---------- Stripe helper ----------
const stripeFrom = (key: string) => new Stripe(key as any);

// ==============================
// 1) Callable: createCheckout
// ==============================
export const createCheckout = onCall(
  {
    region: "us-central1",
    secrets: [STRIPE_SECRET_KEY],
    timeoutSeconds: 30,
  },
  async (request) => {
    const secret = STRIPE_SECRET_KEY.value();

    console.log("🔵 createCheckout called", {
      hasAuth: !!request.auth,
      uid: request.auth?.uid,
      data: request.data,
    });

    if (!request.auth) throw new Error("Unauthenticated");
    const uid = request.auth.uid;

    const {
      priceId,
      successUrl,
      cancelUrl,
      plan,
    }: {
      priceId?: string;
      successUrl: string;
      cancelUrl: string;
      plan?: Exclude<Plan, "free">; // "starter" | "pro"
    } = (request.data || {}) as any;

    if (!successUrl || !cancelUrl) {
      throw new Error("Missing successUrl/cancelUrl");
    }

    // Résolution du priceId si on passe un plan
    let resolvedPriceId = priceId;
    if (!resolvedPriceId) {
      if (!plan) throw new Error("Missing priceId or plan");
      if (!(plan in PRICE_IDS)) throw new Error(`Unknown plan: ${plan}`);
      resolvedPriceId = PRICE_IDS[plan];
    }

    const stripe = stripeFrom(secret);

    // Associer (ou créer) un customer Stripe pour l'utilisateur Firebase
    const userRef = db.collection("users").doc(uid);
    const snap = await userRef.get();

    let customerId = (snap.data()?.stripeCustomerId as string | undefined) || undefined;
    if (!customerId) {
      console.log("🔵 Creating Stripe customer for uid:", uid);
      const userRecord = await admin.auth().getUser(uid);
      const customer = await (stripe.customers.create as any)({
        email: userRecord.email || undefined,
        metadata: { uid },
      });
      customerId = customer.id;
      await userRef.set({ stripeCustomerId: customerId }, { merge: true });
      console.log("🔵 Customer created:", customerId);
    }

    // Créer la session Checkout
    console.log("🔵 Creating checkout session...");
    const session = await (stripe.checkout.sessions.create as any)({
      mode: "subscription",
      customer: customerId,
      line_items: [{ price: resolvedPriceId, quantity: 1 }],
      success_url: successUrl,
      cancel_url: cancelUrl,
      metadata: { uid },
      client_reference_id: uid,
      allow_promotion_codes: true,
    });

    console.log("🔵 Session created:", session.id);
    return { url: session.url };
  }
);

// ==============================
// 2) Webhook: stripeWebhook
// ==============================
export const stripeWebhook = onRequest(
  {
    region: "us-central1",
    secrets: [STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET],
    timeoutSeconds: 30,
    maxInstances: 1,
  },
  async (req, res) => {
    const secret = STRIPE_SECRET_KEY.value();
    const whsec = STRIPE_WEBHOOK_SECRET.value();
    const stripe = stripeFrom(secret);

    console.log("🔴 stripeWebhook called");

    if (req.method !== "POST") {
      res.set("Allow", "POST");
      res.status(405).send("Method Not Allowed");
      return;
    }

    const signature = req.headers["stripe-signature"] as string;

    let event: any;
    try {
      event = (stripe.webhooks.constructEvent as any)(
        (req as any).rawBody,
        signature,
        whsec
      );
      console.log("🔴 Event received:", event.type);
    } catch (err: any) {
      console.error("❌ Invalid signature:", err.message);
      res.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

    try {
      switch (event.type) {
        case "checkout.session.completed": {
          const s = event.data.object as any;

          const full = await (stripe.checkout.sessions.retrieve as any)(s.id, {
            expand: ["line_items.data.price", "subscription"],
          });

          const uid = full.metadata?.uid || full.client_reference_id || null;
          const customerId = (full.customer as string) || null;
          const subscription = (full.subscription as any) || null;
          const price = (full.line_items?.data?.[0]?.price ?? null) as any;

          let plan: Plan = "free";
          if (price?.id === PRICE_IDS.starter) plan = "starter";
          if (price?.id === PRICE_IDS.pro) plan = "pro";

          const subscriptionId = subscription?.id || null;
          const status = subscription?.status || "active";
          const periodEndUnix = subscription?.current_period_end ?? null;

          if (!uid || !customerId) {
            console.warn("⚠️ Missing uid or customerId; skipping.");
            break;
          }

          await db.collection("users").doc(uid).set(
            {
              stripeCustomerId: customerId,
              hasPaid: plan !== "free",
              subscription: {
                plan,
                subscriptionId,
                status,
                creditsRemaining: PLAN_CREDITS[plan],
                maxCredits: PLAN_CREDITS[plan],
                renewalDate: periodEndUnix
                  ? admin.firestore.Timestamp.fromMillis(periodEndUnix * 1000)
                  : admin.firestore.FieldValue.serverTimestamp(),
                lastUpdated: admin.firestore.FieldValue.serverTimestamp(),
              },
            },
            { merge: true }
          );

          console.log("✅ checkout.session.completed handled", {
            uid,
            plan,
            subscriptionId,
            status,
          });
          break;
        }

        case "customer.subscription.updated": {
          const sub = event.data.object as any;
          const customerId = sub.customer as string;
          const price = (sub.items?.data?.[0]?.price as any) || undefined;

          let plan: Plan = "free";
          if (price?.id === PRICE_IDS.starter) plan = "starter";
          if (price?.id === PRICE_IDS.pro) plan = "pro";

          const q = await db
            .collection("users")
            .where("stripeCustomerId", "==", customerId)
            .limit(1)
            .get();

          if (q.empty) break;

          const periodEndUnix = sub?.current_period_end ?? null;

          await q.docs[0].ref.set(
            {
              hasPaid: plan !== "free",
              subscription: {
                plan,
                subscriptionId: sub.id,
                status: sub.status,
                creditsRemaining: PLAN_CREDITS[plan],
                maxCredits: PLAN_CREDITS[plan],
                renewalDate: periodEndUnix
                  ? admin.firestore.Timestamp.fromMillis(periodEndUnix * 1000)
                  : admin.firestore.FieldValue.serverTimestamp(),
                lastUpdated: admin.firestore.FieldValue.serverTimestamp(),
              },
            },
            { merge: true }
          );

          console.log("✅ customer.subscription.updated handled", {
            customerId,
            plan,
            status: sub.status,
          });
          break;
        }

        case "customer.subscription.deleted": {
          const sub = event.data.object as any;
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
                plan: "free" as Plan,
                subscriptionId: sub.id,
                status: sub.status,
                creditsRemaining: PLAN_CREDITS.free,
                maxCredits: PLAN_CREDITS.free,
                renewalDate: admin.firestore.FieldValue.serverTimestamp(),
                lastUpdated: admin.firestore.FieldValue.serverTimestamp(),
                downgradedAt: admin.firestore.FieldValue.serverTimestamp(),
              },
            },
            { merge: true }
          );

          console.log("✅ customer.subscription.deleted handled", {
            customerId,
          });
          break;
        }

        default:
          console.log("ℹ️ Unhandled event:", event.type);
      }

      res.json({ received: true });
    } catch (e) {
      console.error("🔥 Webhook handler error", e);
      res.status(500).send("Internal Error");
    }
  }
);
