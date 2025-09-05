import React, { useCallback, useState } from 'react';
import { Upload, ImageIcon, Sparkles, AlertCircle, User, Ruler } from 'lucide-react';
import { ClothingOptions } from '../App';

interface UploadStepProps {
  onImageUpload: (imageUrl: string, fileName: string, file: File, options: ClothingOptions) => void;
  isProcessing?: boolean;
  processingError?: string | null;
}

const UploadStep: React.FC<UploadStepProps> = ({ onImageUpload, isProcessing, processingError }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [clothingOptions, setClothingOptions] = useState<ClothingOptions>({
    gender: 'femme',
    size: 'm'
  });

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    const imageFile = files.find(file => file.type.startsWith('image/'));
    
    if (imageFile) {
      const url = URL.createObjectURL(imageFile);
      onImageUpload(url, imageFile.name, imageFile, clothingOptions);
    }
  }, [onImageUpload, clothingOptions]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const url = URL.createObjectURL(file);
      onImageUpload(url, file.name, file, clothingOptions);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
          Donnez vie à vos vêtements en quelques secondes
        </h1>
        <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow">
          Ne perdez plus de ventes à cause de photos qui ne donnent pas envie. Avec Swear, générez en un clic des images professionnelles qui mettent vos vêtements en valeur et boostent vos annonces
        </p>
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
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Upload Area */}
      {/* Clothing Options */}
      <div className="max-w-2xl mx-auto mb-8">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <User className="w-5 h-5 mr-2" />
            Options du Vêtement
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Gender Selection */}
            <div>
              <label className="block text-sm font-medium text-white/80 mb-3">
                Genre
              </label>
              <div className="space-y-2">
                {[
                  { value: 'femme', label: 'Femme' },
                  { value: 'homme', label: 'Homme' },
                  { value: 'enfant', label: 'Enfant' }
                ].map((option) => (
                  <label key={option.value} className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      value={option.value}
                      checked={clothingOptions.gender === option.value}
                      onChange={(e) => setClothingOptions(prev => ({
                        ...prev,
                        gender: e.target.value as ClothingOptions['gender']
                      }))}
                      className="w-4 h-4 text-vinted-500 bg-white/20 border-white/30 focus:ring-vinted-500 focus:ring-2"
                    />
                    <span className="ml-2 text-white/90">{option.label}</span>
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
              <select
                value={clothingOptions.size}
                onChange={(e) => setClothingOptions(prev => ({
                  ...prev,
                  size: e.target.value as ClothingOptions['size']
                }))}
                className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:ring-2 focus:ring-vinted-500 focus:border-transparent backdrop-blur-lg"
              >
                <option value="xs" className="bg-gray-800 text-white">XS</option>
                <option value="s" className="bg-gray-800 text-white">S</option>
                <option value="m" className="bg-gray-800 text-white">M</option>
                <option value="l" className="bg-gray-800 text-white">L</option>
                <option value="xl" className="bg-gray-800 text-white">XL</option>
              </select>
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
              {isProcessing ? 'Traitement...' : 'Choisir un Fichier'}
            </button>
            
            <p className="text-xs text-white/60 mt-4">
              Supporte JPG, PNG, WebP • Max 10Mo
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