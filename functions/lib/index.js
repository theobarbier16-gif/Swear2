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
        "https://api.stripe.com",
        "https://hooks.stripe.com",
    ],
    credentials: true,
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "Accept"],
}));
// Middleware JSON SAUF pour /webhook
app.use((req, res, next) => {
    if (req.originalUrl === "/webhook") {
        return next(); // laisser le raw body pour Stripe
    }
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
// Test endpoint pour vérifier que les webhooks arrivent
app.post("/webhook-test", express_1.default.json(), (req, res) => {
    console.log("🧪 === TEST WEBHOOK ===");
    console.log("📡 Headers:", req.headers);
    console.log("📦 Body:", req.body);
    res.json({ received: true, timestamp: new Date().toISOString() });
});
// Créer une Checkout Session (abonnement)
app.post("/create-checkout-session", async (req, res) => {
    try {
        const { priceId, userId, userEmail, planType } = req.body;
        if (!priceId)
            return res.status(400).json({ error: "priceId requis" });
        if (!userId)
            return res.status(400).json({ error: "userId requis" });
        if (!userEmail)
            return res.status(400).json({ error: "userEmail requis" });
        const origin = req.headers.origin ||
            "https://theobarbier16-gif-sw-zd6o.bolt.host"; // fallback utile
        const sessionParams = {
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
    }
    catch (err) {
        console.error("❌ create-checkout-session error:", err);
        return res.status(500).json({ error: err.message || "unknown_error" });
    }
});
// Export HTTP Function
exports.api = functions.region("us-central1").https.onRequest(app);
