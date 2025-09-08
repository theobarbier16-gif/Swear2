import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

console.log('🚀 === DEBUT FIREBASE.TS ===');
console.log('🚀 Environment:', import.meta.env.MODE);
console.log('🚀 Base URL:', import.meta.env.BASE_URL);

const firebaseConfig = {
  apiKey: "AIzaSyDRoNJkXmR7C3dt142AAz_hGCPpfKxkXxE",
  authDomain: "swear-30c84.firebaseapp.com",
  projectId: "swear-30c84",
  storageBucket: "swear-30c84.firebasestorage.app",
  messagingSenderId: "763991623859",
  appId: "1:763991623859:web:fd3ea15c87ae4562c608c6",
  measurementId: "G-2M6CF3JFJ8"
};

console.log('🚀 Firebase config:', firebaseConfig);

// Initialize Firebase
console.log('🚀 Initializing Firebase app...');
const app = initializeApp(firebaseConfig);

console.log('🔥 Firebase app initialized');
console.log('🔥 Project ID:', firebaseConfig.projectId);
console.log('🔥 Auth Domain:', firebaseConfig.authDomain);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
console.log('🔐 Firebase Auth initialized');
console.log('🔐 Auth current user:', auth.currentUser);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
console.log('🗄️ Firestore initialized');
console.log('🗄️ Firestore app:', db.app.name);
console.log('🗄️ Firestore settings:', db._delegate._databaseId);

// Initialize Analytics (optional)
export let analytics: any = null;
// Initialize Analytics (optional)
try {
  analytics = getAnalytics(app);
  console.log('📊 Analytics initialized:', analytics);
} catch (error) {
  console.warn('⚠️ Analytics initialization failed (normal in development):', error);
}

export default app;