import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import UploadStep from './components/UploadStep';
import ProcessingStep from './components/ProcessingStep';
import ResultsStep from './components/ResultsStep';
import LoginPage from './pages/LoginPage';
import PricingPage from './pages/PricingPage';
import { processImageWithN8N, setDebugLogger } from './utils/imageProcessor';
import { useAuth } from './contexts/AuthContext';

console.log('🚀 === DEBUT APP.TSX ===');

export interface ClothingOptions {
  gender: 'femme' | 'homme' | 'enfant';
  size: 'xs' | 's' | 'm' | 'l' | 'xl';
  mirror?: 'normal' | 'mirror';
}

type AppStep = 'upload' | 'processing' | 'results' | 'login' | 'pricing';

const App: React.FC = () => {
  console.log('🎯 App component rendering');
  
  const [currentStep, setCurrentStep] = useState<AppStep>('upload');
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingError, setProcessingError] = useState<string | null>(null);
  const [debugLogs, setDebugLogs] = useState<string[]>([]);
  const [newUserEmail, setNewUserEmail] = useState<string>('');

  const { isAuthenticated, user } = useAuth();

  console.log('🎯 App state:', {
    currentStep,
    isAuthenticated,
    hasUser: !!user,
    userEmail: user?.email
  });

  // Configuration du logger de debug
  useEffect(() => {
    const addDebugLog = (message: string) => {
      console.log('📝 Debug log:', message);
      setDebugLogs(prev => [...prev.slice(-19), message]); // Garder les 20 derniers logs
    };
    
    setDebugLogger(addDebugLog);
    console.log('🔧 Debug logger configured');
  }, []);

  const handleImageUpload = async (imageUrl: string, fileName: string, file: File, options: ClothingOptions) => {
    console.log('📤 Image upload started:', { fileName, options });
    
    setUploadedImage(imageUrl);
    setFileName(fileName);
    setCurrentStep('processing');
    setIsProcessing(true);
    setProcessingError(null);
    
    try {
      console.log('🔄 Starting image processing...');
      const result = await processImageWithN8N(file, options);
      
      if (result.success && result.imageUrl) {
        console.log('✅ Image processing successful');
        setGeneratedImage(result.imageUrl);
        setCurrentStep('results');
        
        // Décrémenter les crédits de l'utilisateur
        if (user && user.subscription) {
          const newCredits = Math.max(0, (user.subscription.creditsRemaining || 0) - 1);
          console.log('💳 Decrementing credits:', newCredits);
          // TODO: Mettre à jour les crédits dans Firebase
        }
      } else {
        console.error('❌ Image processing failed:', result.error);
        setProcessingError(result.error || 'Erreur de traitement inconnue');
        setCurrentStep('upload');
      }
    } catch (error) {
      console.error('❌ Image processing error:', error);
      setProcessingError(error instanceof Error ? error.message : 'Erreur de traitement');
      setCurrentStep('upload');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleStartOver = () => {
    console.log('🔄 Starting over');
    setCurrentStep('upload');
    setUploadedImage(null);
    setGeneratedImage(null);
    setFileName('');
    setProcessingError(null);
    setDebugLogs([]);
  };

  const handleShowLogin = () => {
    console.log('🔑 Showing login page');
    setCurrentStep('login');
  };

  const handleShowPricing = (email?: string) => {
    console.log('💰 Showing pricing page', email ? `for ${email}` : '');
    if (email) {
      setNewUserEmail(email);
    }
    setCurrentStep('pricing');
  };

  const handleBackToHome = () => {
    console.log('🏠 Going back to home');
    setCurrentStep('upload');
    setNewUserEmail('');
  };

  const handleGoHome = () => {
    console.log('🏠 Going home');
    handleStartOver();
  };

  // Rendu conditionnel selon l'étape
  const renderCurrentStep = () => {
    console.log('🎨 Rendering step:', currentStep);
    
    switch (currentStep) {
      case 'login':
        return (
          <LoginPage 
            onBack={handleBackToHome}
            onShowPricing={handleShowPricing}
          />
        );
        
      case 'pricing':
        return (
          <PricingPage 
            onBack={handleBackToHome}
            userEmail={newUserEmail}
            currentUserEmail={user?.email}
          />
        );
        
      case 'processing':
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
              <Header 
                onShowLogin={handleShowLogin}
                onShowPricing={handleShowPricing}
                onGoHome={handleGoHome}
              />
              
              <div className="container mx-auto px-4 py-12">
                <ProcessingStep 
                  uploadedImage={uploadedImage}
                  fileName={fileName}
                />
                
                {/* Debug Logs */}
                {debugLogs.length > 0 && (
                  <div className="mt-8 max-w-4xl mx-auto">
                    <div className="bg-black/90 backdrop-blur-lg rounded-xl p-4 border border-white/20">
                      <h3 className="text-white font-medium mb-2 flex items-center">
                        🔍 Logs de traitement
                        <button 
                          onClick={() => setDebugLogs([])}
                          className="ml-auto text-xs text-white/60 hover:text-white/80 px-2 py-1 rounded"
                        >
                          Effacer
                        </button>
                      </h3>
                      <div className="max-h-80 overflow-y-auto">
                        {debugLogs.map((log, index) => (
                          <div key={index} className="text-xs text-white/80 font-mono mb-1 break-words">
                            {log}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <Footer />
            </div>
          </div>
        );
        
      case 'results':
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
              <Header 
                onShowLogin={handleShowLogin}
                onShowPricing={handleShowPricing}
                onGoHome={handleGoHome}
              />
              
              <div className="container mx-auto px-4 py-12">
                <ResultsStep 
                  uploadedImage={uploadedImage}
                  generatedImage={generatedImage}
                  fileName={fileName}
                  onStartOver={handleStartOver}
                />
              </div>
              
              <Footer />
            </div>
          </div>
        );
        
      default: // 'upload'
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
              <Header 
                onShowLogin={handleShowLogin}
                onShowPricing={handleShowPricing}
                onGoHome={handleGoHome}
              />
              
              <div className="container mx-auto px-4 py-12">
                <UploadStep 
                  onImageUpload={handleImageUpload}
                  isProcessing={isProcessing}
                  processingError={processingError}
                  onShowLogin={handleShowLogin}
                  onShowPricing={handleShowPricing}
                />
              </div>
              
              <Footer />
            </div>
          </div>
        );
    }
  };

  console.log('🎨 App rendering complete');
  
  return renderCurrentStep();
};

console.log('🚀 === FIN APP.TSX ===');

export default App;