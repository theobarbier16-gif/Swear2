import React, { useState } from 'react';
import { Upload, Sparkles, Download, ArrowLeft, Check } from 'lucide-react';
import { processImageWithN8N } from './utils/imageProcessor';
import Header from './components/Header';
import UploadStep from './components/UploadStep';
import ProcessingStep from './components/ProcessingStep';
import ResultsStep from './components/ResultsStep';
import Footer from './components/Footer';

export type ProcessingStep = 'upload' | 'processing' | 'results';

export interface ClothingOptions {
  gender: 'homme' | 'femme' | 'enfant';
  size: 'xs' | 's' | 'm' | 'l' | 'xl';
}

function App() {
  const [currentStep, setCurrentStep] = useState<ProcessingStep>('upload');
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingError, setProcessingError] = useState<string | null>(null);
  const [clothingOptions, setClothingOptions] = useState<ClothingOptions>({
    gender: 'femme',
    size: 'm'
  });

  const handleImageUpload = async (imageUrl: string, name: string, file: File, options: ClothingOptions) => {
    setUploadedImage(imageUrl);
    setFileName(name);
    setClothingOptions(options);
    setProcessingError(null);
    setCurrentStep('processing');
    setIsProcessing(true);
    
    try {
      // Process image with N8N webhook
      const result = await processImageWithN8N(file, options);
      
      if (result.success && result.imageUrl) {
        setGeneratedImage(result.imageUrl);
        setCurrentStep('results');
      } else {
        setProcessingError(result.error || 'Erreur lors du traitement de l\'image');
        setCurrentStep('upload');
      }
    } catch (error) {
      console.error('Error processing image:', error);
      setProcessingError('Erreur de connexion au service de traitement');
      setCurrentStep('upload');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleStartOver = () => {
    setCurrentStep('upload');
    setUploadedImage(null);
    setGeneratedImage(null);
    setFileName('');
    setProcessingError(null);
    setIsProcessing(false);
    setClothingOptions({ gender: 'femme', size: 'm' });
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