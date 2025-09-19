"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stripeWebhook = void 0;
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");
const stripe_1 = require("stripe");
// Initialize Firebase Admin
admin.initializeApp();
// Initialize Stripe
const stripe = new stripe_1.default(functions.config().stripe.secret_key || process.env.STRIPE_SECRET_KEY || '', {
    apiVersion: '2023-10-16',
});
const app = express();
// Middleware
app.use(cors({ origin: true }));
app.use(express.json());
app.use(express.raw({ type: 'application/json' }));
// Test endpoint
app.get('/test', (req, res) => {
    res.json({
        message: 'Firebase Functions are working!',
        timestamp: new Date().toISOString()
    });
});
// Create Stripe checkout session
app.post('/create-checkout-session', async (req, res) => {
    try {
        const { priceId, userId, planType } = req.body;
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price: priceId,
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${req.headers.origin}/pricing`,
            metadata: {
                userId,
                planType,
            },
        });
        res.json({ sessionId: session.id });
    }
    catch (error) {
        console.error('Error creating checkout session:', error);
        res.status(500).json({ error: 'Failed to create checkout session' });
    }
});
// Stripe webhook handler
app.post('/webhook', async (req, res) => {
    var _a, _b;
    const sig = req.headers['stripe-signature'];
    const endpointSecret = functions.config().stripe.webhook_secret || process.env.STRIPE_WEBHOOK_SECRET;
    let event;
    try {
        event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
        console.log('Webhook received:', event.type);
    }
    catch (err) {
        console.error('Webhook signature verification failed:', err);
        return res.status(400).send(`Webhook Error: ${err}`);
    }
    // Handle the event
    switch (event.type) {
        case 'checkout.session.completed':
            const session = event.data.object;
            console.log('Payment successful:', session.id);
            // Update user credits in Firestore
            if (((_a = session.metadata) === null || _a === void 0 ? void 0 : _a.userId) && ((_b = session.metadata) === null || _b === void 0 ? void 0 : _b.planType)) {
                try {
                    const credits = session.metadata.planType === 'starter' ? 25 : 150;
                    await admin.firestore()
                        .collection('users')
                        .doc(session.metadata.userId)
                        .update({
                        credits: admin.firestore.FieldValue.increment(credits),
                        lastPurchase: admin.firestore.FieldValue.serverTimestamp(),
                        planType: session.metadata.planType
                    });
                    console.log(`Added ${credits} credits to user ${session.metadata.userId}`);
                }
                catch (error) {
                    console.error('Error updating user credits:', error);
                }
            }
            break;
        case 'payment_intent.succeeded':
            console.log('Payment intent succeeded:', event.data.object.id);
            break;
        default:
            console.log(`Unhandled event type ${event.type}`);
    }
    res.json({ received: true });
});
// Health check endpoint
app.get('/health', (req, res) => {
    res.json({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        version: '1.0.0'
    });
});
// Export the Express app as a Firebase Function
exports.stripeWebhook = functions.https.onRequest(app);
//# sourceMappingURL=index.js.map