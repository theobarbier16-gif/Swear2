import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import Stripe from 'stripe';
import * as express from 'express';

// Initialize Firebase Admin
admin.initializeApp();

// Initialize Stripe with the provided API key
const stripeSecretKey = functions.config().stripe.secret_key;
const stripeWebhookSecret = functions.config().stripe.webhook_secret;

if (!stripeSecretKey) {
  throw new Error('STRIPE_SECRET_KEY is required');
}

if (!stripeWebhookSecret) {
  throw new Error('STRIPE_WEBHOOK_SECRET is required');
}

const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2023-10-16',
});

// Create Express app for webhook handling
const app = express();

// Add a new endpoint for creating checkout sessions
app.use(express.json());

// Create checkout session endpoint
app.post('/create-checkout-session', async (req, res) => {
  console.log('🛒 Création session checkout');
  
  try {
    const { planType, userEmail, successUrl, cancelUrl } = req.body;
    
    if (!planType || !userEmail) {
      res.status(400).json({ error: 'planType et userEmail requis' });
      return;
    }
    
    // Configuration des produits
    const products = {
      starter: {
        name: 'Plan Abonnement',
        description: 'Plan Abonnement - 25 crédits par mois',
        price: 990, // 9.90€ en centimes
        credits: 25
      }
    };
    
    const product = products[planType as keyof typeof products];
    if (!product) {
      res.status(400).json({ error: 'Type de plan invalide' });
      return;
    }
    
    console.log(`💳 Création session pour plan: ${planType} (${product.price/100}€)`);
    
    // Créer la session Stripe
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: product.name,
              description: product.description,
            },
            unit_amount: product.price,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      customer_email: userEmail,
      success_url: successUrl || `${req.headers.origin}/pricing?success=true&plan=${planType}`,
      cancel_url: cancelUrl || `${req.headers.origin}/pricing?canceled=true`,
      metadata: {
        planType: planType,
        credits: product.credits.toString(),
        userEmail: userEmail
      }
    });
    
    console.log(`✅ Session créée: ${session.id}`);
    res.json({ sessionId: session.id, url: session.url });
    
  } catch (error) {
    console.error('❌ Erreur création session:', error);
    res.status(500).json({ error: 'Erreur création session checkout' });
  }
});

// Middleware to capture raw body for Stripe webhook verification
app.use('/webhooks/stripe', express.raw({ type: 'application/json' }));

// Stripe webhook handler
app.post('/webhooks/stripe', async (req: express.Request, res: express.Response) => {
  console.log('🚀 Webhook Stripe reçu');
  
  const sig = req.headers['stripe-signature'] as string;
  const rawBody = req.body; // Raw buffer from express.raw()

  if (!sig) {
    console.error('❌ Signature Stripe manquante');
    res.status(400).send('Missing Stripe signature');
    return;
  }

  let event: Stripe.Event;

  try {
    // Vérifier la signature du webhook avec le raw body
    event = stripe.webhooks.constructEvent(rawBody, sig, stripeWebhookSecret);
    console.log('✅ Signature webhook vérifiée');
  } catch (err) {
    console.error('❌ Erreur signature webhook:', err);
    res.status(400).send(`Webhook Error: ${err}`);
    return;
  }

  console.log('📋 Type d\'événement:', event.type);
  console.log('🆔 ID événement:', event.id);

  // Gérer les différents types d'événements
  try {
    switch (event.type) {
      case 'checkout.session.completed':
        await handleCheckoutCompleted(event.data.object as Stripe.Checkout.Session);
        break;
      
      case 'payment_intent.succeeded':
        await handlePaymentSucceeded(event.data.object as Stripe.PaymentIntent);
        break;
      
      case 'customer.subscription.created':
        await handleSubscriptionCreated(event.data.object as Stripe.Subscription);
        break;
      
      case 'customer.subscription.updated':
        await handleSubscriptionUpdated(event.data.object as Stripe.Subscription);
        break;
      
      case 'customer.subscription.deleted':
        await handleSubscriptionDeleted(event.data.object as Stripe.Subscription);
        break;
      
      default:
        console.log(`⚠️ Type d'événement non géré: ${event.type}`);
    }

    res.json({ received: true, eventType: event.type });
  } catch (error) {
    console.error('💥 Erreur traitement webhook:', error);
    res.status(500).json({ error: 'Erreur traitement webhook' });
  }
});

