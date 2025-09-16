import React, { useState } from 'react';
import { ArrowLeft, Check, CreditCard, Sparkles } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { redirectToCheckout } from '../utils/stripe';

interface PricingPageProps {
  onBack: () => void;
  userEmail?: string;
  currentUserEmail?: string;
}

const PricingPage: React.FC<PricingPageProps> = ({ onBack, userEmail, currentUserEmail }) => {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubscribe = async () => {
    if (!user?.email) {
      setError('Vous devez être connecté pour vous abonner');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      await redirectToCheckout({
        planType: 'abonnement',
        userEmail: user.email,
        successUrl: `${window.location.origin}/?success=true`,
        cancelUrl: `${window.location.origin}/?canceled=true`
      });
    } catch (error) {
      console.error('Erreur lors de la redirection vers Stripe:', error);
      setError('Erreur lors de l\'initialisation du paiement. Veuillez réessayer.');
    } finally {
      setIsLoading(false);
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

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between p-6">
          <button
            onClick={onBack}
            className="flex items-center px-4 py-2 text-white hover:text-white/80 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour
          </button>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Choisissez votre plan
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Accédez à toutes les fonctionnalités premium pour transformer vos photos
            </p>
          </div>

          {/* Pricing Card */}
          <div className="max-w-md mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Plan Abonnement</h2>
                <div className="text-4xl font-bold text-white mb-2">
                  9,90€
                  <span className="text-lg font-normal text-white/60">/mois</span>
                </div>
                <p className="text-white/80">Accès illimité à toutes les fonctionnalités</p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-white">Transformations illimitées</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-white">Qualité haute résolution</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-white">Support prioritaire</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-white">Nouvelles fonctionnalités en avant-première</span>
                </div>
              </div>

              {/* Subscribe Button */}
              <button
                onClick={handleSubscribe}
                disabled={isLoading || !user}
                className="w-full bg-white text-vinted-600 font-semibold py-4 px-6 rounded-xl hover:bg-white/90 transition-all duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-vinted-600 mr-2"></div>
                    Redirection...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <CreditCard className="w-5 h-5 mr-2" />
                    S'abonner maintenant
                  </div>
                )}
              </button>

              {error && (
                <div className="mt-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg">
                  <p className="text-red-200 text-sm text-center">{error}</p>
                </div>
              )}

              {!user && (
                <div className="mt-4 p-3 bg-yellow-500/20 border border-yellow-500/30 rounded-lg">
                  <p className="text-yellow-200 text-sm text-center">
                    Vous devez être connecté pour vous abonner
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Additional Info */}
          <div className="text-center mt-8">
            <p className="text-white/60 text-sm">
              Paiement sécurisé par Stripe • Annulation possible à tout moment
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;