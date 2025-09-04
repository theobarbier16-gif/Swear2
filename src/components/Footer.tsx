import React from 'react';
import { Sparkles, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/20 backdrop-blur-lg text-white py-12 mt-20 border-t border-white/10">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-white rounded-xl shadow-lg">
                <Sparkles className="w-5 h-5 text-vinted-500" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Swear</h3>
                <p className="text-white/60 text-sm">Photos Mode Professionnelles</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed max-w-md">
              Transformez vos annonces mode avec la photographie professionnelle alimentée par l'IA. 
              Parfait pour les vendeurs Vinted qui veulent se démarquer et vendre plus rapidement.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Fonctionnalités</h4>
            <ul className="space-y-2 text-white/70">
              <li>Placement IA sur Mannequin</li>
              <li>Traitement Haute Qualité</li>
              <li>Téléchargements Instantanés</li>
              <li>Optimisé Mobile</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-white/70">
              <li>FAQ</li>
              <li>Nous Contacter</li>
              <li>Guide de Traitement</li>
              <li>Meilleures Pratiques</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-white/60 text-sm">
            © 2025 Swear. Tous droits réservés.
          </p>
          <p className="text-white/60 text-sm flex items-center mt-4 md:mt-0">
            Fait avec <Heart className="w-4 h-4 mx-1 text-red-400" /> pour les vendeurs mode
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;