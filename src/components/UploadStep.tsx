import React, { useCallback, useState } from 'react';
import { Upload, ImageIcon, Sparkles, AlertCircle, User, Ruler } from 'lucide-react';
import { ClothingOptions } from '../App';
import { useAuth } from '../contexts/AuthContext';

interface UploadStepProps {
  onImageUpload: (imageUrl: string, fileName: string, file: File, options: ClothingOptions) => void;
  isProcessing?: boolean;
  processingError?: string | null;
  onShowLogin?: () => void;
  onShowPricing?: () => void;
}

const UploadStep: React.FC<UploadStepProps> = ({ onImageUpload, isProcessing, processingError, onShowLogin, onShowPricing }) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const { isAuthenticated, user } = useAuth();
  const [clothingOptions, setClothingOptions] = useState<ClothingOptions>({
    gender: 'femme',
    size: 'm'
  });

  const triggerFileSelect = () => {
    if (!isProcessing && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    const imageFile = files.find(file => file.type.startsWith('image/'));
    
    if (imageFile) {
      // Créer une version redimensionnée pour l'affichage
      resizeImageForDisplay(imageFile).then(({ displayUrl, processedFile }) => {
        onImageUpload(displayUrl, imageFile.name, processedFile, clothingOptions);
      });
    }
  }, [onImageUpload, clothingOptions]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      // Vérifier si l'utilisateur est connecté et a des crédits
      if (!isAuthenticated) {
        onShowLogin?.();
        return;
      }
      
      // Vérifier seulement les crédits (peu importe le plan)
      if ((user?.subscription?.creditsRemaining || 0) <= 0) {
        console.log('💳 Plus de crédits disponibles, redirection vers pricing');
        onShowPricing?.();
        return;
      }
      
      // Créer une version redimensionnée pour l'affichage
      resizeImageForDisplay(file).then(({ displayUrl, processedFile }) => {
        onImageUpload(displayUrl, file.name, processedFile, clothingOptions);
      });
    }
  };

  // Fonction pour redimensionner l'image pour l'affichage
  const resizeImageForDisplay = (file: File): Promise<{ displayUrl: string, processedFile: File }> => {
    return new Promise((resolve) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();
      
      if (!ctx) {
        // Fallback si canvas non disponible
        const url = URL.createObjectURL(file);
        resolve({ displayUrl: url, processedFile: file });
        return;
      }
      
      img.onload = () => {
        // Dimensions cibles pour l'affichage (plus petites)
        const displayWidth = 300;
        const displayHeight = 400;
        
        canvas.width = displayWidth;
        canvas.height = displayHeight;
        
        // Fond blanc
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, displayWidth, displayHeight);
        
        // Calculer les dimensions pour maintenir le ratio
        const imgRatio = img.width / img.height;
        const targetRatio = displayWidth / displayHeight;
        
        let drawWidth, drawHeight, offsetX, offsetY;
        
        // Toujours remplir complètement (crop si nécessaire)
        if (imgRatio > targetRatio) {
          // Image plus large - crop les côtés
          drawHeight = displayHeight;
          drawWidth = displayHeight * imgRatio;
        } else {
          // Image plus haute - crop le haut/bas
          drawWidth = displayWidth;
          drawHeight = displayWidth / imgRatio;
        }
        
        // Centrer l'image
        offsetX = (displayWidth - drawWidth) / 2;
        offsetY = (displayHeight - drawHeight) / 2;
        
        // Dessiner l'image
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
        
        // Créer l'URL d'affichage
        canvas.toBlob((blob) => {
          if (blob) {
            const displayUrl = URL.createObjectURL(blob);
            const processedFile = new File([blob], file.name, {
              type: 'image/jpeg',
              lastModified: Date.now()
            });
            resolve({ displayUrl, processedFile });
          } else {
            // Fallback
            const url = URL.createObjectURL(file);
            resolve({ displayUrl: url, processedFile: file });
          }
        }, 'image/jpeg', 0.9);
      };
      
      img.onerror = () => {
        // Fallback en cas d'erreur
        const url = URL.createObjectURL(file);
        resolve({ displayUrl: url, processedFile: file });
      };
      
      img.src = URL.createObjectURL(file);
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
          Donnez vie à vos vêtements en quelques secondes
        </h1>
        <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow">
          Ne perdez plus de ventes à cause de photos qui ne donnent pas envie. Avec Swear, générez en un clic des images professionnelles qui mettent vos vêtements en valeur et boostent vos ventes
        </p>
        
        {/* Trust Indicators */}
        <div className="hidden sm:flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
          <div className="flex items-center text-white/90">
            <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
            <span className="text-sm font-medium">Rendus ultra-réalistes</span>
          </div>
          <div className="flex items-center text-white/90">
            <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
            <span className="text-sm font-medium">Génération en moins de 10s</span>
          </div>
          <div className="flex items-center text-white/90">
            <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
            <span className="text-sm font-medium">Adapté à Vinted & marketplaces</span>
          </div>
        </div>
      </div>

      {/* Call-to-Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
        <button
          onClick={onShowLogin}
          className="flex items-center justify-center px-8 py-4 bg-white text-vinted-500 font-semibold rounded-xl hover:bg-white/90 transition-all duration-200 shadow-xl hover:scale-105"
        >
          <span className="mr-2">🎯</span>
          Essayer gratuitement
        </button>
        
        <button
          onClick={onShowPricing}
          className="flex items-center justify-center px-8 py-4 bg-white/20 backdrop-blur-lg text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/30 hover:border-white/50 transition-all duration-200 shadow-xl hover:scale-105"
        >
          <span className="mr-2">⭐</span>
          S'abonner
        </button>
      </div>

      {/* Error Message */}
      {processingError && (
        <div className="max-w-2xl mx-auto mb-8">
          <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-4 backdrop-blur-lg">
            <div className="flex items-center">
              <AlertCircle className="w-5 h-5 text-red-400 mr-3" />
              <div>
                <h4 className="text-red-400 font-medium">Erreur de traitement</h4>
                <p className="text-red-300 text-sm">{processingError}</p>
                <p className="text-red-200 text-xs mt-2">
                  💡 En cas de problème de connexion, l'application passe automatiquement en mode démonstration
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Upload Area */}
      {/* Clothing Options */}
      <div className="max-w-2xl mx-auto mb-8">
        {/* Credits Display */}
        {isAuthenticated && user && (
          <div className="mb-6 p-4 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-white font-medium">Bienvenue, {user.firstName} !</h4>
                <p className="text-white/70 text-sm">
                  {user.hasPaid 
                    ? `Plan ${user.subscription?.plan === 'pro' ? 'Pro' : user.subscription?.plan === 'starter' ? 'Starter' : 'Premium'} • ${user.subscription?.creditsRemaining || 0} crédits restants`
                    : 'Plan gratuit • Abonnement requis pour utiliser le service'
                  }
                </p>
                {user.hasPaid && (
                  <p className="text-green-400 text-xs mt-1">
                    ✅ Accès complet activé
                  </p>
                )}
                {!user.hasPaid && (
                  <p className="text-yellow-400 text-xs mt-1">
                    ⚠️ Abonnement requis pour générer des images
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                {!user.hasPaid && (
                  <button 
                    onClick={onShowPricing}
                    className="bg-white text-vinted-500 px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/90 transition-colors"
                  >
                    Souscrire
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
        
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <User className="w-5 h-5 mr-2" />
            Options du Vêtement
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Gender Selection */}
            <div>
              <label className="block text-sm font-medium text-white/80 mb-3">
                Genre
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { value: 'femme', label: 'Femme' },
                  { value: 'homme', label: 'Homme' },
                  { value: 'enfant', label: 'Enfant' }
                ].map((option) => (
                  <label key={option.value} className="cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      value={option.value}
                      checked={clothingOptions.gender === option.value}
                      onChange={(e) => setClothingOptions(prev => ({
                        ...prev,
                        gender: e.target.value as ClothingOptions['gender']
                      }))}
                      className="sr-only"
                    />
                    <div className={`
                      px-2 py-3 rounded-xl text-center text-sm font-medium transition-all duration-200 border-2 min-h-[48px] flex items-center justify-center
                      ${clothingOptions.gender === option.value
                        ? 'bg-white text-vinted-600 border-white shadow-lg scale-105'
                        : 'bg-white/10 text-white/80 border-white/20 hover:bg-white/20 hover:border-white/40'
                      }
                    `}>
                      {option.label}
                    </div>
                  </label>
                ))}
              </div>
            </div>
            
            {/* Size Selection */}
            <div>
              <label className="block text-sm font-medium text-white/80 mb-3 flex items-center">
                <Ruler className="w-4 h-4 mr-1" />
                Taille
              </label>
              <div className="grid grid-cols-5 gap-2">
                {[
                  { value: 'xs', label: 'XS' },
                  { value: 's', label: 'S' },
                  { value: 'm', label: 'M' },
                  { value: 'l', label: 'L' },
                  { value: 'xl', label: 'XL' }
                ].map((size) => (
                  <button
                    key={size.value}
                    type="button"
                    onClick={() => setClothingOptions(prev => ({
                      ...prev,
                      size: size.value as ClothingOptions['size']
                    }))}
                    className={`
                      px-2 py-3 rounded-xl text-sm font-medium transition-all duration-200 border-2
                      ${clothingOptions.size === size.value
                        ? 'bg-white text-vinted-600 border-white shadow-lg scale-105'
                        : 'bg-white/10 text-white/80 border-white/20 hover:bg-white/20 hover:border-white/40'
                      }
                    `}
                  >
                    {size.label}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Mirror Option */}
            <div>
              <label className="block text-sm font-medium text-white/80 mb-3">
                Vue
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { value: 'normal', label: 'Normale' },
                  { value: 'mirror', label: 'Miroir' }
                ].map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setClothingOptions(prev => ({
                      ...prev,
                      mirror: option.value as ClothingOptions['mirror']
                    }))}
                    className={`
                      px-3 py-3 rounded-xl text-sm font-medium transition-all duration-200 border-2
                      ${clothingOptions.mirror === option.value
                        ? 'bg-white text-vinted-600 border-white shadow-lg scale-105'
                        : 'bg-white/10 text-white/80 border-white/20 hover:bg-white/20 hover:border-white/40'
                      }
                    `}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto mb-12">
        <div
          className={`
            relative border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 backdrop-blur-lg
            ${isProcessing 
              ? 'border-white/20 bg-white/5 cursor-not-allowed opacity-50' 
              : isDragging 
              ? 'border-white bg-white/20 scale-105 shadow-2xl' 
              : 'border-white/30 bg-white/10 hover:border-white/50 hover:bg-white/20 shadow-xl cursor-pointer'
            }
          `}
          onDrop={handleDrop}
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            disabled={isProcessing}
            className={`absolute inset-0 w-full h-full opacity-0 ${isProcessing ? 'cursor-not-allowed' : 'cursor-pointer'}`}
          />
          
          <div className="flex flex-col items-center">
            <div className={`
              w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-300
              ${isDragging ? 'bg-white scale-110 shadow-lg' : 'bg-white/20 backdrop-blur'}
              ${!isProcessing ? 'cursor-pointer hover:scale-110' : 'cursor-not-allowed'}
            `}>
              <Upload className={`
                w-8 h-8 transition-colors duration-300
                ${isDragging ? 'text-vinted-500' : 'text-white'}
              `} />
            </div>
            
            <h3 className="text-xl font-semibold text-white mb-2 drop-shadow">
              {isProcessing 
                ? 'Traitement en cours...' 
                : isDragging 
                ? 'Déposez votre photo ici !' 
                : 'Téléchargez Votre Photo de Vêtement'
              }
            </h3>
            
            <p className="text-white/80 mb-6">
              {isProcessing 
                ? 'Votre image est en cours de traitement par notre IA...' 
                : 'Glissez-déposez votre image, ou cliquez pour parcourir'
              }
            </p>
            
            <button 
              disabled={isProcessing}
              className={`
                px-8 py-3 rounded-xl font-medium transition-all duration-200 shadow-lg
                ${isProcessing 
                  ? 'bg-white/50 text-vinted-400 cursor-not-allowed' 
                  : 'bg-white text-vinted-500 hover:bg-white/90 hover:shadow-xl hover:scale-105'
                }
              `}
            >
              {isProcessing 
                ? 'Traitement...' 
                : !isAuthenticated 
                ? 'Se connecter pour commencer'
                : !user?.hasPaid
                ? 'Abonnement requis'
                : 'Choisir un Fichier'
              }
            </button>
            
            <p className="text-xs text-white/60 mt-4">
              Supporte JPG, PNG, WebP • Max 25Mo
            </p>
          </div>
        </div>
      </div>
      

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="text-center p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Upload className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-semibold text-white mb-2">Upload Facile</h3>
          <p className="text-white/80 text-sm">Glissez-déposez ou cliquez pour télécharger vos photos de vêtements</p>
        </div>
        
        <div className="text-center p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-semibold text-white mb-2">Amélioration IA</h3>
          <p className="text-white/80 text-sm">L'IA avancée place vos articles sur des mannequins professionnels</p>
        </div>
        
        <div className="text-center p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
            <ImageIcon className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-semibold text-white mb-2">Haute Qualité</h3>
          <p className="text-white/80 text-sm">Téléchargez des photos professionnelles prêtes pour vos annonces Vinted</p>
        </div>
      </div>
      
    </div>
  );
};

export default UploadStep;