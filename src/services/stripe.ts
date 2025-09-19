// Stripe service for handling payments
export interface CreateCheckoutSessionRequest {
  planType: 'starter' | 'pro';
  userEmail: string;
  successUrl?: string;
  cancelUrl?: string;
}

export interface CreateCheckoutSessionResponse {
  sessionId: string;
  url: string;
}

export class StripeService {
  private baseUrl: string;

  constructor() {
    // Utiliser une approche plus robuste pour détecter l'environnement
    const isProduction = window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1';
    
    if (isProduction) {
      // En production, utiliser l'URL Firebase Functions
      this.baseUrl = 'https://us-central1-swear-30c84.cloudfunctions.net/stripeWebhook';
    } else {
      // En développement, utiliser localhost
      this.baseUrl = 'http://localhost:5001/swear-30c84/us-central1/stripeWebhook';
    }
    
    console.log('🔧 Stripe Service URL:', this.baseUrl);
    console.log('🌍 Environment:', isProduction ? 'production' : 'development');
  }

  async createCheckoutSession(request: CreateCheckoutSessionRequest): Promise<CreateCheckoutSessionResponse> {
    console.log('🛒 Création session Stripe:', request);
    
    try {
      console.log('📡 URL utilisée:', `${this.baseUrl}/create-checkout-session`);
      
      // Test de connectivité avant la requête principale
      console.log('🔍 Test de connectivité...');
      
      const response = await fetch(`${this.baseUrl}/create-checkout-session`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Origin': window.location.origin,
        },
        body: JSON.stringify(request),
        mode: 'cors',
        credentials: 'omit',
      });

      if (!response.ok) {
        let errorText;
        try {
          const errorData = await response.json();
          errorText = errorData.error || errorData.message || 'Erreur inconnue';
        } catch {
          errorText = await response.text();
        }
        throw new Error(`Échec création session: ${response.status} ${errorText}`);
      }

      const data = await response.json();
      console.log('✅ Session Stripe créée:', data);
      
      return data;
    } catch (error) {
      console.error('❌ Erreur création session:', error);
      
      // Améliorer les messages d'erreur
      if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
        throw new Error('Impossible de contacter le serveur de paiement. Vérifiez votre connexion internet.');
      } else if (error instanceof Error) {
        throw error;
      } else {
        throw new Error('Erreur de paiement inconnue');
      }
    }
  }

  // Helper method to redirect to Stripe checkout
  async redirectToCheckout(request: CreateCheckoutSessionRequest): Promise<void> {
    try {
      const session = await this.createCheckoutSession(request);
      
      // Redirect to Stripe checkout
      if (session.url) {
        window.location.href = session.url;
      } else {
        throw new Error('Aucune URL de paiement reçue de Stripe');
      }
    } catch (error) {
      console.error('❌ Erreur redirection paiement:', error);
      throw error;
    }
  }
}

export const stripeService = new StripeService();