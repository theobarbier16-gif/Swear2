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
  
  console.log('🔍 === DEBUT FIRESTORE DEBUG ===');
  console.log('🔍 Collection:', USERS_COLLECTION);
  console.log('🔍 Document ID:', firebaseUserId);
  console.log('🔍 User data:', userData);
  console.log('🔍 Firestore db object exists:', !!db);
  console.log('🔍 Firestore db._delegate:', db._delegate);
  console.log('🔍 Document reference:', userDocRef);
  console.log('🔍 Document path:', userDocRef.path);
  
  try {
    console.log('🔍 === TENTATIVE GETDOC ===');
    // Essayer de récupérer le document existant
    const userDoc = await getDoc(userDocRef);
    console.log('🔍 GetDoc terminé avec succès');
    console.log('🔍 Document existe?', userDoc.exists());
    console.log('🔍 Document metadata:', userDoc.metadata);
    
    if (userDoc.exists()) {
      // L'utilisateur existe déjà, retourner ses données
      console.log('📄 === DOCUMENT EXISTANT ===');
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
      console.log('➕ === CREATION NOUVEAU DOCUMENT ===');
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
      console.log('➕ Tentative setDoc...');
      await setDoc(userDocRef, newUserData);
      console.log('✅ SetDoc terminé avec succès');
      
      // Vérifier que le document a bien été créé
      const verifyDoc = await getDoc(userDocRef);
      console.log('✅ Vérification - Document existe maintenant?', verifyDoc.exists());
      
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
    console.error('❌ === ERREUR FIRESTORE CRITIQUE ===');
    console.error('❌ Type d\'erreur:', error?.constructor?.name);
    console.error('❌ Message:', error?.message);
    console.error('❌ Code d\'erreur:', error?.code);
    console.error('❌ Stack complet:', error?.stack);
    console.error('❌ Objet erreur complet:', error);
    
    // Vérifier si c'est un problème de permissions
    if (error?.code === 'permission-denied') {
      console.error('🚫 ERREUR DE PERMISSIONS FIRESTORE - Vérifiez les règles de sécurité');
      console.error('🚫 Règles actuelles probablement trop restrictives');
      console.error('🚫 Utilisateur authentifié?', !!auth.currentUser);
      console.error('🚫 UID utilisateur:', auth.currentUser?.uid);
    }
    
    // Vérifier si c'est un problème de réseau
    if (error?.code === 'unavailable') {
      console.error('🌐 ERREUR RÉSEAU FIRESTORE - Problème de connexion');
    }
    
    // Vérifier si c'est un problème de configuration
    if (error?.code === 'failed-precondition') {
      console.error('⚙️ ERREUR DE CONFIGURATION FIRESTORE');
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
  planType: 'free' | 'starter' | 'pro' = 'free',
  creditsToAdd?: number
): Promise<void> => {
  const userDocRef = doc(db, USERS_COLLECTION, firebaseUserId);
  
  try {
    // Déterminer les crédits selon le plan
    let credits = creditsToAdd;
    if (credits === undefined) {
      switch (planType) {
        case 'free':
          credits = 3;
          break;
        case 'starter':
          credits = 25;
          break;
        case 'pro':
          credits = 150;
          break;
        default:
          credits = 0;
      }
    }
    
    // hasPaid est true seulement pour les plans payants
    const isPaidPlan = planType !== 'free';
    
    console.log('💳 Mise à jour du statut de paiement:', { 
      firebaseUserId, 
      hasPaid: isPaidPlan, 
      creditsToAdd: credits, 
      planType 
    });
    
    const updateData = {
      hasPaid: isPaidPlan,
      subscription: {
        plan: planType,
        creditsRemaining: credits,
        lastUpdated: serverTimestamp(),
      },
      updatedAt: serverTimestamp(),
    };
    
    await updateDoc(userDocRef, updateData);
    console.log('✅ Statut de paiement mis à jour dans Firestore:', updateData);
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