// Firestore utility functions
import { doc, updateDoc, increment } from 'firebase/firestore';
import { db } from '../lib/firebase';

export const decrementUserCredits = async (userId: string, amount: number = 1) => {
  try {
    if (amount > 0) {
      console.log(`💳 Déduction de ${amount} crédit(s) pour l'utilisateur ${userId}`);
    } else {
      console.log(`💰 Remboursement de ${Math.abs(amount)} crédit(s) pour l'utilisateur ${userId}`);
    }
    const userRef = doc(db, 'users', userId);
    await updateDoc(userRef, {
      'subscription.creditsRemaining': increment(-amount)
    });
    if (amount > 0) {
      console.log(`✅ ${amount} crédit(s) déduit(s) avec succès`);
    } else {
      console.log(`✅ ${Math.abs(amount)} crédit(s) remboursé(s) avec succès`);
    }
  } catch (error) {
    console.error(`❌ Erreur lors de l'opération sur ${amount} crédit(s):`, error);
    throw error;
  }
};