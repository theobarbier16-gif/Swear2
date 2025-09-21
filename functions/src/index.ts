import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import Stripe from "stripe";

admin.initializeApp();

// Fonction de logging centralisée
const log = (level: 'INFO' | 'WARN' | 'ERROR', message: string, data?: any) => {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] [${level}] ${message}`;
  
  if (level === 'ERROR') {
    console.error(logMessage, data ? JSON.stringify(data, null, 2) : '');
  } else if (level === 'WARN') {
    console.warn(logMessage, data ? JSON.stringify(data, null, 2) : '');
  } else {
    console.log(logMessage, data ? JSON.stringify(data, null, 2) : '');
  }
};

// ----- Stripe init (prend d'abord les secrets Firebase Config, sinon les env) -----
const STRIPE_SECRET_KEY =
  functions.config().stripe?.secret_key || (process.env.STRIPE_SECRET_KEY as string);
const STRIPE_WEBHOOK_SECRET =
  functions.config().stripe?.webhook_secret || (process.env.STRIPE_WEBHOOK_SECRET as string);

log('INFO', 'Configuration Stripe', {
  hasSecretKey: !!STRIPE_SECRET_KEY,
  hasWebhookSecret: !!STRIPE_WEBHOOK_SECRET,
  secretKeyPrefix: STRIPE_SECRET_KEY ? STRIPE_SECRET_KEY.substring(0, 7) + '...' : 'MISSING'
});

if (!STRIPE_SECRET_KEY) {
  log('ERROR', 'Clé secrète Stripe manquante');
  throw new Error("Stripe secret key missing: set stripe.secret_key or STRIPE_SECRET_KEY");
}

const stripe = new Stripe(STRIPE_SECRET_KEY);
log('INFO', 'Stripe initialisé avec succès');

// ----- Express app -----
const app = express();

// CORS – whitelist tes domaines (bolt.host + local)
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:3000",
      "https://theobarbier16-gif-sw-f1q9.bolt.host",
      "https://api.stripe.com",
      "https://hooks.stripe.com",
    ],
    credentials: true,
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "Accept"],
  })
);

log('INFO', 'CORS configuré avec les domaines autorisés');

// Middleware JSON SAUF pour /webhook
app.use((req: Request, res: Response, next: NextFunction) => {
  log('INFO', `Requête reçue: ${req.method} ${req.path}`, {
    origin: req.headers.origin,
    userAgent: req.headers['user-agent'],
    contentType: req.headers['content-type'],
    authorization: req.headers.authorization ? 'PRESENT' : 'MISSING'
  });
  
  if (req.originalUrl === "/webhook") {
    log('INFO', 'Requête webhook détectée - pas de parsing JSON');
    return next(); // laisser le raw body pour Stripe
  }
  return express.json()(req, res, next);
});

// Health
app.get("/health", (_req: Request, res: Response) => {
  log('INFO', 'Health check appelé');
  res.json({ status: "ok", at: new Date().toISOString() });
});

// Test endpoint pour vérifier que les webhooks arrivent
app.post("/webhook-test", express.json(), (req: Request, res: Response) => {
  log('INFO', 'Test webhook appelé', {
    headers: req.headers,
    body: req.body
  });
  res.json({ received: true, timestamp: new Date().toISOString() });
});

// Créer une Checkout Session (abonnement)
app.post("/create-checkout-session", async (req: Request, res: Response) => {
  log('INFO', 'Création session checkout demandée');
  
  try {
    const { priceId, userId, userEmail, planType } = req.body as {
      priceId: string;
      userId?: string;
      userEmail?: string;
      planType?: string;
    };

    log('INFO', 'Paramètres reçus pour checkout', {
      priceId,
      userId,
      userEmail,
      planType,
      origin: req.headers.origin
    });

    if (!priceId) {
      log('ERROR', 'priceId manquant');
      return res.status(400).json({ error: "priceId requis" });
    }
    if (!userId) {
      log('ERROR', 'userId manquant');
      return res.status(400).json({ error: "userId requis" });
    }
    if (!userEmail) {
      log('ERROR', 'userEmail manquant');
      return res.status(400).json({ error: "userEmail requis" });
    }

    const origin =
      (req.headers.origin as string) ||
      "https://theobarbier16-gif-sw-zd6o.bolt.host"; // fallback utile

    log('INFO', 'Origin déterminé', { origin });

    const sessionParams: Stripe.Checkout.SessionCreateParams = {
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

    log('INFO', 'Paramètres session Stripe préparés', {
      mode: sessionParams.mode,
      success_url: sessionParams.success_url,
      cancel_url: sessionParams.cancel_url,
      customer_email: sessionParams.customer_email,
      metadata: sessionParams.metadata
    });

    log('INFO', 'Appel API Stripe pour créer la session...');
    const session = await stripe.checkout.sessions.create(sessionParams);
    
    log('INFO', 'Session Stripe créée avec succès', {
      sessionId: session.id,
      url: session.url,
      customer: session.customer,
      payment_status: session.payment_status
    });

    return res.json({ url: session.url, sessionId: session.id });
  } catch (err: any) {
    log('ERROR', 'Erreur lors de la création de la session checkout', {
      message: err.message,
      stack: err.stack,
      type: err.type,
      code: err.code
    });
    return res.status(500).json({ error: err.message || "unknown_error" });
  }
});

// Webhook Stripe pour traiter les événements
app.post("/webhook", express.raw({ type: 'application/json' }), async (req: Request, res: Response) => {
  log('INFO', 'Webhook Stripe reçu');
  
  const sig = req.headers['stripe-signature'] as string;
  
  if (!sig) {
    log('ERROR', 'Signature Stripe manquante dans les headers');
    return res.status(400).send('Signature manquante');
  }
  
  if (!STRIPE_WEBHOOK_SECRET) {
    log('ERROR', 'Secret webhook Stripe non configuré');
    return res.status(500).send('Configuration webhook manquante');
  }
  
  log('INFO', 'Vérification signature webhook', {
    signaturePresent: !!sig,
    bodySize: req.body.length,
    webhookSecretConfigured: !!STRIPE_WEBHOOK_SECRET
  });
  
  let event: Stripe.Event;
  
  try {
    event = stripe.webhooks.constructEvent(req.body, sig, STRIPE_WEBHOOK_SECRET);
    log('INFO', 'Signature webhook vérifiée avec succès', {
      eventType: event.type,
      eventId: event.id,
      created: event.created
    });
  } catch (err: any) {
    log('ERROR', 'Erreur vérification signature webhook', {
      message: err.message,
      signature: sig.substring(0, 20) + '...'
    });
    return res.status(400).send(`Webhook signature verification failed: ${err.message}`);
  }
  
  // Traitement des événements
  try {
    log('INFO', 'Traitement événement webhook', {
      type: event.type,
      id: event.id,
      data: event.data.object
    });
    
    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object as Stripe.Checkout.Session;
        log('INFO', 'Session checkout complétée', {
          sessionId: session.id,
          customerId: session.customer,
          customerEmail: session.customer_email,
          paymentStatus: session.payment_status,
          metadata: session.metadata,
          subscriptionId: session.subscription
        });
        
        // Ici vous pouvez ajouter la logique pour mettre à jour Firestore
        if (session.metadata?.userId) {
          log('INFO', 'Mise à jour utilisateur après paiement', {
            userId: session.metadata.userId,
            planType: session.metadata.planType
          });
          
          // TODO: Mettre à jour Firestore avec le statut de paiement
          // await updateUserPaymentStatus(session.metadata.userId, session.metadata.planType);
        }
        break;
        
      case 'invoice.payment_succeeded':
        const invoice = event.data.object as Stripe.Invoice;
        log('INFO', 'Paiement facture réussi', {
          invoiceId: invoice.id,
          customerId: invoice.customer,
          subscriptionId: invoice.subscription,
          amountPaid: invoice.amount_paid
        });
        break;
        
      case 'customer.subscription.updated':
        const subscription = event.data.object as Stripe.Subscription;
        log('INFO', 'Abonnement mis à jour', {
          subscriptionId: subscription.id,
          customerId: subscription.customer,
          status: subscription.status,
          currentPeriodEnd: subscription.current_period_end
        });
        break;
        
      case 'customer.subscription.deleted':
        const deletedSubscription = event.data.object as Stripe.Subscription;
        log('INFO', 'Abonnement supprimé', {
          subscriptionId: deletedSubscription.id,
          customerId: deletedSubscription.customer,
          canceledAt: deletedSubscription.canceled_at
        });
        break;
        
      default:
        log('WARN', 'Événement webhook non géré', { type: event.type });
    }
    
    log('INFO', 'Événement webhook traité avec succès');
    res.json({ received: true });
    
  } catch (error: any) {
    log('ERROR', 'Erreur traitement événement webhook', {
      message: error.message,
      stack: error.stack,
      eventType: event.type,
      eventId: event.id
    });
    res.status(500).json({ error: 'Erreur traitement webhook' });
  }
});

// Export HTTP Function
log('INFO', 'Configuration Firebase Function terminée');
export const api = functions.region("us-central1").https.onRequest(app);