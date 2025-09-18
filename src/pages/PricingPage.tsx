import React from 'react';
import { ArrowLeft, Check, Sparkles, Crown, Zap } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface PricingPageProps {
  onBack: () => void;
  userEmail?: string;
  currentUserEmail?: string | null;
}

const PricingPage: React.FC<PricingPageProps> = ({ onBack, userEmail, currentUserEmail }) => {
  const { user } = useAuth();
  
  // Déterminer le plan actuel
  const currentPlan = user?.subscription?.plan || 'free';
  const isAuthenticated = !!user;
  
  const plans = [
    {
      id: 'free',
      name: 'Gratuit',
      price: '0€',
      period: 'toujours',
      credits: 3,
      features: [
        '3 transformations gratuites',
        'Qualité standard',
        'Support communautaire'
      ],
      icon: Sparkles,
      color: 'bg-gray-500',
      popular: false
    },
    {
      id: 'starter',
      name: 'Starter',
      price: '9,90€',
      period: 'par mois',
      credits: 25,
      features: [
        '25 transformations par mois',
        'Qualité haute définition',
        'Support prioritaire',
        'Historique des créations'
      ],
      icon: Zap,
      color: 'bg-vinted-500',
      popular: true,
      stripeUrl: 'https://buy.stripe.com/test_fZucMYcHubsj23adLG2VG00'
    },
    {
      id: 'pro',
      name: 'Pro',
      price: '22,90€',
      period: 'par mois',
      credits: 150,
      features: [
        '150 transformations par mois',
        'Qualité ultra HD',
        'Support VIP 24/7',
        'API access',
        'Exports en lot'
      ],
      icon: Crown,
      color: 'bg-purple-500',
      popular: false,
      stripeUrl: 'https://buy.stripe.com/test_3cI14gdLy0NF37eePK2VG02'
    }
  ];

  const handlePlanSelection = (plan: typeof plans[0]) => {
    if (plan.id === 'free') {
      // Plan gratuit - pas d'action nécessaire
      return;
    }
    
    if (!plan.stripeUrl) {
      console.error('URL Stripe manquante pour le plan:', plan.id);
      alert('Erreur: URL de paiement non configurée');
      return;
    }
    
    console.log(`🔗 Redirection vers Stripe pour le plan ${plan.name}:`, plan.stripeUrl);
    
    // Construire l'URL avec l'email pré-rempli si l'utilisateur est connecté
    let stripeUrl = plan.stripeUrl;
    
    // Ajouter l'email de l'utilisateur connecté ou l'email fourni
    const emailToUse = user?.email || currentUserEmail || userEmail;
    if (emailToUse) {
      const separator = stripeUrl.includes('?') ? '&' : '?';
      stripeUrl = `${stripeUrl}${separator}prefilled_email=${encodeURIComponent(emailToUse)}`;
      console.log(`📧 Email pré-rempli: ${emailToUse}`);
    }
    
    console.log(`🔗 URL finale: ${stripeUrl}`);
    
    // Ouvrir Stripe dans un nouvel onglet pour éviter les problèmes de CORS/redirection
    window.open(stripeUrl, '_blank', 'noopener,noreferrer');
  };

  const getStripeUrl = (plan: typeof plans[0]) => {
    if (plan.id === 'free' || !plan.stripeUrl) {
      return '#';
    }
    
    let stripeUrl = plan.stripeUrl;
    
    // Ajouter l'email de l'utilisateur connecté ou l'email fourni
    const emailToUse = user?.email || currentUserEmail || userEmail;
    if (emailToUse) {
      const separator = stripeUrl.includes('?') ? '&' : '?';
      stripeUrl = `${stripeUrl}${separator}prefilled_email=${encodeURIComponent(emailToUse)}`;
    }
    
    return stripeUrl;
  };

  const handleFreePlanClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Plan gratuit - pas d'action nécessaire
  };

  const handleDisabledClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Plan actuel - empêcher la navigation
  };
  const getButtonText = (plan: typeof plans[0]) => {
    if (plan.id === currentPlan) {
      return 'Plan actuel';
    }
    
    if (plan.id === 'free') {
      return 'Plan gratuit';
    }
    
    if (isAuthenticated && user?.hasPaid && currentPlan !== 'free') {
      return `Passer au plan ${plan.name}`;
    }
    
    return `Choisir ${plan.name}`;
  };

  const isButtonDisabled = (plan: typeof plans[0]) => {
    return plan.id === currentPlan;
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

      <div className="relative z-10 min-h-screen">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          {/* Back Button */}
          <button
            onClick={onBack}
            className="flex items-center text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour
          </button>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Choisissez Votre Plan
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow">
              Transformez vos photos mode avec l'IA et boostez vos ventes sur Vinted
            </p>
            
            {/* User Status */}
            {isAuthenticated && (
              <div className="mt-6 p-4 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 max-w-md mx-auto">
                <p className="text-white font-medium">
                  Connecté en tant que {user?.firstName}
                </p>
                <p className="text-white/80 text-sm">
                  Plan actuel: {currentPlan === 'free' ? 'Gratuit' : currentPlan === 'starter' ? 'Starter' : 'Pro'}
                  {user?.hasPaid && (
                    <span className="ml-2">
                      • {user.subscription?.creditsRemaining || 0} crédits restants
                    </span>
                  )}
                </p>
                {isAuthenticated && user?.hasPaid && currentPlan !== 'free' && (
                  <p className="text-white/70 text-xs mt-2">
                    💡 Changer de plan annulera automatiquement votre abonnement actuel
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => {
              const Icon = plan.icon;
              const isCurrentPlan = plan.id === currentPlan;
              const disabled = isButtonDisabled(plan);
              
              return (
                <div
                  key={plan.id}
                  className={`
                    relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border-2 transition-all duration-300 hover:scale-105
                    ${plan.popular 
                      ? 'border-white shadow-2xl ring-2 ring-white/30' 
                      : 'border-white/20 hover:border-white/40'
                    }
                    ${isCurrentPlan ? 'ring-2 ring-green-400 bg-green-500/10' : ''}
                  `}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-white text-vinted-500 px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                        ⭐ Populaire
                      </div>
                    </div>
                  )}

                  {/* Current Plan Badge */}
                  {isCurrentPlan && (
                    <div className="absolute -top-4 right-4">
                      <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg flex items-center">
                        <Check className="w-3 h-3 mr-1" />
                        Actuel
                      </div>
                    </div>
                  )}

                  <div className="text-center">
                    {/* Icon */}
                    <div className={`w-16 h-16 ${plan.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Plan Name */}
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>

                    {/* Price */}
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-white/80 ml-2">/{plan.period}</span>
                    </div>

                    {/* Credits */}
                    <div className="mb-6 p-3 bg-white/10 rounded-lg">
                      <span className="text-white font-medium text-lg">
                        {plan.credits} transformations
                      </span>
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-white/90">
                          <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    {plan.id === 'free' ? (
                      <a
                        href="#"
                        onClick={handleFreePlanClick}
                        className="w-full py-3 px-6 rounded-xl font-medium transition-all duration-200 shadow-lg bg-white/20 text-white border-2 border-white/30 hover:bg-white/30 hover:border-white/50 hover:scale-105 inline-block text-center cursor-pointer"
                      >
                        {getButtonText(plan)}
                      </a>
                    ) : disabled ? (
                      <a
                        href="#"
                        onClick={handleDisabledClick}
                        className="w-full py-3 px-6 rounded-xl font-medium transition-all duration-200 shadow-lg bg-green-500 text-white cursor-not-allowed opacity-75 inline-block text-center"
                      >
                        {getButtonText(plan)}
                      </a>
                    ) : (
                      <a
                        href={getStripeUrl(plan)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`
                          w-full py-3 px-6 rounded-xl font-medium transition-all duration-200 shadow-lg inline-block text-center
                          ${plan.popular
                            ? 'bg-white text-vinted-500 hover:bg-white/90 hover:scale-105'
                            : 'bg-white/20 text-white border-2 border-white/30 hover:bg-white/30 hover:border-white/50 hover:scale-105'
                          }
                        `}
                      >
                        {getButtonText(plan)}
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* FAQ Section */}
          <div className="mt-16 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8">Questions Fréquentes</h2>
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="font-semibold text-white mb-2">Puis-je changer de plan à tout moment ?</h3>
                <p className="text-white/80 text-sm">
                  Oui, vous pouvez upgrader ou downgrader votre plan à tout moment. 
                  L'ancien abonnement sera automatiquement annulé.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="font-semibold text-white mb-2">Que se passe-t-il si je n'utilise pas tous mes crédits ?</h3>
                <p className="text-white/80 text-sm">
                  Les crédits non utilisés ne sont pas reportés au mois suivant. 
                  Choisissez le plan qui correspond à votre utilisation mensuelle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;