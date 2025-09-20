"use strict";
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
exports.api = void 0;
const functions = __importStar(require("firebase-functions"));
const admin = __importStar(require("firebase-admin"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const stripe_1 = __importDefault(require("stripe"));
admin.initializeApp();
// ----- Stripe init (prend d'abord les secrets Firebase Config, sinon les env) -----
const STRIPE_SECRET_KEY = functions.config().stripe?.secret_key || process.env.STRIPE_SECRET_KEY;
const STRIPE_WEBHOOK_SECRET = functions.config().stripe?.webhook_secret || process.env.STRIPE_WEBHOOK_SECRET;
if (!STRIPE_SECRET_KEY) {
    throw new Error("Stripe secret key missing: set stripe.secret_key or STRIPE_SECRET_KEY");
}
const stripe = new stripe_1.default(STRIPE_SECRET_KEY);
// ----- Express app -----
const app = (0, express_1.default)();
// CORS – whitelist tes domaines (bolt.host + local)
app.use((0, cors_1.default)({
    origin: [
        "http://localhost:5173",
        "http://localhost:3000",
        "https://theobarbier16-gif-sw-cbqo.bolt.host",
    ],
    credentials: true,
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "Accept"],
}));
// JSON partout SAUF /webhook (Stripe a besoin du RAW body)
app.use((req, res, next) => {
    if (req.path === "/webhook")
        return next();
    return express_1.default.json()(req, res, next);
});
// Petit log
app.use((req, _res, next) => {
    console.log(`📡 ${req.method} ${req.path} - origin=${req.headers.origin || "-"}`);
    next();
});
// Health
app.get("/health", (_req, res) => {
    res.json({ status: "ok", at: new Date().toISOString() });
});
// Créer une Checkout Session (abonnement)
app.post("/create-checkout-session", async (req, res) => {
    try {
        const { priceId, userId, userEmail, planType } = req.body;
        if (!priceId)
            return res.status(400).json({ error: "priceId requis" });
        const origin = req.headers.origin ||
            "https://theobarbier16-gif-sw-zd6o.bolt.host"; // fallback utile
        const session = await stripe.checkout.sessions.create({
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
        });
        return res.json({ url: session.url, sessionId: session.id });
    }
    catch (err) {
        console.error("❌ create-checkout-session error:", err);
        return res.status(500).json({ error: err.message || "unknown_error" });
    }
});
// Webhook Stripe — RAW body uniquement
app.post("/webhook", express_1.default.raw({ type: "application/json" }), async (req, res) => {
    if (!STRIPE_WEBHOOK_SECRET) {
        console.error("Missing STRIPE_WEBHOOK_SECRET");
        return res.status(500).send("Server misconfigured");
    }
    const sig = req.headers["stripe-signature"];
    let event;
    try {
        event = stripe.webhooks.constructEvent(req.body, sig, STRIPE_WEBHOOK_SECRET);
    }
    catch (err) {
        console.error("❌ Webhook signature verification failed:", err.message);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }
    try {
        switch (event.type) {
            case "checkout.session.completed": {
                const s = event.data.object;
                console.log("✅ checkout.session.completed", s.id);
                break;
            }
            case "invoice.payment_succeeded": {
                const inv = event.data.object;
                console.log("💸 invoice.payment_succeeded", inv.id);
                let userId = inv.metadata?.userId;
                let planType = inv.metadata?.planType;
                if ((!userId || !planType) && inv.subscription) {
                    const sub = await stripe.subscriptions.retrieve(inv.subscription);
                    userId = userId || sub.metadata?.userId;
                    planType = planType || sub.metadata?.planType;
                }
                if (userId && planType) {
                    const credits = planType === "starter" ? 25 : 150;
                    await admin
                        .firestore()
                        .collection("users")
                        .doc(userId)
                        .set({
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
                    }, { merge: true });
                    console.log(`✨ Added ${credits} credits to user ${userId}`);
                }
                else {
                    console.warn("ℹ️ Missing userId/planType in metadata");
                }
                break;
            }
            case "customer.subscription.updated":
            case "customer.subscription.deleted": {
                const sub = event.data.object;
                const userId = sub.metadata?.userId;
                const planType = sub.metadata?.planType;
                if (userId) {
                    await admin
                        .firestore()
                        .collection("users")
                        .doc(userId)
                        .set({
                        hasPaid: sub.status === "active",
                        planType: sub.status === "active" ? (planType || "starter") : "free",
                        subscription: {
                            plan: sub.status === "active" ? (planType || "starter") : "free",
                            stripeSubscriptionId: sub.id,
                        },
                    }, { merge: true });
                }
                break;
            }
            default:
                console.log(`ℹ️ Unhandled event: ${event.type}`);
        }
        return res.json({ received: true });
    }
    catch (err) {
        console.error("❌ Webhook handler error:", err);
        return res.status(500).send("Webhook handler error");
    }
});
// Export HTTP Function (nom = api, région us-central1 comme ton ping)
exports.api = functions.region("us-central1").https.onRequest(app);
