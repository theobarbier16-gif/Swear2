import React, { useState } from 'react';
import { ArrowLeft, Check, Crown, Sparkles } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface PricingPageProps {
  onBack: () => void;
}

const PricingPage: React.FC<PricingPageProps> = ({ onBack }) => {
  const { user } = useAuth();
  const [loading, setLoading] = useState<string | null>(null);

  const plans = [
    {
      id: 'free',
      name: 'Gratuit',
      price: '0€',
      period: '/mois',
      credits: 3,
      features: [
        'Transformations de base',
        'Qualité standard',
        'Support communautaire'
      ],
      buttonText: 'Plan actuel',
      buttonDisabled: true,
      popular: false
    },
    {
      id: 'starter',
      name: 'Starter',
      price: '9,90€',
      period: '/mois',
      credits: 25,
      features: [
        'Transformations avancées',
        'Qualité haute résolution',
        'Support prioritaire',
        'Nouvelles fonctionnalités'
      ],
      buttonText: 'S\'abonner maintenant',
      buttonDisabled: false,
      popular: true,
      stripeUrl: 'https://buy.stripe.com/test_4gw28k5b60NF0Z2bIJ'
    },
    {
      id: 'pro',
      name: 'Pro',
      price: '22,90€',
      period: '/mois',
      credits: 150,
      features: [
        'Transformations illimitées',
        'Qualité ultra haute résolution',
        'Support prioritaire 24/7',
        'Nouvelles fonctionnalités en avant-première',
        'API Access'
      ],
      buttonText: 'S\'abonner maintenant',
      buttonDisabled: false,
      popular: false,
      stripeUrl: 'https://buy.stripe.com/test_3cI14gdLy0NF37eePK'
    }
  ];

  const handleSubscribe = async (plan: typeof plans[0]) => {
    if (!plan.stripeUrl || !user?.email) return;

    setLoading(plan.id);
    
    try {
      // Redirection directe vers Stripe avec l'email pré-rempli
      const url = `${plan.stripeUrl}?prefilled_email=${encodeURIComponent(user.email)}`;
      window.location.href = url;
    } catch (error) {
      console.error('Erreur lors de la redirection:', error);
      setLoading(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-vinted-500 via-vinted-400 to-vinted-600 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-white/8 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-vinted-600/20 to-transparent"></div>
      </div>

      <div className="relative z-10 min-h-screen p-4">
        {/* Header */}
        <div className="max-w-6xl mx-auto">
          <button
            onClick={onBack}
            className="flex items-center text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour
          </button>

          {/* Logo */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="p-3 bg-white rounded-xl shadow-lg">
                <Sparkles className="w-8 h-8 text-vinted-500" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">Swear</h1>
                <p className="text-white/80">Photos Mode Professionnelles</p>
              </div>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">Choisissez votre plan</h2>
            <p className="text-xl text-white/80">Transformez vos photos avec l'IA</p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-yellow-400/50 ring-2 ring-yellow-400/30' 
                    : 'border-white/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center">
                      <Crown className="w-4 h-4 mr-1" />
                      Populaire
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-white/60 ml-1">{plan.period}</span>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3 mb-6">
                    <span className="text-2xl font-bold text-white">{plan.credits}</span>
                    <span className="text-white/80 ml-2">crédits</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-white">
                      <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleSubscribe(plan)}
                  disabled={plan.buttonDisabled || loading === plan.id}
                  className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 ${
                    plan.buttonDisabled
                      ? 'bg-white/20 text-white/50 cursor-not-allowed'
                      : plan.popular
                      ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:from-yellow-500 hover:to-orange-600 shadow-lg hover:shadow-xl'
                      : 'bg-white text-vinted-600 hover:bg-white/90 shadow-lg hover:shadow-xl'
                  } ${loading === plan.id ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {loading === plan.id ? 'Redirection...' : plan.buttonText}
                </button>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="text-center mt-12">
            <p className="text-white/60">
              Tous les plans incluent un accès complet à nos outils d'IA
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;