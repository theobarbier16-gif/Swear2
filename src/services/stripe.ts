// src/lib/stripe.ts — Prod only
import { getFunctions, httpsCallable } from "firebase/functions";
import app, { auth } from "../lib/firebase";

// === Price IDs (prod) ===
const PRICE_IDS = {
  abonnement: "price_1S59Fm6LX1cwJPas3s7oS1pm", // alias starter
  starter:    "price_1S59Fm6LX1cwJPas3s7oS1pm",
  pro:        "price_1S7z1B6LX1cwJPasibsPVll6",
} as const;

type PlanFront = keyof typeof PRICE_IDS; // 'abonnement' | 'starter' | 'pro'
type ServerPlan = "starter" | "pro";

function selectPayload(planType: PlanFront, successUrl?: string, cancelUrl?: string) {
  // Si tu préfères piloter par plan côté serveur (recommandé) :
  if (planType === "starter" || planType === "pro") {
    return {
      plan: planType as ServerPlan,
      successUrl: successUrl ?? `${window.location.origin}/success?plan=${planType}`,
      cancelUrl:  cancelUrl  ?? `${window.location.origin}/cancel`,
    };
  }
  // Sinon par priceId (ici 'abonnement' → starter)
  return {
    priceId: PRICE_IDS[planType],
    successUrl: successUrl ?? `${window.location.origin}/success?plan=${planType}`,
    cancelUrl:  cancelUrl  ?? `${window.location.origin}/cancel`,
  };
}

/**
 * Redirige l'utilisateur vers Stripe Checkout (prod).
 * - Vérifie que l'utilisateur Firebase est connecté
 * - Appelle la callable `createCheckout` (region us-central1)
 * - Redirige sur l'URL renvoyée par ton backend
 */
export async function redirectToCheckout(opts: {
  planType: PlanFront;            // 'abonnement' | 'starter' | 'pro'
  successUrl?: string;            // optionnel
  cancelUrl?: string;             // optionnel
}) {
  const user = auth.currentUser;
  if (!user) throw new Error("Veuillez vous connecter pour payer.");

  const functions = getFunctions(app, "us-central1");
  const createCheckout = httpsCallable(functions, "createCheckout");

  const payload = selectPayload(opts.planType, opts.successUrl, opts.cancelUrl);
  const { data } = await createCheckout(payload);

  const url = (data as any)?.url as string | undefined;
  if (!url) throw new Error("Réponse serveur invalide : URL manquante.");

  window.location.assign(url);
}

/**
 * Option utilitaire si tu veux juste récupérer l'URL sans redirection immédiate.
 */
export async function createCheckoutUrl(opts: {
  planType: PlanFront;
  successUrl?: string;
  cancelUrl?: string;
}): Promise<string> {
  const user = auth.currentUser;
  if (!user) throw new Error("Veuillez vous connecter pour payer.");

  const functions = getFunctions(app, "us-central1");
  const createCheckout = httpsCallable(functions, "createCheckout");

  const payload = selectPayload(opts.planType, opts.successUrl, opts.cancelUrl);
  const { data } = await createCheckout(payload);

  const url = (data as any)?.url as string | undefined;
  if (!url) throw new Error("Réponse serveur invalide : URL manquante.");
  return url;
}
