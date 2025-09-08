import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  User as FirebaseUser,
  updateProfile
} from 'firebase/auth';
import { auth } from '../lib/firebase';
import { AuthState, AuthContextType, LoginCredentials, RegisterCredentials, User } from '../types/auth';
import { 
  getOrCreateUserDocument, 
  updateUserPaymentStatus as updateFirestorePaymentStatus 
} from '../utils/firestore';

// Actions pour le reducer
type AuthAction =
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_USER'; payload: User | null }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'CLEAR_ERROR' }
  | { type: 'LOGOUT' };

// État initial
const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
};

// Reducer
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: !!action.payload,
        isLoading: false,
        error: null,
      };
    case 'SET_ERROR':
      return { ...state, error: action.payload, isLoading: false };
    case 'CLEAR_ERROR':
      return { ...state, error: null };
    case 'LOGOUT':
      return { ...initialState, isLoading: false };
    default:
      return state;
  }
};

// Context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Hook pour utiliser le contexte
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Fonction pour convertir un utilisateur Firebase en utilisateur de l'app
const mapFirebaseUserToUser = async (firebaseUser: FirebaseUser): Promise<User> => {
  const email = firebaseUser.email || '';
  const displayName = firebaseUser.displayName || '';
  
  // Extraire prénom et nom du displayName ou de l'email
  let firstName = '';
  let lastName = '';
  
  if (displayName) {
    const nameParts = displayName.split(' ');
    firstName = nameParts[0] || '';
    lastName = nameParts.slice(1).join(' ') || '';
  } else {
    // Utiliser la partie avant @ de l'email comme prénom par défaut
    firstName = email.split('@')[0] || 'Utilisateur';
  }

  // TOUJOURS récupérer ou créer le document utilisateur dans Firestore
  // Cela fonctionne pour les nouveaux utilisateurs ET les utilisateurs existants
  try {
    console.log('🔍 Tentative de récupération/création du document Firestore pour:', email);
    const user = await getOrCreateUserDocument(firebaseUser.uid, {
      email,
      firstName,
      lastName,
    });
    console.log('✅ Document Firestore récupéré/créé:', user);
    return user;
  } catch (error) {
    console.error('Erreur lors de la récupération des données utilisateur:', error);
    // Fallback en cas d'erreur Firestore
    return {
      id: firebaseUser.uid,
      email: email,
      firstName: firstName,
      lastName: lastName,
      createdAt: firebaseUser.metadata.creationTime || new Date().toISOString(),
      hasPaid: false,
      subscription: {
        plan: 'free',
        creditsRemaining: 0,
      },
    };
  }
};

// Provider
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Écouter les changements d'état d'authentification Firebase
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      console.log('🔥 Firebase Auth State Changed:', firebaseUser?.email || 'No user');
      console.log('🔥 Firebase User Object:', firebaseUser);
      if (firebaseUser) {
        try {
          console.log('📊 Tentative de récupération des données Firestore pour:', firebaseUser.email);
          console.log('📊 Firebase User UID:', firebaseUser.uid);
          const user = await mapFirebaseUserToUser(firebaseUser);
          console.log('✅ Données utilisateur finales récupérées:', user);
          dispatch({ type: 'SET_USER', payload: user });
        } catch (error) {
          console.error('❌ ERREUR CRITIQUE lors du mapping utilisateur:', error);
          console.error('❌ Stack trace:', error.stack);
          dispatch({ type: 'SET_ERROR', payload: 'Erreur lors du chargement des données utilisateur' });
        }
      } else {
        console.log('👋 Utilisateur déconnecté');
        dispatch({ type: 'SET_USER', payload: null });
      }
    });

    return () => unsubscribe();
  }, []);

  const login = async (credentials: LoginCredentials) => {
    dispatch({ type: 'SET_LOADING', payload: true });
    dispatch({ type: 'CLEAR_ERROR' });

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth, 
        credentials.email, 
        credentials.password
      );
      
      // L'utilisateur sera automatiquement mis à jour via onAuthStateChanged
      console.log('Connexion réussie:', userCredential.user.email);
      
    } catch (error: any) {
      let errorMessage = 'Erreur de connexion';
      
      switch (error.code) {
        case 'auth/user-not-found':
          errorMessage = 'Aucun compte trouvé avec cet email';
          break;
        case 'auth/wrong-password':
          errorMessage = 'Mot de passe incorrect';
          break;
        case 'auth/invalid-email':
          errorMessage = 'Email invalide';
          break;
        case 'auth/user-disabled':
          errorMessage = 'Ce compte a été désactivé';
          break;
        case 'auth/too-many-requests':
          errorMessage = 'Trop de tentatives. Réessayez plus tard';
          break;
        case 'auth/invalid-credential':
          errorMessage = 'Email ou mot de passe incorrect';
          break;
        default:
          errorMessage = error.message || 'Erreur de connexion';
      }
      
      dispatch({ type: 'SET_ERROR', payload: errorMessage });
      throw error;
    }
  };

  const register = async (credentials: RegisterCredentials) => {
    dispatch({ type: 'SET_LOADING', payload: true });
    dispatch({ type: 'CLEAR_ERROR' });

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth, 
        credentials.email, 
        credentials.password
      );

      // Mettre à jour le profil avec le nom complet
      await updateProfile(userCredential.user, {
        displayName: `${credentials.firstName} ${credentials.lastName}`
      });

      console.log('Inscription réussie:', userCredential.user.email);
      
      // L'utilisateur sera automatiquement mis à jour via onAuthStateChanged
      
    } catch (error: any) {
      let errorMessage = 'Erreur lors de la création du compte';
      
      switch (error.code) {
        case 'auth/email-already-in-use':
          errorMessage = 'Un compte avec cet email existe déjà';
          break;
        case 'auth/invalid-email':
          errorMessage = 'Email invalide';
          break;
        case 'auth/weak-password':
          errorMessage = 'Le mot de passe doit contenir au moins 6 caractères';
          break;
        case 'auth/operation-not-allowed':
          errorMessage = 'La création de compte est temporairement désactivée';
          break;
        default:
          errorMessage = error.message || 'Erreur lors de la création du compte';
      }
      
      dispatch({ type: 'SET_ERROR', payload: errorMessage });
      throw error;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      dispatch({ type: 'LOGOUT' });
      console.log('Déconnexion réussie');
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error);
      dispatch({ type: 'SET_ERROR', payload: 'Erreur lors de la déconnexion' });
    }
  };

  const clearError = () => {
    dispatch({ type: 'CLEAR_ERROR' });
  };

  const updateUserPaymentStatus = (hasPaid: boolean) => {
    if (state.user && state.user.firestoreId) {
      // Mettre à jour Firestore
      updateFirestorePaymentStatus(state.user.firestoreId, hasPaid, 25)
        .then(() => {
          console.log('Statut de paiement mis à jour avec succès');
        })
        .catch((error) => {
          console.error('Erreur lors de la mise à jour du statut de paiement:', error);
        });
      
      // Mettre à jour l'état local immédiatement pour une meilleure UX
      const updatedUser = {
        ...state.user,
        hasPaid: hasPaid,
        subscription: {
          ...state.user.subscription,
          plan: hasPaid ? 'premium' : 'free',
          creditsRemaining: hasPaid ? 25 : 0,
          lastUpdated: new Date().toISOString(),
        }
      };
      dispatch({ type: 'SET_USER', payload: updatedUser });
    }
  };
  
  const value: AuthContextType = {
    ...state,
    login,
    register,
    logout,
    clearError,
    updateUserPaymentStatus,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};