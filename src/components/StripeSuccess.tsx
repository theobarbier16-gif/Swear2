import React, { useEffect } from 'react';
import { CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface StripeSuccessProps {
  planType?: string;
  onContinue: () => void;
}

const StripeSuccess: React.FC<StripeSuccessProps> = ({ planType, onContinue }) => {
  const { user, updateUserPaymentStatus } = useAuth();

  useEffect(() => {
    // The webhook should handle the user update, but we can refresh the user data
    // to ensure the UI is up to date
    if (planType && ['starter', 'pro'].includes(planType)) {
      // Force a page reload to get the latest user data from Firestore
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  }, [planType, updateUserPaymentStatus]);

  const getPlanDetails = (plan: string) => {
    switch (plan) {
      case 'starter':
        return { name: 'Starter', credits: 25, price: '9,90€' };
      case 'pro':
        return { name: 'Pro', credits: 150, price: '22,90€' };
      default:
        return { name: 'Premium', credits: 25, price: '9,90€' };
    }
  };

  const planDetails = getPlanDetails(planType || 'starter');

  return (
    <div className="min-h-screen bg-gradient-to-br from-vinted-500 via-vinted-400 to-vinted-600 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-white/8 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-vinted-600/20 to-transparent"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20 text-center">
            {/* Success Icon */}
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>

            {/* Success Message */}
            <h1 className="text-3xl font-bold text-white mb-4">
              Paiement Réussi !
            </h1>
            
            <p className="text-white/90 mb-6">
              Félicitations ! Votre abonnement <strong>{planDetails.name}</strong> a été activé avec succès.
            </p>

            {/* Plan Details */}
            <div className="bg-white/10 rounded-xl p-4 mb-6 border border-white/20">
              <div className="flex items-center justify-center mb-3">
                <Sparkles className="w-5 h-5 text-white mr-2" />
                <span className="text-white font-semibold">Plan {planDetails.name}</span>
              </div>
              <div className="space-y-2 text-white/80 text-sm">
                <p>💳 {planDetails.credits} crédits par mois</p>
                <p>💰 {planDetails.price}/mois</p>
                <p>✅ Accès complet activé</p>
              </div>
            </div>

            {/* User Info */}
            {user && (
              <div className="bg-white/10 rounded-xl p-4 mb-6 border border-white/20">
                <p className="text-white/90 text-sm">
                  Bonjour <strong>{user.firstName}</strong> !
                </p>
                <p className="text-white/70 text-xs mt-1">
                  Vos crédits seront disponibles dans quelques instants.
                </p>
              </div>
            )}

            {/* Continue Button */}
            <button
              onClick={onContinue}
              className="w-full bg-white text-vinted-500 py-3 px-6 rounded-xl font-semibold hover:bg-white/90 transition-all duration-200 shadow-lg hover:scale-105 flex items-center justify-center"
            >
              Commencer à Créer
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>

            <p className="text-white/60 text-xs mt-4">
              Un email de confirmation a été envoyé à votre adresse.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StripeSuccess;