import React, { useState } from 'react';
import { Download, Share2, RotateCcw, Star, ArrowRight, Sparkles } from 'lucide-react';

interface ResultsStepProps {
  uploadedImage: string | null;
  generatedImage: string | null;
  fileName: string;
  onStartOver: () => void;
}

const ResultsStep: React.FC<ResultsStepProps> = ({
  uploadedImage,
  generatedImage,
  fileName,
  onStartOver
}) => {
  const [showComparison, setShowComparison] = useState(true);
  const [downloadInitiated, setDownloadInitiated] = useState(false);

  const handleDownload = () => {
    if (generatedImage) {
      setDownloadInitiated(true);
      
      // Simulate download
      const link = document.createElement('a');
      link.href = generatedImage;
      link.download = `enhanced-${fileName}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setTimeout(() => setDownloadInitiated(false), 2000);
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      {/* Success Header */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce shadow-2xl">
          <Star className="w-8 h-8 text-vinted-500" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-3 drop-shadow-lg">
          Votre Photo Professionnelle est Prête !
        </h2>
        <p className="text-white/90 text-lg drop-shadow">
          Votre article de mode a été transformé en un superbe cliché sur mannequin
        </p>
      </div>

      {/* Toggle View */}
      <div className="flex justify-center mb-8">
        <div className="bg-white/10 backdrop-blur-lg rounded-lg p-1 shadow-xl border border-white/20">
          <button
            onClick={() => setShowComparison(true)}
            className={`
              px-4 py-2 text-sm font-medium rounded-md transition-all duration-200
              ${showComparison 
                ? 'bg-white text-vinted-500 shadow-lg' 
                : 'text-white/80 hover:text-white'
              }
            `}
          >
            Comparer
          </button>
          <button
            onClick={() => setShowComparison(false)}
            className={`
              px-4 py-2 text-sm font-medium rounded-md transition-all duration-200
              ${!showComparison 
                ? 'bg-white text-vinted-500 shadow-lg' 
                : 'text-white/80 hover:text-white'
              }
            `}
          >
            Résultat Final
          </button>
        </div>
      </div>

      {/* Image Display */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl mb-8 border border-white/20">
        {showComparison ? (
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <p className="text-sm font-medium text-white/80 mb-4 flex items-center justify-center">
                ORIGINAL
              </p>
              <div className="rounded-xl overflow-hidden shadow-2xl border border-white/20">
                {uploadedImage && (
                  <img 
                    src={uploadedImage} 
                    alt="Original"
                    className="w-full h-[500px] object-contain"
                  />
                )}
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-sm font-medium text-white/80 mb-4 flex items-center justify-center">
                <Sparkles className="w-4 h-4 mr-2 text-white" />
                AMÉLIORÉ
              </p>
              <div className="rounded-xl overflow-hidden shadow-2xl border border-white/20">
                {generatedImage && (
                  <img 
                    src={generatedImage} 
                    alt="Enhanced"
                    className="w-full object-contain"
                    style={{ width: '864px', height: '1184px' }}
                  />
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-lg mx-auto">
            <div className="rounded-xl overflow-hidden shadow-2xl border border-white/20">
              {generatedImage && (
                <img 
                  src={generatedImage} 
                  alt="Enhanced result"
                  className="w-full object-contain"
                  style={{ width: '864px', height: '1184px' }}
                />
              )}
            </div>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
        <button
          onClick={handleDownload}
          disabled={downloadInitiated}
          className={`
            flex items-center justify-center px-8 py-4 text-white font-medium rounded-xl transition-all duration-200
            ${downloadInitiated 
              ? 'bg-white/90 text-vinted-500 scale-95' 
              : 'bg-white text-[#09B1BA] hover:bg-white/90 hover:scale-105 shadow-xl'
            }
          `}
        >
          {downloadInitiated ? (
            <>
              <Download className="w-5 h-5 mr-2" />
              Téléchargé !
            </>
          ) : (
            <>
              <Download className="w-5 h-5 mr-2" />
              Télécharger la Photo Améliorée
            </>
          )}
        </button>
        
        <button
          onClick={onStartOver}
          className="flex items-center justify-center px-8 py-4 text-white font-medium rounded-xl border-2 border-white/30 hover:bg-white/10 transition-all duration-200 backdrop-blur-lg"
        >
          <RotateCcw className="w-5 h-5 mr-2" />
          Créer une Autre
        </button>
      </div>

      {/* Vinted Integration CTA */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center text-white border border-white/20 shadow-2xl">
        <h3 className="text-2xl font-bold mb-3">Prêt à Booster Vos Ventes Vinted ?</h3>
        <p className="text-white/90 mb-6 max-w-2xl mx-auto">
          Les photos professionnelles peuvent augmenter la visibilité et le prix de vente de vos articles jusqu'à 40%. 
          Votre photo améliorée est maintenant prête à être téléchargée sur Vinted !
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://vinted.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-white text-vinted-500 font-medium rounded-lg hover:bg-white/90 transition-colors duration-200 shadow-lg"
          >
            Publier sur Vinted
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
          <button className="inline-flex items-center px-6 py-3 text-white font-medium rounded-lg border border-white/30 hover:bg-white/10 transition-colors duration-200 backdrop-blur-lg">
            <Share2 className="w-4 h-4 mr-2" />
            Partager le Résultat
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsStep;