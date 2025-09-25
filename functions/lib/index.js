"use strict";
// functions/src/index.ts — Firebase Functions (Gen2) + Stripe
// Prérequis : Node 20, secrets STRIPE_SECRET_KEY & STRIPE_WEBHOOK_SECRET configurés
// Webhook URL (Test) à mettre dans Stripe :
// https://us-central1-swear-30c84.cloudfunctions.net/stripeWebhook
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stripeWebhook = exports.createCheckout = void 0;
const admin = __importStar(require("firebase-admin"));
const stripe_1 = __importDefault(require("stripe"));
const https_1 = require("firebase-functions/v2/https");
const params_1 = require("firebase-functions/params");
const cors_1 = __importDefault(require("cors"));
// ---------- Stripe helper ----------
// NOTE: pas d'apiVersion ici pour éviter les erreurs de typings ("2025-08-27.basil" etc.)
const stripeFrom = (key) => new stripe_1.default(key);
// ---------- CORS (utile pour onRequest) ----------
const corsHandler = (0, cors_1.default)({
    origin: true,
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "Accept", "Origin", "Stripe-Signature"],
    credentials: false,
});
// ---------- Firebase Admin ----------
if (!admin.apps.length)
    admin.initializeApp();
const db = admin.firestore();
// ---------- Secrets ----------
const STRIPE_SECRET_KEY = (0, params_1.defineSecret)("STRIPE_SECRET_KEY");
const STRIPE_WEBHOOK_SECRET = (0, params_1.defineSecret)("STRIPE_WEBHOOK_SECRET");
// ---------- Plans / Price IDs / Crédits ----------
const PRICE_IDS = {
    starter: "price_1S59Fm6LX1cwJPas3s7oS1pm",
    pro: "price_1S7z1B6LX1cwJPasibsPVll6",
};
const PLAN_CREDITS = {
    free: 3,
    starter: 25,
    pro: 150,
};
// ==============================
// 1) Callable: createCheckout
// ==============================
exports.createCheckout = (0, https_1.onCall)({
    region: "us-central1",
    secrets: [STRIPE_SECRET_KEY],
    timeoutSeconds: 30,
    cors: true, // CORS auto pour callable
}, async (request) => {
    const secret = STRIPE_SECRET_KEY.value();
    console.log("🔵 createCheckout called", {
        hasAuth: !!request.auth,
        uid: request.auth?.uid,
        data: request.data,
    });
    if (!request.auth)
        throw new Error("Unauthenticated");
    const uid = request.auth.uid;
    const { priceId, successUrl, cancelUrl, plan, } = (request.data || {});
    if (!successUrl || !cancelUrl) {
        throw new Error("Missing successUrl/cancelUrl");
    }
    // Résolution du priceId si on passe un plan
    let resolvedPriceId = priceId;
    if (!resolvedPriceId) {
        if (!plan)
            throw new Error("Missing priceId or plan");
        if (!(plan in PRICE_IDS))
            throw new Error(`Unknown plan: ${plan}`);
        resolvedPriceId = PRICE_IDS[plan];
    }
    const stripe = stripeFrom(secret);
    // Associer (ou créer) un customer Stripe pour l'utilisateur Firebase
    const userRef = db.collection("users").doc(uid);
    const snap = await userRef.get();
    let customerId = snap.data()?.stripeCustomerId || undefined;
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
});
// ==============================
// 2) Webhook: stripeWebhook
// ==============================
exports.stripeWebhook = (0, https_1.onRequest)({
    region: "us-central1",
    secrets: [STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET],
    timeoutSeconds: 30,
    maxInstances: 1,
    cors: true,
}, async (req, res) => {
    return corsHandler(req, res, async () => {
        const secret = STRIPE_SECRET_KEY.value();
        const whsec = STRIPE_WEBHOOK_SECRET.value();
        console.log("🔴 stripeWebhook called", {
            method: req.method,
            hasRawBody: !!req.rawBody,
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
        const signature = req.headers["stripe-signature"];
        let event;
        try {
            // ⚠️ IMPORTANT: utiliser le rawBody pour vérifier la signature
            event = stripe.webhooks.constructEvent(req.rawBody, signature, whsec);
            console.log("🔴 Event received:", event.type);
        }
        catch (err) {
            console.error("❌ Invalid signature:", err.message);
            res.status(400).send(`Webhook Error: ${err.message}`);
            return;
        }
        try {
            switch (event.type) {
                // 2.1) Checkout terminé → créer/mettre à jour l'abonnement utilisateur
                case "checkout.session.completed": {
                    const s = event.data.object;
                    // Refetch pour obtenir line_items + subscription complets
                    const full = await stripe.checkout.sessions.retrieve(s.id, {
                        expand: ["line_items.data.price", "subscription"],
                    });
                    const uid = full.metadata?.uid || full.client_reference_id || null;
                    const customerId = full.customer || null;
                    const subscription = full.subscription || null;
                    const price = (full.line_items?.data?.[0]?.price ?? null);
                    // Détermination du plan via price.id (basé sur PRICE_IDS)
                    let plan = "free";
                    if (price?.id === PRICE_IDS.starter)
                        plan = "starter";
                    if (price?.id === PRICE_IDS.pro)
                        plan = "pro";
                    const subscriptionId = subscription?.id || null;
                    const status = subscription?.status || "active";
                    const periodEndUnix = subscription?.current_period_end ?? null;
                    if (!uid || !customerId) {
                        console.warn("⚠️ Missing uid or customerId; skipping.");
                        break;
                    }
                    await db
                        .collection("users")
                        .doc(uid)
                        .set({
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
                    }, { merge: true });
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
                    const sub = event.data.object;
                    const customerId = sub.customer;
                    const price = sub.items?.data?.[0]?.price || undefined;
                    let plan = "free";
                    if (price?.id === PRICE_IDS.starter)
                        plan = "starter";
                    if (price?.id === PRICE_IDS.pro)
                        plan = "pro";
                    const q = await db
                        .collection("users")
                        .where("stripeCustomerId", "==", customerId)
                        .limit(1)
                        .get();
                    if (q.empty) {
                        console.warn("⚠️ No user found for customerId on subscription.updated", customerId);
                        break;
                    }
                    const periodEndUnix = sub?.current_period_end ?? null;
                    await q.docs[0].ref.set({
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
                    }, { merge: true });
                    console.log("✅ customer.subscription.updated handled", {
                        customerId,
                        plan,
                        status: sub.status,
                    });
                    break;
                }
                // 2.3) Abonnement annulé
                case "customer.subscription.deleted": {
                    const sub = event.data.object;
                    const customerId = sub.customer;
                    const q = await db
                        .collection("users")
                        .where("stripeCustomerId", "==", customerId)
                        .limit(1)
                        .get();
                    if (q.empty)
                        break;
                    await q.docs[0].ref.set({
                        hasPaid: false,
                        subscription: {
                            plan: "free",
                            subscriptionId: sub.id,
                            status: sub.status,
                            creditsRemaining: PLAN_CREDITS.free,
                            maxCredits: PLAN_CREDITS.free,
                            renewalDate: admin.firestore.FieldValue.serverTimestamp(),
                            lastUpdated: admin.firestore.FieldValue.serverTimestamp(),
                            downgradedAt: admin.firestore.FieldValue.serverTimestamp(),
                        },
                    }, { merge: true });
                    console.log("✅ customer.subscription.deleted handled", {
                        customerId,
                    });
                    break;
                }
                // 2.4) Paiement d'invoice échoué (optionnel)
                case "invoice.payment_failed": {
                    const invoice = event.data.object;
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
        }
        catch (e) {
            console.error("🔥 Webhook handler error", e);
            res.status(500).send("Internal Error");
            return;
        }
    });
});
