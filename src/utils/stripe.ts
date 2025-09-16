// Stripe utilities for Firebase Functions integration

export interface CreateCheckoutSessionRequest {
  planType: 'starter';
  userEmail: string;
  successUrl?: string;
  cancelUrl?: string;
}

export interface CreateCheckoutSessionResponse {
  sessionId: string;
  url: string;
}

// Configuration des produits disponibles
export const STRIPE_PRODUCTS = {
  starter: {
    name: 'Plan Abonnement',
    description: 'Plan Abonnement - 25 crédits par mois',
    price: 9.90,
    credits: 25,
    priceInCents: 990
  }
} as const;

export type PlanType = keyof typeof STRIPE_PRODUCTS;

// Fonction pour créer une session de checkout via Firebase Functions
export const createCheckoutSession = async (
  request: CreateCheckoutSessionRequest
): Promise<CreateCheckoutSessionResponse> => {
  console.log('🛒 Création session checkout:', request);
  
  try {
    // URL de la Firebase Function
    const functionUrl = 'https://us-central1-swear-30c84.cloudfunctions.net/stripeCheckout/create-checkout-session';
    
    const response = await fetch(functionUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request)
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Erreur HTTP ${response.status}: ${errorText}`);
    }
    
    const data = await response.json();
    console.log('✅ Session créée:', data);
    
    return data;
  } catch (error) {
    console.error('❌ Erreur création session:', error);
    throw error;
  }
};

// Fonction pour rediriger vers Stripe Checkout
export const redirectToCheckout = async (
  planType: PlanType,
  userEmail: string
): Promise<void> => {
  try {
    const currentUrl = window.location.origin;
    const successUrl = `${currentUrl}/pricing?success=true&plan=${planType}`;
    const cancelUrl = `${currentUrl}/pricing?canceled=true`;
    
    console.log(`🚀 Redirection vers checkout pour plan: ${planType}`);
    
    const { url } = await createCheckoutSession({
      planType,
      userEmail,
      successUrl,
      cancelUrl
    });
    
    if (url) {
      // Stocker les informations pour la vérification post-paiement
      localStorage.setItem('lastStripeInteraction', Date.now().toString());
      localStorage.setItem('selectedPlan', planType);
      localStorage.setItem('stripeRedirectTime', Date.now().toString());
      
      // Rediriger vers Stripe
      window.location.href = url;
    } else {
      throw new Error('URL de checkout non reçue');
    }
  } catch (error) {
    console.error('❌ Erreur redirection checkout:', error);
    throw error;
  }
};

// Fonction pour vérifier le statut d'un paiement
export const verifyPaymentStatus = async (sessionId: string): Promise<boolean> => {
  try {
    // Cette fonction pourrait appeler une Firebase Function pour vérifier le statut
    // Pour l'instant, on se base sur les webhooks automatiques
    console.log('🔍 Vérification statut paiement:', sessionId);
    return true;
  } catch (error) {
    console.error('❌ Erreur vérification paiement:', error);
    return false;
  }
};