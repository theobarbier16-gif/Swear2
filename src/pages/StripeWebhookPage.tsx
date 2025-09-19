import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

const StripeWebhookPage: React.FC = () => {
  const [status, setStatus] = useState('En attente...');
  const { updateUserPaymentStatus } = useAuth();

  useEffect(() => {
    const handleWebhook = async () => {
      try {
        // Récupérer les données du webhook depuis l'URL ou le body
        const urlParams = new URLSearchParams(window.location.search);
        const eventType = urlParams.get('type');
        const userId = urlParams.get('user_id');
        const planType = urlParams.get('plan_type');

        console.log('🎯 Webhook reçu:', { eventType, userId, planType });
        setStatus(`Webhook reçu: ${eventType}`);

        // Traiter les différents types d'événements Stripe
        if (eventType === 'checkout.session.completed' && userId && planType) {
          console.log('💳 Traitement du paiement réussi');
          
          // Mettre à jour le statut de paiement de l'utilisateur
          await updateUserPaymentStatus(true, planType);
          
          setStatus('Paiement traité avec succès');
          
          // Rediriger vers la page de succès après traitement
          setTimeout(() => {
            window.location.href = `/?success=true&plan=${planType}`;
          }, 2000);
        }
        
      } catch (error) {
        console.error('❌ Erreur traitement webhook:', error);
        setStatus('Erreur lors du traitement');
      }
    };

    handleWebhook();
  }, [updateUserPaymentStatus]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-vinted-500 via-vinted-400 to-vinted-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Traitement du Paiement
        </h1>
        <p className="text-gray-600 mb-4">{status}</p>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-vinted-500 mx-auto"></div>
      </div>
    </div>
  );
};

export default StripeWebhookPage;