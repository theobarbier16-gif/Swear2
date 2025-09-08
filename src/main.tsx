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
console.error('🧪 TEST ERROR - Test d\'erreur pour vérifier la console');
console.warn('🧪 TEST WARNING - Test d\'avertissement');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {console.log('🚀 === DEBUT RENDER APP ===')}
    <AuthProvider>
      {console.log('🚀 === DEBUT AUTH PROVIDER ===')}
      <App />
    </AuthProvider>
  </StrictMode>
);

console.log('🚀 === FIN MAIN.TSX ===');
