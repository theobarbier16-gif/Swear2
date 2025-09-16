import React from 'react';
import { ArrowLeft, Check, Crown, Zap } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface PricingPageProps {
  onBack: () => void;
  userEmail?: string;
  currentUserEmail?: string;
}

const PricingPage: React.FC<PricingPageProps> = ({ onBack, userEmail, currentUserEmail }) => {
  const { user } = useAuth();
  
  // Déterminer le plan actuel de l'utilisateur
  const currentPlan = user?.subscription?.plan || 'free';
  const creditsRemaining = user?.subscription?.creditsRemaining || 3;
  const maxCredits = user?.subscription?.maxCredits || 3;

  const plans = [
    {
      id: 'free',
      name: 'Plan Gratuit',
      price: '0€',
      period: 'gratuit',
      credits: 3,
      features: [
        '3 crédits gratuits',
        'Qualité standard',
        'Support communautaire'
      ],
      color: 'gray',
      popular: false
    },
    {
      id: 'starter',
      name: 'Plan Starter',
      price: '9,90€',
      period: 'par mois',
      credits: 25,
      features: [
        '25 crédits par mois',
        'Qualité HD',
        'Support prioritaire',
        'Historique des créations'
      ],
      color: 'blue',
      popular: true
    },
    {
      id: 'pro',
      name: 'Plan Pro',
      price: '22,90€',
      period: 'par mois',
      credits: 150,
      features: [
        '150 crédits par mois',
        'Qualité Ultra HD',
        'Support VIP 24/7',
        'API Access',
        'Exports en masse'
      ],
      color: 'purple',
      popular: false
    }
  ];

  const handleSelectPlan = (planId: string) => {
    if (planId === 'free') {
      // Le plan gratuit est automatique
      return;
    }

    // Rediriger vers Stripe Checkout avec l'email pré-rempli
    const email = currentUserEmail || userEmail || '';
    const stripeUrl = `https://buy.stripe.com/test_your_link_here?prefilled_email=${encodeURIComponent(email)}`;
    window.open(stripeUrl, '_blank');
  };

  const isCurrentPlan = (planId: string) => {
    if (planId === 'free') {
      return !user?.hasPaid || currentPlan === 'free';
    }
    return user?.hasPaid && currentPlan === planId;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-vinted-500 via-vinted-400 to-vinted-600 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-white/8 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="container mx-auto px-4 py-8">
          <button
            onClick={onBack}
            className="flex items-center text-white/80 hover:text-white transition-colors duration-200 mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour
          </button>

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Choisissez votre plan
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Transformez vos photos en œuvres d'art avec notre IA avancée
            </p>
          </div>
        </div>

        {/* Plans */}
        <div className="container mx-auto px-4 pb-16">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => {
              const isCurrent = isCurrentPlan(plan.id);
              
              return (
                <div
                  key={plan.id}
                  className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-yellow-400/50 shadow-2xl shadow-yellow-400/20'
                      : 'border-white/20'
                  } ${
                    isCurrent
                      ? 'ring-2 ring-green-400 bg-green-500/10'
                      : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Crown className="w-4 h-4 mr-1" />
                        Populaire
                      </div>
                    </div>
                  )}

                  {isCurrent && (
                    <div className="absolute -top-4 right-4">
                      <div className="bg-green-400 text-black px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Check className="w-4 h-4 mr-1" />
                        Actuel
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      {plan.period !== 'gratuit' && (
                        <span className="text-white/60 ml-2">/{plan.period}</span>
                      )}
                    </div>
                    <div className="text-white/80">
                      <span className="font-semibold">{plan.credits} crédits</span>
                      {isCurrent && plan.id !== 'free' && (
                        <div className="text-sm mt-1">
                          <span className="text-green-400">{creditsRemaining} restants</span> / {maxCredits}
                        </div>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-white/90">
                        <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleSelectPlan(plan.id)}
                    disabled={isCurrent}
                    className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-200 ${
                      isCurrent
                        ? 'bg-green-500/20 text-green-400 cursor-not-allowed border border-green-400/30'
                        : plan.popular
                        ? 'bg-yellow-400 text-black hover:bg-yellow-300 shadow-lg hover:shadow-xl'
                        : 'bg-white/20 text-white hover:bg-white/30 border border-white/30'
                    }`}
                  >
                    {isCurrent ? 'Plan actuel' : plan.id === 'free' ? 'Plan gratuit' : 'Choisir ce plan'}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Credits Info */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6 text-center flex items-center justify-center">
                <Zap className="w-6 h-6 mr-2 text-yellow-400" />
                Comment fonctionnent les crédits ?
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-white">3</div>
                  <div className="text-white/80">Crédits gratuits</div>
                  <div className="text-sm text-white/60">Plan Gratuit</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-yellow-400">25</div>
                  <div className="text-white/80">Crédits mensuels</div>
                  <div className="text-sm text-white/60">Plan Starter</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-purple-400">150</div>
                  <div className="text-white/80">Crédits mensuels</div>
                  <div className="text-sm text-white/60">Plan Pro</div>
                </div>
              </div>
              
              <div className="mt-6 text-center text-white/70 text-sm">
                1 crédit = 1 transformation d'image • Les crédits se renouvellent chaque mois
              </div>
            </div>
          </div>

          {/* Test Mode Warning */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center px-4 py-2 bg-orange-500/20 border border-orange-400/30 rounded-lg text-orange-200 text-sm">
              ⚠️ Mode test Stripe - Aucun paiement réel ne sera effectué
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;