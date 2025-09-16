import React from 'react';
import { ArrowLeft, Check, Star } from 'lucide-react';
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
  
  const handlePlanSelection = (planType: string, stripeUrl?: string) => {
    if (planType === currentPlan) {
      return; // Ne rien faire si c'est le plan actuel
    }
    
    if (planType === 'pro') {
      alert('Le plan Pro sera bientôt disponible !');
      return;
    }
    
    if (stripeUrl) {
      // Construire l'URL avec l'email pré-rempli
      const email = userEmail || currentUserEmail || user?.email || '';
      const urlWithEmail = stripeUrl.replace('exemple%40gmail.com', encodeURIComponent(email));
      window.open(urlWithEmail, '_blank');
    }
  };

  const plans = [
    {
      id: 'free',
      name: 'Gratuit',
      price: '0€',
      period: '/mois',
      description: 'Parfait pour commencer',
      features: [
        '3 crédits par mois',
        'Traitement d\'images de base',
        'Support communautaire'
      ],
      buttonText: 'Plan actuel',
      buttonColor: 'bg-gray-100 text-gray-500 cursor-not-allowed',
      popular: false
    },
    {
      id: 'starter',
      name: 'Starter',
      price: '9,90€',
      period: '/mois',
      description: 'Idéal pour un usage régulier',
      features: [
        '25 crédits par mois',
        'Traitement d\'images avancé',
        'Support prioritaire',
        'Historique des traitements'
      ],
      buttonText: 'Choisir Starter',
      buttonColor: 'bg-blue-600 hover:bg-blue-700 text-white',
      popular: true,
      stripeUrl: 'https://buy.stripe.com/test_fZucMYcHubsj23adLG2VG00?prefilled_email=exemple%40gmail.com'
    },
    {
      id: 'pro',
      name: 'Pro',
      price: '22,90€',
      period: '/mois',
      description: 'Pour les professionnels',
      features: [
        '100 crédits par mois',
        'Traitement d\'images premium',
        'Support dédié 24/7',
        'API access',
        'Intégrations avancées'
      ],
      buttonText: 'Bientôt disponible',
      buttonColor: 'bg-gray-400 text-white cursor-not-allowed',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header avec bouton retour */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour
          </button>
        </div>

        {/* Avertissement mode test */}
        <div className="mb-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">
                Mode Test Stripe
              </h3>
              <div className="mt-2 text-sm text-yellow-700">
                <p>Utilisez ces informations de carte de test :</p>
                <ul className="list-disc list-inside mt-1">
                  <li><strong>Numéro :</strong> 4242 4242 4242 4242</li>
                  <li><strong>Date :</strong> 12/34</li>
                  <li><strong>CVC :</strong> 123</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Titre principal */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Choisissez votre plan
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Sélectionnez le plan qui correspond le mieux à vos besoins de traitement d'images
          </p>
        </div>

        {/* Grille des plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => {
            const isCurrentPlan = plan.id === currentPlan;
            const buttonText = isCurrentPlan ? 'Plan actuel' : plan.buttonText;
            const buttonColor = isCurrentPlan 
              ? 'bg-green-100 text-green-700 cursor-not-allowed border border-green-200' 
              : plan.buttonColor;

            return (
              <div
                key={plan.id}
                className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105 ${
                  plan.popular ? 'ring-2 ring-blue-500' : ''
                } ${isCurrentPlan ? 'ring-2 ring-green-500' : ''}`}
              >
                {/* Badge populaire */}
                {plan.popular && !isCurrentPlan && (
                  <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 text-sm font-medium rounded-bl-lg">
                    <Star className="w-4 h-4 inline mr-1" />
                    Populaire
                  </div>
                )}

                {/* Badge plan actuel */}
                {isCurrentPlan && (
                  <div className="absolute top-0 right-0 bg-green-500 text-white px-3 py-1 text-sm font-medium rounded-bl-lg">
                    <Check className="w-4 h-4 inline mr-1" />
                    Plan actuel
                  </div>
                )}

                <div className="p-8">
                  {/* En-tête du plan */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-gray-900">
                        {plan.price}
                      </span>
                      <span className="text-gray-600 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  {/* Liste des fonctionnalités */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Bouton d'action */}
                  <button
                    onClick={() => handlePlanSelection(plan.id, plan.stripeUrl)}
                    disabled={isCurrentPlan || plan.id === 'pro'}
                    className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${buttonColor}`}
                  >
                    {buttonText}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section FAQ ou informations supplémentaires */}
        <div className="mt-16 text-center">
          <p className="text-gray-600">
            Des questions ? Contactez-nous à{' '}
            <a href="mailto:support@example.com" className="text-blue-600 hover:text-blue-800">
              support@example.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;