// Export the Express app as a Firebase Function
export const stripeWebhook = functions.https.onRequest(app);

async function handleCheckoutCompleted(session: Stripe.Checkout.Session) {
  console.log('🛒 Traitement checkout.session.completed');
  console.log('📧 Email client:', session.customer_details?.email);
  
  const customerEmail = session.customer_details?.email;
  if (!customerEmail) {
    console.error('❌ Aucun email client trouvé');
    return;
  }

  // Déterminer le plan basé sur le montant
  const amount = session.amount_total || 0;
  let plan = 'starter';
  let credits = 25;
  
  if (amount >= 2290) { // 22.90€ en centimes
    plan = 'premium';
    credits = 100;
  }
  
  // Récupérer les informations depuis les métadonnées
  const planType = session.metadata?.planType || 'starter';
  const creditsFromMetadata = parseInt(session.metadata?.credits || '25');
  
  console.log(`💳 Plan depuis métadonnées: ${planType} (${creditsFromMetadata} crédits)`);

  // Validation du plan
  if (!['starter'].includes(planType)) {
    console.error(`❌ Type de plan invalide: ${planType}`);
    return;
  }

  try {
    // Rechercher l'utilisateur par email
    const usersSnapshot = await admin.firestore()
      .collection('users')
      .where('email', '==', customerEmail)
      .limit(1)
      .get();

    if (usersSnapshot.empty) {
      console.error('❌ Aucun utilisateur trouvé avec email:', customerEmail);
      return;
    }

    const userDoc = usersSnapshot.docs[0];
    const userId = userDoc.id;
    const currentUserData = userDoc.data();
    
    console.log('👤 Utilisateur trouvé:', userId);
    
    // Gérer les changements d'abonnement
    const currentPlan = currentUserData.subscription?.plan || 'free';
    const hadPaidBefore = currentUserData.hasPaid || false;
    
    if (hadPaidBefore && currentPlan !== 'free') {
      console.log(`🔄 Changement d'abonnement détecté: ${currentPlan} → ${planType}`);
      
      // Si l'utilisateur avait déjà un abonnement payant, on doit annuler l'ancien
      if (currentUserData.subscription?.stripeCustomerId) {
        console.log('🚫 Tentative d\'annulation de l\'ancien abonnement Stripe...');
        try {
          // Récupérer tous les abonnements actifs du client
          const subscriptions = await stripe.subscriptions.list({
            customer: currentUserData.subscription.stripeCustomerId,
            status: 'active',
          });
          
          // Annuler tous les abonnements actifs
          for (const subscription of subscriptions.data) {
            await stripe.subscriptions.cancel(subscription.id);
            console.log(`✅ Abonnement ${subscription.id} annulé`);
          }
        } catch (error) {
          console.error('⚠️ Erreur lors de l\'annulation de l\'ancien abonnement:', error);
          // On continue quand même pour activer le nouveau plan
        }
      }
      
      console.log(`✅ Ancien plan ${currentPlan} remplacé par ${planType}`);
    } else if (!hadPaidBefore) {
      console.log('🆕 Premier abonnement payant créé');
    } else {
      console.log('🔄 Réactivation d\'un compte précédemment payant');
    }

    // Mettre à jour l'abonnement utilisateur
    const subscriptionData = {
      plan: planType,
      creditsRemaining: creditsFromMetadata,
      maxCredits: creditsFromMetadata,
      renewalDate: admin.firestore.Timestamp.now(),
      stripeSessionId: session.id,
      previousPlan: currentPlan,
      upgradedAt: admin.firestore.Timestamp.now(),
      lastUpdated: admin.firestore.Timestamp.now(),
      // Stocker l'ID client Stripe pour futures annulations
      stripeCustomerId: session.customer
    };

    await admin.firestore()
      .collection('users')
      .doc(userId)
      .update({
        hasPaid: true,
        subscription: subscriptionData
      });

    console.log(`✅ Utilisateur ${userId} mis à jour: plan ${planType} (${creditsFromMetadata} crédits)`);
    console.log('💳 Accès complet activé pour l\'utilisateur');

    // Optionnel: Envoyer un email de confirmation
    // await sendConfirmationEmail(customerEmail, plan, credits);

  } catch (error) {
    console.error('❌ Erreur mise à jour utilisateur:', error);
    throw error;
  }
}

