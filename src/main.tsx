import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App.tsx';
import { AuthProvider } from './contexts/AuthContext';
import './index.css';

console.log('🚀 === DEBUT MAIN.TSX ===');
console.log('🚀 React version:', React.version);
console.log('🚀 Window object exists:', typeof window !== 'undefined');
console.log('🚀 Document ready state:', document.readyState);
console.log('🚀 Root element exists:', !!document.getElementById('root'));

// Test basique pour voir si les logs fonctionnent
console.log('🧪 TEST CONSOLE - Si vous voyez ceci, les logs fonctionnent !');
console.warn('🧪 TEST WARNING - Test d\'avertissement');

const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error('❌ ERREUR CRITIQUE: Element root non trouvé !');
  throw new Error('Root element not found');
}

try {
  console.log('🚀 === CREATION ROOT REACT ===');
  const root = createRoot(rootElement);
  
  console.log('🚀 === DEBUT RENDER APP ===');
  root.render(
    <StrictMode>
      <AuthProvider>
        <App />
      </AuthProvider>
    </StrictMode>
  );
  
  console.log('✅ === APP RENDU AVEC SUCCES ===');
} catch (error) {
  console.error('❌ === ERREUR CRITIQUE LORS DU RENDU ===');
  console.error('❌ Erreur:', error);
  console.error('❌ Stack:', error?.stack);
  
  // Afficher une erreur basique dans le DOM
  rootElement.innerHTML = `
    <div style="padding: 20px; background: #fee; border: 1px solid #fcc; margin: 20px; border-radius: 8px;">
      <h2 style="color: #c00;">Erreur de chargement</h2>
      <p>Une erreur s'est produite lors du chargement de l'application.</p>
      <p><strong>Erreur:</strong> ${error?.message || 'Erreur inconnue'}</p>
      <p>Vérifiez la console pour plus de détails.</p>
    </div>
  `;
}

console.log('🚀 === FIN MAIN.TSX ===');