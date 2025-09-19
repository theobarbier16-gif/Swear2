import React, { useState, useEffect } from 'react';
import { CheckCircle, CreditCard, ArrowLeft, Loader2 } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const DemoCheckoutPage: React.FC = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);
  const { updateUserPaymentStatus } = useAuth();
  
  // Récupérer les paramètres de l'URL
  const urlParams = new URLSearchParams(window.location.search);
  const planType = urlParams.get('plan') || 'starter';
  const email = urlParams.get('email') || '';
  const amount = parseInt(urlParams.get('amount') || '990');
  const successUrl = urlParams.get('success_url') || '/';
  const cancelUrl = urlParams.get('cancel_url') || '/';

  const planDetails = {
    starter: { name: 'Starter', credits: 25, price: '9,90€' },
    pro: { name: 'Pro', credits: 150, price: '22,90€' }
  };

  const currentPlan = planDetails[planType as keyof typeof planDetails] || planDetails.starter;

  const handlePayment = async () => {
    setIsProcessing(true);
    
    // Simuler le processus de paiement (3 secondes)
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    try {
      // Mettre à jour le statut de paiement de l'utilisateur
      await updateUserPaymentStatus(true, planType);
      
      setPaymentComplete(true);
      
      // Rediriger vers la page de succès après 2 secondes
      setTimeout(() => {
        window.location.href = successUrl;
      }, 2000);
      
    } catch (error) {
      console.error('Erreur mise à jour paiement:', error);
      alert('Erreur lors de la mise à jour du compte. Veuillez contacter le support.');
      setIsProcessing(false);
    }
  };

  const handleCancel = () => {
    window.location.href = cancelUrl;
  };

  if (paymentComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-vinted-500 via-vinted-400 to-vinted-600 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Paiement Réussi !</h2>
          <p className="text-gray-600 mb-4">
            Votre abonnement {currentPlan.name} a été activé avec succès.
          </p>
          <p className="text-sm text-gray-500">
            Redirection en cours...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-vinted-500 via-vinted-400 to-vinted-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-vinted-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <CreditCard className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Paiement Sécurisé
          </h1>
          <p className="text-gray-600">
            Mode Démonstration - Aucun paiement réel
          </p>
        </div>

        {/* Plan Details */}
        <div className="bg-gray-50 rounded-xl p-4 mb-6">
          <h3 className="font-semibold text-gray-900 mb-2">Plan {currentPlan.name}</h3>
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600">Prix</span>
            <span className="font-semibold">{currentPlan.price}</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600">Crédits</span>
            <span className="font-semibold">{currentPlan.credits} transformations</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Email</span>
            <span className="font-semibold text-sm">{email}</span>
          </div>
        </div>

        {/* Demo Notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <p className="text-blue-800 text-sm">
            <strong>Mode Démonstration :</strong> Ce paiement est simulé. 
            Votre compte sera mis à jour automatiquement sans frais réels.
          </p>
        </div>

        {/* Payment Buttons */}
        <div className="space-y-3">
          <button
            onClick={handlePayment}
            disabled={isProcessing}
            className="w-full bg-vinted-500 text-white py-3 px-4 rounded-xl font-medium hover:bg-vinted-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isProcessing ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Traitement en cours...
              </>
            ) : (
              `Confirmer le paiement ${currentPlan.price}`
            )}
          </button>
          
          <button
            onClick={handleCancel}
            disabled={isProcessing}
            className="w-full bg-gray-200 text-gray-700 py-3 px-4 rounded-xl font-medium hover:bg-gray-300 transition-colors disabled:opacity-50 flex items-center justify-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Annuler
          </button>
        </div>

        {/* Security Notice */}
        <p className="text-xs text-gray-500 text-center mt-4">
          🔒 Paiement sécurisé par Stripe (Mode Démo)
        </p>
      </div>
    </div>
  );
};

export default DemoCheckoutPage;