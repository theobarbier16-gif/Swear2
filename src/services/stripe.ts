// src/lib/stripe.ts — Frontend (React/TS) avec Firebase Callable
import { getFunctions, httpsCallable } from "firebase/functions";
import app, { auth } from "../lib/firebase";

// --- IDs Stripe (mode TEST pour commencer) ---
const PRICE_IDS = {
  abonnement: "price_1S59Fm6LX1cwJPas3s7oS1pm", // alias starter
  starter:    "price_1S59Fm6LX1cwJPas3s7oS1pm",
  pro:        "price_1S7z1B6LX1cwJPasibsPVll6",
} as const;

type PlanFront = keyof typeof PRICE_IDS; // 'abonnement' | 'starter' | 'pro'
type ServerPlan = "starter" | "pro";

// Prépare le payload pour l'appel Firebase
function buildPayload(planType: PlanFront, successUrl?: string, cancelUrl?: string) {
  // Si c’est starter ou pro → on passe "plan" au backend
  if (planType === "starter" || planType === "pro") {
    return {
      plan: planType as ServerPlan,
      successUrl: successUrl ?? `${window.location.origin}/success?plan=${planType}`,
      cancelUrl:  cancelUrl  ?? `${window.location.origin}/cancel`,
    };
  }
  // Sinon (abonnement) → alias du starter via priceId
  return {
    priceId: PRICE_IDS[planType],
    successUrl: successUrl ?? `${window.location.origin}/success?plan=${planType}`,
    cancelUrl:  cancelUrl  ?? `${window.location.origin}/cancel`,
  };
}

// ==========================
// Redirection Checkout
// ==========================
export async function redirectToCheckout(opts: {
  planType: PlanFront;
  successUrl?: string;
  cancelUrl?: string;
}) {
  const user = auth.currentUser;
  if (!user) throw new Error("Veuillez vous connecter pour payer.");

  const functions = getFunctions(app, "us-central1");
  const createCheckout = httpsCallable(functions, "createCheckout");

  const payload = buildPayload(opts.planType, opts.successUrl, opts.cancelUrl);
  const { data } = await createCheckout(payload);

  const url = (data as any)?.url as string | undefined;
  if (!url) throw new Error("Réponse serveur invalide (URL manquante).");

  window.location.assign(url);
}

// ==========================
// Récupération URL sans redirect
// ==========================
export async function createCheckoutUrl(opts: {
  planType: PlanFront;
  successUrl?: string;
  cancelUrl?: string;
}): Promise<string> {
  const user = auth.currentUser;
  if (!user) throw new Error("Veuillez vous connecter pour payer.");

  const functions = getFunctions(app, "us-central1");
  const createCheckout = httpsCallable(functions, "createCheckout");

  const payload = buildPayload(opts.planType, opts.successUrl, opts.cancelUrl);
  const { data } = await createCheckout(payload);

  const url = (data as any)?.url as string | undefined;
  if (!url) throw new Error("Réponse serveur invalide (URL manquante).");
  return url;
}
