// src/services/stripe.ts
import { getFunctions, httpsCallable } from "firebase/functions";
import app, { auth } from "../lib/firebase";

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
      successUrl: successUrl ?? `${window.location.origin}/success?plan=${planType}`,
      cancelUrl:  cancelUrl  ?? `${window.location.origin}/cancel`,
    };
  }
  return {
    priceId: PRICE_IDS[planType],
    successUrl: successUrl ?? `${window.location.origin}/success?plan=${planType}`,
    cancelUrl:  cancelUrl  ?? `${window.location.origin}/cancel`,
  };
}

async function redirectToCheckout(opts: { planType: PlanFront; successUrl?: string; cancelUrl?: string }) {
  if (!auth.currentUser) throw new Error("Veuillez vous connecter.");

  const functions = getFunctions(app, "us-central1");
  const createCheckout = httpsCallable(functions, "createCheckout");

  const payload = buildPayload(opts.planType, opts.successUrl, opts.cancelUrl);
  console.log("✅ USING httpsCallable(createCheckout) | payload =", payload);

  const { data } = await createCheckout(payload);

  const url = (data as any)?.url;
  if (!url) throw new Error("Réponse serveur invalide");
  window.location.assign(url);
}

async function createCheckoutUrl(opts: { planType: PlanFront; successUrl?: string; cancelUrl?: string }) {
  if (!auth.currentUser) throw new Error("Veuillez vous connecter.");

  const functions = getFunctions(app, "us-central1");
  const createCheckout = httpsCallable(functions, "createCheckout");

  const payload = buildPayload(opts.planType, opts.successUrl, opts.cancelUrl);
  console.log("✅ USING httpsCallable(createCheckout) | payload =", payload);

  const { data } = await createCheckout(payload);

  const url = (data as any)?.url;
  if (!url) throw new Error("Réponse serveur invalide");
  return url;
}

export const stripeService = { redirectToCheckout, createCheckoutUrl };
