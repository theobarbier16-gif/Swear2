// Service Stripe simplifié pour fonctionner sans backend
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
  private stripePublicKey = 'pk_test_51QEqGvP8m2VJGhKJvQXGqzpHvQXGqzpHvQXGqzpHvQXGqzpHvQXGqzpHvQXGqzpH'; // Clé publique de test

  async createCheckoutSession(request: CreateCheckoutSessionRequest): Promise<CreateCheckoutSessionResponse> {
    console.log('🛒 Création session Stripe (mode démo):', request);
    
    // Pour la démo, on simule une session Stripe
    const mockSessionId = `cs_test_${Date.now()}`;
    
    // Simuler un délai de création
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Créer une URL de démo qui simule le processus de paiement
    const demoUrl = this.createDemoCheckoutUrl(request, mockSessionId);
    
    console.log('✅ Session démo créée:', { sessionId: mockSessionId, url: demoUrl });
    
    return {
      sessionId: mockSessionId,
      url: demoUrl
    };
  }

  private createDemoCheckoutUrl(request: CreateCheckoutSessionRequest, sessionId: string): string {
    const baseUrl = window.location.origin;
    const planDetails = this.getPlanDetails(request.planType);
    
    // Pour un vrai Stripe, on utiliserait l'URL de webhook
    const webhookUrl = `${baseUrl}/stripe-webhook`;
    console.log('🔗 URL webhook configurée:', webhookUrl);
    
    // Créer une page de paiement démo
    const checkoutParams = new URLSearchParams({
      session_id: sessionId,
      plan: request.planType,
      email: request.userEmail,
      amount: planDetails.price.toString(),
      success_url: request.successUrl || `${baseUrl}/?success=true&plan=${request.planType}`,
      cancel_url: request.cancelUrl || `${baseUrl}/?canceled=true`
    });
    
    return `${baseUrl}/demo-checkout?${checkoutParams.toString()}`;
  }

  // Méthode pour obtenir l'URL du webhook à configurer dans Stripe
  getWebhookUrl(): string {
    const baseUrl = window.location.origin;
    return `${baseUrl}/stripe-webhook`;
  }

  private getPlanDetails(planType: string) {
    const plans = {
      starter: { name: 'Starter', price: 990, credits: 25 },
      pro: { name: 'Pro', price: 2290, credits: 150 }
    };
    return plans[planType as keyof typeof plans] || plans.starter;
  }

  async redirectToCheckout(request: CreateCheckoutSessionRequest): Promise<void> {
    try {
      const session = await this.createCheckoutSession(request);
      
      if (session.url) {
        // Au lieu de rediriger vers Stripe, on redirige vers notre page de démo
        window.location.href = session.url;
      } else {
        throw new Error('Aucune URL de paiement générée');
      }
    } catch (error) {
      console.error('❌ Erreur redirection paiement:', error);
      throw error;
    }
  }
}

export const stripeService = new StripeService();