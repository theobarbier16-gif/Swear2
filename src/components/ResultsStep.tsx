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
      
      // Solution mobile-first pour le téléchargement
      const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      
      const downloadImage = async () => {
        try {
          let imageBlob;
          
          // Convertir l'image en blob selon son type
          if (generatedImage.startsWith('blob:')) {
            const response = await fetch(generatedImage);
            imageBlob = await response.blob();
          } else if (generatedImage.startsWith('data:image/')) {
            // Convertir base64 en blob
            const response = await fetch(generatedImage);
            imageBlob = await response.blob();
          } else {
            // URL externe - essayer de la récupérer
            try {
              const response = await fetch(generatedImage);
              imageBlob = await response.blob();
            } catch {
              // Si on ne peut pas récupérer l'image, ouvrir dans un nouvel onglet
              window.open(generatedImage, '_blank');
              return;
            }
          }
          
          // Créer un nom de fichier unique
          const timestamp = new Date().toISOString().slice(0, 19).replace(/[:-]/g, '');
          const downloadFileName = `swear-enhanced-${timestamp}.jpg`;
          
          if (isMobile) {
            // Sur mobile, utiliser l'API Web Share si disponible
            if (navigator.share && navigator.canShare) {
              try {
                const file = new File([imageBlob], downloadFileName, { type: 'image/jpeg' });
                if (navigator.canShare({ files: [file] })) {
                  await navigator.share({
                    title: 'Photo Swear améliorée',
                    text: 'Voici ma photo mode améliorée avec Swear',
                    files: [file]
                  });
                  return;
                }
              } catch (shareError) {
                console.log('Partage échoué, tentative de téléchargement direct');
              }
            }
            
            // Fallback mobile : créer une URL et ouvrir dans un nouvel onglet
            const url = URL.createObjectURL(imageBlob);
            const newWindow = window.open();
            if (newWindow) {
              newWindow.document.write(`
                <html>
                  <head>
                    <title>Télécharger votre image</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <style>
                      body { 
                        margin: 0; 
                        padding: 20px; 
                        font-family: Arial, sans-serif; 
                        background: #f0f0f0;
                        text-align: center;
                      }
                      img { 
                        max-width: 100%; 
                        height: auto; 
                        border-radius: 10px;
                        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                        margin: 20px 0;
                      }
                      .download-btn {
                        display: inline-block;
                        padding: 15px 30px;
                        background: #09B1BA;
                        color: white;
                        text-decoration: none;
                        border-radius: 8px;
                        font-weight: bold;
                        margin: 10px;
                      }
                      .instructions {
                        background: white;
                        padding: 20px;
                        border-radius: 10px;
                        margin: 20px 0;
                        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                      }
                    </style>
                  </head>
                  <body>
                    <h2>🎉 Votre photo Swear est prête !</h2>
                    <img src="${url}" alt="Photo améliorée" />
                    <div class="instructions">
                      <p><strong>Pour sauvegarder sur mobile :</strong></p>
                      <p>📱 Appuyez longuement sur l'image</p>
                      <p>💾 Sélectionnez "Enregistrer l'image"</p>
                      <p>📁 L'image sera sauvée dans votre galerie</p>
                    </div>
                    <a href="${url}" download="${downloadFileName}" class="download-btn">
                      📥 Télécharger
                    </a>
                  </body>
                </html>
              `);
              newWindow.document.close();
            } else {
              // Si on ne peut pas ouvrir une nouvelle fenêtre, créer un lien temporaire
              const link = document.createElement('a');
              link.href = url;
              link.download = downloadFileName;
              link.style.display = 'none';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }
            
            // Nettoyer après un délai
            setTimeout(() => URL.revokeObjectURL(url), 10000);
            
          } else {
            // Sur desktop, téléchargement direct
            const url = URL.createObjectURL(imageBlob);
            const link = document.createElement('a');
            link.href = url;
            link.download = downloadFileName;
            link.style.display = 'none';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
          }
          
        } catch (error) {
          console.error('Erreur téléchargement:', error);
          // Dernier fallback : ouvrir l'image dans un nouvel onglet
          window.open(generatedImage, '_blank');
        }
      };
      
      downloadImage();
      
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