import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { AuthProvider } from './contexts/AuthContext';
import './index.css';

console.log('🚀 === DEBUT MAIN.TSX ===');
console.log('🚀 React version:', React.version);
console.log('🚀 Window object exists:', typeof window !== 'undefined');
console.log('🚀 Document ready state:', document.readyState);

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
