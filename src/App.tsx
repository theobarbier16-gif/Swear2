import React, { useState } from 'react';
import { useAuth } from './contexts/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import UploadStep from './components/UploadStep';
import ProcessingStep from './components/ProcessingStep';
import ResultsStep from './components/ResultsStep';
import LoginPage from './pages/LoginPage';
import PricingPage from './pages/PricingPage';
import DemoCheckoutPage from './pages/DemoCheckoutPage';
import StripeWebhookPage from './pages/StripeWebhookPage';
import { processImageWithN8N, setDebugLogger } from './utils/imageProcessor';
import StripeSuccess from './components/StripeSuccess';

export interface ClothingOptions {
  gender: 'femme' | 'homme' | 'enfant';
  size: 'xs' | 's' | 'm' | 'l' | 'xl';
  mirror?: 'normal' | 'mirror';
}

type Step = 'upload' | 'processing' | 'results';
type Page = 'main' | 'login' | 'pricing' | 'stripe-success' | 'demo-checkout' | 'stripe-webhook';

function App() {
  const { user, isAuthenticated, decrementCredits, refundCredits } = useAuth();
  const [currentPage, setCurrentPage] = useState<Page>('main');
  const [currentStep, setCurrentStep] = useState<Step>('upload');
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>('');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingError, setProcessingError] = useState<string | null>(null);
  const [debugLogs, setDebugLogs] = useState<string[]>([]);

  // Check for Stripe success/cancel parameters
  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const path = window.location.pathname;
    const success = urlParams.get('success');
    const canceled = urlParams.get('canceled');
    const plan = urlParams.get('plan');
    
    // Vérifier si on est sur la page de webhook Stripe
    if (path === '/stripe-webhook') {
      setCurrentPage('stripe-webhook');
      return;
    }
    
    // Vérifier si on est sur la page de checkout démo
    if (path === '/demo-checkout') {
      setCurrentPage('demo-checkout');
      return;
    }
    
    if (success === 'true') {
      setCurrentPage('stripe-success');
      // Store plan type for success page
      if (plan) {
        sessionStorage.setItem('stripe-plan', plan);
      }
    } else if (canceled === 'true') {
      // Handle cancellation - redirect to pricing with message
      setCurrentPage('pricing');
      // Afficher un message d'annulation
      setTimeout(() => {
        alert('Paiement annulé. Vous pouvez réessayer quand vous voulez !');
      }, 500);
    }
  }, []);

  // Configuration du logger de debug
  React.useEffect(() => {
    setDebugLogger((message: string) => {
      setDebugLogs(prev => [...prev.slice(-49), message]);
    });
  }, []);

  const handleImageUpload = async (imageUrl: string, fileName: string, file: File, options: ClothingOptions) => {
    console.log('🚀 Début du traitement d\'image');
    
    setUploadedImage(imageUrl);
    setFileName(fileName);
    setCurrentStep('processing');
    setIsProcessing(true);
    setProcessingError(null);
    setGeneratedImage(null);

    // Décrémenter les crédits avant le traitement
    const creditDeducted = await decrementCredits();
    if (!creditDeducted) {
      console.log('❌ Impossible de déduire les crédits');
      setProcessingError('Impossible de déduire les crédits. Vérifiez votre solde.');
      setCurrentStep('upload');
      setIsProcessing(false);
      return;
    }

    try {
      console.log('📡 Envoi vers N8N...');
      const result = await processImageWithN8N(file, options);
      
      if (result.success && result.imageUrl) {
        console.log('✅ Image générée avec succès');
        setGeneratedImage(result.imageUrl);
        setCurrentStep('results');
      } else {
        console.log('❌ Échec génération:', result.error);
        setProcessingError(result.error || 'Erreur de traitement inconnue');
        setCurrentStep('upload');
        
        // Rembourser le crédit en cas d'échec
        await refundCredits();
      }
    } catch (error) {
      console.error('❌ Erreur traitement:', error);
      setProcessingError(error instanceof Error ? error.message : 'Erreur de traitement');
      setCurrentStep('upload');
      
      // Rembourser le crédit en cas d'erreur
      await refundCredits();
    } finally {
      setIsProcessing(false);
    }
  };

  const handleStartOver = () => {
    setCurrentStep('upload');
    setUploadedImage(null);
    setFileName('');
    setGeneratedImage(null);
    setProcessingError(null);
    setDebugLogs([]);
  };

  const handleGoHome = () => {
    setCurrentPage('main');
    setCurrentStep('upload');
    setUploadedImage(null);
    setFileName('');
    setGeneratedImage(null);
    setProcessingError(null);
    setDebugLogs([]);
  };

  const handleShowLogin = () => {
    setCurrentPage('login');
  };

  const handleShowPricing = () => {
    setCurrentPage('pricing');
  };

  const handleBackFromLogin = () => {
    setCurrentPage('main');
  };

  const handleBackFromPricing = () => {
    setCurrentPage('main');
  };

  const handleStripeSuccessContinue = () => {
    // Clear the URL parameters and go to main page
    window.history.replaceState({}, document.title, window.location.pathname);
    sessionStorage.removeItem('stripe-plan');
    setCurrentPage('main');
  };
  // Rendu de la page de checkout démo
  if (currentPage === 'demo-checkout') {
    return <DemoCheckoutPage />;
  }
  
  // Rendu de la page de webhook Stripe
  if (currentPage === 'stripe-webhook') {
    return <StripeWebhookPage />;
  }
  
  // Rendu conditionnel des pages
  if (currentPage === 'login') {
    return (
      <LoginPage 
        onBack={handleBackFromLogin}
        onShowPricing={(email: string) => {
          setCurrentPage('pricing');
        }}
      />
    );
  }

  if (currentPage === 'pricing') {
    return (
      <PricingPage 
        onBack={handleBackFromPricing}
        currentUserEmail={user?.email}
      />
    );
  }

  if (currentPage === 'stripe-success') {
    const planType = sessionStorage.getItem('stripe-plan') || undefined;
    return (
      <StripeSuccess 
        planType={planType}
        onContinue={handleStripeSuccessContinue}
      />
    );
  }
  // Page principale
  return (
    <div className="min-h-screen bg-gradient-to-br from-vinted-500 via-vinted-400 to-vinted-600 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-white/8 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-vinted-600/20 to-transparent"></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        <Header 
          onShowLogin={handleShowLogin}
          onShowPricing={handleShowPricing}
          onGoHome={handleGoHome}
        />
        
        <main className="flex-1 container mx-auto px-4 py-8 max-w-6xl">
          {currentStep === 'upload' && (
            <UploadStep
              onImageUpload={handleImageUpload}
              isProcessing={isProcessing}
              processingError={processingError}
              onShowLogin={handleShowLogin}
              onShowPricing={handleShowPricing}
            />
          )}
          
          {currentStep === 'processing' && (
            <ProcessingStep
              uploadedImage={uploadedImage}
              fileName={fileName}
            />
          )}
          
          {currentStep === 'results' && (
            <ResultsStep
              uploadedImage={uploadedImage}
              generatedImage={generatedImage}
              fileName={fileName}
              onStartOver={handleStartOver}
            />
          )}
        </main>

        <Footer />
      </div>

      {/* Debug Panel (development only) */}
      {import.meta.env.DEV && debugLogs.length > 0 && (
        <div className="fixed bottom-4 right-4 w-96 max-h-64 bg-black/90 text-white text-xs p-4 rounded-lg overflow-y-auto z-50">
          <div className="flex justify-between items-center mb-2">
            <span className="font-bold">Debug Logs</span>
            <button 
              onClick={() => setDebugLogs([])}
              className="text-red-400 hover:text-red-300"
            >
              Clear
            </button>
          </div>
          {debugLogs.map((log, index) => (
            <div key={index} className="mb-1 font-mono">
              {log}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;