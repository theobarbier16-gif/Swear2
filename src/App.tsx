import React, { useState } from 'react';
import { Upload, Sparkles, Download, ArrowLeft, Check } from 'lucide-react';
import { processImageWithN8N, setDebugLogger } from './utils/imageProcessor';
import Header from './components/Header';
import UploadStep from './components/UploadStep';
import ProcessingStep from './components/ProcessingStep';
import ResultsStep from './components/ResultsStep';
import Footer from './components/Footer';

export type ProcessingStep = 'upload' | 'processing' | 'results';

export interface ClothingOptions {
  gender: 'homme' | 'femme' | 'enfant';
  size: 'xs' | 's' | 'm' | 'l' | 'xl';
  mirror: 'normal' | 'mirror';
}

function App() {
  const [currentStep, setCurrentStep] = useState<ProcessingStep>('upload');
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingError, setProcessingError] = useState<string | null>(null);
  const [debugLogs, setDebugLogs] = useState<string[]>([]);
  const [showDebug, setShowDebug] = useState(false);
  const [clothingOptions, setClothingOptions] = useState<ClothingOptions>({
    gender: 'femme',
    size: 'm',
    mirror: 'normal'
  });

  // Configurer le logger pour imageProcessor
  React.useEffect(() => {
    setDebugLogger((message: string) => {
      setDebugLogs(prev => [...prev.slice(-50), message]);
    });
  }, []);

  // Fonction pour ajouter des logs de debug
  const addDebugLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    const logMessage = `[${timestamp}] ${message}`;
    setDebugLogs(prev => [...prev.slice(-50), logMessage]); // Garder seulement les 50 derniers logs
    console.log(logMessage);
  };

  const handleImageUpload = async (imageUrl: string, name: string, file: File, options: ClothingOptions) => {
    addDebugLog('🚀 Début du processus d\'upload');
    setUploadedImage(imageUrl);
    setFileName(name);
    setClothingOptions(options);
    setProcessingError(null);
    setDebugLogs([]); // Reset les logs pour un nouveau traitement
    setCurrentStep('processing');
    setIsProcessing(true);
    
    try {
      // Process image with N8N webhook
      addDebugLog('📡 Appel du webhook N8N...');
      const result = await processImageWithN8N(file, options);
      
      if (result.success && result.imageUrl) {
        addDebugLog('✅ Traitement réussi !');
        setGeneratedImage(result.imageUrl);
        setCurrentStep('results');
      } else {
        addDebugLog(`❌ Échec du traitement: ${result.error}`);
        setProcessingError(result.error || 'Erreur lors du traitement de l\'image');
        setCurrentStep('upload');
      }
    } catch (error) {
      addDebugLog(`💥 Erreur critique: ${error}`);
      console.error('Error processing image:', error);
      setProcessingError('Erreur de connexion au service de traitement');
      setCurrentStep('upload');
    } finally {
      setIsProcessing(false);
      addDebugLog('🏁 Fin du processus');
    }
  };

  const handleStartOver = () => {
    setCurrentStep('upload');
    setUploadedImage(null);
    setGeneratedImage(null);
    setFileName('');
    setProcessingError(null);
    setIsProcessing(false);
    setDebugLogs([]);
    setShowDebug(false);
    setClothingOptions({ gender: 'femme', size: 'm', mirror: 'normal' });
  };

  const stepNumber = currentStep === 'upload' ? 1 : currentStep === 'processing' ? 2 : 3;

  return (
    <div className="min-h-screen bg-gradient-to-br from-vinted-500 via-vinted-400 to-vinted-600 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-white/8 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-vinted-600/20 to-transparent"></div>
      </div>
      
      <Header />
      
      {/* Debug Panel - Bouton flottant */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setShowDebug(!showDebug)}
          className="bg-white/20 backdrop-blur-lg text-white p-3 rounded-full shadow-lg border border-white/30 hover:bg-white/30 transition-all duration-200"
          title="Afficher les logs de debug"
        >
          🐛
        </button>
        
        {showDebug && (
          <div className="absolute bottom-16 right-0 w-80 max-h-96 bg-black/90 backdrop-blur-lg text-white text-xs rounded-lg shadow-2xl border border-white/20 overflow-hidden">
            <div className="p-3 border-b border-white/20 flex justify-between items-center">
              <span className="font-medium">Debug Logs</span>
              <button
                onClick={() => setDebugLogs([])}
                className="text-white/60 hover:text-white text-xs"
              >
                Clear
              </button>
            </div>
            <div className="p-3 max-h-80 overflow-y-auto">
              {debugLogs.length === 0 ? (
                <p className="text-white/60">Aucun log pour le moment...</p>
              ) : (
                debugLogs.map((log, index) => (
                  <div key={index} className="mb-1 break-words">
                    {log}
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>

      <main className="container mx-auto px-4 py-8 max-w-6xl relative z-10">
        {/* Progress Steps */}
        <div className="flex justify-center mb-12">
        </div>

        {/* Step Content */}
        {currentStep === 'upload' && (
          <UploadStep 
            onImageUpload={handleImageUpload} 
            isProcessing={isProcessing}
            processingError={processingError}
          />
        )}
        
        {currentStep === 'processing' && (
          <ProcessingStep uploadedImage={uploadedImage} fileName={fileName} />
        )}
        
        {currentStep === 'results' && (
          <ResultsStep 
            uploadedImage={uploadedImage}
            generatedImage={generatedImage}
            fileName={fileName}
            onStartOver={handleStartOver}
          />
        )}

        {/* Back Button */}
        {currentStep !== 'upload' && currentStep !== 'processing' && (
          <div className="flex justify-center mt-12">
            <button
              onClick={handleStartOver}
              className="flex items-center px-6 py-3 text-vinted-600 hover:text-vinted-700 transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Recommencer
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;