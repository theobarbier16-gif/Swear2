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

async function createCheckoutSession(request: CreateCheckoutSessionRequest) {
  logWithTimestamp("🚀 STRIPE SERVICE: createCheckoutSession called");
  logWithTimestamp("🔥 IMPORTANT: UTILISATION EXCLUSIVE DE httpsCallable - AUCUN FETCH");
  
  if (!auth.currentUser) {
    logWithTimestamp("❌ No authenticated user");
    throw new Error("Veuillez vous connecter.");
  }

  logWithTimestamp(`✅ User authenticated: ${auth.currentUser.uid}`);
  
  // Test du token d'authentification
  let userToken;
  try {
    userToken = await auth.currentUser.getIdToken();
    logWithTimestamp(`🔑 User token obtained: ${userToken.substring(0, 20)}...`);
  } catch (tokenError) {
    logWithTimestamp(`❌ Failed to get user token: ${tokenError}`);
    throw new Error("Impossible d'obtenir le token d'authentification");
  }

  try {
    logWithTimestamp("🔧 Initializing Firebase Functions...");
    logWithTimestamp(`🏗️ Firebase app name: ${app.name}`);
    logWithTimestamp(`🏗️ Firebase project: ${app.options.projectId}`);
    
    let functions;
    try {
      functions = getFunctions(app, "us-central1");
      logWithTimestamp(`✅ Functions instance created successfully`);
      logWithTimestamp(`🌍 Functions region: us-central1`);
      logWithTimestamp(`🏗️ Functions app: ${functions.app.name}`);
    } catch (functionsError) {
      logWithTimestamp(`❌ Failed to create Functions instance: ${functionsError}`);
      throw functionsError;
    }
    
    let createCheckout;
    try {
      createCheckout = httpsCallable(functions, "createCheckout");
      logWithTimestamp(`✅ httpsCallable function created successfully`);
      logWithTimestamp(`🎯 Function name: createCheckout`);
      logWithTimestamp(`📍 Expected URL: https://us-central1-${app.options.projectId}.cloudfunctions.net/createCheckout`);
    } catch (callableError) {
      logWithTimestamp(`❌ Failed to create httpsCallable: ${callableError}`);
      throw callableError;
    }

    // Construire le payload
    const payload = buildPayload(request.planType, request.successUrl, request.cancelUrl);
    
    logWithTimestamp("📡 CALLING httpsCallable(createCheckout)");
    logWithTimestamp(`📡 Final payload: ${JSON.stringify(payload, null, 2)}`);

    // APPEL EXCLUSIF VIA httpsCallable
    logWithTimestamp("⏳ Executing httpsCallable...");
    
    let result;
    try {
      logWithTimestamp("🚀 About to call httpsCallable function...");
      
      result = await createCheckout(payload);
      logWithTimestamp(`✅ httpsCallable executed successfully`);
      logWithTimestamp(`📊 Raw response: ${JSON.stringify(result)}`);
    } catch (callError) {
      logWithTimestamp(`❌ httpsCallable execution failed`);
      logWithTimestamp(`❌ Error type: ${callError.constructor.name}`);
      logWithTimestamp(`❌ Error message: ${callError.message}`);
      
      if ((callError as any).code) {
        logWithTimestamp(`❌ Firebase Error Code: ${(callError as any).code}`);
      }
      if ((callError as any).details) {
        logWithTimestamp(`❌ Firebase Error Details: ${JSON.stringify((callError as any).details)}`);
      }
      
      // Diagnostic spécial pour l'erreur "internal"
      if ((callError as any).code === 'internal') {
        logWithTimestamp(`🔍 INTERNAL ERROR DIAGNOSTIC:`);
        logWithTimestamp(`🔍 - Function name: createCheckout`);
        logWithTimestamp(`🔍 - Region: us-central1`);
        logWithTimestamp(`🔍 - Project: ${app.options.projectId}`);
        logWithTimestamp(`🔍 - Expected URL: https://us-central1-${app.options.projectId}.cloudfunctions.net/createCheckout`);
        logWithTimestamp(`🔍 - This error usually means:`);
        logWithTimestamp(`🔍   1. Function is not deployed`);
        logWithTimestamp(`🔍   2. Function crashed during execution`);
        logWithTimestamp(`🔍   3. Wrong region or function name`);
        logWithTimestamp(`🔍   4. Permissions issue`);
        logWithTimestamp(`🔍 - Check Firebase Console: https://console.firebase.google.com/project/${app.options.projectId}/functions`);
        logWithTimestamp(`🔍 - Try deploying with: firebase deploy --only functions`);
      }
      
      throw callError;
    }
    
    const data = result.data as any;
    logWithTimestamp(`📊 Extracted data: ${JSON.stringify(data)}`);
    const url = data?.url;
    const sessionId = data?.sessionId;
    
    if (!url) {
      logWithTimestamp(`❌ No URL in response: ${JSON.stringify(data)}`);
      throw new Error("Réponse serveur invalide - pas d'URL de redirection");
    }

    logWithTimestamp("✅ SUCCESS: Session créée avec httpsCallable");

    return {
      url,
      sessionId
    };
    
  } catch (error) {
    logWithTimestamp(`❌ Error in createCheckoutSession: ${error}`);
    throw error;
  }
}

async function redirectToCheckout(request: CreateCheckoutSessionRequest) {
  logWithTimestamp("🚀 STRIPE SERVICE: redirectToCheckout called");
  
  try {
    const session = await createCheckoutSession(request);
    logWithTimestamp(`🔗 Redirecting to Stripe URL: ${session.url}`);
    window.location.assign(session.url);
  } catch (error) {
    logWithTimestamp(`❌ Error in redirectToCheckout: ${error}`);
    throw error;
  }
}

// Export du service
export const stripeService = {
  redirectToCheckout,
  createCheckoutSession
};

logWithTimestamp("✅ STRIPE SERVICE: Service exported avec httpsCallable UNIQUEMENT");