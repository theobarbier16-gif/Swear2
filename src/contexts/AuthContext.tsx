import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  User as FirebaseUser 
} from 'firebase/auth';
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';
import { User, AuthState, LoginCredentials, RegisterCredentials, AuthContextType } from '../types/auth';

console.log('🚀 === DEBUT AUTHCONTEXT.TSX ===');

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
    error: null,
  });

  console.log('🔐 AuthProvider initialized');

  // Fonction pour créer/mettre à jour l'utilisateur dans Firestore
  const createOrUpdateUserInFirestore = async (firebaseUser: FirebaseUser, additionalData?: any) => {
    console.log('📝 Creating/updating user in Firestore:', firebaseUser.uid);
    
    try {
      const userRef = doc(db, 'users', firebaseUser.uid);
      const userSnap = await getDoc(userRef);
      
      const now = new Date().toISOString();
      
      if (!userSnap.exists()) {
        // Créer un nouveau utilisateur
        console.log('👤 Creating new user document');
        const newUserData = {
          id: firebaseUser.uid,
          email: firebaseUser.email || '',
          firstName: additionalData?.firstName || '',
          lastName: additionalData?.lastName || '',
          createdAt: now,
          updatedAt: now,
          hasPaid: false,
          subscription: {
            plan: 'free',
            creditsRemaining: 3,
            lastUpdated: now
          }
        };
        
        await setDoc(userRef, newUserData);
        console.log('✅ New user created in Firestore');
        return newUserData;
      } else {
        // Utilisateur existant, mettre à jour si nécessaire
        console.log('🔄 Updating existing user');
        const existingData = userSnap.data();
        const updatedData = {
          ...existingData,
          updatedAt: now,
          // Garder les données existantes mais ajouter les nouvelles si fournies
          ...(additionalData && additionalData)
        };
        
        await updateDoc(userRef, { updatedAt: now });
        console.log('✅ User updated in Firestore');
        return updatedData;
      }
    } catch (error) {
      console.error('❌ Error creating/updating user in Firestore:', error);
      throw error;
    }
  };

  // Fonction pour récupérer les données utilisateur depuis Firestore
  const fetchUserFromFirestore = async (firebaseUser: FirebaseUser): Promise<User | null> => {
    console.log('📖 Fetching user from Firestore:', firebaseUser.uid);
    
    try {
      const userRef = doc(db, 'users', firebaseUser.uid);
      const userSnap = await getDoc(userRef);
      
      if (userSnap.exists()) {
        const userData = userSnap.data();
        console.log('✅ User data fetched from Firestore:', userData);
        
        return {
          id: userData.id,
          email: userData.email,
          firstName: userData.firstName,
          lastName: userData.lastName,
          createdAt: userData.createdAt,
          hasPaid: userData.hasPaid || false,
          firestoreId: userSnap.id,
          subscription: userData.subscription || {
            plan: 'free',
            creditsRemaining: 3,
            lastUpdated: new Date().toISOString()
          }
        };
      } else {
        console.log('❌ No user document found in Firestore');
        return null;
      }
    } catch (error) {
      console.error('❌ Error fetching user from Firestore:', error);
      return null;
    }
  };

  // Écouter les changements d'authentification Firebase
  useEffect(() => {
    console.log('👂 Setting up auth state listener');
    
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      console.log('🔄 Auth state changed:', firebaseUser ? 'User logged in' : 'User logged out');
      
      if (firebaseUser) {
        try {
          // Récupérer les données utilisateur depuis Firestore
          const userData = await fetchUserFromFirestore(firebaseUser);
          
          if (userData) {
            setAuthState({
              user: userData,
              isAuthenticated: true,
              isLoading: false,
              error: null,
            });
            console.log('✅ User authenticated and data loaded');
          } else {
            // Créer l'utilisateur s'il n'existe pas
            const newUserData = await createOrUpdateUserInFirestore(firebaseUser);
            setAuthState({
              user: newUserData as User,
              isAuthenticated: true,
              isLoading: false,
              error: null,
            });
            console.log('✅ New user created and authenticated');
          }
        } catch (error) {
          console.error('❌ Error handling auth state change:', error);
          setAuthState({
            user: null,
            isAuthenticated: false,
            isLoading: false,
            error: 'Erreur lors du chargement des données utilisateur',
          });
        }
      } else {
        setAuthState({
          user: null,
          isAuthenticated: false,
          isLoading: false,
          error: null,
        });
        console.log('✅ User logged out');
      }
    });

    return () => {
      console.log('🔇 Cleaning up auth listener');
      unsubscribe();
    };
  }, []);

  const login = async (credentials: LoginCredentials): Promise<void> => {
    console.log('🔑 Attempting login for:', credentials.email);
    
    try {
      setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
      
      const userCredential = await signInWithEmailAndPassword(auth, credentials.email, credentials.password);
      console.log('✅ Login successful');
      
      // L'état sera mis à jour automatiquement par onAuthStateChanged
    } catch (error: any) {
      console.error('❌ Login error:', error);
      let errorMessage = 'Erreur de connexion';
      
      if (error.code === 'auth/user-not-found') {
        errorMessage = 'Aucun compte trouvé avec cet email';
      } else if (error.code === 'auth/wrong-password') {
        errorMessage = 'Mot de passe incorrect';
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = 'Email invalide';
      } else if (error.code === 'auth/too-many-requests') {
        errorMessage = 'Trop de tentatives. Réessayez plus tard';
      }
      
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        error: errorMessage,
      }));
      
      throw new Error(errorMessage);
    }
  };

  const register = async (credentials: RegisterCredentials): Promise<void> => {
    console.log('📝 Attempting registration for:', credentials.email);
    
    try {
      setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
      
      const userCredential = await createUserWithEmailAndPassword(auth, credentials.email, credentials.password);
      console.log('✅ Registration successful');
      
      // Créer le document utilisateur dans Firestore avec les informations supplémentaires
      await createOrUpdateUserInFirestore(userCredential.user, {
        firstName: credentials.firstName,
        lastName: credentials.lastName,
      });
      
      // L'état sera mis à jour automatiquement par onAuthStateChanged
    } catch (error: any) {
      console.error('❌ Registration error:', error);
      let errorMessage = 'Erreur lors de la création du compte';
      
      if (error.code === 'auth/email-already-in-use') {
        errorMessage = 'Un compte existe déjà avec cet email';
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = 'Email invalide';
      } else if (error.code === 'auth/weak-password') {
        errorMessage = 'Le mot de passe doit contenir au moins 6 caractères';
      }
      
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        error: errorMessage,
      }));
      
      throw new Error(errorMessage);
    }
  };

  const logout = async (): Promise<void> => {
    console.log('🚪 Attempting logout');
    
    try {
      await signOut(auth);
      console.log('✅ Logout successful');
      // L'état sera mis à jour automatiquement par onAuthStateChanged
    } catch (error) {
      console.error('❌ Logout error:', error);
    }
  };

  const clearError = (): void => {
    setAuthState(prev => ({ ...prev, error: null }));
  };

  const updateUserPaymentStatus = async (hasPaid: boolean, planType: 'free' | 'starter' | 'pro' = 'free'): Promise<void> => {
    console.log('💳 Updating payment status:', { hasPaid, planType });
    
    if (!authState.user) {
      console.error('❌ No user to update');
      return;
    }

    try {
      const userRef = doc(db, 'users', authState.user.id);
      const now = new Date().toISOString();
      
      // Déterminer les crédits selon le plan
      let creditsRemaining = 3; // free
      if (planType === 'starter') creditsRemaining = 25;
      if (planType === 'pro') creditsRemaining = 150;
      
      const updateData = {
        hasPaid,
        updatedAt: now,
        subscription: {
          plan: planType,
          creditsRemaining,
          lastUpdated: now
        }
      };
      
      await updateDoc(userRef, updateData);
      console.log('✅ Payment status updated in Firestore');
      
      // Mettre à jour l'état local
      setAuthState(prev => ({
        ...prev,
        user: prev.user ? {
          ...prev.user,
          hasPaid,
          subscription: {
            plan: planType,
            creditsRemaining,
            lastUpdated: now
          }
        } : null
      }));
      
      console.log('✅ Local state updated');
    } catch (error) {
      console.error('❌ Error updating payment status:', error);
      throw error;
    }
  };

  const contextValue: AuthContextType = {
    ...authState,
    login,
    register,
    logout,
    clearError,
    updateUserPaymentStatus,
  };

  console.log('🔐 AuthProvider rendering with state:', {
    isAuthenticated: authState.isAuthenticated,
    isLoading: authState.isLoading,
    hasUser: !!authState.user,
    userEmail: authState.user?.email
  });

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

console.log('🚀 === FIN AUTHCONTEXT.TSX ===');