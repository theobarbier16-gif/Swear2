import React, { useState } from 'react';
import { User, LogOut, Settings, CreditCard, History, ChevronDown } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const UserMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();

  if (!user) return null;

  const handleLogout = () => {
    logout();
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-white/10 backdrop-blur-lg px-3 py-2 rounded-lg border border-white/20 hover:bg-white/20 transition-colors text-white"
      >
        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
          <User className="w-4 h-4" />
        </div>
        <div className="hidden sm:block text-left">
          <p className="text-sm font-medium">{user.firstName}</p>
          <p className="text-xs text-white/70">
            {user.subscription?.creditsRemaining || 0} crédits
          </p>
        </div>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu */}
          <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 z-20 overflow-hidden">
            {/* User Info */}
            <div className="p-4 bg-gray-50 border-b border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-vinted-500 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    {user.firstName} {user.lastName}
                  </p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
              </div>
              
              {/* Subscription Info */}
              <div className="mt-3 p-2 bg-white rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Plan actuel</span>
                  <span className="text-sm font-medium text-vinted-600 capitalize">
                    {user.subscription?.plan || 'Free'}
                  </span>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-sm text-gray-600">Crédits restants</span>
                  <span className="text-sm font-medium text-gray-900">
                    {user.subscription?.creditsRemaining || 0}
                  </span>
                </div>
              </div>
            </div>

            {/* Menu Items */}
            <div className="py-2">
              <button className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center space-x-3 text-gray-700 hover:text-gray-900">
                <History className="w-4 h-4" />
                <span className="text-sm">Mes créations</span>
              </button>
              
              <button className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center space-x-3 text-gray-700 hover:text-gray-900">
                <CreditCard className="w-4 h-4" />
                <span className="text-sm">Abonnement</span>
              </button>
              
              <button className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center space-x-3 text-gray-700 hover:text-gray-900">
                <Settings className="w-4 h-4" />
                <span className="text-sm">Paramètres</span>
              </button>
              
              <hr className="my-2 border-gray-100" />
              
              <button 
                onClick={handleLogout}
                className="w-full px-4 py-2 text-left hover:bg-red-50 flex items-center space-x-3 text-red-600 hover:text-red-700"
              >
                <LogOut className="w-4 h-4" />
                <span className="text-sm">Se déconnecter</span>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default UserMenu;