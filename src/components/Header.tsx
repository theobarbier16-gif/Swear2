import React from 'react';
import { Sparkles } from 'lucide-react';

const Header: React.FC = () => {
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
          
          <div className="hidden md:flex items-center space-x-6 text-sm text-white/80">
            <span className="flex items-center">
              <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
              Traitement IA Disponible
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;