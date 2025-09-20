import { loadStripe } from '@stripe/stripe-js';

export interface CreateCheckoutSessionRequest {
  planType: 'abonnement' | 'starter' | 'pro';
  userEmail: string;
  userId?: string;
  successUrl?: string;
  cancelUrl?: string;
}

export interface CreateCheckoutSessionResponse {
  sessionId: string;
  url?: string;
}

export class StripeService {
  private stripePromise: Promise<any>;
  private functionsUrl: string;

  constructor() {
    // Clé publique Stripe réelle
    this.stripePromise = loadStripe('pk_test_51S59C86LX1cwJPasiNmP8pMN9vBIyR3J35a7DYKwoFOCi7WhNfYFZISgdSoWTGg4XSBroUfpmndhB77CZVqitFyL0083YVHh9n');
    
    // Déterminer l'URL des fonctions selon l'environnement
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      // Environnement local - utiliser l'émulateur Firebase
      this.functionsUrl = 'http://localhost:5001/swear-30c84/us-central1/api';
    } else {
      // Production - utiliser les fonctions déployées
      this.functionsUrl = 'https://us-central1-swear-30c84.cloudfunctions.net/api';
    }
    
    console.log('🔗 Functions URL configurée:', this.functionsUrl);
  }

  async createCheckoutSession(request: CreateCheckoutSessionRequest): Promise<CreateCheckoutSessionResponse> {
    console.log('🚀 === DEBUT CREATION SESSION STRIPE ===');
    console.log('🛒 Requête:', JSON.stringify(request, null, 2));
    console.log('🔗 URL Firebase Functions:', this.functionsUrl);
    console.log('🌐 Hostname actuel:', window.location.hostname);
    console.log('🔗 Origin actuel:', window.location.origin);
    
    // Test de connectivité d'abord
    try {
      console.log('🔍 === TEST CONNECTIVITE ===');
      const healthResponse = await fetch(`${this.functionsUrl}/health`, {
        method: 'GET',
        mode: 'cors',
      });
      console.log('📡 Health check status:', healthResponse.status);
      console.log('📡 Health check statusText:', healthResponse.statusText);
      
      if (!healthResponse.ok) {
        const healthText = await healthResponse.text();
        console.error('❌ Health check failed response:', healthText);
        throw new Error(`Health check failed: ${healthResponse.status}`);
      }
      
      const healthData = await healthResponse.json();
      console.log('✅ Health check data:', healthData);
    } catch (healthError) {
      console.error('💥 === ERREUR HEALTH CHECK ===');
      console.error('❌ Error:', healthError);
      console.error('💥 === FIN ERREUR HEALTH CHECK ===');
      throw new Error('Les Firebase Functions ne sont pas accessibles. Vérifiez le déploiement.');
    }
    
    try {
      console.log('📦 === PREPARATION PAYLOAD ===');
      const userId = this.getCurrentUserId();
      
      // Vérifier que l'utilisateur est connecté
      const finalUserId = request.userId || userId;
      if (!finalUserId) {
        console.error('❌ Aucun utilisateur connecté trouvé');
        throw new Error('Vous devez être connecté pour effectuer un paiement. Veuillez vous reconnecter.');
      }
      
      const payload = {
        priceId: this.getPriceId(request.planType),
        userId: finalUserId,
        planType: request.planType,
        userEmail: request.userEmail,
        successUrl: request.successUrl || `${window.location.origin}/?success=true&plan=${request.planType}`,
        cancelUrl: request.cancelUrl || `${window.location.origin}/?canceled=true`,
      };
      
      console.log('📦 Payload complet:', JSON.stringify(payload, null, 2));
      console.log('💰 Price ID utilisé:', payload.priceId);
      console.log('👤 User ID:', payload.userId);
      console.log('📧 Email:', payload.userEmail);
      console.log('🌐 URL cible:', `${this.functionsUrl}/create-checkout-session`);
      
      // Ajouter un timeout et une gestion d'erreur améliorée
      console.log('⏱️ Configuration timeout 15s...');
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 secondes timeout
      
      console.log('📡 === ENVOI REQUETE ===');
      const response = await fetch(`${this.functionsUrl}/create-checkout-session`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
        signal: controller.signal,
        mode: 'cors',
      });
      
      clearTimeout(timeoutId);
      console.log('📡 Requête terminée, timeout annulé');

      console.log('📡 === REPONSE RECUE ===');
      console.log('📡 Status:', response.status);
      console.log('📡 StatusText:', response.statusText);
      console.log('📡 Headers:', Object.fromEntries(response.headers.entries()));
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('💥 === ERREUR HTTP ===');
        console.error('❌ Status:', response.status);
        console.error('❌ Response text:', errorText);
        console.error('💥 === FIN ERREUR HTTP ===');
        throw new Error(`Erreur serveur (${response.status}): ${errorText || 'Service indisponible'}`);
      }

      const data = await response.json();
      console.log('✅ === SESSION STRIPE CREEE ===');
      console.log('✅ Data reçue:', JSON.stringify(data, null, 2));
      console.log('🆔 Session ID:', data.sessionId);
      console.log('🔗 URL Stripe:', data.url);
      console.log('🎉 === FIN CREATION SESSION SUCCES ===');
      
      return {
        sessionId: data.sessionId,
        url: data.url
      };
    } catch (error) {
      console.error('💥 === ERREUR CREATION SESSION ===');
      console.error('❌ Error type:', error?.constructor?.name);
      console.error('❌ Error message:', error?.message);
      console.error('❌ Error stack:', error?.stack);
      
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          console.error('⏰ Timeout détecté');
          throw new Error('Délai d\'attente dépassé. Vérifiez votre connexion internet.');
        }
        if (error.message.includes('Failed to fetch')) {
          console.error('🌐 Problème réseau détecté');
          throw new Error('Impossible de contacter le serveur de paiement. Vérifiez que les Firebase Functions sont déployées.');
        }
        console.error('💥 === FIN ERREUR CREATION SESSION ===');
        throw error;
      }
      throw new Error('Impossible de créer la session de paiement');
    }
  }

  private getPriceId(planType: string): string {
    const priceIds = {
      abonnement: 'price_1S59Fm6LX1cwJPas3s7oS1pm', // Plan Abonnement 9,90€
      starter: 'price_1S59Fm6LX1cwJPas3s7oS1pm',    // Plan Starter 9,90€
      pro: 'price_1S7z1B6LX1cwJPasibsPVll6'         // Plan Pro 22,90€
    };
    return priceIds[planType as keyof typeof priceIds] || priceIds.abonnement;
  }

  private getCurrentUserId(): string {
    // Méthode plus robuste pour récupérer l'ID utilisateur
    try {
      // Essayer plusieurs méthodes pour récupérer l'ID utilisateur
      
      // Méthode 1: localStorage Firebase
      const firebaseKey = `firebase:authUser:AIzaSyDRoNJkXmR7C3dt142AAz_hGCPpfKxkXxE:[DEFAULT]`;
      const storedUser = localStorage.getItem(firebaseKey);
      if (storedUser) {
        const user = JSON.parse(storedUser);
        if (user.uid) {
          console.log('✅ User ID trouvé via localStorage:', user.uid);
          return user.uid;
        }
      }
      
      // Méthode 2: Essayer d'autres clés localStorage
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.includes('firebase:authUser')) {
          const userData = localStorage.getItem(key);
          if (userData) {
            const user = JSON.parse(userData);
            if (user.uid) {
              console.log('✅ User ID trouvé via clé alternative:', user.uid);
              return user.uid;
            }
          }
        }
      }
      
      console.warn('⚠️ Aucun User ID trouvé dans localStorage');
      return '';
    } catch (error) {
      console.error('❌ Erreur récupération userId:', error);
      return '';
    }
  }

  async redirectToCheckout(request: CreateCheckoutSessionRequest): Promise<void> {
    console.log('🚀 Début redirection Stripe Checkout:', request);
    
    try {
      const stripe = await this.stripePromise;
      if (!stripe) {
        console.error('❌ Stripe non initialisé');
        throw new Error('Stripe non initialisé');
      }

      console.log('✅ Stripe initialisé, création de la session...');
      const session = await this.createCheckoutSession(request);
      
      console.log('✅ Session créée, redirection vers Stripe...', session.sessionId);
      // Redirection vers Stripe Checkout
      const { error } = await stripe.redirectToCheckout({
        sessionId: session.sessionId,
      });

      if (error) {
        console.error('❌ Erreur redirection Stripe:', error);
        throw new Error(error.message);
      }
      
      console.log('✅ Redirection Stripe réussie');
    } catch (error) {
      console.error('❌ Erreur redirection paiement:', error);
      throw error;
    }
  }

  // Méthode pour obtenir l'URL du webhook
  getWebhookUrl(): string {
    return `${this.functionsUrl}/webhook`;
  }
}

export const stripeService = new StripeService();