import React from 'react';
import { ArrowLeft, Check, Sparkles, Zap, Crown, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface PricingPageProps {
  onBack: () => void;
  userEmail?: string;
  currentUserEmail?: string;
}

const PricingPage: React.FC<PricingPageProps> = ({ onBack, userEmail, currentUserEmail }) => {
  const { updateUserPaymentStatus, user } = useAuth();

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

  const handleCancelSubscription = () => {
    if (window.confirm('⚠️ Êtes-vous sûr de vouloir annuler votre abonnement ?\n\n• Vous perdrez l\'accès aux fonctionnalités premium\n• Vous n\'aurez plus que 3 générations par mois\n• Votre abonnement payant sera annulé chez Stripe\n\nCette action nécessite une confirmation par email.')) {
      // TODO: Implémenter l'annulation Stripe côté serveur
      handleStripeSubscriptionCancellation();
    }
  };

  const handleStripeSubscriptionCancellation = async () => {
    try {
      // Pour l'instant, on simule l'annulation
      // Dans un vrai environnement, ceci devrait appeler votre backend
      
      alert('🔄 Annulation en cours...\n\n' +
            '📧 Un email de confirmation vous sera envoyé\n' +
            '💳 Stripe arrêtera automatiquement les prélèvements\n' +
            '⏰ L\'annulation prendra effet à la fin de votre période de facturation actuelle\n\n' +
            '⚠️ IMPORTANT: Pour une vraie annulation Stripe, vous devez :\n' +
            '1. Aller sur votre tableau de bord Stripe\n' +
            '2. Annuler manuellement l\'abonnement\n' +
            '3. Ou implémenter un webhook d\'annulation côté serveur');
      
      // Simulation de l'annulation locale (à remplacer par un vrai appel API)
      updateUserPaymentStatus(false, 'free');
      
    } catch (error) {
      console.error('Erreur lors de l\'annulation:', error);
      alert('❌ Erreur lors de l\'annulation. Veuillez contacter le support ou annuler directement via Stripe.');
    }
  };

  const handleSelectPlan = (planId: string, planName: string) => {
    // Empêcher l'achat du même plan
    if (planId === currentPlan && user?.hasPaid) {
      alert('✅ Vous êtes déjà abonné à ce plan !\n\nVotre abonnement est actif et vous avez accès à toutes les fonctionnalités.');
      return;
    }
    
    if (planId === 'free') {
      // L'utilisateur veut passer/rester sur le plan gratuit
      if (user && user.hasPaid) {
        // Confirmation pour la rétrogradation vers gratuit
        if (window.confirm('⚠️ Êtes-vous sûr de vouloir passer au plan gratuit ?\n\n• Vous perdrez l\'accès aux fonctionnalités premium\n• Vous n\'aurez plus que 3 générations par mois\n• Votre abonnement payant sera annulé\n\nCette action est immédiate et gratuite.')) {
          updateUserPaymentStatus(false, 'free');
          alert('✅ Vous êtes maintenant sur le plan gratuit. Aucun paiement ne sera prélevé.');
          onBack();
        }
      } else {
        // L'utilisateur est déjà sur le plan gratuit
        onBack();
      }
    } else if (planId === 'starter') {
      // Rediriger vers Stripe avec l'email de l'utilisateur
      const email = currentUserEmail || userEmail || 'exemple@gmail.com';
      const encodedEmail = encodeURIComponent(email);
      const stripeUrl = `https://buy.stripe.com/test_fZucMYcHubsj23adLG2VG00?prefilled_email=${encodedEmail}`;
      window.open(stripeUrl, '_blank');
      
      alert('💳 Redirection vers Stripe Starter...\n\n' +
            '⚠️ IMPORTANT après paiement :\n' +
            '1. Revenez sur cette page\n' +
            '2. Cliquez sur "Mettre à jour vers Starter" ci-dessous\n' +
            '3. Ou rafraîchissez la page (F5)\n\n' +
            '💡 Si le problème persiste, contactez le support.');
      
      // Ajouter un bouton pour forcer la mise à jour vers Starter
      setTimeout(() => {
        if (window.confirm('✅ Paiement Stripe terminé ?\n\nCliquez OK pour activer votre plan Starter maintenant.')) {
          updateUserPaymentStatus(true, 'starter');
          alert('🎉 Plan Starter activé ! Vous avez maintenant 25 crédits.');
          window.location.reload();
        }
      }, 3000);
      
    } else if (planId === 'pro') {
      // Rediriger vers Stripe Pro avec l'email de l'utilisateur
      const email = currentUserEmail || userEmail || 'exemple@gmail.com';
      const encodedEmail = encodeURIComponent(email);
      const stripeUrl = `https://buy.stripe.com/test_eVqfZa22Q7c3bDK4b62VG01?prefilled_email=${encodedEmail}`;
      
      window.open(stripeUrl, '_blank');
      
      alert('💳 Redirection vers Stripe Pro...\n\n' +
            '⚠️ IMPORTANT après paiement :\n' +
            '1. Revenez sur cette page\n' +
            '2. Cliquez sur "Mettre à jour vers Pro" ci-dessous\n' +
            '3. Ou rafraîchissez la page (F5)\n\n' +
            '💡 Si le problème persiste, contactez le support.');
      
      // Ajouter un bouton pour forcer la mise à jour vers Pro
      setTimeout(() => {
        if (window.confirm('✅ Paiement Stripe terminé ?\n\nCliquez OK pour activer votre plan Pro maintenant.')) {
          updateUserPaymentStatus(true, 'pro');
          alert('🎉 Plan Pro activé ! Vous avez maintenant 150 crédits.');
          window.location.reload();
        }
      }, 3000);
      
    } else {
      // Fallback pour d'autres plans
      alert(`Redirection vers le paiement pour le plan ${planName}`);
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
                  💡 Bon à savoir
                </h3>
                <div className="text-left space-y-2 text-white/80 text-sm mb-4">
                  <p>• <strong>Plan gratuit :</strong> 0€/mois - Aucun paiement</p>
                  <p>• <strong>Rétrogradation :</strong> Immédiate et gratuite</p>
                  <p>• <strong>Annulation :</strong> Pas d'engagement, résiliable à tout moment</p>
                  <p>• <strong>Crédits :</strong> Les crédits non utilisés sont perdus lors du changement de plan</p>
                </div>
                <p className="text-white/60 text-xs mb-4">
                  ⚠️ IMPORTANT: L'annulation Stripe doit être gérée côté serveur pour être effective.
                </p>
                <button
                  onClick={handleCancelSubscription}
                  className="inline-flex items-center px-4 py-2 bg-red-500/20 text-red-300 rounded-lg border border-red-500/30 hover:bg-red-500/30 transition-colors text-sm"
                >
                  <X className="w-4 h-4 mr-2" />
                  Annuler et passer au gratuit
                </button>
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
                  Comment annuler mon abonnement Stripe ?
                </h3>
                <p className="text-white/80 text-sm">
                  L'annulation nécessite une gestion côté serveur. Pour l'instant, vous devez annuler manuellement dans votre tableau de bord Stripe.
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