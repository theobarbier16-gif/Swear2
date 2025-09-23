import { loadStripe } from '@stripe/stripe-js';
import { getFunctions, httpsCallable } from 'firebase/functions';
import { auth, app } from '../lib/firebase'; // adapte si ton export diffère

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
  successUrl?: string;
  cancelUrl?: string;
}

export interface CreateCheckoutSessionResponse {
  sessionId: string;
  url?: string;
}

export class StripeService {
  private stripePromise = loadStripe('pk_test_51S59C86LX1cwJPasiNmP8pMN9vBIyR3J35a7DYKwoFOCi7WhNfYFZISgdSoWTGg4XSBroUfpmndhB77CZVqitFyL0083YVHh9n');

  // IMPORTANT: on cible la même région que tes functions (us-central1)
  private functions = getFunctions(app, 'us-central1');
  private createCheckoutFn = httpsCallable(this.functions, 'createCheckout');

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
    logStripe('INFO', 'Création de session via callable Firebase', req);

    const uid = this.requireUserId();
    const payload = {
      priceId: this.getPriceId(req.planType),
      successUrl: req.successUrl ?? `${window.location.origin}/?success=true&plan=${req.planType}`,
      cancelUrl:  req.cancelUrl  ?? `${window.location.origin}/?canceled=true`,
      // pas besoin d’envoyer uid: le backend le lit via request.auth.uid
    };

    const { data }: any = await this.createCheckoutFn(payload);
    // Notre backend renvoie { url: session.url }
    if (!data?.url) {
      logStripe('ERROR', 'Réponse invalide de la callable', data);
      throw new Error('Réponse invalide du serveur (url manquante).');
    }

    logStripe('INFO', '✅ Session créée (URL Stripe Checkout reçue)', { url: data.url });
    return { sessionId: '', url: data.url };
  }

  async redirectToCheckout(req: CreateCheckoutSessionRequest): Promise<void> {
    const session = await this.createCheckoutSession(req);
    // Comme on renvoie une URL de Checkout, on redirige le navigateur directement :
    window.location.assign(session.url!);
  }

  getWebhookUrl(): string {
    // juste informatif si tu veux l’afficher dans l’UI
    return 'https://stripewebhook-ewygqh2kbq-uc.a.run.app';
  }
}

export const stripeService = new StripeService();
