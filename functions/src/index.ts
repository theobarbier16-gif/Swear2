// functions/src/index.ts — Firebase Functions (Gen2) + Stripe
// Prérequis : Node 20, secrets STRIPE_SECRET_KEY & STRIPE_WEBHOOK_SECRET configurés
// Webhook URL (Test) à mettre dans Stripe :
// https://us-central1-swear-30c84.cloudfunctions.net/stripeWebhook

import * as admin from "firebase-admin";
import Stripe from "stripe";
import { onRequest, onCall } from "firebase-functions/v2/https";
import { defineSecret } from "firebase-functions/params";
import cors from "cors";

// ---------- Stripe helper ----------
const stripeFrom = (key: string) =>
  new Stripe(key, { apiVersion: "2024-06-20" });

// ---------- CORS (utile pour onRequest) ----------
const corsHandler = cors({
  origin: true,
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "Accept", "Origin", "Stripe-Signature"],
  credentials: false,
});

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

// ==============================
// 1) Callable: createCheckout
// ==============================
export const createCheckout = onCall(
  {
    region: "us-central1",
    secrets: [STRIPE_SECRET_KEY],
    timeoutSeconds: 30,
    cors: true, // CORS auto pour callable
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
    } = request.data || {};

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

    let customerId = snap.data()?.stripeCustomerId as string | undefined;
    if (!customerId) {
      console.log("🔵 Creating Stripe customer for uid:", uid);
      const userRecord = await admin.auth().getUser(uid);
      const customer = await stripe.customers.create({
        email: userRecord.email || undefined,
        metadata: { uid },
      });
      customerId = customer.id;
      await userRef.set({ stripeCustomerId: customerId }, { merge: true });
      console.log("🔵 Customer created:", customerId);
    }

    // Créer la session Checkout
    console.log("🔵 Creating checkout session...");
    const session = await stripe.checkout.sessions.create({
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
    cors: true,
  },
  async (req, res) => {
    return corsHandler(req, res, async () => {
      const secret = STRIPE_SECRET_KEY.value();
      const whsec = STRIPE_WEBHOOK_SECRET.value();

      console.log("🔴 stripeWebhook called", {
        method: req.method,
        hasRawBody: !!(req as any).rawBody,
        headers: {
          "stripe-signature": req.headers["stripe-signature"],
          "content-type": req.headers["content-type"],
        },
      });

      if (req.method === "OPTIONS") {
        res.status(204).send("");
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
        // ⚠️ IMPORTANT: utiliser le rawBody pour vérifier la signature
        event = stripe.webhooks.constructEvent(
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
          // 2.1) Checkout terminé → créer/mettre à jour l'abonnement utilisateur
          case "checkout.session.completed": {
            const s = event.data.object as Stripe.Checkout.Session;

            // Refetch pour obtenir line_items + subscription complets
            const full = await stripe.checkout.sessions.retrieve(s.id, {
              expand: ["line_items.data.price", "subscription"],
            });

            const uid =
              full.metadata?.uid || full.client_reference_id || null;
            const customerId = (full.customer as string) || null;
            const subscription =
              (full.subscription as Stripe.Subscription | null) || null;

            const price = (full.line_items?.data?.[0]?.price ??
              null) as Stripe.Price | null;

            // Détermination du plan via price.id (basé sur PRICE_IDS)
            let plan: Plan = "free";
            if (price?.id === PRICE_IDS.starter) plan = "starter";
            if (price?.id === PRICE_IDS.pro) plan = "pro";

            const subscriptionId = subscription?.id || null;
            const status = subscription?.status || "active";
            const periodEndUnix = subscription?.current_period_end || null;

            if (!uid || !customerId) {
              console.warn("⚠️ Missing uid or customerId; skipping.");
              break;
            }

            await db
              .collection("users")
              .doc(uid)
              .set(
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
                      ? admin.firestore.Timestamp.fromMillis(
                          periodEndUnix * 1000
                        )
                      : admin.firestore.FieldValue.serverTimestamp(),
                    lastUpdated:
                      admin.firestore.FieldValue.serverTimestamp(),
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

          // 2.2) MàJ abonnement (changement d’offre, pause, reprise, etc.)
          case "customer.subscription.updated": {
            const sub = event.data.object as Stripe.Subscription;
            const customerId = sub.customer as string;
            const price = sub.items.data[0]?.price as Stripe.Price | undefined;

            let plan: Plan = "free";
            if (price?.id === PRICE_IDS.starter) plan = "starter";
            if (price?.id === PRICE_IDS.pro) plan = "pro";

            const q = await db
              .collection("users")
              .where("stripeCustomerId", "==", customerId)
              .limit(1)
              .get();

            if (q.empty) {
              console.warn(
                "⚠️ No user found for customerId on subscription.updated",
                customerId
              );
              break;
            }

            await q.docs[0].ref.set(
              {
                hasPaid: plan !== "free",
                subscription: {
                  plan,
                  subscriptionId: sub.id,
                  status: sub.status,
                  creditsRemaining: PLAN_CREDITS[plan],
                  maxCredits: PLAN_CREDITS[plan],
                  renewalDate: sub.current_period_end
                    ? admin.firestore.Timestamp.fromMillis(
                        sub.current_period_end * 1000
                      )
                    : admin.firestore.FieldValue.serverTimestamp(),
                  lastUpdated:
                    admin.firestore.FieldValue.serverTimestamp(),
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

          // 2.3) Abonnement annulé
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
                  plan: "free" as Plan,
                  subscriptionId: sub.id,
                  status: sub.status,
                  creditsRemaining: PLAN_CREDITS.free,
                  maxCredits: PLAN_CREDITS.free,
                  renewalDate:
                    admin.firestore.FieldValue.serverTimestamp(),
                  lastUpdated:
                    admin.firestore.FieldValue.serverTimestamp(),
                  downgradedAt:
                    admin.firestore.FieldValue.serverTimestamp(),
                },
              },
              { merge: true }
            );

            console.log("✅ customer.subscription.deleted handled", {
              customerId,
            });
            break;
          }

          // 2.4) Paiement d'invoice échoué (optionnel)
          case "invoice.payment_failed": {
            const invoice = event.data.object as Stripe.Invoice;
            console.log("ℹ️ invoice.payment_failed", {
              customer: invoice.customer,
              subscription: invoice.subscription,
            });
            break;
          }

          default:
            console.log("ℹ️ Unhandled event:", event.type);
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
