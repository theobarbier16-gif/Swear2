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

interface UserSubscription {
  plan: 'free' | 'starter' | 'pro';
  creditsRemaining: number;
  maxCredits: number;
  renewalDate?: Date;
}

interface AuthUser extends User {
  hasPaid?: boolean;
  subscription?: UserSubscription;
}

interface AuthContextType {
  user: AuthUser | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => Promise<void>;
  updateUserPaymentStatus: (hasPaid: boolean, plan?: string) => Promise<void>;
  decrementCredits: () => Promise<boolean>;
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

  const getCreditsForPlan = (plan: string): number => {
    switch (plan) {
      case 'starter':
        return 25;
      case 'pro':
        return 150;
      default:
        return 3; // free plan
    }
  };

  const loadUserData = async (firebaseUser: User) => {
    try {
      const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
      
      if (userDoc.exists()) {
        const userData = userDoc.data();
        const authUser: AuthUser = {
          ...firebaseUser,
          hasPaid: userData.hasPaid || false,
          subscription: userData.subscription || {
            plan: 'free',
            creditsRemaining: 3,
            maxCredits: 3
          }
        };
        setUser(authUser);
      } else {
        // Create new user document
        const newUserData = {
          email: firebaseUser.email,
          displayName: firebaseUser.displayName,
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
        
        const authUser: AuthUser = {
          ...firebaseUser,
          hasPaid: false,
          subscription: newUserData.subscription
        };
        setUser(authUser);
      }
    } catch (error) {
      console.error('Error loading user data:', error);
      // Fallback to basic user data
      const authUser: AuthUser = {
        ...firebaseUser,
        hasPaid: false,
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
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        await loadUserData(firebaseUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const register = async (email: string, password: string, name: string) => {
    try {
      const { user: firebaseUser } = await createUserWithEmailAndPassword(auth, email, password);
      
      // Update profile with display name
      await updateProfile(firebaseUser, {
        displayName: name
      });

      // Create user document in Firestore
      const userData = {
        email: firebaseUser.email,
        displayName: name,
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
      
      // Update local user state
      const authUser: AuthUser = {
        ...firebaseUser,
        displayName: name,
        hasPaid: false,
        subscription: userData.subscription
      };
      setUser(authUser);
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const { user: firebaseUser } = await signInWithEmailAndPassword(auth, email, password);
      await loadUserData(firebaseUser);
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  };

  const updateUserPaymentStatus = async (hasPaid: boolean, plan: string = 'free') => {
    if (!user) return;

    try {
      const maxCredits = getCreditsForPlan(plan);
      const updatedSubscription = {
        plan: plan as 'free' | 'starter' | 'pro',
        creditsRemaining: maxCredits,
        maxCredits: maxCredits,
        renewalDate: new Date()
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

      console.log(`User payment status updated: ${hasPaid ? 'paid' : 'free'}, plan: ${plan}`);
    } catch (error) {
      console.error('Error updating payment status:', error);
      throw error;
    }
  };

  const decrementCredits = async (): Promise<boolean> => {
    if (!user || !user.subscription) return false;

    if (user.subscription.creditsRemaining <= 0) {
      return false;
    }

    try {
      const newCreditsRemaining = user.subscription.creditsRemaining - 1;
      
      await updateDoc(doc(db, 'users', user.uid), {
        'subscription.creditsRemaining': newCreditsRemaining
      });

      // Update local state
      setUser(prev => prev ? {
        ...prev,
        subscription: {
          ...prev.subscription!,
          creditsRemaining: newCreditsRemaining
        }
      } : null);

      return true;
    } catch (error) {
      console.error('Error decrementing credits:', error);
      return false;
    }
  };

  const value: AuthContextType = {
    user,
    loading,
    login,
    register,
    logout,
    updateUserPaymentStatus,
    decrementCredits
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};