import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { 
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile
} from 'firebase/auth';
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';

// Fonction de logging pour AuthContext
const logAuth = (level: 'INFO' | 'WARN' | 'ERROR', message: string, data?: any) => {
  const timestamp = new Date().toISOString();
  const logMessage = `[AUTH-CONTEXT] [${timestamp}] [${level}] ${message}`;
  
  if (level === 'ERROR') {
    console.error(logMessage, data ? JSON.stringify(data, null, 2) : '');
  } else if (level === 'WARN') {
    console.warn(logMessage, data ? JSON.stringify(data, null, 2) : '');
  } else {
    console.log(logMessage, data ? JSON.stringify(data, null, 2) : '');
  }
};
interface UserSubscription {
  plan: 'free' | 'starter' | 'pro';
  creditsRemaining: number;
  maxCredits: number;
  renewalDate?: Date;
}

interface AuthUser {
  uid: string;
  email: string | null;
  displayName: string | null;
  firstName?: string;
  lastName?: string;
  hasPaid?: boolean;
  firestoreId?: string;
  subscription?: UserSubscription;
}

interface LoginCredentials {
  email: string;
  password: string;
}

interface RegisterCredentials {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

interface AuthContextType {
  user: AuthUser | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (credentials: RegisterCredentials) => Promise<void>;
  logout: () => Promise<void>;
  clearError: () => void;
  updateUserPaymentStatus: (hasPaid: boolean, plan?: string) => Promise<void>;
  decrementCredits: () => Promise<boolean>;
  refundCredits: () => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getCreditsForPlan = (plan: string): number => {
    switch (plan) {
      case 'abonnement':
        return 25;
      case 'starter':
        return 25;
      case 'pro':
        return 150;
      default:
        return 3; // free plan
    }
  };

  const clearError = () => {
    setError(null);
  };
  const loadUserData = async (firebaseUser: User) => {
    try {
      logAuth('INFO', 'Chargement données utilisateur', { uid: firebaseUser.uid });
      const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
      
      if (userDoc.exists()) {
        const userData = userDoc.data();
        logAuth('INFO', 'Données utilisateur trouvées dans Firestore', userData);
        const authUser: AuthUser = {
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          displayName: firebaseUser.displayName,
          firstName: userData.firstName || userData.displayName?.split(' ')[0] || '',
          lastName: userData.lastName || userData.displayName?.split(' ')[1] || '',
          hasPaid: userData.hasPaid || false,
          firestoreId: firebaseUser.uid,
          subscription: userData.subscription || {
            plan: 'free',
            creditsRemaining: 3,
            maxCredits: 3
          }
        };
        logAuth('INFO', 'Utilisateur authentifié créé', authUser);
        setUser(authUser);
      } else {
        logAuth('INFO', 'Création nouveau document utilisateur');
        // Create new user document
        const newUserData = {
          email: firebaseUser.email,
          displayName: firebaseUser.displayName,
          firstName: firebaseUser.displayName?.split(' ')[0] || '',
          lastName: firebaseUser.displayName?.split(' ')[1] || '',
          hasPaid: false,
          subscription: {
            plan: 'free',
            creditsRemaining: 3,
            maxCredits: 3,
            renewalDate: new Date()
          },
          createdAt: new Date()
        };
        
        await setDoc(doc(db, 'users', firebaseUser.uid), newUserData);
        logAuth('INFO', 'Document utilisateur créé', newUserData);
        
        const authUser: AuthUser = {
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          displayName: firebaseUser.displayName,
          firstName: newUserData.firstName,
          lastName: newUserData.lastName,
          hasPaid: false,
          firestoreId: firebaseUser.uid,
          subscription: newUserData.subscription
        };
        setUser(authUser);
      }
    } catch (error) {
      logAuth('ERROR', 'Erreur chargement données utilisateur', error);
      setError('Erreur lors du chargement des données utilisateur');
      // Fallback to basic user data
      const authUser: AuthUser = {
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        displayName: firebaseUser.displayName,
        hasPaid: false,
        firestoreId: firebaseUser.uid,
        subscription: {
          plan: 'free',
          creditsRemaining: 3,
          maxCredits: 3
        }
      };
      setUser(authUser);
    }
  };

