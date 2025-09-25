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
  
  // Test du token d'authentification
  let userToken;
  try {
    userToken = await auth.currentUser.getIdToken();
    logWithTimestamp(`🔑 User token obtained successfully: ${userToken.substring(0, 20)}...`);
  } catch (tokenError) {
    logWithTimestamp(`❌ Failed to get user token: ${tokenError}`);
    throw new Error("Impossible d'obtenir le token d'authentification");
  }

  try {
    // FORCER L'USAGE DE httpsCallable UNIQUEMENT
    logWithTimestamp("🔧 Initializing Firebase Functions avec httpsCallable...");
    logWithTimestamp(`🏗️ Firebase app name: ${app.name}`);
    logWithTimestamp(`🏗️ Firebase app options: ${JSON.stringify(app.options)}`);
    
    let functions;
    try {
      functions = getFunctions(app, "us-central1");
      logWithTimestamp(`🔧 Functions instance created successfully`);
    } catch (functionsError) {
      logWithTimestamp(`❌ Failed to create Functions instance: ${functionsError}`);
      throw functionsError;
    }
    
    logWithTimestamp(`🔧 Functions instance created: ${!!functions}`);
    logWithTimestamp(`🌍 Functions region: us-central1`);
    
    let createCheckout;
    try {
      createCheckout = httpsCallable(functions, "createCheckout");
      logWithTimestamp(`🎯 httpsCallable function created successfully`);
    } catch (callableError) {
      logWithTimestamp(`❌ Failed to create httpsCallable: ${callableError}`);
      throw callableError;
    }
    
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
      logWithTimestamp("🚀 About to call httpsCallable function...");
      logWithTimestamp(`🔑 Using auth token: ${userToken ? 'YES' : 'NO'}`);
      logWithTimestamp(`📍 Function URL should be: https://us-central1-swear-30c84.cloudfunctions.net/createCheckout`);
      
      result = await createCheckout(payload);
      logWithTimestamp(`✅ Raw httpsCallable response: ${JSON.stringify(result)}`);
    } catch (callError) {
      logWithTimestamp(`❌ httpsCallable call failed: ${callError}`);
      logWithTimestamp(`❌ Error type: ${callError.constructor.name}`);
      logWithTimestamp(`❌ Error code: ${(callError as any).code || 'NO_CODE'}`);
      logWithTimestamp(`❌ Error message: ${callError.message || 'NO_MESSAGE'}`);
      logWithTimestamp(`❌ Error details: ${JSON.stringify((callError as any).details || {})}`);
      
      // Logs spéciaux pour diagnostiquer l'erreur "internal"
      if ((callError as any).code === 'internal') {
        logWithTimestamp(`🔍 INTERNAL ERROR ANALYSIS:`);
        logWithTimestamp(`🔍 - This usually means the Firebase Function doesn't exist or failed to execute`);
        logWithTimestamp(`🔍 - Check if the function 'createCheckout' is deployed in region 'us-central1'`);
        logWithTimestamp(`🔍 - Project ID: swear-30c84`);
        logWithTimestamp(`🔍 - Expected function URL: https://us-central1-swear-30c84.cloudfunctions.net/createCheckout`);
      }
      
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
    // FORCER L'USAGE DE httpsCallable UNIQUEMENT
    logWithTimestamp("🔧 Initializing Firebase Functions avec httpsCallable...");
    logWithTimestamp(`🏗️ Firebase app name: ${app.name}`);
    
    let functions;
    try {
      functions = getFunctions(app, "us-central1");
      logWithTimestamp(`🔧 Functions instance created successfully`);
    } catch (functionsError) {
      logWithTimestamp(`❌ Failed to create Functions instance: ${functionsError}`);
      throw functionsError;
    }
    
    logWithTimestamp(`🔧 Functions instance: ${!!functions}`);
    
    let createCheckout;
    try {
      createCheckout = httpsCallable(functions, "createCheckout");
      logWithTimestamp(`🎯 httpsCallable function created successfully`);
    } catch (callableError) {
      logWithTimestamp(`❌ Failed to create httpsCallable: ${callableError}`);
      throw callableError;
    }
    
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
      logWithTimestamp(`🔑 Using auth token: ${userToken ? 'YES' : 'NO'}`);
      logWithTimestamp(`📍 Function URL should be: https://us-central1-swear-30c84.cloudfunctions.net/createCheckout`);
      logWithTimestamp(`🏗️ Project ID: swear-30c84`);
      
      result = await createCheckout(payload);
      logWithTimestamp(`✅ httpsCallable executed successfully`);
    } catch (callError) {
      logWithTimestamp(`❌ httpsCallable execution failed: ${callError}`);
      logWithTimestamp(`❌ Error type: ${callError.constructor.name}`);
      
      if ((callError as any).code) {
        logWithTimestamp(`❌ Firebase Error Code: ${(callError as any).code}`);
      }
      if (callError.message) {
        logWithTimestamp(`❌ Firebase Error Message: ${callError.message}`);
      }
      if ((callError as any).details) {
        logWithTimestamp(`❌ Firebase Error Details: ${JSON.stringify((callError as any).details)}`);
      }
      
      // Diagnostic spécial pour l'erreur "internal"
      if ((callError as any).code === 'internal') {
        logWithTimestamp(`🔍 INTERNAL ERROR DIAGNOSTIC:`);
        logWithTimestamp(`🔍 - Function name: createCheckout`);
        logWithTimestamp(`🔍 - Region: us-central1`);
        logWithTimestamp(`🔍 - Project: swear-30c84`);
        logWithTimestamp(`🔍 - This error usually means:`);
        logWithTimestamp(`🔍   1. Function is not deployed`);
        logWithTimestamp(`🔍   2. Function crashed during execution`);
        logWithTimestamp(`🔍   3. Wrong region or function name`);
        logWithTimestamp(`🔍   4. Permissions issue`);
        logWithTimestamp(`🔍 - Check Firebase Console: https://console.firebase.google.com/project/swear-30c84/functions`);
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