// src/services/stripe.ts
import { getFunctions, httpsCallable } from "firebase/functions";
import app, { auth } from "../lib/firebase";

console.log("🔥 STRIPE SERVICE: Initialisation avec httpsCallable UNIQUEMENT");

// Configuration des plans avec les vrais Price IDs
const PRICE_IDS = {
  abonnement: "price_1S59Fm6LX1cwJPas3s7oS1pm", // alias starter
  starter:    "price_1S59Fm6LX1cwJPas3s7oS1pm",
  pro:        "price_1S7z1B6LX1cwJPasibsPVll6",
} as const;

export interface CreateCheckoutSessionRequest {
  planType: 'abonnement' | 'starter' | 'pro';
  userEmail: string;
  userId: string;
  successUrl: string;
  cancelUrl: string;
}

type PlanFront = keyof typeof PRICE_IDS;
type ServerPlan = "starter" | "pro";

function buildPayload(planType: PlanFront, successUrl?: string, cancelUrl?: string) {
  console.log("🔧 Building payload for plan:", planType);
  
  if (planType === "starter" || planType === "pro") {
    const payload = {
      plan: planType as ServerPlan,
      successUrl: successUrl ?? `${window.location.origin}/?success=true&plan=${planType}`,
      cancelUrl:  cancelUrl  ?? `${window.location.origin}/?canceled=true`,
    };
    console.log("📦 Payload (plan-based):", payload);
    return payload;
  }
  
  // Pour "abonnement", on utilise le priceId
  const payload = {
    priceId: PRICE_IDS[planType],
    successUrl: successUrl ?? `${window.location.origin}/?success=true&plan=${planType}`,
    cancelUrl:  cancelUrl  ?? `${window.location.origin}/?canceled=true`,
  };
  console.log("📦 Payload (priceId-based):", payload);
  return payload;
}

async function redirectToCheckout(request: CreateCheckoutSessionRequest) {
  console.log("🚀 STRIPE SERVICE: redirectToCheckout called with:", request);
  console.log("🔥 IMPORTANT: UTILISATION EXCLUSIVE DE httpsCallable - AUCUN FETCH");
  
  if (!auth.currentUser) {
    console.error("❌ No authenticated user");
    throw new Error("Veuillez vous connecter.");
  }

  console.log("✅ User authenticated:", auth.currentUser.uid);

  try {
    // FORCER L'USAGE DE httpsCallable UNIQUEMENT
    console.log("🔧 Initializing Firebase Functions avec httpsCallable...");
    const functions = getFunctions(app, "us-central1");
    const createCheckout = httpsCallable(functions, "createCheckout");
    
    console.log("✅ Firebase Functions initialized avec httpsCallable");
    console.log("🎯 Function region: us-central1");
    console.log("🎯 Function name: createCheckout");
    console.log("🔥 METHODE: httpsCallable (PAS DE FETCH)");

    // Construire le payload
    const payload = buildPayload(request.planType, request.successUrl, request.cancelUrl);
    
    console.log("📡 CALLING httpsCallable(createCheckout) - NO HTTP FETCH");
    console.log("📡 Payload:", payload);

    // APPEL EXCLUSIF VIA httpsCallable
    const result = await createCheckout(payload);
    console.log("✅ httpsCallable response:", result);

    const data = result.data as any;
    const url = data?.url;
    
    if (!url) {
      console.error("❌ No URL in response:", data);
      throw new Error("Réponse serveur invalide - pas d'URL de redirection");
    }

    console.log("🔗 Redirecting to Stripe URL:", url);
    console.log("✅ SUCCESS: Aucun appel HTTP direct - uniquement httpsCallable");
    
    // Redirection vers Stripe
    window.location.assign(url);
    
  } catch (error) {
    console.error("❌ Error in redirectToCheckout:", error);
    
    if (error instanceof Error) {
      console.error("❌ Error message:", error.message);
      console.error("❌ Error stack:", error.stack);
    }
    
    throw error;
  }
}

async function createCheckoutSession(request: CreateCheckoutSessionRequest) {
  console.log("🚀 STRIPE SERVICE: createCheckoutSession called with:", request);
  console.log("🔥 IMPORTANT: UTILISATION EXCLUSIVE DE httpsCallable - AUCUN FETCH");
  
  if (!auth.currentUser) {
    console.error("❌ No authenticated user");
    throw new Error("Veuillez vous connecter.");
  }

  console.log("✅ User authenticated:", auth.currentUser.uid);

  try {
    // FORCER L'USAGE DE httpsCallable UNIQUEMENT
    console.log("🔧 Initializing Firebase Functions avec httpsCallable...");
    const functions = getFunctions(app, "us-central1");
    const createCheckout = httpsCallable(functions, "createCheckout");
    
    console.log("✅ Firebase Functions initialized avec httpsCallable");
    console.log("🔥 METHODE: httpsCallable (PAS DE FETCH)");

    // Construire le payload
    const payload = buildPayload(request.planType, request.successUrl, request.cancelUrl);
    
    console.log("📡 CALLING httpsCallable(createCheckout) - NO HTTP FETCH");

    // APPEL EXCLUSIF VIA httpsCallable
    const result = await createCheckout(payload);
    console.log("✅ httpsCallable response:", result);

    const data = result.data as any;
    const url = data?.url;
    const sessionId = data?.sessionId;
    
    if (!url) {
      console.error("❌ No URL in response:", data);
      throw new Error("Réponse serveur invalide - pas d'URL de redirection");
    }

    console.log("✅ SUCCESS: Aucun appel HTTP direct - uniquement httpsCallable");

    return {
      url,
      sessionId
    };
    
  } catch (error) {
    console.error("❌ Error in createCheckoutSession:", error);
    throw error;
  }
}

// Export du service
export const stripeService = {
  redirectToCheckout,
  createCheckoutSession
};

console.log("✅ STRIPE SERVICE: Service exported avec httpsCallable UNIQUEMENT - AUCUN FETCH");