  useEffect(() => {
    logAuth('INFO', 'Configuration listener état authentification');
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      logAuth('INFO', 'État authentification changé', { 
        isLoggedIn: !!firebaseUser,
        uid: firebaseUser?.uid 
      });
      if (firebaseUser) {
        await loadUserData(firebaseUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const register = async (credentials: RegisterCredentials) => {
    setError(null);
    setLoading(true);
    try {
      logAuth('INFO', 'Inscription utilisateur', { email: credentials.email });
      const { user: firebaseUser } = await createUserWithEmailAndPassword(auth, credentials.email, credentials.password);
      
      // Update profile with display name
      const fullName = `${credentials.firstName} ${credentials.lastName}`;
      await updateProfile(firebaseUser, {
        displayName: fullName
      });

      // Create user document in Firestore
      const userData = {
        email: firebaseUser.email,
        displayName: fullName,
        firstName: credentials.firstName,
        lastName: credentials.lastName,
        hasPaid: false,
        subscription: {
          plan: 'free',
          creditsRemaining: 3,
          maxCredits: 3,
          renewalDate: new Date()
        },
        createdAt: new Date()
      };

      await setDoc(doc(db, 'users', firebaseUser.uid), userData);
      logAuth('INFO', 'Document utilisateur créé lors inscription', userData);
      
      // Update local user state
      const authUser: AuthUser = {
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        displayName: fullName,
        firstName: credentials.firstName,
        lastName: credentials.lastName,
        hasPaid: false,
        firestoreId: firebaseUser.uid,
        subscription: userData.subscription
      };
      setUser(authUser);
      logAuth('INFO', 'Inscription réussie');
    } catch (error) {
      logAuth('ERROR', 'Erreur inscription', error);
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('Erreur lors de l\'inscription');
      }
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const login = async (credentials: LoginCredentials) => {
    setError(null);
    setLoading(true);
    try {
      logAuth('INFO', 'Connexion utilisateur', { email: credentials.email });
      const { user: firebaseUser } = await signInWithEmailAndPassword(auth, credentials.email, credentials.password);
      await loadUserData(firebaseUser);
      logAuth('INFO', 'Connexion réussie');
    } catch (error) {
      logAuth('ERROR', 'Erreur connexion', error);
      if (error instanceof Error) {
        if (error.message.includes('user-not-found')) {
          setError('Aucun compte trouvé avec cet email');
        } else if (error.message.includes('wrong-password')) {
          setError('Mot de passe incorrect');
        } else if (error.message.includes('invalid-email')) {
          setError('Format d\'email invalide');
        } else {
          setError('Erreur de connexion');
        }
      } else {
        setError('Erreur de connexion');
      }
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      logAuth('INFO', 'Déconnexion utilisateur');
      await signOut(auth);
      setUser(null);
      setError(null);
      logAuth('INFO', 'Déconnexion réussie');
    } catch (error) {
      logAuth('ERROR', 'Erreur déconnexion', error);
      setError('Erreur lors de la déconnexion');
      throw error;
    }
  };

  const updateUserPaymentStatus = async (hasPaid: boolean, plan: string = 'free') => {
    if (!user) return;

    try {
      logAuth('INFO', 'Mise à jour statut paiement', { hasPaid, plan, userId: user.uid });
      
      // Si on passe au plan gratuit, c'est une annulation
      if (plan === 'free' && user.hasPaid) {
        logAuth('INFO', 'Annulation abonnement - passage au plan gratuit');
      }
      
      const maxCredits = getCreditsForPlan(plan);
      const updatedSubscription = {
        plan: plan as 'free' | 'starter' | 'pro',
        creditsRemaining: maxCredits,
        maxCredits: maxCredits,
        renewalDate: new Date(),
        lastUpdated: new Date(),
        ...(plan === 'free' && user.hasPaid ? { 
          downgradedAt: new Date(),
          previousPlan: user.subscription?.plan || 'unknown'
        } : {})
      };

      await updateDoc(doc(db, 'users', user.uid), {
        hasPaid,
        subscription: updatedSubscription
      });

      // Update local state
      setUser(prev => prev ? {
        ...prev,
        hasPaid,
        subscription: updatedSubscription
      } : null);

      logAuth('INFO', 'Statut utilisateur mis à jour avec succès', {
        hasPaid,
        plan,
        creditsRemaining: updatedSubscription.creditsRemaining
      });
      
      if (plan === 'free' && !hasPaid) {
        logAuth('INFO', 'Utilisateur remis en plan gratuit avec 3 crédits');
      }
    } catch (error) {
      logAuth('ERROR', 'Erreur mise à jour statut paiement', error);
      setError('Erreur lors de la mise à jour du statut de paiement');
      throw error;
    }
  };

  const decrementCredits = async (): Promise<boolean> => {
    if (!user || !user.subscription) return false;

    if (user.subscription.creditsRemaining <= 0) {
      logAuth('WARN', 'Aucun crédit disponible pour déduction');
      return false;
    }

    try {
      logAuth('INFO', 'Déduction crédit', {
        before: user.subscription.creditsRemaining,
        after: user.subscription.creditsRemaining - 1
      });
      const newCreditsRemaining = user.subscription.creditsRemaining - 1;
      
      await updateDoc(doc(db, 'users', user.uid), {
        'subscription.creditsRemaining': newCreditsRemaining
      });

      // Update local state immediately for real-time UI update
      setUser(prev => prev ? {
        ...prev,
        subscription: {
          ...prev.subscription!,
          creditsRemaining: newCreditsRemaining
        }
      } : null);

      logAuth('INFO', 'Crédit déduit avec succès', { creditsRemaining: newCreditsRemaining });
      return true;
    } catch (error) {
      console.error('❌ Erreur lors de la déduction des crédits:', error);
      setError('Erreur lors de la déduction des crédits');
      return false;
    }
  };

  const refundCredits = async (): Promise<boolean> => {
    if (!user || !user.subscription) return false;

    try {
      console.log(`💰 Remboursement d'un crédit (${user.subscription.creditsRemaining} → ${user.subscription.creditsRemaining + 1})`);
      const newCreditsRemaining = user.subscription.creditsRemaining + 1;
      
      await updateDoc(doc(db, 'users', user.uid), {
        'subscription.creditsRemaining': newCreditsRemaining
      });

      // Update local state immediately for real-time UI update
      setUser(prev => prev ? {
        ...prev,
        subscription: {
          ...prev.subscription!,
          creditsRemaining: newCreditsRemaining
        }
      } : null);

      console.log(`✅ Crédit remboursé avec succès: ${newCreditsRemaining} crédits restants`);
      return true;
    } catch (error) {
      console.error('❌ Erreur lors du remboursement des crédits:', error);
      setError('Erreur lors du remboursement des crédits');
      return false;
    }
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    loading,
    error,
    login,
    register,
    logout,
    clearError,
    updateUserPaymentStatus,
    decrementCredits,
    refundCredits
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};