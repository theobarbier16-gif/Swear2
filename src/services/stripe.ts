import { loadStripe } from '@stripe/stripe-js';

export interface CreateCheckoutSessionRequest {
  planType: 'starter' | 'pro';
  userEmail: string;
  successUrl?: string;
  cancelUrl?: string;
}

export interface CreateCheckoutSessionResponse {
  sessionId: string;
  url?: string;
}

export class StripeService {
  private stripePromise: Promise<any>;
  private functionsUrl = 'https://us-central1-swear-30c84.cloudfunctions.net/stripeWebhook';

  constructor() {
    // Clé publique Stripe réelle
    this.stripePromise = loadStripe('pk_test_51S59C86LX1cwJPasiNmP8pMN9vBIyR3J35a7DYKwoFOCi7WhNfYFZISgdSoWTGg4XSBroUfpmndhB77CZVqitFyL0083YVHh9n');
  }

  async createCheckoutSession(request: CreateCheckoutSessionRequest): Promise<CreateCheckoutSessionResponse> {
    console.log('🛒 Création session Stripe réelle:', request);
    console.log('🔗 URL Firebase Functions:', this.functionsUrl);
    
    try {
      const payload = {
        priceId: this.getPriceId(request.planType),
        userId: this.getCurrentUserId(),
        planType: request.planType,
        userEmail: request.userEmail,
        successUrl: request.successUrl || `${window.location.origin}/?success=true&plan=${request.planType}`,
        cancelUrl: request.cancelUrl || `${window.location.origin}/?canceled=true`,
      };
      
      console.log('📦 Payload envoyé:', payload);
      
      const response = await fetch(`${this.functionsUrl}/create-checkout-session`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Origin': window.location.origin,
        },
        body: JSON.stringify(payload),
      });

      console.log('📡 Réponse Firebase Functions:', response.status, response.statusText);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('❌ Erreur HTTP:', response.status, errorText);
        throw new Error(`Erreur HTTP: ${response.status}`);
      }

      const data = await response.json();
      console.log('✅ Session Stripe créée:', data);
      
      return {
        sessionId: data.sessionId,
        url: data.url
      };
    } catch (error) {
      console.error('❌ Erreur création session Stripe:', error);
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('Impossible de créer la session de paiement');
    }
  }

  private getPriceId(planType: string): string {
    // ⚠️ IMPORTANT: Vérifiez que ces IDs correspondent à vos prix Stripe
    const priceIds = {
      starter: 'price_1S59Fm6LX1cwJPas3s7oS1pm', // Plan Starter 9,90€
      pro: 'price_1S7z1B6LX1cwJPasibsPVll6'      // Plan Pro 22,90€
    };
    return priceIds[planType as keyof typeof priceIds] || priceIds.starter;
  }

  private getCurrentUserId(): string {
    // Méthode plus robuste pour récupérer l'ID utilisateur
    try {
      const user = JSON.parse(localStorage.getItem('firebase:authUser:AIzaSyDRoNJkXmR7C3dt142AAz_hGCPpfKxkXxE:[DEFAULT]') || '{}');
      return user.uid || '';
    } catch (error) {
      console.error('❌ Erreur récupération userId:', error);
      return '';
    }
  }

  async redirectToCheckout(request: CreateCheckoutSessionRequest): Promise<void> {
    console.log('🚀 Début redirection Stripe Checkout:', request);
    
    try {
      const stripe = await this.stripePromise;
      if (!stripe) {
        console.error('❌ Stripe non initialisé');
        throw new Error('Stripe non initialisé');
      }

      console.log('✅ Stripe initialisé, création de la session...');
      const session = await this.createCheckoutSession(request);
      
      console.log('✅ Session créée, redirection vers Stripe...', session.sessionId);
      // Redirection vers Stripe Checkout
      const { error } = await stripe.redirectToCheckout({
        sessionId: session.sessionId,
      });

      if (error) {
        console.error('❌ Erreur redirection Stripe:', error);
        throw new Error(error.message);
      }
      
      console.log('✅ Redirection Stripe réussie');
    } catch (error) {
      console.error('❌ Erreur redirection paiement:', error);
      throw error;
    }
  }

  // Méthode pour obtenir l'URL du webhook
  getWebhookUrl(): string {
    return `${this.functionsUrl}/webhook`;
  }
}

export const stripeService = new StripeService();