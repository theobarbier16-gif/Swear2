// Application constants
export const STRIPE_CONFIG = {
  // These will be set by your Firebase Functions
  PUBLISHABLE_KEY: process.env.NODE_ENV === 'production' 
    ? 'pk_live_...' // Your live publishable key
    : 'pk_test_...', // Your test publishable key
  
  // Your Firebase Functions URL
  FUNCTIONS_URL: 'https://us-central1-swear-30c84.cloudfunctions.net/stripeWebhook',
} as const;

export const PLANS = {
  FREE: {
    id: 'free',
    name: 'Gratuit',
    credits: 3,
    price: 0,
    features: [
      '3 transformations gratuites',
      'Qualité standard',
      'Support communautaire'
    ]
  },
  STARTER: {
    id: 'starter',
    name: 'Starter',
    credits: 25,
    price: 990, // in cents
    features: [
      '25 transformations par mois',
      'Qualité haute définition',
      'Support prioritaire',
      'Historique des créations'
    ]
  },
  PRO: {
    id: 'pro',
    name: 'Pro',
    credits: 150,
    price: 2290, // in cents
    features: [
      '150 transformations par mois',
      'Qualité ultra HD',
      'Support VIP 24/7',
      'API access',
      'Exports en lot'
    ]
  }
} as const;