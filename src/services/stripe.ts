import { getFunctions, httpsCallable } from 'firebase/functions';
import app, { auth } from '../lib/firebase';

const logStripe = (level: 'INFO' | 'WARN' | 'ERROR', message: string, data?: any) => {
  const t = new Date().toISOString();
  const msg = `[STRIPE-SERVICE] [${t}] [${level}] ${message}`;
  (level === 'ERROR' ? console.error : level === 'WARN' ? console.warn : console.log)(
    msg, data ? JSON.stringify(data, null, 2) : ''
  );
};

export interface CreateCheckoutSessionRequest {
  planType: 'abonnement' | 'starter' | 'pro';
  userEmail: string;
  userId?: string;
  successUrl?: string;
  cancelUrl?: string;
}

export interface CreateCheckoutSessionResponse {
  sessionId: string;
  url?: string;
}

export class StripeService {
  // Configuration Firebase Functions pour us-central1
  private functions = getFunctions(app, 'us-central1');
  private createCheckoutFn = httpsCallable(this.functions, 'createCheckout');

  constructor() {
    logStripe('INFO', '🚀 VERSION 3.0 - StripeService initialisé avec Firebase Callable');
    logStripe('INFO', '🎯 Région: us-central1, Fonction: createCheckout');
  }

  private getPriceId(planType: string): string {
    const priceIds = {
      abonnement: 'price_1S59Fm6LX1cwJPas3s7oS1pm',
      starter:    'price_1S59Fm6LX1cwJPas3s7oS1pm',
      pro:        'price_1S7z1B6LX1cwJPasibsPVll6',
    };
    const priceId = (priceIds as any)[planType] || priceIds.abonnement;
    logStripe('INFO', '💰 Price ID sélectionné', { planType, priceId });
    return priceId;
  }

  private requireUserId(): string {
    const uid = auth.currentUser?.uid;
    if (!uid) {
      logStripe('ERROR', '❌ Aucun utilisateur connecté');
      throw new Error('Vous devez être connecté pour effectuer un paiement.');
    }
    return uid;
  }

  async createCheckoutSession(req: CreateCheckoutSessionRequest): Promise<CreateCheckoutSessionResponse> {
    logStripe('INFO', '🚀 VERSION 3.0 - Création session via Firebase Callable', req);

    try {
      // Vérifier l'authentification
      const uid = this.requireUserId();
      logStripe('INFO', '✅ Utilisateur authentifié', { uid });

      // Préparer le payload pour la fonction Firebase
      const payload = {
        priceId: this.getPriceId(req.planType),
        successUrl: req.successUrl ?? `${window.location.origin}/?success=true&plan=${req.planType}`,
        cancelUrl:  req.cancelUrl  ?? `${window.location.origin}/?canceled=true`,
      };

      logStripe('INFO', '📡 Appel Firebase Callable createCheckout', payload);

      // Appeler la fonction Firebase - le SDK gère automatiquement CORS
      const result = await this.createCheckoutFn(payload);
      const data = result.data as any;

      logStripe('INFO', '✅ Réponse Firebase Callable reçue', data);

      if (!data?.url) {
        logStripe('ERROR', '❌ URL manquante dans la réponse', data);
        throw new Error('Réponse invalide du serveur (URL manquante).');
      }

      logStripe('INFO', '🎯 Session Stripe créée avec succès', { url: data.url });
      return { sessionId: '', url: data.url };

    } catch (error: any) {
      logStripe('ERROR', '❌ Erreur création session', {
        message: error.message,
        code: error.code,
        stack: error.stack
      });

      // Messages d'erreur plus explicites
      if (error.code === 'unauthenticated') {
        throw new Error('Vous devez être connecté pour effectuer un paiement.');
      } else if (error.code === 'permission-denied') {
        throw new Error('Permissions insuffisantes. Reconnectez-vous.');
      } else if (error.code === 'unavailable') {
        throw new Error('Service temporairement indisponible. Réessayez dans quelques instants.');
      } else {
        throw new Error(`Erreur de paiement: ${error.message}`);
      }
    }
  }

  async redirectToCheckout(req: CreateCheckoutSessionRequest): Promise<void> {
    logStripe('INFO', '🔄 VERSION 3.0 - Redirection vers Stripe Checkout', req);
    
    try {
      const session = await this.createCheckoutSession(req);
      
      if (!session.url) {
        throw new Error('URL de redirection manquante');
      }

      logStripe('INFO', '🚀 Redirection vers Stripe', { url: session.url });
      window.location.assign(session.url);
      
    } catch (error: any) {
      logStripe('ERROR', '❌ Erreur redirection paiement', {
        message: error.message,
        stack: error.stack
      });
      throw error;
    }
  }

  getWebhookUrl(): string {
    return 'https://stripewebhook-ewygqh2kbq-uc.a.run.app';
  }
}

export const stripeService = new StripeService();
