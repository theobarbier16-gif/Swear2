import React, { useState, useRef } from 'react';
import { Upload, Sparkles, AlertCircle, Loader2, Camera, Zap, Crown, Star } from 'lucide-react';
import { ClothingOptions } from '../App';
import { useAuth } from '../contexts/AuthContext';

interface UploadStepProps {
  onImageUpload: (imageUrl: string, fileName: string, file: File, options: ClothingOptions) => void;
  isProcessing: boolean;
  processingError: string | null;
  onShowLogin: () => void;
  onShowPricing: () => void;
}

const UploadStep: React.FC<UploadStepProps> = ({ 
  onImageUpload, 
  isProcessing, 
  processingError,
  onShowLogin,
  onShowPricing
}) => {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [options, setOptions] = useState<ClothingOptions>({
    gender: 'femme',
    size: 'm',
    mirror: 'normal'
  });
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { isAuthenticated, user } = useAuth();

  // Vérifier si l'utilisateur a des crédits
  const hasCredits = user?.subscription?.creditsRemaining && user.subscription.creditsRemaining > 0;
  const creditsRemaining = user?.subscription?.creditsRemaining || 0;

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (file: File) => {
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileSelect(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (!isAuthenticated) {
      onShowLogin();
      return;
    }

    if (!hasCredits) {
      onShowPricing();
      return;
    }

    if (selectedFile && previewUrl) {
      onImageUpload(previewUrl, selectedFile.name, selectedFile, options);
    }
  };

  const resetSelection = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse shadow-2xl">
          <Sparkles className="w-10 h-10 text-vinted-500" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
          Transformez Vos Photos Mode
        </h1>
        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8 drop-shadow">
          Créez des images professionnelles sur mannequin avec l'IA. 
          Parfait pour booster vos ventes Vinted !
        </p>

        {/* User Status */}
        {isAuthenticated && user && (
          <div className="inline-flex items-center bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 border border-white/20 mb-6">
            <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
            <span className="text-white font-medium">
              {user.firstName} • {creditsRemaining} crédits restants
            </span>
          </div>
        )}
      </div>

      {/* Upload Section */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl mb-8 border border-white/20">
        {!selectedFile ? (
          <div
            className={`
              border-2 border-dashed rounded-xl p-12 text-center transition-all duration-300
              ${dragActive 
                ? 'border-white bg-white/20 scale-105' 
                : 'border-white/30 hover:border-white/50 hover:bg-white/5'
              }
            `}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <Camera className="w-16 h-16 text-white/70 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-2">
              Téléchargez Votre Photo
            </h3>
            <p className="text-white/80 mb-6 max-w-md mx-auto">
              Glissez-déposez votre image ou cliquez pour sélectionner. 
              Formats acceptés : JPG, PNG, WebP
            </p>
            
            <button
              onClick={() => fileInputRef.current?.click()}
              className="bg-white text-vinted-500 px-8 py-3 rounded-xl font-medium hover:bg-white/90 transition-colors shadow-lg hover:scale-105 transform duration-200"
            >
              Choisir une Image
            </button>
            
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileInputChange}
              className="hidden"
            />
            
            <p className="text-white/60 text-sm mt-4">
              Taille max : 25MB • Résolution recommandée : 1024x1024px
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Image Preview */}
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-64 h-80 rounded-xl overflow-hidden shadow-2xl border border-white/20">
                  <img 
                    src={previewUrl} 
                    alt="Preview" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <button
                  onClick={resetSelection}
                  className="w-full mt-4 text-white/80 hover:text-white text-sm underline"
                >
                  Changer d'image
                </button>
              </div>
              
              {/* Options */}
              <div className="flex-1 space-y-6">
                <h3 className="text-xl font-semibold text-white">Options de Transformation</h3>
                
                {/* Gender Selection */}
                <div>
                  <label className="block text-sm font-medium text-white/90 mb-3">
                    Type de Mannequin
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { value: 'femme', label: 'Femme', icon: '👩' },
                      { value: 'homme', label: 'Homme', icon: '👨' },
                      { value: 'enfant', label: 'Enfant', icon: '🧒' }
                    ].map((gender) => (
                      <button
                        key={gender.value}
                        onClick={() => setOptions(prev => ({ ...prev, gender: gender.value as any }))}
                        className={`
                          p-3 rounded-lg border-2 transition-all duration-200 text-center
                          ${options.gender === gender.value
                            ? 'border-white bg-white/20 text-white shadow-lg'
                            : 'border-white/30 text-white/80 hover:border-white/50 hover:bg-white/10'
                          }
                        `}
                      >
                        <div className="text-2xl mb-1">{gender.icon}</div>
                        <div className="text-sm font-medium">{gender.label}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Size Selection */}
                <div>
                  <label className="block text-sm font-medium text-white/90 mb-3">
                    Taille du Vêtement
                  </label>
                  <div className="grid grid-cols-5 gap-2">
                    {['xs', 's', 'm', 'l', 'xl'].map((size) => (
                      <button
                        key={size}
                        onClick={() => setOptions(prev => ({ ...prev, size: size as any }))}
                        className={`
                          py-2 px-3 rounded-lg border-2 transition-all duration-200 text-center font-medium
                          ${options.size === size
                            ? 'border-white bg-white/20 text-white shadow-lg'
                            : 'border-white/30 text-white/80 hover:border-white/50 hover:bg-white/10'
                          }
                        `}
                      >
                        {size.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Mirror Option */}
                <div>
                  <label className="block text-sm font-medium text-white/90 mb-3">
                    Style de Photo
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { value: 'normal', label: 'Normal', desc: 'Photo classique' },
                      { value: 'mirror', label: 'Miroir', desc: 'Effet miroir' }
                    ].map((mirror) => (
                      <button
                        key={mirror.value}
                        onClick={() => setOptions(prev => ({ ...prev, mirror: mirror.value as any }))}
                        className={`
                          p-3 rounded-lg border-2 transition-all duration-200 text-left
                          ${options.mirror === mirror.value
                            ? 'border-white bg-white/20 text-white shadow-lg'
                            : 'border-white/30 text-white/80 hover:border-white/50 hover:bg-white/10'
                          }
                        `}
                      >
                        <div className="font-medium">{mirror.label}</div>
                        <div className="text-xs text-white/60">{mirror.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Error Message */}
      {processingError && (
        <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-4 mb-6 backdrop-blur-lg">
          <div className="flex items-center">
            <AlertCircle className="w-5 h-5 text-red-300 mr-3 flex-shrink-0" />
            <p className="text-red-300">{processingError}</p>
          </div>
        </div>
      )}

      {/* Action Button */}
      {selectedFile && (
        <div className="text-center">
          {!isAuthenticated ? (
            <div className="space-y-4">
              <button
                onClick={onShowLogin}
                className="bg-white text-vinted-500 px-8 py-4 rounded-xl font-medium hover:bg-white/90 transition-all duration-200 shadow-lg hover:scale-105 transform"
              >
                Se connecter pour continuer
              </button>
              <p className="text-white/70 text-sm">
                Connectez-vous pour transformer votre image
              </p>
            </div>
          ) : !hasCredits ? (
            <div className="space-y-4">
              <button
                onClick={onShowPricing}
                className="bg-white text-vinted-500 px-8 py-4 rounded-xl font-medium hover:bg-white/90 transition-all duration-200 shadow-lg hover:scale-105 transform"
              >
                Recharger des crédits
              </button>
              <p className="text-white/70 text-sm">
                Vous n'avez plus de crédits. Rechargez pour continuer.
              </p>
            </div>
          ) : (
            <button
              onClick={handleUpload}
              disabled={isProcessing}
              className="bg-white text-vinted-500 px-8 py-4 rounded-xl font-medium hover:bg-white/90 transition-all duration-200 shadow-lg hover:scale-105 transform disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center mx-auto"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Transformation en cours...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 mr-2" />
                  Créer la Photo Professionnelle
                </>
              )}
            </button>
          )}
        </div>
      )}

      {/* Features Section */}
      <div className="mt-16 grid md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Rapide & Efficace</h3>
          <p className="text-white/80 text-sm">
            Transformation en moins de 30 secondes avec une qualité professionnelle
          </p>
        </div>
        
        <div className="text-center">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Star className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Qualité Premium</h3>
          <p className="text-white/80 text-sm">
            Images haute résolution parfaites pour vos annonces Vinted
          </p>
        </div>
        
        <div className="text-center">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Crown className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Boost Vos Ventes</h3>
          <p className="text-white/80 text-sm">
            Augmentez vos ventes jusqu'à 40% avec des photos professionnelles
          </p>
        </div>
      </div>
    </div>
  );
};

export default UploadStep;