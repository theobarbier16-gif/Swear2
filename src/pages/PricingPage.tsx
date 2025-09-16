import React, { useState } from 'react';
import { Check, Crown, Zap } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const PricingPage: React.FC = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState<string | null>(null);

  const plans = [
    {
      id: 'free',
      name: 'Plan Gratuit',
      price: '0€',
      period: '/mois',
      credits: 3,
      features: [
        'Transformations de base',
        'Qualité standard',
        'Support communautaire',
        'Accès aux fonctionnalités essentielles'
      ],
      buttonText: 'Plan actuel',
      buttonVariant: 'secondary' as const,
      popular: false,
      icon: Zap
    },
    {
      id: 'starter',
      name: 'Plan Starter',
      price: '9,90€',
      period: '/mois',
      credits: 25,
      features: [
        'Transformations avancées',
        'Qualité haute résolution',
        'Support prioritaire',
        'Nouvelles fonctionnalités en avant-première',
        'Historique des transformations'
      ],
      buttonText: 'S\'abonner maintenant',
      buttonVariant: 'primary' as const,
      popular: true,
      icon: Crown,
      stripeLink: 'https://buy.stripe.com/test_4gw28k5b60NF0Z2bIJ'
    },
    {
      id: 'pro',
      name: 'Plan Pro',
      price: '22,90€',
      period: '/mois',
      credits: 150,
      features: [
        'Transformations illimitées',
        'Qualité ultra haute résolution',
        'Support prioritaire 24/7',
        'API access',
        'Intégrations personnalisées',
        'Analytics avancés'
      ],
      buttonText: 'S\'abonner maintenant',
      buttonVariant: 'primary' as const,
      popular: false,
      icon: Crown,
      stripeLink: 'https://buy.stripe.com/test_3cI14gdLy0NF37eePK2VG02'
    }
  ];

  const handleSubscribe = async (plan: typeof plans[0]) => {
    if (plan.id === 'free') return;
    
    setLoading(plan.id);
    
    try {
      // Construire l'URL Stripe avec l'email pré-rempli si disponible
      let stripeUrl = plan.stripeLink;
      
      if (user?.email && stripeUrl) {
        const url = new URL(stripeUrl);
        url.searchParams.set('prefilled_email', user.email);
        stripeUrl = url.toString();
      }
      
      // Rediriger vers Stripe
      if (stripeUrl) {
        window.location.href = stripeUrl;
      }
    } catch (error) {
      console.error('Erreur lors de la redirection vers Stripe:', error);
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Choisissez votre plan
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transformez vos images avec nos outils puissants. Commencez gratuitement ou choisissez un plan adapté à vos besoins.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.id}
                className={`relative bg-white rounded-2xl shadow-xl p-8 ${
                  plan.popular ? 'ring-2 ring-indigo-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Populaire
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-indigo-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-500 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-indigo-600 font-semibold mt-2">
                    {plan.credits} crédits par mois
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleSubscribe(plan)}
                  disabled={loading === plan.id || plan.id === 'free'}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    plan.buttonVariant === 'primary'
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 text-gray-500 cursor-not-allowed'
                  } ${loading === plan.id ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {loading === plan.id ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Redirection...
                    </div>
                  ) : (
                    plan.buttonText
                  )}
                </button>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            Tous les plans incluent une garantie de remboursement de 30 jours
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;