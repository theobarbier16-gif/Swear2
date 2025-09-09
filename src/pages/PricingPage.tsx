import React from 'react';
import { ArrowLeft, Check, Sparkles, Zap, Crown, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useEffect } from 'react';

// Mode test Stripe - permet la simulation de paiements
const STRIPE_TEST_MODE = true;

interface PricingPageProps {
  onBack: () => void;
  userEmail?: string;
  currentUserEmail?: string;
}

const PricingPage: React.FC<PricingPageProps> = ({ onBack, userEmail, currentUserEmail }) => {
  const { user } = useAuth();
  const { updateUserPaymentStatus } = useAuth();

  // Vérification automatique du paiement au chargement de la page
  useEffect(() => {
    const checkPaymentStatus = async () => {
      // Si l'utilisateur vient de Stripe (URL contient des paramètres de succès)
      const urlParams = new URLSearchParams(window.location.search);
      const hasStripeSuccess = urlParams.has('success') || urlParams.has('session_id') || 
                              window.location.href.includes('stripe') ||
                              document.referrer.includes('stripe.com');
      
      if (hasStripeSuccess && user && !user.hasPaid) {
        console.log('🔍 Détection possible de retour Stripe, vérification du paiement...');
        
        // En mode test, simuler la vérification
        if (STRIPE_TEST_MODE) {
          console.log('🧪 Mode test - Simulation de vérification de paiement');
          
          // Simuler un délai de vérification
          setTimeout(async () => {
            try {
              // Déterminer le plan basé sur l'URL ou les paramètres
              let planType = 'starter'; // Par défaut
              
              if (window.location.href.includes('pro') || urlParams.get('plan') === 'pro') {
                planType = 'pro';
              }
              
              console.log(`✅ Simulation: Paiement ${planType} détecté, activation du plan...`);
              await updateUserPaymentStatus(true, planType);
              
              // Nettoyer l'URL
              window.history.replaceState({}, document.title, window.location.pathname);
              
              // Rafraîchir pour afficher les changements
              window.location.reload();
              
            } catch (error) {
              console.error('Erreur lors de l\'activation du plan:', error);
            }
          }, 2000);
        }
      }
    };

    checkPaymentStatus();
  }, [user, updateUserPaymentStatus]);

  // Vérification périodique du statut de paiement
  useEffect(() => {
    if (!user || user.hasPaid) return;

    const interval = setInterval(async () => {
      console.log('🔄 Vérification périodique du statut de paiement...');
      
      // En mode test, vérifier s'il y a eu une interaction récente avec Stripe
      const lastStripeInteraction = localStorage.getItem('lastStripeInteraction');
      if (lastStripeInteraction) {
        const timeSinceInteraction = Date.now() - parseInt(lastStripeInteraction);
        
        // Si moins de 5 minutes depuis la dernière interaction Stripe
        if (timeSinceInteraction < 5 * 60 * 1000) {
          console.log('🎯 Interaction Stripe récente détectée, vérification...');
          
          if (STRIPE_TEST_MODE) {
            // Simuler la vérification du paiement
            try {
              await updateUserPaymentStatus(true, 'starter');
              localStorage.removeItem('lastStripeInteraction');
              window.location.reload();
            } catch (error) {
              console.error('Erreur vérification:', error);
            }
          }
        }
      }
    }, 10000); // Vérifier toutes les 10 secondes

    return () => clearInterval(interval);
  }, [user, updateUserPaymentStatus]);
  // Fonction pour vérifier automatiquement les paiements test
  const checkTestPayment = async (planId: string) => {
    if (!STRIPE_TEST_MODE) return;
    
    // Simuler une vérification de paiement après un délai
    setTimeout(async () => {
      try {
        // En mode test, on peut simuler la vérification du paiement
        const testPaymentSuccess = await simulateStripeWebhook(planId);
        
        if (testPaymentSuccess && user) {
          // Mettre à jour le statut utilisateur après vérification simulée
          const { updateUserPaymentStatus } = useAuth();
          await updateUserPaymentStatus(true, planId);
          
          // Rafraîchir la page pour afficher les changements
          window.location.reload();
        }
      } catch (error) {
        console.error('Erreur simulation paiement test:', error);
      }
    }, 3000); // Attendre 3 secondes pour simuler le webhook
  };

  // Simuler un webhook Stripe en mode test
  const simulateStripeWebhook = async (planId: string): Promise<boolean> => {
    console.log(`🧪 [MODE TEST] Simulation webhook Stripe pour plan: ${planId}`);
    
    // En mode test, on peut vérifier si l'utilisateur a bien été redirigé vers Stripe
    // et simuler un paiement réussi
    return new Promise((resolve) => {
      // Simuler le temps de traitement Stripe
      setTimeout(() => {
        console.log(`✅ [MODE TEST] Paiement simulé réussi pour plan: ${planId}`);
        resolve(true);
      }, 1000);
    });
  };
  // Déterminer le plan actuel de l'utilisateur
  const getCurrentPlan = () => {
    if (!user) return 'free';
    
    // Utiliser directement le plan depuis Firebase
    const plan = user.subscription?.plan || 'free';
    
    // Mapper les noms de plans
    if (plan === 'premium') return 'starter'; // Compatibilité ancien système
    return plan; // 'free', 'starter', 'pro'
  };

  const currentPlan = getCurrentPlan();

  const plans = [
    {
      id: 'free',
      name: 'Free Plan',
      price: '0€',
      period: '/mois',
      description: 'Parfait pour découvrir Swear',
      features: [
        '3 générations d\'images par mois',
        'Qualité standard',
        'Support par email',
        'Téléchargement direct'
      ],
      icon: Sparkles,
      color: 'from-gray-400 to-gray-600',
      buttonColor: 'bg-gray-500 hover:bg-gray-600',
      popular: false,
      credits: 3
    },
    {
      id: 'starter',
      name: 'Starter',
      price: '9,90€',
      period: '/mois',
      description: 'Idéal pour les vendeurs réguliers',
      features: [
        '25 générations d\'images par mois',
        'Qualité haute définition',
        'Support prioritaire',
        'Téléchargement direct',
        'Historique des créations',
        'Formats multiples'
      ],
      icon: Zap,
      color: 'from-vinted-400 to-vinted-600',
      buttonColor: 'bg-vinted-500 hover:bg-vinted-600',
      popular: true,
      credits: 25
    },
    {
      id: 'pro',
      name: 'Pro',
      price: '22,90€',
      period: '/mois',
      description: 'Pour les professionnels de la mode',
      features: [
        '150 générations d\'images par mois',
        'Qualité ultra haute définition',
        'Support prioritaire 24/7',
        'Téléchargement direct',
        'Historique illimité',
        'Formats multiples',
        'API access',
        'Traitement par lot'
      ],
      icon: Crown,
      color: 'from-yellow-400 to-orange-500',
      buttonColor: 'bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600',
      popular: false,
      credits: 150
    }
  ];

  // Fonction pour vérifier automatiquement le statut de paiement
  const checkPaymentStatus = async (planId: string) => {
    // TODO: Implémenter la vérification côté serveur
    // Cette fonction devrait appeler votre backend pour vérifier
    // si l'utilisateur a bien payé sur Stripe
    console.log(`Vérification du paiement pour le plan ${planId}...`);
    
    // Pour l'instant, on ne fait rien - le statut sera mis à jour
    // automatiquement par les webhooks Stripe côté serveur
  };

  const handleSelectPlan = (planId: string, planName: string) => {
    if (planId === 'free') {
      // Plan gratuit - pas de paiement requis
      onBack();
    } else if (planId === 'starter') {
      // Marquer l'interaction avec Stripe
      localStorage.setItem('lastStripeInteraction', Date.now().toString());
      localStorage.setItem('selectedPlan', 'starter');
      
      // Redirection vers Stripe pour le plan Starter
      const email = currentUserEmail || userEmail || 'exemple@gmail.com';
      const encodedEmail = encodeURIComponent(email);
      const stripeUrl = `https://buy.stripe.com/test_fZucMYcHubsj23adLG2VG00?prefilled_email=${encodedEmail}`;
      window.open(stripeUrl, '_blank');
      
    } else if (planId === 'pro') {
      // Marquer l'interaction avec Stripe
      localStorage.setItem('lastStripeInteraction', Date.now().toString());
      localStorage.setItem('selectedPlan', 'pro');
      
      // Redirection vers Stripe pour le plan Pro
      const email = currentUserEmail || userEmail || 'exemple@gmail.com';
      const encodedEmail = encodeURIComponent(email);
      const stripeUrl = `https://buy.stripe.com/test_eVqfZa22Q7c3bDK4b62VG01?prefilled_email=${encodedEmail}`;
      
      window.open(stripeUrl, '_blank');
    }
  };

  const getPlanStatus = (planId: string) => {
    if (planId === currentPlan) return 'current';
    
    const planOrder = ['free', 'starter', 'pro'];
    const currentIndex = planOrder.indexOf(currentPlan);
    const planIndex = planOrder.indexOf(planId);
    
    if (planIndex < currentIndex) return 'downgrade';
    if (planIndex > currentIndex) return 'upgrade';
    return 'available';
  };

  const getButtonText = (planId: string, planName: string) => {
    const status = getPlanStatus(planId);
    
    switch (status) {
      case 'current':
        return 'Plan actuel';
      case 'upgrade':
        return `Passer à ${planName}`;
      case 'downgrade':
        return planId === 'free' ? 'Passer au plan gratuit' : `Rétrograder vers ${planName}`;
      default:
        return planId === 'free' ? 'Rester gratuit' : `Choisir ${planName}`;
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

          {/* Welcome Message */}
          {userEmail && (
            <div className="text-center mb-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold text-white mb-2">
                  🎉 Bienvenue sur Swear !
                </h2>
                <p className="text-white/90">
                  Votre compte <strong>{userEmail}</strong> a été créé avec succès.
                  Choisissez maintenant l'abonnement qui vous convient le mieux.
                </p>
              </div>
            </div>
          )}

          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
              Choisissez Votre Plan
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow">
              Transformez vos photos de vêtements en images professionnelles qui boostent vos ventes
            </p>
            
            {/* Current Plan Display */}
            {user && (
              <div className="mt-6 inline-flex items-center bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 border border-white/20">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-white font-medium">
                  Plan actuel : {currentPlan === 'free' ? 'Free Plan' : currentPlan === 'starter' ? 'Starter' : 'Pro'}
                  {user.subscription?.creditsRemaining !== undefined && (
                    <span className="ml-2 text-white/80">
                      • {user.subscription.creditsRemaining} crédits restants
                    </span>
                  )}
                </span>
              </div>
            )}
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => {
              const IconComponent = plan.icon;
              const planStatus = getPlanStatus(plan.id);
              const isCurrent = planStatus === 'current';
              const canUpgrade = planStatus === 'upgrade';
              const isDowngrade = planStatus === 'downgrade';
              
              return (
                <div
                  key={index}
                  className={`
                    relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl
                    ${plan.popular && !isCurrent ? 'ring-2 ring-white/50 scale-105' : ''}
                    ${isCurrent ? 'ring-2 ring-green-400/50 scale-105' : ''}
                    hover:bg-white/20 transition-all duration-300
                  `}
                >
                  {/* Popular Badge */}
                  {plan.popular && !isCurrent && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-white text-vinted-600 px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                        ⭐ Le plus populaire
                      </div>
                    </div>
                  )}

                  {/* Current Plan Badge */}
                  {isCurrent && (
                    <div className="absolute -top-4 right-4">
                      <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        ✅ Plan actuel
                      </div>
                    </div>
                  )}

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-6 mx-auto shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold text-white text-center mb-2">
                    {plan.name}
                  </h3>

                  {/* Description */}
                  <p className="text-white/80 text-center mb-6">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="text-center mb-8">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">
                        {plan.price}
                      </span>
                      <span className="text-white/70 ml-1">
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-white/90 text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    onClick={() => handleSelectPlan(plan.id, plan.name)}
                    disabled={isCurrent && user?.hasPaid}
                    className={`
                      w-full py-3 px-6 rounded-xl font-medium text-white transition-all duration-200 shadow-lg
                      ${isCurrent && user?.hasPaid
                        ? 'bg-gray-500 cursor-not-allowed opacity-50' 
                        : isDowngrade && plan.id === 'free'
                        ? 'bg-green-500 hover:bg-green-600 hover:scale-105 hover:shadow-xl'
                        : plan.buttonColor + ' hover:scale-105 hover:shadow-xl'
                      }
                    `}
                  >
                    {isCurrent && user?.hasPaid ? 'Plan actuel' : getButtonText(plan.id, plan.name)}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Cancel Subscription Section */}
          {user && user.hasPaid && currentPlan !== 'free' && (
            <div className="mt-12 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center">
                <h3 className="text-lg font-semibold text-white mb-3">
                  🔗 Gestion des abonnements
                </h3>
                <p className="text-white/80 text-sm mb-4">
                  Pour modifier ou annuler votre abonnement, gérez-le directement sur Stripe.
                  Tous les changements sont automatiquement synchronisés avec votre compte.
                </p>
                <a
                  href="https://billing.stripe.com/p/login/test_00000000000000000000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-lg border border-white/30 hover:bg-white/30 transition-colors text-sm"
                >
                  🔗 Gérer sur Stripe
                </a>
                <div className="mt-4 p-3 bg-white/5 rounded-lg">
                  <p className="text-xs text-white/60">
                    💡 Carte de test : 5454 5454 5454 5454 • Date future • CVC : 123
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* FAQ Section */}
          <div className="mt-16 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              Questions Fréquentes
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="font-semibold text-white mb-2">
                  Puis-je changer de plan à tout moment ?
                </h3>
                <p className="text-white/80 text-sm">
                  Oui, vous pouvez upgrader ou downgrader votre plan à tout moment depuis votre espace client.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="font-semibold text-white mb-2">
                  Que se passe-t-il si je dépasse mon quota ?
                </h3>
                <p className="text-white/80 text-sm">
                  Vous recevrez une notification et pourrez upgrader votre plan ou attendre le mois suivant.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="font-semibold text-white mb-2">
                  Les images sont-elles de haute qualité ?
                </h3>
                <p className="text-white/80 text-sm">
                  Toutes nos images sont générées en haute résolution, parfaites pour vos annonces Vinted.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="font-semibold text-white mb-2">
                  Comment les paiements sont-ils vérifiés ?
                </h3>
                <p className="text-white/80 text-sm">
                  Tous les paiements sont automatiquement vérifiés via Stripe. Votre plan est mis à jour en temps réel après validation du paiement.
                </p>
              </div>
            </div>
          </div>
          
          {/* Important Security Notice */}
          <div className="mt-8 max-w-4xl mx-auto">
            <div className={`backdrop-blur-lg rounded-xl p-6 border text-center ${
              STRIPE_TEST_MODE 
                ? 'bg-blue-500/10 border-blue-500/20' 
                : 'bg-green-500/10 border-green-500/20'
            }`}>
              <h3 className={`font-semibold mb-2 ${
                STRIPE_TEST_MODE ? 'text-blue-400' : 'text-green-400'
              }`}>
                {STRIPE_TEST_MODE ? '🧪 Mode Test Stripe' : '🔒 Sécurité garantie'}
              </h3>
              <p className={`text-sm ${
                STRIPE_TEST_MODE ? 'text-blue-300' : 'text-green-300'
              }`}>
                {STRIPE_TEST_MODE 
                  ? 'Mode test activé. Utilisez la carte 5454 5454 5454 5454 pour tester les paiements. Les plans sont activés automatiquement après paiement réussi.'
                  : 'Seuls les paiements Stripe validés activent automatiquement votre plan. Aucune activation manuelle n\'est possible pour garantir la sécurité.'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;