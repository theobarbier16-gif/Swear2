// Firestore utility functions
import { doc, updateDoc, increment } from 'firebase/firestore';
import { db } from '../lib/firebase';

export const decrementUserCredits = async (userId: string) => {
  try {
    const userRef = doc(db, 'users', userId);
    await updateDoc(userRef, {
      'subscription.creditsRemaining': increment(-1)
    });
  } catch (error) {
    console.error('Error decrementing user credits:', error);
    throw error;
  }
};