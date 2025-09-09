import React, { useState, useEffect } from 'react';
import { Sparkles, Loader2 } from 'lucide-react';

interface ProcessingStepProps {
  uploadedImage: string | null;
  fileName: string;
}

const ProcessingStep: React.FC<ProcessingStepProps> = ({ uploadedImage, fileName }) => {
  const [progress, setProgress] = useState(0);
  const [currentTask, setCurrentTask] = useState('Analyzing clothing item...');

  useEffect(() => {
    const tasks = [
      'Analyse de l\'article vestimentaire...',
      'Sélection du mannequin optimal...',
      'Application de l\'amélioration IA...',
      'Finalisation de la photo professionnelle...'
    ];

    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = Math.min(prev + 2, 100);
        
        if (newProgress < 25) {
          setCurrentTask(tasks[0]);
        } else if (newProgress < 50) {
          setCurrentTask(tasks[1]);
        } else if (newProgress < 75) {
          setCurrentTask(tasks[2]);
        } else {
          setCurrentTask(tasks[3]);
        }
        
        return newProgress;
      });
    }, 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse shadow-2xl">
          <Sparkles className="w-10 h-10 text-vinted-500" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-3 drop-shadow-lg">
          Création de Votre Photo Professionnelle
        </h2>
        <p className="text-white/90 drop-shadow">
          Notre IA transforme "{fileName}" en un superbe cliché sur mannequin
        </p>
      </div>

      {/* Preview of uploaded image */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl mb-8 border border-white/20">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            {uploadedImage && (
              <div className="w-64 h-80 rounded-xl overflow-hidden shadow-2xl border border-white/20">
                <img 
                  src={uploadedImage} 
                  alt="Uploaded clothing"
                  className="w-full h-full object-cover bg-white/10"
                />
              </div>
            )}
          </div>
          
          <div className="flex-1 space-y-6">
            <div className="text-center lg:text-left">
              <h3 className="text-xl font-semibold text-white mb-2">Traitement de Votre Image</h3>
              <p className="text-white/80">{currentTask}</p>
            </div>
            
            {/* Progress Bar */}
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-white/80">Progression</span>
                <span className="font-medium text-white">{Math.round(progress)}%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-white to-white/80 rounded-full transition-all duration-300 ease-out shadow-lg"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Processing Steps */}
            <div className="space-y-3">
              {[
                'Analyse d\'image terminée',
                'Sélection de mannequin optimisée',
                'Amélioration IA en cours',
                'Photo professionnelle prête'
              ].map((step, index) => {
                const isComplete = progress > (index + 1) * 25;
                const isCurrent = progress >= index * 25 && progress < (index + 1) * 25;
                
                return (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`
                      w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all duration-300
                      ${isComplete 
                        ? 'bg-white border-white shadow-lg' 
                        : isCurrent 
                        ? 'border-white' 
                        : 'border-white/30'
                      }
                    `}>
                      {isComplete && <div className="w-2 h-2 bg-vinted-500 rounded-full" />}
                      {isCurrent && <Loader2 className="w-3 h-3 text-white animate-spin" />}
                    </div>
                    <span className={`
                      text-sm transition-colors duration-300
                      ${isComplete ? 'text-white font-medium' : isCurrent ? 'text-white font-medium' : 'text-white/60'}
                    `}>
                      {step}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Processing Time Estimate */}
      <div className="text-center">
        <p className="text-white/60 text-sm">
          Temps estimé : 15-30 secondes • Traitement haute qualité en cours
        </p>
      </div>
    </div>
  );
};

export default ProcessingStep;