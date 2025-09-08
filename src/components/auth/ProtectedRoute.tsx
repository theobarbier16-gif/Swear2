import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import AuthModal from './AuthModal';

interface ProtectedRouteProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, fallback }) => {
  const { isAuthenticated, isLoading } = useAuth();
  const [showAuthModal, setShowAuthModal] = React.useState(false);

  React.useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      setShowAuthModal(true);
    }
  }, [isLoading, isAuthenticated]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-vinted-500"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <>
        {fallback || (
          <div className="text-center py-12">
            <p className="text-white/80 mb-4">Vous devez être connecté pour accéder à cette fonctionnalité</p>
            <button
              onClick={() => setShowAuthModal(true)}
              className="bg-white text-vinted-500 px-6 py-2 rounded-lg font-medium hover:bg-white/90 transition-colors"
            >
              Se connecter
            </button>
          </div>
        )}
        <AuthModal 
          isOpen={showAuthModal} 
          onClose={() => setShowAuthModal(false)} 
        />
      </>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;