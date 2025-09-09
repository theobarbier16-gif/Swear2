export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  createdAt: string;
  hasPaid: boolean;
  firestoreId?: string; // ID du document Firestore
  subscription?: {
    plan: 'free' | 'premium' | 'pro';
    creditsRemaining: number;
    expiresAt?: string;
    lastUpdated?: string;
  };
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface AuthContextType extends AuthState {
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (credentials: RegisterCredentials) => Promise<void>;
  logout: () => void;
  clearError: () => void;
  updateUserPaymentStatus: (hasPaid: boolean, planType?: 'free' | 'starter' | 'pro') => void;
}