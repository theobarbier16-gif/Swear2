import React, { useState } from 'react';
import { Sparkles, User, Menu, X, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import UserMenu from './auth/UserMenu';

interface HeaderProps {
  onShowLogin?: () => void;
  onShowPricing?: () => void;
  onGoHome?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onShowLogin, onShowPricing, onGoHome }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    if (onGoHome) {
      onGoHome();
    } else {
      // Fallback: refresh the page
      window.location.reload();
    }
  };

  return (
    <header className="bg-white/10 backdrop-blur-lg border-b border-white/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 max-w-6xl">
        <div className="flex items-center justify-between">
          <button 
            onClick={handleLogoClick}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200 cursor-pointer"
          >
            <div className="p-2 bg-white rounded-xl shadow-lg">
              <Sparkles className="w-6 h-6 text-vinted-500" />
            </div>
            <h1 className="text-xl font-bold text-white">Swear</h1>
          </button>
          
          <div className="flex items-center space-x-6">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6 text-sm text-white/80">
              <a 
                href="#contact" 
                className="hover:text-white transition-colors duration-200 cursor-pointer"
              >
                Contact
              </a>
              <button 
                onClick={onShowPricing}
                className="hover:text-white transition-colors duration-200 cursor-pointer"
              >
                Prix
              </button>
              {isAuthenticated ? (
                <div className="flex items-center space-x-4">
                  <span className="text-white/90 text-sm">
                    Bonjour, {user?.firstName}
                    {user?.hasPaid && (
                      <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full">
                        {user.subscription?.plan === 'pro' ? 'Pro' : user.subscription?.plan === 'starter' ? 'Starter' : 'Premium'}
                      </span>
                    )}
                  </span>
                  <button
                    onClick={() => window.location.reload()}
                    className="text-xs text-white/60 hover:text-white/80 transition-colors"
                    title="Rafraîchir les données"
                  >
                    🔄
                  </button>
                  {user?.hasPaid && (
                    <div className="text-xs text-white/60">
                      {user.subscription?.creditsRemaining || 0} crédits
                    </div>
                  )}
                  <button
                    onClick={handleLogout}
                    className="flex items-center hover:text-white transition-colors duration-200 bg-white/10 backdrop-blur-lg px-3 py-2 rounded-lg border border-white/20 hover:bg-white/20"
                    title="Se déconnecter"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Déconnexion
                  </button>
                </div>
              ) : (
                <button 
                  onClick={onShowLogin}
                  className="flex items-center hover:text-white transition-colors duration-200 bg-white/10 backdrop-blur-lg px-3 py-2 rounded-lg border border-white/20 hover:bg-white/20"
                >
                  <User className="w-4 h-4 mr-2" />
                  Connexion
                </button>
              )}
            </nav>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 hover:bg-white/20 transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <Menu className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-white/20">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#contact" 
                className="text-white/80 hover:text-white transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-white/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <button 
                onClick={() => {
                  onShowPricing?.();
                  setIsMobileMenuOpen(false);
                }}
                className="text-white/80 hover:text-white transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-white/10 cursor-pointer"
              >
                Prix
              </button>
              {isAuthenticated ? (
                <div className="space-y-2">
                  <div className="text-white/90 py-2 px-4">
                    Bonjour, {user?.firstName} !
                    {user?.hasPaid && (
                      <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full">
                        {user.subscription?.plan === 'pro' ? 'Pro' : user.subscription?.plan === 'starter' ? 'Starter' : 'Premium'}
                      </span>
                    )}
                    {user?.hasPaid && (
                      <div className="text-xs text-white/60 mt-1">
                        {user.subscription?.creditsRemaining || 0} crédits restants
                      </div>
                    )}
                  </div>
                  <button 
                    onClick={() => window.location.reload()}
                    className="flex items-center text-white/80 hover:text-white transition-colors duration-200 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-lg border border-white/20 hover:bg-white/20 text-left w-full"
                  >
                    🔄 Rafraîchir les données
                  </button>
                  <button 
                    onClick={handleLogout}
                    className="flex items-center text-white/80 hover:text-white transition-colors duration-200 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-lg border border-white/20 hover:bg-white/20 text-left w-full"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Se déconnecter
                  </button>
                </div>
              ) : (
                <button 
                  className="flex items-center text-white/80 hover:text-white transition-colors duration-200 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-lg border border-white/20 hover:bg-white/20 text-left"
                  onClick={() => {
                    onShowLogin?.();
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <User className="w-4 h-4 mr-2" />
                  Connexion
                </button>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;