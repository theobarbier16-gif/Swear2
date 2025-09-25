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

// Helper pour logger avec timestamp
function logWithTimestamp(message: string) {
  const timestamp = new Date().toLocaleTimeString();
  const logMessage = `[${timestamp}] ${message}`;
  console.log(logMessage);
  return logMessage;
}

function buildPayload(planType: PlanFront, successUrl?: string, cancelUrl?: string) {
  logWithTimestamp(`🔧 Building payload for plan: ${planType}`);
  
  if (planType === "starter" || planType === "pro") {
    const payload = {
      plan: planType as ServerPlan,
      successUrl: successUrl ?? `${window.location.origin}/?success=true&plan=${planType}`,
      cancelUrl:  cancelUrl  ?? `${window.location.origin}/?canceled=true`,
    };
    logWithTimestamp(`📦 Payload (plan-based): ${JSON.stringify(payload)}`);
    return payload;
  }
  
  // Pour "abonnement", on utilise le priceId
  const payload = {
    priceId: PRICE_IDS[planType],
    successUrl: successUrl ?? `${window.location.origin}/?success=true&plan=${planType}`,
    cancelUrl:  cancelUrl  ?? `${window.location.origin}/?canceled=true`,
  };
  logWithTimestamp(`📦 Payload (priceId-based): ${JSON.stringify(payload)}`);
  return payload;
}

async function redirectToCheckout(request: CreateCheckoutSessionRequest) {
  logWithTimestamp("🚀 STRIPE SERVICE: redirectToCheckout called");
  logWithTimestamp("🔥 IMPORTANT: UTILISATION EXCLUSIVE DE httpsCallable - AUCUN FETCH");
  
  if (!auth.currentUser) {
    logWithTimestamp("❌ No authenticated user");
    throw new Error("Veuillez vous connecter.");
  }

  logWithTimestamp(`✅ User authenticated: ${auth.currentUser.uid}`);

  try {
    // FORCER L'USAGE DE httpsCallable UNIQUEMENT
    logWithTimestamp("🔧 Initializing Firebase Functions avec httpsCallable...");
    const functions = getFunctions(app, "us-central1");
    const createCheckout = httpsCallable(functions, "createCheckout");
    
    logWithTimestamp("✅ Firebase Functions initialized avec httpsCallable");
    logWithTimestamp("🎯 Function region: us-central1");
    logWithTimestamp("🎯 Function name: createCheckout");
    logWithTimestamp("🔥 METHODE: httpsCallable (PAS DE FETCH)");

    // Construire le payload
    const payload = buildPayload(request.planType, request.successUrl, request.cancelUrl);
    
    logWithTimestamp("📡 CALLING httpsCallable(createCheckout) - NO HTTP FETCH");
    logWithTimestamp(`📡 Payload: ${JSON.stringify(payload)}`);

    // APPEL EXCLUSIF VIA httpsCallable
    logWithTimestamp("⏳ Appel en cours...");
    const result = await createCheckout(payload);
    logWithTimestamp(`✅ httpsCallable response: ${JSON.stringify(result)}`);

    const data = result.data as any;
    const url = data?.url;
    
    if (!url) {
      logWithTimestamp(`❌ No URL in response: ${JSON.stringify(data)}`);
      throw new Error("Réponse serveur invalide - pas d'URL de redirection");
    }

    logWithTimestamp(`🔗 Redirecting to Stripe URL: ${url}`);
    logWithTimestamp("✅ SUCCESS: Aucun appel HTTP direct - uniquement httpsCallable");
    
    // Redirection vers Stripe
    window.location.assign(url);
    
  } catch (error) {
    logWithTimestamp(`❌ Error in redirectToCheckout: ${error}`);
    
    if (error instanceof Error) {
      logWithTimestamp(`❌ Error message: ${error.message}`);
      if (error.stack) {
        logWithTimestamp(`❌ Error stack: ${error.stack}`);
      }
    }
    
    throw error;
  }
}

async function createCheckoutSession(request: CreateCheckoutSessionRequest) {
  logWithTimestamp("🚀 STRIPE SERVICE: createCheckoutSession called");
  logWithTimestamp("🔥 IMPORTANT: UTILISATION EXCLUSIVE DE httpsCallable - AUCUN FETCH");
  
  if (!auth.currentUser) {
    logWithTimestamp("❌ No authenticated user");
    throw new Error("Veuillez vous connecter.");
  }

  logWithTimestamp(`✅ User authenticated: ${auth.currentUser.uid}`);

  try {
    // FORCER L'USAGE DE httpsCallable UNIQUEMENT
    logWithTimestamp("🔧 Initializing Firebase Functions avec httpsCallable...");
    const functions = getFunctions(app, "us-central1");
    const createCheckout = httpsCallable(functions, "createCheckout");
    
    logWithTimestamp("✅ Firebase Functions initialized avec httpsCallable");
    logWithTimestamp("🔥 METHODE: httpsCallable (PAS DE FETCH)");

    // Construire le payload
    const payload = buildPayload(request.planType, request.successUrl, request.cancelUrl);
    
    logWithTimestamp("📡 CALLING httpsCallable(createCheckout) - NO HTTP FETCH");

    // APPEL EXCLUSIF VIA httpsCallable
    logWithTimestamp("⏳ Appel en cours...");
    const result = await createCheckout(payload);
    logWithTimestamp(`✅ httpsCallable response: ${JSON.stringify(result)}`);

    const data = result.data as any;
    const url = data?.url;
    const sessionId = data?.sessionId;
    
    if (!url) {
      logWithTimestamp(`❌ No URL in response: ${JSON.stringify(data)}`);
      throw new Error("Réponse serveur invalide - pas d'URL de redirection");
    }

    logWithTimestamp("✅ SUCCESS: Aucun appel HTTP direct - uniquement httpsCallable");

    return {
      url,
      sessionId
    };
    
  } catch (error) {
    logWithTimestamp(`❌ Error in createCheckoutSession: ${error}`);
    
    if (error instanceof Error) {
      logWithTimestamp(`❌ Error message: ${error.message}`);
      if (error.stack) {
        logWithTimestamp(`❌ Error stack: ${error.stack}`);
      }
    }
    
    throw error;
  }
}

// Export du service
export const stripeService = {
  redirectToCheckout,
  createCheckoutSession
};

logWithTimestamp("✅ STRIPE SERVICE: Service exported avec httpsCallable UNIQUEMENT - AUCUN FETCH");