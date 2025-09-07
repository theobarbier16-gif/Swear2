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
      
      // Téléchargement optimisé pour mobile
      if (generatedImage.startsWith('blob:')) {
        // Pour les blobs, convertir en base64 puis télécharger
        fetch(generatedImage)
          .then(response => response.blob())
          .then(blob => {
            // Créer un lien de téléchargement compatible mobile
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `enhanced-${fileName.replace(/\.[^/.]+$/, '')}.jpg`;
            
            // Pour mobile, ouvrir dans un nouvel onglet si le téléchargement direct échoue
            if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
              link.target = '_blank';
              link.rel = 'noopener noreferrer';
            }
            
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            // Nettoyer l'URL temporaire
            setTimeout(() => window.URL.revokeObjectURL(url), 100);
          })
          .catch(error => {
            console.error('Erreur téléchargement:', error);
            // Fallback: ouvrir l'image dans un nouvel onglet
            window.open(generatedImage, '_blank');
          });
      } else if (generatedImage.startsWith('data:image/')) {
        // Pour les images base64
        try {
          const link = document.createElement('a');
          link.href = generatedImage;
          link.download = `enhanced-${fileName.replace(/\.[^/.]+$/, '')}.jpg`;
          
          // Pour mobile, ouvrir dans un nouvel onglet si nécessaire
          if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            // Convertir base64 en blob pour un meilleur support mobile
            const byteCharacters = atob(generatedImage.split(',')[1]);
            const byteNumbers = new Array(byteCharacters.length);
            for (let i = 0; i < byteCharacters.length; i++) {
              byteNumbers[i] = byteCharacters.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            const blob = new Blob([byteArray], { type: 'image/jpeg' });
            const url = window.URL.createObjectURL(blob);
            
            link.href = url;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            setTimeout(() => window.URL.revokeObjectURL(url), 100);
          } else {
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }
        } catch (error) {
          console.error('Erreur téléchargement base64:', error);
          window.open(generatedImage, '_blank');
        }
      } else {
        // Pour les URLs externes
        const link = document.createElement('a');
        link.href = generatedImage;
        link.download = `enhanced-${fileName.replace(/\.[^/.]+$/, '')}.jpg`;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
      
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
          <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
            <div className="text-center">
              <p className="text-sm font-medium text-white/80 mb-4 flex items-center justify-center">
                ORIGINAL
              </p>
              <div className="rounded-xl overflow-hidden shadow-2xl border border-white/20 mx-auto" style={{ width: '300px', height: '411px' }}>
                {uploadedImage && (
                  <img 
                    src={uploadedImage} 
                    alt="Original"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-sm font-medium text-white/80 mb-4 flex items-center justify-center">
                <Sparkles className="w-4 h-4 mr-2 text-white" />
                AMÉLIORÉ
              </p>
              <div className="rounded-xl overflow-hidden shadow-2xl border border-white/20 mx-auto" style={{ width: '300px', height: '411px' }}>
                {generatedImage && (
                  <img 
                    src={generatedImage} 
                    alt="Enhanced"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-center">
            <div className="rounded-xl overflow-hidden shadow-2xl border border-white/20" style={{ width: '300px', height: '411px' }}>
              {generatedImage && (
                <img 
                  src={generatedImage} 
                  alt="Enhanced result"
                  className="w-full h-full object-cover"
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
          style={{ color: '#09B1BA' }}
          className={`
            flex items-center justify-center px-8 py-4 font-medium rounded-xl transition-all duration-200
            ${downloadInitiated 
              ? 'bg-green-500 !text-white scale-95' 
              : 'bg-white hover:bg-white/90 hover:scale-105 shadow-xl'
            }
          `}
          title="Télécharger l'image améliorée"
        >
          {downloadInitiated ? (
            <>
              <Download className="w-5 h-5 mr-2 animate-bounce" />
              <span className="hidden sm:inline">Téléchargé !</span>
              <span className="sm:hidden">OK !</span>
            </>
          ) : (
            <>
              <Download className="w-5 h-5 mr-2" />
              <span className="hidden sm:inline">Télécharger la Photo Améliorée</span>
              <span className="sm:hidden">Télécharger</span>
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