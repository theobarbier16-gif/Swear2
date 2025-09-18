import React, { useState } from 'react';
import { useAuth } from './contexts/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import UploadStep from './components/UploadStep';
import ProcessingStep from './components/ProcessingStep';
import ResultsStep from './components/ResultsStep';
import AuthModal from './components/auth/AuthModal';
import PricingPage from './pages/PricingPage';

type Step = 'upload' | 'processing' | 'results';

function App() {
  const { user } = useAuth();
  const [currentStep, setCurrentStep] = useState<Step>('upload');
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [processedResults, setProcessedResults] = useState<any>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showPricing, setShowPricing] = useState(false);

  const handleImageUpload = (file: File) => {
    setUploadedImage(file);
    setCurrentStep('processing');
  };

  const handleProcessingComplete = (results: any) => {
    setProcessedResults(results);
    setCurrentStep('results');
  };

  const handleReset = () => {
    setCurrentStep('upload');
    setUploadedImage(null);
    setProcessedResults(null);
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 'upload':
        return (
          <UploadStep
            onImageUpload={handleImageUpload}
            onShowAuth={() => setShowAuthModal(true)}
            onShowPricing={() => setShowPricing(true)}
          />
        );
      case 'processing':
        return (
          <ProcessingStep
            image={uploadedImage}
            onComplete={handleProcessingComplete}
            onError={() => setCurrentStep('upload')}
          />
        );
      case 'results':
        return (
          <ResultsStep
            results={processedResults}
            onReset={handleReset}
          />
        );
      default:
        return null;
    }
  };

  if (showPricing) {
    return <PricingPage onClose={() => setShowPricing(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header onShowPricing={() => setShowPricing(true)} />
      
      <main className="container mx-auto px-4 py-8">
        {renderCurrentStep()}
      </main>

      <Footer />

      {showAuthModal && (
        <AuthModal onClose={() => setShowAuthModal(false)} />
      )}
    </div>
  );
}

export default App;