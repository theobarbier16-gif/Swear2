import React, { useState } from 'react';
import { CreditCard, Loader as Loader2, CircleAlert as AlertCircle, CircleCheck as CheckCircle } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { stripeService } from '../services/stripe';

const StripeTestButton: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const { user, isAuthenticated } = useAuth();

  const addLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    const logMessage = `[${timestamp}] ${message}`;
    console.log(logMessage);
    setLogs(prev => [...prev, logMessage]);
  };

  const clearLogs = () => {
    setLogs([]);
    setError(null);
    setSuccess(null);
  };

  const testStripeCheckout = async () => {
    setIsLoading(true);
    setError(null);
    setSuccess(null);
    clearLogs();

    try {
      addLog('🚀 === DÉBUT TEST STRIPE ===');
      
      // Vérifications préliminaires
      addLog(`🔐 Utilisateur authentifié: ${isAuthenticated}`);
      addLog(`👤 User ID: ${user?.uid || 'N/A'}`);
      addLog(`📧 Email: ${user?.email || 'N/A'}`);
      
      if (!isAuthenticated || !user) {
        throw new Error('Utilisateur non authentifié');
      }

      addLog('📦 Préparation de la requête Stripe...');
      
      const request = {
        planType: 'starter' as const,
        userEmail: user.email || '',
        userId: user.uid,
        successUrl: `${window.location.origin}/?success=true&plan=starter&test=true`,
        cancelUrl: `${window.location.origin}/?canceled=true&test=true`,
      };

      addLog(`📋 Requête préparée: ${JSON.stringify(request, null, 2)}`);
      addLog('🔗 Appel du service Stripe...');

      // Test avec createCheckoutSession d'abord
      try {
        addLog('🧪 Test createCheckoutSession...');
        const session = await stripeService.createCheckoutSession(request);
        addLog(`✅ Session créée: ${JSON.stringify(session)}`);
        
        if (session.url) {
          setSuccess(`Session Stripe créée avec succès ! URL: ${session.url}`);
          addLog('🎉 Test réussi - Session créée');
          
          // Optionnel: rediriger automatiquement après 3 secondes
          setTimeout(() => {
            addLog('🔄 Redirection vers Stripe...');
            window.location.assign(session.url);
          }, 3000);
        } else {
          throw new Error('Pas d\'URL de redirection dans la réponse');
        }
      } catch (sessionError) {
        addLog(`❌ Erreur createCheckoutSession: ${sessionError}`);
        
        // Fallback: essayer redirectToCheckout
        addLog('🔄 Fallback: Test redirectToCheckout...');
        await stripeService.redirectToCheckout(request);
        addLog('✅ redirectToCheckout appelé avec succès');
        setSuccess('Redirection vers Stripe initiée');
      }

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Erreur inconnue';
      addLog(`❌ ERREUR FINALE: ${errorMessage}`);
      
      if (error instanceof Error && error.stack) {
        addLog(`📚 Stack trace: ${error.stack}`);
      }
      
      setError(errorMessage);
    } finally {
      setIsLoading(false);
      addLog('🏁 === FIN TEST STRIPE ===');
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-xl">
      <div className="text-center mb-4">
        <h3 className="text-lg font-semibold text-white mb-2 flex items-center justify-center">
          <CreditCard className="w-5 h-5 mr-2" />
          Test Stripe & Firebase
        </h3>
        <p className="text-white/80 text-sm">
          Bouton de test pour diagnostiquer l'intégration Stripe
        </p>
      </div>

      {/* Status */}
      <div className="mb-4 space-y-2">
        {!isAuthenticated && (
          <div className="flex items-center text-red-400 text-sm">
            <AlertCircle className="w-4 h-4 mr-2" />
            Vous devez être connecté pour tester
          </div>
        )}
        
        {success && (
          <div className="flex items-center text-green-400 text-sm">
            <CheckCircle className="w-4 h-4 mr-2" />
            {success}
          </div>
        )}
        
        {error && (
          <div className="flex items-center text-red-400 text-sm">
            <AlertCircle className="w-4 h-4 mr-2" />
            {error}
          </div>
        )}
      </div>

      {/* Test Button */}
      <button
        onClick={testStripeCheckout}
        disabled={isLoading || !isAuthenticated}
        className={`
          w-full py-3 px-4 rounded-xl font-medium transition-all duration-200 shadow-lg flex items-center justify-center
          ${isLoading || !isAuthenticated
            ? 'bg-gray-500 text-white cursor-not-allowed opacity-50'
            : 'bg-white text-vinted-500 hover:bg-white/90 hover:scale-105'
          }
        `}
      >
        {isLoading ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Test en cours...
          </>
        ) : (
          <>
            <CreditCard className="w-5 h-5 mr-2" />
            Tester Stripe (Plan Starter)
          </>
        )}
      </button>

      {/* Clear Logs Button */}
      {logs.length > 0 && (
        <button
          onClick={clearLogs}
          className="w-full mt-2 py-2 px-4 text-sm text-white/70 hover:text-white transition-colors"
        >
          Effacer les logs
        </button>
      )}

      {/* Logs Display */}
      {logs.length > 0 && (
        <div className="mt-4 max-h-64 overflow-y-auto bg-black/20 rounded-lg p-3">
          <h4 className="text-white font-medium text-sm mb-2">Logs de débogage:</h4>
          <div className="space-y-1">
            {logs.map((log, index) => (
              <div key={index} className="text-xs font-mono text-white/80 break-all">
                {log}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Instructions */}
      <div className="mt-4 text-xs text-white/60">
        <p>Ce bouton teste:</p>
        <ul className="list-disc list-inside mt-1 space-y-1">
          <li>L'authentification Firebase</li>
          <li>L'appel httpsCallable (pas fetch)</li>
          <li>La création de session Stripe</li>
          <li>La gestion d'erreurs complète</li>
        </ul>
      </div>
    </div>
  );
};

export default StripeTestButton;