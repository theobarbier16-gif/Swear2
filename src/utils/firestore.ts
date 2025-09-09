// Firestore utility functions
import { doc, updateDoc, increment } from 'firebase/firestore';
import { db } from '../lib/firebase';

export const decrementUserCredits = async (userId: string, amount: number = 1) => {
  try {
    console.log(`💳 Déduction de ${amount} crédit(s) pour l'utilisateur ${userId}`);
    const userRef = doc(db, 'users', userId);
    await updateDoc(userRef, {
      'subscription.creditsRemaining': increment(-amount)
    });
    console.log(`✅ ${amount} crédit(s) déduit(s) avec succès`);
  } catch (error) {
    console.error(`❌ Erreur lors de la déduction de ${amount} crédit(s):`, error);
    throw error;
  }
};