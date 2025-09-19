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
    // Use your Firebase Functions URL
    this.baseUrl = 'https://us-central1-swear-30c84.cloudfunctions.net/stripeWebhook';
  }

  async createCheckoutSession(request: CreateCheckoutSessionRequest): Promise<CreateCheckoutSessionResponse> {
    console.log('🛒 Creating Stripe checkout session:', request);
    
    try {
      const response = await fetch(`${this.baseUrl}/create-checkout-session`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to create checkout session: ${response.status} ${errorText}`);
      }

      const data = await response.json();
      console.log('✅ Checkout session created:', data);
      
      return data;
    } catch (error) {
      console.error('❌ Error creating checkout session:', error);
      throw error;
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
        throw new Error('No checkout URL received from Stripe');
      }
    } catch (error) {
      console.error('❌ Error redirecting to checkout:', error);
      throw error;
    }
  }
}

export const stripeService = new StripeService();