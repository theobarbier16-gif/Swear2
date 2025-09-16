import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const PricingPage: React.FC = () => {
  const { user } = useAuth();

  const handleStripeRedirect = (planType: 'starter' | 'pro') => {
    const stripeLinks = {
      starter: 'https://buy.stripe.com/test_4gw28k5b60NF0Z2bIJ',
      pro: 'https://buy.stripe.com/test_3cI14gdLy0NF37eePK2VG02'
    };

    let url = stripeLinks[planType];
    
    // Ajouter l'email si l'utilisateur est connecté
    if (user?.email) {
      url += `?prefilled_email=${encodeURIComponent(user.email)}`;
    }
    
    console.log(`Redirection vers Stripe (${planType}):`, url);
    window.open(url, '_blank');
  };

  return (
    <>
      {/* Avertissement mode test */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 mb-8">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
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
                <li>Numéro : 4242 4242 4242 4242</li>
                <li>Date d'expiration : 12/34</li>
                <li>CVC : 123</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Choisissez votre plan
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Sélectionnez le plan qui correspond le mieux à vos besoins
          </p>
        </div>

        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0">
          {/* Plan Gratuit */}
          <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
            <div className="p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Gratuit</h3>
              <p className="mt-4 text-sm text-gray-500">
                Parfait pour découvrir notre service
              </p>
              <p className="mt-8">
                <span className="text-4xl font-extrabold text-gray-900">0€</span>
                <span className="text-base font-medium text-gray-500">/mois</span>
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex">
                  <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-3 text-sm text-gray-500">3 crédits par mois</span>
                </li>
                <li className="flex">
                  <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-3 text-sm text-gray-500">Fonctionnalités de base</span>
                </li>
              </ul>
            </div>
            <div className="px-6 pt-6 pb-8">
              <button
                disabled
                className="w-full bg-gray-300 border border-transparent rounded-md py-2 text-sm font-semibold text-gray-500 cursor-not-allowed"
              >
                Plan actuel
              </button>
            </div>
          </div>

          {/* Plan Starter */}
          <div className="border border-indigo-200 rounded-lg shadow-sm divide-y divide-gray-200 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-indigo-100 text-indigo-600">
                Populaire
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Starter</h3>
              <p className="mt-4 text-sm text-gray-500">
                Idéal pour un usage régulier
              </p>
              <p className="mt-8">
                <span className="text-4xl font-extrabold text-gray-900">9,90€</span>
                <span className="text-base font-medium text-gray-500">/mois</span>
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex">
                  <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-3 text-sm text-gray-500">25 crédits par mois</span>
                </li>
                <li className="flex">
                  <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-3 text-sm text-gray-500">Support prioritaire</span>
                </li>
                <li className="flex">
                  <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-3 text-sm text-gray-500">Toutes les fonctionnalités</span>
                </li>
              </ul>
            </div>
            <div className="px-6 pt-6 pb-8">
              <button
                onClick={() => handleStripeRedirect('starter')}
                className="w-full bg-indigo-600 border border-transparent rounded-md py-2 text-sm font-semibold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Choisir Starter
              </button>
            </div>
          </div>

          {/* Plan Pro */}
          <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
            <div className="p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Pro</h3>
              <p className="mt-4 text-sm text-gray-500">
                Pour les utilisateurs intensifs
              </p>
              <p className="mt-8">
                <span className="text-4xl font-extrabold text-gray-900">22,90€</span>
                <span className="text-base font-medium text-gray-500">/mois</span>
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex">
                  <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-3 text-sm text-gray-500">150 crédits par mois</span>
                </li>
                <li className="flex">
                  <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-3 text-sm text-gray-500">Support prioritaire</span>
                </li>
                <li className="flex">
                  <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-3 text-sm text-gray-500">API avancée</span>
                </li>
                <li className="flex">
                  <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-3 text-sm text-gray-500">Intégrations personnalisées</span>
                </li>
              </ul>
            </div>
            <div className="px-6 pt-6 pb-8">
              <button
                onClick={() => handleStripeRedirect('pro')}
                className="w-full bg-gray-800 border border-transparent rounded-md py-2 text-sm font-semibold text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Choisir Pro
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPage;