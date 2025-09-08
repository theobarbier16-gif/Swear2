import React, { useState } from 'react';
import { X, Mail, Lock, User, Eye, EyeOff, Loader2 } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'login' | 'register';
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, initialMode = 'login' }) => {
  const [mode, setMode] = useState<'login' | 'register'>(initialMode);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });

  const { login, register, isLoading, error, clearError } = useAuth();

  // Reset form when modal opens/closes or mode changes
  React.useEffect(() => {
    if (isOpen) {
      setFormData({ email: '', password: '', firstName: '', lastName: '' });
      clearError();
    }
  }, [isOpen, mode, clearError]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (mode === 'login') {
        await login({
          email: formData.email,
          password: formData.password,
        });
      } else {
        await register({
          email: formData.email,
          password: formData.password,
          firstName: formData.firstName,
          lastName: formData.lastName,
        });
      }
      onClose();
    } catch (error) {
      // L'erreur est gérée par le contexte
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop avec flou */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-sm mx-auto transform transition-all z-50">
        {/* Header */}
        <div className="flex items-center justify-between p-4 pb-3">
          <h2 className="text-xl font-bold text-gray-900">
            {mode === 'login' ? 'Connexion' : 'Inscription'}
          </h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="px-4 pb-4">
          {/* Error Message */}
          {error && (
            <div className="mb-3 p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          {/* Demo Credentials */}
          {mode === 'login' && (
            <div className="mb-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-blue-800 text-sm font-medium mb-1">Compte démo :</p>
              <p className="text-blue-600 text-xs">demo@swear.com / 123456</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-3">
            {/* First Name & Last Name (Register only) */}
            {mode === 'register' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Prénom
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vinted-500 focus:border-transparent text-sm bg-white text-gray-900"
                    placeholder="Prénom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nom
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vinted-500 focus:border-transparent text-sm bg-white text-gray-900"
                    placeholder="Nom"
                  />
                </div>
              </div>
            )}

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vinted-500 focus:border-transparent text-sm bg-white text-gray-900"
                  placeholder="votre@email.com"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mot de passe
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  minLength={6}
                  className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vinted-500 focus:border-transparent text-sm bg-white text-gray-900"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {mode === 'register' && (
                <p className="text-xs text-gray-500 mt-1">
                  Minimum 6 caractères
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-vinted-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-vinted-600 focus:ring-2 focus:ring-vinted-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-sm mt-4"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  {mode === 'login' ? 'Connexion...' : 'Création...'}
                </>
              ) : (
                mode === 'login' ? 'Se connecter' : 'Créer mon compte'
              )}
            </button>
          </form>

          {/* Switch Mode */}
          <div className="mt-3 text-center">
            <p className="text-gray-600 text-sm">
              {mode === 'login' ? "Pas de compte ?" : "Déjà un compte ?"}
              <button
                onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
                className="ml-1 text-vinted-500 hover:text-vinted-600 font-medium"
              >
                {mode === 'login' ? 'S\'inscrire' : 'Se connecter'}
              </button>
            </p>
          </div>

          {/* Benefits for Register */}
          {mode === 'register' && (
            <div className="mt-3 p-3 bg-gray-50 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2 text-sm">Avantages :</h4>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• 3 transformations gratuites</li>
                <li>• Historique de vos créations</li>
                <li>• Support prioritaire</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;