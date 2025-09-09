import React from 'react';
import { Sparkles, LogIn, CreditCard } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import UserMenu from './auth/UserMenu';

interface HeaderProps {
  onShowLogin: () => void;
  onShowPricing: () => void;
  onGoHome: () => void;
}

const Header: React.FC<HeaderProps> = ({ onShowLogin, onShowPricing, onGoHome }) => {
  const { isAuthenticated, user } = useAuth();

  return (
    <header className="relative z-10 p-6">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={onGoHome}
          className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
        >
          <div className="p-2 bg-white rounded-xl shadow-lg">
            <Sparkles className="w-6 h-6 text-vinted-500" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">Swear</h1>
            <p className="text-xs text-white/70">Photos Mode Pro</p>
          </div>
        </button>

        {/* Navigation */}
        <div className="flex items-center space-x-4">
          {isAuthenticated && user ? (
            <UserMenu />
          ) : (
            <>
              <button
                onClick={() => onShowPricing()}
                className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
              >
                <CreditCard className="w-4 h-4" />
                <span className="hidden sm:inline">Tarifs</span>
              </button>
              
              <button
                onClick={onShowLogin}
                className="flex items-center space-x-2 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-lg border border-white/20 hover:bg-white/20 transition-colors text-white"
              >
                <LogIn className="w-4 h-4" />
                <span className="hidden sm:inline">Connexion</span>
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;