async function handlePaymentSucceeded(paymentIntent: Stripe.PaymentIntent) {
  console.log('💰 Traitement payment_intent.succeeded');
  console.log('🆔 Payment Intent ID:', paymentIntent.id);
  
  // Logique additionnelle pour les paiements réussis
  console.log('✅ Paiement traité avec succès');
}

async function handleSubscriptionCreated(subscription: Stripe.Subscription) {
  console.log('📅 Traitement customer.subscription.created');
  console.log('🆔 Subscription ID:', subscription.id);
  
  // Logique pour les nouveaux abonnements
  console.log('✅ Abonnement créé traité');
}

async function handleSubscriptionUpdated(subscription: Stripe.Subscription) {
  console.log('🔄 Traitement customer.subscription.updated');
  console.log('🆔 Subscription ID:', subscription.id);
  
  // Logique pour les mises à jour d'abonnement
  console.log('✅ Mise à jour abonnement traitée');
}

async function handleSubscriptionDeleted(subscription: Stripe.Subscription) {
  console.log('❌ Traitement customer.subscription.deleted');
  console.log('🆔 Subscription ID:', subscription.id);
  
  console.log('🔄 Annulation d\'abonnement - remise en plan gratuit');
  
  try {
    const customerId = subscription.customer as string;
    
    // Récupérer le client Stripe pour avoir l'email
    const customer = await stripe.customers.retrieve(customerId) as Stripe.Customer;
    
    if (customer.email) {
      console.log(`📧 Recherche utilisateur avec email: ${customer.email}`);
      
      const usersSnapshot = await admin.firestore()
        .collection('users')
        .where('email', '==', customer.email)
        .limit(1)
        .get();

      if (!usersSnapshot.empty) {
        const userDoc = usersSnapshot.docs[0];
        const currentUserData = userDoc.data();
        
        console.log(`👤 Utilisateur trouvé: ${userDoc.id}`);
        console.log(`📋 Plan actuel: ${currentUserData.subscription?.plan || 'unknown'}`);
        
        await admin.firestore()
          .collection('users')
          .doc(userDoc.id)
          .update({
            hasPaid: false,
            subscription: {
              plan: 'free',
              creditsRemaining: 3,
              maxCredits: 3,
              renewalDate: admin.firestore.Timestamp.now(),
              lastUpdated: admin.firestore.Timestamp.now(),
              previousPlan: currentUserData.subscription?.plan || 'unknown',
              downgradedAt: admin.firestore.Timestamp.now(),
              cancelledSubscriptionId: subscription.id
            }
          });

        console.log(`✅ Utilisateur ${userDoc.id} remis en plan gratuit (3 crédits)`);
      } else {
        console.error(`❌ Aucun utilisateur trouvé avec l'email: ${customer.email}`);
      }
    } else {
      console.error('❌ Aucun email trouvé pour le client Stripe');
    }
  } catch (error) {
    console.error('❌ Erreur annulation abonnement:', error);
  }
  
  console.log('✅ Annulation abonnement traitée');
}