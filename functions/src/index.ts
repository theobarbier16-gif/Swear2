import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';
import Stripe from 'stripe';

admin.initializeApp();

const app = express();

// CORS middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
    return;
  }
  next();
});

app.use(express.json());

// Initialize Stripe
const stripe = new Stripe(functions.config().stripe.secret_key, {
  apiVersion: '2023-10-16',
});

// Create checkout session endpoint
app.post('/create-checkout-session', async (req, res) => {
  try {
    const { priceId, userId } = req.body;
    
    console.log('Creating checkout session for:', { priceId, userId });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/pricing`,
      client_reference_id: userId,
      metadata: {
        userId: userId,
      },
    });

    console.log('Checkout session created:', session.id);
    res.json({ url: session.url });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
});

// Stripe webhook endpoint
  console.log('📅 Timestamp:', new Date().toISOString());
  console.log('🌐 Origin:', req.headers.origin);
  console.log('📋 Headers complets:', JSON.stringify(req.headers, null, 2));
  console.log('📦 Body type:', typeof req.body);
  console.log('📦 Body length:', req.body ? req.body.length : 'undefined');
    console.log('📋 Headers disponibles:', Object.keys(req.headers));
app.post('/webhooks/stripe', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'] as string;
  const webhookSecret = functions.config().stripe.webhook_secret;

  console.log('✅ Signature Stripe trouvée:', sig.substring(0, 20) + '...');

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return res.status(400).send(`Webhook Error: ${err}`);
  }

  console.log('Received webhook event:', event.type);

  try {
    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object as Stripe.Checkout.Session;
        await handleCheckoutSessionCompleted(session);
        break;
      
      case 'customer.subscription.updated':
        const subscription = event.data.object as Stripe.Subscription;
        await handleSubscriptionUpdated(subscription);
        break;
      
      case 'customer.subscription.deleted':
        const deletedSubscription = event.data.object as Stripe.Subscription;
        await handleSubscriptionDeleted(deletedSubscription);
        break;
      
      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    res.json({ received: true });
  } catch (error) {
    console.error('Error processing webhook:', error);
    res.status(500).json({ error: 'Webhook processing failed' });
  }
});

async function handleCheckoutSessionCompleted(session: Stripe.Checkout.Session) {
  const userId = session.client_reference_id || session.metadata?.userId;
  
  if (!userId) {
    console.error('No user ID found in session');
    return;
  }

  console.log('Processing checkout completion for user:', userId);

  // Get subscription details
  const subscription = await stripe.subscriptions.retrieve(session.subscription as string);
  const priceId = subscription.items.data[0].price.id;

  // Determine credits based on price ID
  let credits = 0;
  let planName = '';
  
  if (priceId === 'price_1QEqJhP8m2VJGhKJvQXGqzpH') { // Pro plan
    credits = 25;
    planName = 'Pro';
  } else if (priceId === 'price_1QEqKAP8m2VJGhKJYQXGqzpH') { // Premium plan
    credits = 150;
    planName = 'Premium';
  }

  // Update user in Firestore
  const userRef = admin.firestore().collection('users').doc(userId);
  
  await userRef.update({
    subscription: {
      id: subscription.id,
      status: subscription.status,
      priceId: priceId,
      planName: planName,
      currentPeriodEnd: new Date(subscription.current_period_end * 1000),
    },
    credits: admin.firestore.FieldValue.increment(credits),
    updatedAt: admin.firestore.FieldValue.serverTimestamp(),
  });

  console.log(`Added ${credits} credits to user ${userId} for ${planName} plan`);
}

async function handleSubscriptionUpdated(subscription: Stripe.Subscription) {
  // Find user by subscription ID
  const usersRef = admin.firestore().collection('users');
  const snapshot = await usersRef.where('subscription.id', '==', subscription.id).get();
  
  if (snapshot.empty) {
    console.error('No user found for subscription:', subscription.id);
    return;
  }

  const userDoc = snapshot.docs[0];
  const userId = userDoc.id;

  console.log('Updating subscription for user:', userId);

  await userDoc.ref.update({
    'subscription.status': subscription.status,
    'subscription.currentPeriodEnd': new Date(subscription.current_period_end * 1000),
    updatedAt: admin.firestore.FieldValue.serverTimestamp(),
  });
}

async function handleSubscriptionDeleted(subscription: Stripe.Subscription) {
  // Find user by subscription ID
  const usersRef = admin.firestore().collection('users');
  const snapshot = await usersRef.where('subscription.id', '==', subscription.id).get();
  
  if (snapshot.empty) {
    console.error('No user found for subscription:', subscription.id);
    return;
  }

  const userDoc = snapshot.docs[0];
  const userId = userDoc.id;

  console.log('Canceling subscription for user:', userId);

  await userDoc.ref.update({
    subscription: admin.firestore.FieldValue.delete(),
    updatedAt: admin.firestore.FieldValue.serverTimestamp(),
  });
}

export const stripeWebhook = functions.https.onRequest(app);