import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyDRoNJkXmR7C3dt142AAz_hGCPpfKxkXxE",
  authDomain: "swear-30c84.firebaseapp.com",
  projectId: "swear-30c84",
  storageBucket: "swear-30c84.firebasestorage.app",
  messagingSenderId: "763991623859",
  appId: "1:763991623859:web:fd3ea15c87ae4562c608c6",
  measurementId: "G-2M6CF3JFJ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Analytics (optional)
export const analytics = getAnalytics(app);

export default app;