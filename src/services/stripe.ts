// src/services/stripe.ts
import { getFunctions, httpsCallable } from "firebase/functions";
import app, { auth } from "../lib/firebase";

console.log("🔥 STRIPE SERVICE: Initialisation avec httpsCallable UNIQUEMENT");
console.log("🔥 Firebase app:", app);
console.log("🔥 Auth instance:", auth);

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
  logWithTimestamp(`🔑 User token exists: ${!!await auth.currentUser.getIdToken()}`);

  try {
    // FORCER L'USAGE DE httpsCallable UNIQUEMENT
    logWithTimestamp("🔧 Initializing Firebase Functions avec httpsCallable...");
    logWithTimestamp(`🏗️ Firebase app name: ${app.name}`);
    logWithTimestamp(`🏗️ Firebase app options: ${JSON.stringify(app.options)}`);
    
    const functions = getFunctions(app, "us-central1");
    logWithTimestamp(`🔧 Functions instance created: ${!!functions}`);
    logWithTimestamp(`🌍 Functions region: us-central1`);
    
    const createCheckout = httpsCallable(functions, "createCheckout");
    logWithTimestamp(`🎯 httpsCallable created: ${!!createCheckout}`);
    
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
    
    let result;
    try {
      result = await createCheckout(payload);
      logWithTimestamp(`✅ Raw httpsCallable response: ${JSON.stringify(result)}`);
    } catch (callError) {
      logWithTimestamp(`❌ httpsCallable call failed: ${callError}`);
      logWithTimestamp(`❌ Error type: ${callError.constructor.name}`);
      logWithTimestamp(`❌ Error code: ${callError.code}`);
      logWithTimestamp(`❌ Error message: ${callError.message}`);
      logWithTimestamp(`❌ Error details: ${JSON.stringify(callError.details || {})}`);
      throw callError;
    }
    
    logWithTimestamp(`✅ httpsCallable response: ${JSON.stringify(result)}`);

    const data = result.data as any;
    logWithTimestamp(`📊 Response data: ${JSON.stringify(data)}`);
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
      logWithTimestamp(`❌ Error name: ${error.name}`);
      if (error.stack) {
        logWithTimestamp(`❌ Error stack: ${error.stack}`);
      }
      
      // Logs spéciaux pour FirebaseError
      if (error.name === 'FirebaseError') {
        logWithTimestamp(`🔥 Firebase Error Code: ${(error as any).code}`);
        logWithTimestamp(`🔥 Firebase Error Details: ${JSON.stringify((error as any).details || {})}`);
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
    const token = await auth.currentUser.getIdToken();
    logWithTimestamp(`🔑 User token obtained: ${token.substring(0, 20)}...`);
  } catch (tokenError) {
    logWithTimestamp(`❌ Failed to get user token: ${tokenError}`);
    throw new Error("Impossible d'obtenir le token d'authentification");
  }

  try {
    // FORCER L'USAGE DE httpsCallable UNIQUEMENT
    logWithTimestamp("🔧 Initializing Firebase Functions avec httpsCallable...");
    logWithTimestamp(`🏗️ Firebase app name: ${app.name}`);
    
    const functions = getFunctions(app, "us-central1");
    logWithTimestamp(`🔧 Functions instance: ${!!functions}`);
    
    const createCheckout = httpsCallable(functions, "createCheckout");
    logWithTimestamp(`🎯 httpsCallable function: ${!!createCheckout}`);
    
    logWithTimestamp("✅ Firebase Functions initialized avec httpsCallable");
    logWithTimestamp("🔥 METHODE: httpsCallable (PAS DE FETCH)");

    // Construire le payload
    const payload = buildPayload(request.planType, request.successUrl, request.cancelUrl);
    
    logWithTimestamp("📡 CALLING httpsCallable(createCheckout) - NO HTTP FETCH");
    logWithTimestamp(`📡 Final payload: ${JSON.stringify(payload, null, 2)}`);

    // APPEL EXCLUSIF VIA httpsCallable
    logWithTimestamp("⏳ Appel en cours...");
    
    let result;
    try {
      logWithTimestamp("🚀 Executing httpsCallable...");
      result = await createCheckout(payload);
      logWithTimestamp(`✅ httpsCallable executed successfully`);
    } catch (callError) {
      logWithTimestamp(`❌ httpsCallable execution failed: ${callError}`);
      logWithTimestamp(`❌ Error type: ${callError.constructor.name}`);
      
      if (callError.code) {
        logWithTimestamp(`❌ Firebase Error Code: ${callError.code}`);
      }
      if (callError.message) {
        logWithTimestamp(`❌ Firebase Error Message: ${callError.message}`);
      }
      if (callError.details) {
        logWithTimestamp(`❌ Firebase Error Details: ${JSON.stringify(callError.details)}`);
      }
      
      throw callError;
    }
    
    logWithTimestamp(`✅ httpsCallable response: ${JSON.stringify(result)}`);

    const data = result.data as any;
    logWithTimestamp(`📊 Extracted data: ${JSON.stringify(data)}`);
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
      logWithTimestamp(`❌ Error name: ${error.name}`);
      if (error.stack) {
        logWithTimestamp(`❌ Error stack: ${error.stack}`);
      }
      
      // Logs spéciaux pour FirebaseError
      if (error.name === 'FirebaseError') {
        logWithTimestamp(`🔥 Firebase Error Code: ${(error as any).code}`);
        logWithTimestamp(`🔥 Firebase Error Details: ${JSON.stringify((error as any).details || {})}`);
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