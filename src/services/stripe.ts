import { getFunctions, httpsCallable } from "firebase/functions";
import app, { auth } from "../lib/firebase";

// Types pour les requêtes
export interface CreateCheckoutSessionRequest {
  planType: 'abonnement' | 'starter' | 'pro';
  userEmail: string;
  userId?: string;
  successUrl?: string;
  cancelUrl?: string;
}

// IDs Stripe
const PRICE_IDS = {
  abonnement: "price_1S59Fm6LX1cwJPas3s7oS1pm", // alias starter
  starter:    "price_1S59Fm6LX1cwJPas3s7oS1pm",
  pro:        "price_1S7z1B6LX1cwJPasibsPVll6",
} as const;

type PlanFront = keyof typeof PRICE_IDS;
type ServerPlan = "starter" | "pro";

function buildPayload(planType: PlanFront, successUrl?: string, cancelUrl?: string) {
  if (planType === "starter" || planType === "pro") {
    return {
      plan: planType as ServerPlan,
      successUrl: successUrl ?? `${window.location.origin}/?success=true&plan=${planType}`,
      cancelUrl:  cancelUrl  ?? `${window.location.origin}/?canceled=true`,
    };
  }
  return {
    priceId: PRICE_IDS[planType],
    successUrl: successUrl ?? `${window.location.origin}/?success=true&plan=${planType}`,
    cancelUrl:  cancelUrl  ?? `${window.location.origin}/?canceled=true`,
  };
}

async function redirectToCheckout(request: CreateCheckoutSessionRequest) {
  const user = auth.currentUser;
  if (!user) throw new Error("Veuillez vous connecter.");

  console.log('🔗 Création session Stripe pour le plan', request.planType);
  console.log('🌍 URL actuelle:', window.location.href);
  console.log('🔧 Environnement détecté:', window.location.hostname);

  const functions = getFunctions(app, "us-central1");
  const createCheckout = httpsCallable(functions, "createCheckout");

  const payload = buildPayload(
    request.planType, 
    request.successUrl, 
    request.cancelUrl
  );

  console.log('📡 Appel Firebase Function avec payload:', payload);

  try {
    const result = await createCheckout(payload);
    const data = result.data as any;
    
    console.log('✅ Réponse Firebase Function:', data);
    
    const url = data?.url;
    if (!url) throw new Error("Réponse serveur invalide - URL manquante");
    
    console.log('🚀 Redirection vers Stripe:', url);
    window.location.assign(url);
  } catch (error) {
    console.error('❌ Erreur Firebase Function:', error);
    throw error;
  }
}

async function createCheckoutSession(request: CreateCheckoutSessionRequest): Promise<{ url: string; sessionId?: string }> {
  const user = auth.currentUser;
  if (!user) throw new Error("Veuillez vous connecter.");

  const functions = getFunctions(app, "us-central1");
  const createCheckout = httpsCallable(functions, "createCheckout");

  const payload = buildPayload(
    request.planType, 
    request.successUrl, 
    request.cancelUrl
  );

  const result = await createCheckout(payload);
  const data = result.data as any;

  const url = data?.url;
  if (!url) throw new Error("Réponse serveur invalide - URL manquante");
  
  return { url, sessionId: data?.sessionId };
}

// Export comme objet (compatibilité avec le front actuel)
export const stripeService = {
  redirectToCheckout,
  createCheckoutSession,
};