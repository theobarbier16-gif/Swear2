import { 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc, 
  serverTimestamp,
  DocumentData 
} from 'firebase/firestore';
import { db } from '../lib/firebase';
import { User } from '../types/auth';

// Collection name for users
const USERS_COLLECTION = 'users';

// Interface pour les données utilisateur dans Firestore
interface FirestoreUserData {
  email: string;
  firstName: string;
  lastName: string;
  hasPaid: boolean;
  subscription: {
    plan: 'free' | 'premium' | 'pro';
    creditsRemaining: number;
    expiresAt?: string;
    lastUpdated: any; // serverTimestamp
  };
  createdAt: any; // serverTimestamp
  updatedAt: any; // serverTimestamp
}

// Créer ou récupérer un utilisateur dans Firestore
export const getOrCreateUserDocument = async (
  firebaseUserId: string,
  userData: {
    email: string;
    firstName: string;
    lastName: string;
  }
): Promise<User> => {
  const userDocRef = doc(db, USERS_COLLECTION, firebaseUserId);
  
  console.log('🔍 Firestore - Début de getOrCreateUserDocument');
  console.log('🔍 Collection:', USERS_COLLECTION);
  console.log('🔍 Document ID:', firebaseUserId);
  console.log('🔍 User data:', userData);
  console.log('🔍 Firestore db object:', db);
  
  try {
    console.log('🔍 Tentative de récupération du document...');
    // Essayer de récupérer le document existant
    const userDoc = await getDoc(userDocRef);
    console.log('🔍 Document récupéré, existe?', userDoc.exists());
    
    if (userDoc.exists()) {
      // L'utilisateur existe déjà, retourner ses données
      console.log('📄 Document existant trouvé');
      const data = userDoc.data() as FirestoreUserData;
      console.log('📄 Données du document:', data);
      return {
        id: firebaseUserId,
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        createdAt: data.createdAt?.toDate?.()?.toISOString() || new Date().toISOString(),
        hasPaid: data.hasPaid || false,
        firestoreId: firebaseUserId,
        subscription: {
          plan: data.subscription?.plan || 'free',
          creditsRemaining: data.subscription?.creditsRemaining || 0,
          expiresAt: data.subscription?.expiresAt,
          lastUpdated: data.subscription?.lastUpdated?.toDate?.()?.toISOString(),
        },
      };
    } else {
      // L'utilisateur n'existe pas dans Firestore, créer un nouveau document
      console.log('➕ Aucun document trouvé, création en cours...');
      const newUserData: FirestoreUserData = {
        email: userData.email,
        firstName: userData.firstName,
        lastName: userData.lastName,
        hasPaid: false,
        subscription: {
          plan: 'free',
          creditsRemaining: 3, // 3 crédits gratuits pour tous les utilisateurs
          lastUpdated: serverTimestamp(),
        },
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      };
      
      console.log('➕ Données à sauvegarder:', newUserData);
      await setDoc(userDocRef, newUserData);
      console.log('✅ Document créé avec succès');
      
      return {
        id: firebaseUserId,
        email: userData.email,
        firstName: userData.firstName,
        lastName: userData.lastName,
        createdAt: new Date().toISOString(),
        hasPaid: false,
        firestoreId: firebaseUserId,
        subscription: {
          plan: 'free',
          creditsRemaining: 3, // 3 crédits gratuits
          lastUpdated: new Date().toISOString(),
        },
      };
    }
  } catch (error) {
    console.error('❌ ERREUR FIRESTORE CRITIQUE:', error);
    console.error('❌ Type d\'erreur:', error.constructor.name);
    console.error('❌ Message:', error.message);
    console.error('❌ Stack:', error.stack);
    
    // Vérifier si c'est un problème de permissions
    if (error.code === 'permission-denied') {
      console.error('🚫 ERREUR DE PERMISSIONS FIRESTORE - Vérifiez les règles de sécurité');
    }
    
    // Vérifier si c'est un problème de réseau
    if (error.code === 'unavailable') {
      console.error('🌐 ERREUR RÉSEAU FIRESTORE - Problème de connexion');
    }
    
    // En cas d'erreur, retourner un utilisateur par défaut
    console.log('⚠️ Retour d\'un utilisateur par défaut à cause de l\'erreur');
    return {
      id: firebaseUserId,
      email: userData.email,
      firstName: userData.firstName,
      lastName: userData.lastName,
      createdAt: new Date().toISOString(),
      hasPaid: false,
      firestoreId: firebaseUserId,
      subscription: {
        plan: 'free',
        creditsRemaining: 3,
      },
    };
  }
};

// Mettre à jour le statut de paiement de l'utilisateur
export const updateUserPaymentStatus = async (
  firebaseUserId: string,
  hasPaid: boolean,
  creditsToAdd: number = 25
): Promise<void> => {
  const userDocRef = doc(db, USERS_COLLECTION, firebaseUserId);
  
  try {
    console.log('💳 Mise à jour du statut de paiement:', { firebaseUserId, hasPaid, creditsToAdd });
    const updateData = {
      hasPaid: hasPaid,
      subscription: {
        plan: hasPaid ? 'premium' : 'free',
        creditsRemaining: hasPaid ? creditsToAdd : 0,
        lastUpdated: serverTimestamp(),
      },
      updatedAt: serverTimestamp(),
    };
    
    await updateDoc(userDocRef, updateData);
    console.log('✅ Statut de paiement mis à jour dans Firestore');
    console.log('Statut de paiement mis à jour dans Firestore');
  } catch (error) {
    console.error('Erreur lors de la mise à jour du statut de paiement:', error);
    throw error;
  }
};

// Décrémenter les crédits de l'utilisateur
export const decrementUserCredits = async (
  firebaseUserId: string,
  creditsToDeduct: number = 1
): Promise<void> => {
  const userDocRef = doc(db, USERS_COLLECTION, firebaseUserId);
  
  try {
    const userDoc = await getDoc(userDocRef);
    if (userDoc.exists()) {
      const data = userDoc.data() as FirestoreUserData;
      const currentCredits = data.subscription?.creditsRemaining || 0;
      const newCredits = Math.max(0, currentCredits - creditsToDeduct);
      
      await updateDoc(userDocRef, {
        'subscription.creditsRemaining': newCredits,
        'subscription.lastUpdated': serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
      
      console.log(`Crédits mis à jour: ${currentCredits} -> ${newCredits}`);
    }
  } catch (error) {
    console.error('Erreur lors de la déduction des crédits:', error);
    throw error;
  }
};