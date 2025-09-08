import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { AuthState, AuthContextType, LoginCredentials, RegisterCredentials, User } from '../types/auth';

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

// Simulation d'API - À remplacer par de vraies API calls
const simulateApiCall = (delay: number = 1000) => 
  new Promise(resolve => setTimeout(resolve, delay));

const mockUsers: User[] = [
  {
    id: '1',
    email: 'demo@swear.com',
    firstName: 'Demo',
    lastName: 'User',
    createdAt: new Date().toISOString(),
    subscription: {
      plan: 'premium',
      creditsRemaining: 50,
      expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    },
  },
];

// Provider
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Vérifier si l'utilisateur est connecté au chargement
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const savedUser = localStorage.getItem('swear_user');
        if (savedUser) {
          const user = JSON.parse(savedUser);
          dispatch({ type: 'SET_USER', payload: user });
        } else {
          dispatch({ type: 'SET_LOADING', payload: false });
        }
      } catch (error) {
        console.error('Error checking auth status:', error);
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    };

    checkAuthStatus();
  }, []);

  const login = async (credentials: LoginCredentials) => {
    dispatch({ type: 'SET_LOADING', payload: true });
    dispatch({ type: 'CLEAR_ERROR' });

    try {
      await simulateApiCall(1500);

      // Simulation de validation
      const user = mockUsers.find(u => u.email === credentials.email);
      
      if (!user) {
        throw new Error('Email ou mot de passe incorrect');
      }

      // Simulation de vérification du mot de passe
      if (credentials.password.length < 6) {
        throw new Error('Email ou mot de passe incorrect');
      }

      // Sauvegarder l'utilisateur
      localStorage.setItem('swear_user', JSON.stringify(user));
      dispatch({ type: 'SET_USER', payload: user });

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Erreur de connexion';
      dispatch({ type: 'SET_ERROR', payload: errorMessage });
      throw error;
    }
  };

  const register = async (credentials: RegisterCredentials) => {
    dispatch({ type: 'SET_LOADING', payload: true });
    dispatch({ type: 'CLEAR_ERROR' });

    try {
      await simulateApiCall(2000);

      // Vérifier si l'email existe déjà
      const existingUser = mockUsers.find(u => u.email === credentials.email);
      if (existingUser) {
        throw new Error('Un compte avec cet email existe déjà');
      }

      // Créer un nouvel utilisateur
      const newUser: User = {
        id: Date.now().toString(),
        email: credentials.email,
        firstName: credentials.firstName,
        lastName: credentials.lastName,
        createdAt: new Date().toISOString(),
        subscription: {
          plan: 'free',
          creditsRemaining: 3, // 3 essais gratuits
        },
      };

      // Ajouter à la liste mock (en production, ceci serait fait côté serveur)
      mockUsers.push(newUser);

      // Sauvegarder l'utilisateur
      localStorage.setItem('swear_user', JSON.stringify(newUser));
      dispatch({ type: 'SET_USER', payload: newUser });

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Erreur lors de la création du compte';
      dispatch({ type: 'SET_ERROR', payload: errorMessage });
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('swear_user');
    dispatch({ type: 'LOGOUT' });
  };

  const clearError = () => {
    dispatch({ type: 'CLEAR_ERROR' });
  };

  const value: AuthContextType = {
    ...state,
    login,
    register,
    logout,
    clearError,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};