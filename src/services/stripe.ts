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
  private functionsUrl: string;

  constructor() {
    // Clé publique Stripe réelle
    this.stripePromise = loadStripe('pk_test_51S59C86LX1cwJPasiNmP8pMN9vBIyR3J35a7DYKwoFOCi7WhNfYFZISgdSoWTGg4XSBroUfpmndhB77CZVqitFyL0083YVHh9n');
    
    // Déterminer l'URL des fonctions selon l'environnement
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      // Environnement local - utiliser l'émulateur Firebase
      this.functionsUrl = 'http://localhost:5001/swear-30c84/us-central1/api';
    } else {
      // Production - utiliser les fonctions déployées
      this.functionsUrl = 'https://us-central1-swear-30c84.cloudfunctions.net/api';
    }
    
    console.log('🔗 Functions URL configurée:', this.functionsUrl);
  }

  async createCheckoutSession(request: CreateCheckoutSessionRequest): Promise<CreateCheckoutSessionResponse> {
    console.log('🛒 Création session Stripe réelle:', request);
    console.log('🔗 URL Firebase Functions:', this.functionsUrl);
    
    // Test de connectivité d'abord
    try {
      console.log('🔍 Test de connectivité...');
      const healthResponse = await fetch(`${this.functionsUrl}/health`, {
        method: 'GET',
        mode: 'cors',
      });
      console.log('✅ Health check:', healthResponse.status);
      if (!healthResponse.ok) {
        throw new Error(`Health check failed: ${healthResponse.status}`);
      }
    } catch (healthError) {
      console.error('❌ Health check failed:', healthError);
      throw new Error('Les Firebase Functions ne sont pas accessibles. Vérifiez le déploiement.');
    }
    
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
      console.log('🌐 URL cible:', `${this.functionsUrl}/create-checkout-session`);
      
      // Ajouter un timeout et une gestion d'erreur améliorée
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 secondes timeout
      
      const response = await fetch(`${this.functionsUrl}/create-checkout-session`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
        signal: controller.signal,
        mode: 'cors',
      });
      
      clearTimeout(timeoutId);

      console.log('📡 Réponse Firebase Functions:', response.status, response.statusText);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('❌ Erreur HTTP:', response.status, errorText);
        throw new Error(`Erreur serveur (${response.status}): ${errorText || 'Service indisponible'}`);
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
        if (error.name === 'AbortError') {
          throw new Error('Délai d\'attente dépassé. Vérifiez votre connexion internet.');
        }
        if (error.message.includes('Failed to fetch')) {
          throw new Error('Impossible de contacter le serveur de paiement. Vérifiez que les Firebase Functions sont déployées.');
        }
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