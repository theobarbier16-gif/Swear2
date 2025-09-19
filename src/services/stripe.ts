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
    // Utiliser l'URL correcte selon l'environnement
    if (import.meta.env.PROD) {
      // En production, utiliser l'URL Firebase Functions
      this.baseUrl = 'https://us-central1-swear-30c84.cloudfunctions.net/stripeWebhook';
    } else {
      // En développement, utiliser localhost
      this.baseUrl = 'http://localhost:5001/swear-30c84/us-central1/stripeWebhook';
    }
  }

  async createCheckoutSession(request: CreateCheckoutSessionRequest): Promise<CreateCheckoutSessionResponse> {
    console.log('🛒 Création session Stripe:', request);
    
    try {
      console.log('📡 URL utilisée:', `${this.baseUrl}/create-checkout-session`);
      
      const response = await fetch(`${this.baseUrl}/create-checkout-session`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(request),
        mode: 'cors',
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