import { useState } from 'react';
import { stripeService, CreateCheckoutSessionRequest } from '../services/stripe';

export const useStripe = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createCheckoutSession = async (request: CreateCheckoutSessionRequest) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const session = await stripeService.createCheckoutSession(request);
      return session;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Une erreur est survenue';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const redirectToCheckout = async (request: CreateCheckoutSessionRequest) => {
    setIsLoading(true);
    setError(null);
    
    try {
      await stripeService.redirectToCheckout(request);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Une erreur est survenue';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const clearError = () => setError(null);

  return {
    createCheckoutSession,
    redirectToCheckout,
    isLoading,
    error,
    clearError,
  };
};