import React, { useState } from 'react';
import { Sparkles, User, Menu, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import UserMenu from './auth/UserMenu';

interface HeaderProps {
  onShowLogin?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onShowLogin }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isAuthenticated } = useAuth();

  return (
    <header className="bg-white/10 backdrop-blur-lg border-b border-white/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 max-w-6xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-white rounded-xl shadow-lg">
              <Sparkles className="w-6 h-6 text-vinted-500" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Swear</h1>
              <p className="text-sm text-white/80">Photos Mode Professionnelles</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6 text-sm text-white/80">
              <a 
                href="#contact" 
                className="hover:text-white transition-colors duration-200 cursor-pointer"
              >
                Contact
              </a>
              <a 
                href="#prix" 
                className="hover:text-white transition-colors duration-200 cursor-pointer"
              >
                Prix
              </a>
              {isAuthenticated ? (
                <UserMenu />
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
              <a 
                href="#prix" 
                className="text-white/80 hover:text-white transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-white/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Prix
              </a>
              {isAuthenticated ? (
                <div onClick={() => setIsMobileMenuOpen(false)}>
                  <UserMenu />
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