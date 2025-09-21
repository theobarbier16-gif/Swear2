import { loadStripe } from '@stripe/stripe-js';

// Fonction de logging pour le service Stripe
const logStripe = (level: 'INFO' | 'WARN' | 'ERROR', message: string, data?: any) => {
  const timestamp = new Date().toISOString();
  const logMessage = `[STRIPE-SERVICE] [${timestamp}] [${level}] ${message}`;
  
  if (level === 'ERROR') {
    console.error(logMessage, data ? JSON.stringify(data, null, 2) : '');
  } else if (level === 'WARN') {
    console.warn(logMessage, data ? JSON.stringify(data, null, 2) : '');
  } else {
    console.log(logMessage, data ? JSON.stringify(data, null, 2) : '');
  }
};
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
    logStripe('INFO', 'Initialisation StripeService');
    
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
    
    logStripe('INFO', 'Configuration terminée', {
      functionsUrl: this.functionsUrl,
      hostname: window.location.hostname,
      environment: window.location.hostname === 'localhost' ? 'local' : 'production'
    });
  }

  async createCheckoutSession(request: CreateCheckoutSessionRequest): Promise<CreateCheckoutSessionResponse> {
    logStripe('INFO', 'Début création session Stripe', {
      request,
      functionsUrl: this.functionsUrl,
      hostname: window.location.hostname,
      origin: window.location.origin
    });
    
    // Test de connectivité d'abord
    try {
      logStripe('INFO', 'Test de connectivité...');
      const healthResponse = await fetch(`${this.functionsUrl}/health`, {
        method: 'GET',
        mode: 'cors',
      });
      
      logStripe('INFO', 'Réponse health check', {
        status: healthResponse.status,
        statusText: healthResponse.statusText,
        headers: Object.fromEntries(healthResponse.headers.entries())
      });
      
      if (!healthResponse.ok) {
        const healthText = await healthResponse.text();
        logStripe('ERROR', 'Health check échoué', { response: healthText });
        throw new Error(`Health check failed: ${healthResponse.status}`);
      }
      
      const healthData = await healthResponse.json();
      logStripe('INFO', 'Health check réussi', healthData);
    } catch (healthError) {
      logStripe('ERROR', 'Erreur health check', {
        message: healthError instanceof Error ? healthError.message : healthError,
        stack: healthError instanceof Error ? healthError.stack : undefined
      });
      throw new Error('Les Firebase Functions ne sont pas accessibles. Vérifiez le déploiement.');
    }
    
    try {
      logStripe('INFO', 'Préparation du payload');
      const userId = this.getCurrentUserId();
      
      // Vérifier que l'utilisateur est connecté
      const finalUserId = request.userId || userId;
      if (!finalUserId) {
        logStripe('ERROR', 'Aucun utilisateur connecté trouvé');
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
      
      logStripe('INFO', 'Payload préparé', {
        payload,
        targetUrl: `${this.functionsUrl}/create-checkout-session`
      });
      
      // Ajouter un timeout et une gestion d'erreur améliorée
      logStripe('INFO', 'Configuration timeout 15s');
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 secondes timeout
      
      logStripe('INFO', 'Envoi de la requête');
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
      logStripe('INFO', 'Requête terminée, timeout annulé');

      logStripe('INFO', 'Réponse reçue', {
        status: response.status,
        statusText: response.statusText,
        headers: Object.fromEntries(response.headers.entries())
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        logStripe('ERROR', 'Erreur HTTP', {
          status: response.status,
          statusText: response.statusText,
          responseText: errorText
        });
        throw new Error(`Erreur serveur (${response.status}): ${errorText || 'Service indisponible'}`);
      }

      const data = await response.json();
      logStripe('INFO', 'Session Stripe créée avec succès', {
        sessionId: data.sessionId,
        url: data.url,
        fullResponse: data
      });
      
      return {
        sessionId: data.sessionId,
        url: data.url
      };
    } catch (error) {
      logStripe('ERROR', 'Erreur création session', {
        errorType: error?.constructor?.name,
        message: error?.message,
        stack: error?.stack
      });
      
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          logStripe('ERROR', 'Timeout détecté');
          throw new Error('Délai d\'attente dépassé. Vérifiez votre connexion internet.');
        }
        if (error.message.includes('Failed to fetch')) {
          logStripe('ERROR', 'Problème réseau détecté');
          throw new Error('Impossible de contacter le serveur de paiement. Vérifiez que les Firebase Functions sont déployées.');
        }
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
    
    const priceId = priceIds[planType as keyof typeof priceIds] || priceIds.abonnement;
    logStripe('INFO', 'Price ID sélectionné', { planType, priceId });
    
    return priceId;
  }

  private getCurrentUserId(): string {
    logStripe('INFO', 'Récupération User ID');
    
    // Méthode plus robuste pour récupérer l'ID utilisateur
    try {
      // Essayer plusieurs méthodes pour récupérer l'ID utilisateur
      
      // Méthode 1: localStorage Firebase
      const firebaseKey = `firebase:authUser:AIzaSyDRoNJkXmR7C3dt142AAz_hGCPpfKxkXxE:[DEFAULT]`;
      const storedUser = localStorage.getItem(firebaseKey);
      if (storedUser) {
        const user = JSON.parse(storedUser);
        if (user.uid) {
          logStripe('INFO', 'User ID trouvé via localStorage', { uid: user.uid });
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
              logStripe('INFO', 'User ID trouvé via clé alternative', { uid: user.uid, key });
              return user.uid;
            }
          }
        }
      }
      
      logStripe('WARN', 'Aucun User ID trouvé dans localStorage');
      return '';
    } catch (error) {
      logStripe('ERROR', 'Erreur récupération userId', { error });
      return '';
    }
  }

  async redirectToCheckout(request: CreateCheckoutSessionRequest): Promise<void> {
    logStripe('INFO', 'Début redirection Stripe Checkout', request);
    
    try {
      const stripe = await this.stripePromise;
      if (!stripe) {
        logStripe('ERROR', 'Stripe non initialisé');
        throw new Error('Stripe non initialisé');
      }

      logStripe('INFO', 'Stripe initialisé, création de la session...');
      const session = await this.createCheckoutSession(request);
      
      logStripe('INFO', 'Session créée, redirection vers Stripe', { sessionId: session.sessionId });
      // Redirection vers Stripe Checkout
      const { error } = await stripe.redirectToCheckout({
        sessionId: session.sessionId,
      });

      if (error) {
        logStripe('ERROR', 'Erreur redirection Stripe', error);
        throw new Error(error.message);
      }
      
      logStripe('INFO', 'Redirection Stripe réussie');
    } catch (error) {
      logStripe('ERROR', 'Erreur redirection paiement', error);
      throw error;
    }
  }

  // Méthode pour obtenir l'URL du webhook
  getWebhookUrl(): string {
    return `${this.functionsUrl}/webhook`;
  }
}

export const stripeService = new StripeService();