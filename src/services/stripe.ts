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
  private isLocalEnvironment: boolean;

  constructor() {
    logStripe('INFO', 'Initialisation StripeService');
    logStripe('INFO', 'Variables d\'environnement détectées', {
      hostname: window.location.hostname,
      protocol: window.location.protocol,
      port: window.location.port,
      origin: window.location.origin,
      href: window.location.href,
      userAgent: navigator.userAgent
    });
    
    // Clé publique Stripe réelle
    this.stripePromise = loadStripe('pk_test_51S59C86LX1cwJPasiNmP8pMN9vBIyR3J35a7DYKwoFOCi7WhNfYFZISgdSoWTGg4XSBroUfpmndhB77CZVqitFyL0083YVHh9n');
    
    // Déterminer l'URL des fonctions selon l'environnement
    this.isLocalEnvironment = window.location.hostname === 'localhost' || 
                             window.location.hostname === '127.0.0.1' ||
                             window.location.hostname.includes('localhost');
    
    if (this.isLocalEnvironment) {
      // Environnement local - utiliser l'émulateur Firebase
      this.functionsUrl = 'http://localhost:5001/swear-30c84/us-central1/api';
      logStripe('INFO', 'Environnement LOCAL détecté');
    } else {
      // Production - utiliser les fonctions déployées
      // Essayer plusieurs URLs possibles
      const possibleUrls = [
        'https://us-central1-swear-30c84.cloudfunctions.net/createCheckout',
        'https://createcheckout-abcdefghij-uc.a.run.app', // Gen2 format
        'https://us-central1-swear-30c84.cloudfunctions.net/stripeWebhook/create-checkout-session'
      ];
      
      // Pour l'instant, utiliser la première URL (Gen1 format)
      this.functionsUrl = 'https://us-central1-swear-30c84.cloudfunctions.net';
      logStripe('INFO', 'Environnement PRODUCTION détecté');
    }
    
    logStripe('INFO', 'Configuration terminée', {
      functionsUrl: this.functionsUrl,
      hostname: window.location.hostname,
      environment: this.isLocalEnvironment ? 'local' : 'production',
      isLocalEnvironment: this.isLocalEnvironment
    });
  }

  async createCheckoutSession(request: CreateCheckoutSessionRequest): Promise<CreateCheckoutSessionResponse> {
    logStripe('INFO', 'Début création session Stripe', {
      request,
      functionsUrl: this.functionsUrl,
      hostname: window.location.hostname,
      origin: window.location.origin,
      isLocalEnvironment: this.isLocalEnvironment,
      timestamp: new Date().toISOString()
    });
    
    // Test de connectivité d'abord
    try {
      logStripe('INFO', 'Test de connectivité...');
      
      // Essayer plusieurs endpoints de test
      const testEndpoints = this.isLocalEnvironment 
        ? [`${this.functionsUrl}/health`]
        : [
            `${this.functionsUrl}/createCheckout`,
            `${this.functionsUrl}/stripeWebhook`,
            'https://us-central1-swear-30c84.cloudfunctions.net/createCheckout',
            'https://us-central1-swear-30c84.cloudfunctions.net/stripeWebhook'
          ];
      
      logStripe('INFO', 'Test des endpoints', { testEndpoints });
      
      let healthResponse;
      let workingEndpoint = null;
      
      for (const endpoint of testEndpoints) {
        try {
          logStripe('INFO', `Test endpoint: ${endpoint}`);
          healthResponse = await fetch(endpoint, {
            method: 'GET',
            mode: 'cors',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          });
          
          logStripe('INFO', `Réponse de ${endpoint}`, {
            status: healthResponse.status,
            statusText: healthResponse.statusText,
            headers: Object.fromEntries(healthResponse.headers.entries())
          });
          
          if (healthResponse.status < 500) {
            workingEndpoint = endpoint;
            logStripe('INFO', `Endpoint fonctionnel trouvé: ${endpoint}`);
            break;
          }
        } catch (endpointError) {
          logStripe('WARN', `Endpoint ${endpoint} échoué`, {
            error: endpointError instanceof Error ? endpointError.message : endpointError
          });
        }
      }
      
      if (!workingEndpoint) {
        logStripe('ERROR', 'Aucun endpoint fonctionnel trouvé');
        throw new Error('Aucune Firebase Function accessible. Vérifiez le déploiement.');
      }
      
      // Mettre à jour l'URL de base si nécessaire
      if (workingEndpoint !== `${this.functionsUrl}/health`) {
        const baseUrl = workingEndpoint.replace(/\/(createCheckout|stripeWebhook|health)$/, '');
        if (baseUrl !== this.functionsUrl) {
          logStripe('INFO', `Mise à jour URL de base: ${this.functionsUrl} → ${baseUrl}`);
          this.functionsUrl = baseUrl;
        }
      }
      
      if (!healthResponse) {
        throw new Error('Aucune réponse des Firebase Functions');
      }
      
      if (healthResponse.status >= 500) {
        const healthText = await healthResponse.text().catch(() => 'Erreur serveur');
        logStripe('ERROR', 'Erreur serveur sur health check', { 
          status: healthResponse.status,
          response: healthText 
        });
        throw new Error(`Erreur serveur Firebase Functions: ${healthResponse.status}`);
      }
      
      try {
        const healthData = await healthResponse.json();
        logStripe('INFO', 'Health check réussi', healthData);
      } catch (jsonError) {
        // Pas grave si ce n'est pas du JSON, l'important c'est que l'endpoint réponde
        logStripe('INFO', 'Endpoint accessible (réponse non-JSON)', {
          status: healthResponse.status,
          contentType: healthResponse.headers.get('content-type')
        });
      }
      
    } catch (healthError) {
      logStripe('ERROR', 'Erreur health check', {
        message: healthError instanceof Error ? healthError.message : healthError,
        stack: healthError instanceof Error ? healthError.stack : undefined,
        functionsUrl: this.functionsUrl,
        isLocalEnvironment: this.isLocalEnvironment
      });
      throw new Error(`Les Firebase Functions ne sont pas accessibles: ${healthError instanceof Error ? healthError.message : 'Erreur inconnue'}`);
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
      
      // Déterminer l'endpoint final
      const finalEndpoint = this.isLocalEnvironment 
        ? `${this.functionsUrl}/create-checkout-session`
        : `${this.functionsUrl}/createCheckout`; // Fonction callable Firebase
      
      logStripe('INFO', 'Payload et endpoint préparés', {
        payload,
        targetUrl: finalEndpoint,
        isLocalEnvironment: this.isLocalEnvironment
      });
      
      // Ajouter un timeout et une gestion d'erreur améliorée
      logStripe('INFO', 'Configuration timeout 20s');
      const controller = new AbortController();
      const timeoutId = setTimeout(() => {
        logStripe('WARN', 'Timeout atteint, annulation de la requête');
        controller.abort();
      }, 20000); // 20 secondes timeout
      
      logStripe('INFO', 'Envoi de la requête POST');
      const response = await fetch(finalEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Origin': window.location.origin,
          'Referer': window.location.href,
        },
        body: JSON.stringify(payload),
        signal: controller.signal,
        mode: 'cors',
        credentials: 'omit',
      });
      
      clearTimeout(timeoutId);
      logStripe('INFO', 'Requête terminée, timeout annulé');

      logStripe('INFO', 'Réponse reçue', {
        status: response.status,
        statusText: response.statusText,
        headers: Object.fromEntries(response.headers.entries()),
        url: response.url,
        type: response.type,
        ok: response.ok
      });
      
      if (!response.ok) {
        let errorText = 'Erreur inconnue';
        try {
          errorText = await response.text();
        } catch (textError) {
          logStripe('WARN', 'Impossible de lire le texte d\'erreur', textError);
        }
        
        logStripe('ERROR', 'Erreur HTTP détaillée', {
          status: response.status,
          statusText: response.statusText,
          responseText: errorText,
          url: response.url,
          headers: Object.fromEntries(response.headers.entries())
        });
        
        throw new Error(`Erreur serveur (${response.status}): ${errorText || 'Service indisponible'}`);
      }

      let data;
      try {
        data = await response.json();
      } catch (jsonError) {
        logStripe('ERROR', 'Erreur parsing JSON', {
          error: jsonError instanceof Error ? jsonError.message : jsonError,
          responseStatus: response.status,
          contentType: response.headers.get('content-type')
        });
        throw new Error('Réponse invalide du serveur (JSON attendu)');
      }
      
      logStripe('INFO', 'Session Stripe créée avec succès', {
        sessionId: data.sessionId || data.id,
        url: data.url,
        fullResponse: data
      });
      
      return {
        sessionId: data.sessionId || data.id,
        url: data.url
      };
    } catch (error) {
      logStripe('ERROR', 'Erreur création session', error);
      throw error;
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
    logStripe('INFO', 'LocalStorage disponible', {
      localStorageLength: localStorage.length,
      keys: Array.from({ length: localStorage.length }, (_, i) => localStorage.key(i))
    });
    
    // Méthode plus robuste pour récupérer l'ID utilisateur
    try {
      // Essayer plusieurs méthodes pour récupérer l'ID utilisateur
      
      // Méthode 1: localStorage Firebase
      const firebaseKey = `firebase:authUser:AIzaSyDRoNJkXmR7C3dt142AAz_hGCPpfKxkXxE:[DEFAULT]`;
      logStripe('INFO', `Recherche clé Firebase: ${firebaseKey}`);
      const storedUser = localStorage.getItem(firebaseKey);
      if (storedUser) {
        logStripe('INFO', 'Données utilisateur trouvées dans localStorage');
        const user = JSON.parse(storedUser);
        if (user.uid) {
          logStripe('INFO', 'User ID trouvé via localStorage', { uid: user.uid });
          return user.uid;
        }
      } else {
        logStripe('WARN', 'Aucune donnée trouvée pour la clé Firebase principale');
      }
      
      // Méthode 2: Essayer d'autres clés localStorage
      logStripe('INFO', 'Recherche dans toutes les clés localStorage...');
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.includes('firebase:authUser')) {
          logStripe('INFO', `Clé Firebase trouvée: ${key}`);
          const userData = localStorage.getItem(key);
          if (userData) {
            try {
              const user = JSON.parse(userData);
              if (user.uid) {
                logStripe('INFO', 'User ID trouvé via clé alternative', { uid: user.uid, key });
                return user.uid;
              }
            } catch (parseError) {
              logStripe('WARN', `Erreur parsing données pour clé ${key}`, parseError);
            }
          }
        }
      }
      
      logStripe('WARN', 'Aucun User ID trouvé dans localStorage');
      logStripe('INFO', 'Contenu localStorage complet', {
        allKeys: Array.from({ length: localStorage.length }, (_, i) => {
          const key = localStorage.key(i);
          return key ? { key, hasValue: !!localStorage.getItem(key) } : null;
        }).filter(Boolean)
      });
      return '';
    } catch (error) {
      logStripe('ERROR', 'Erreur récupération userId', { error });
      return '';
    }
  }

  async redirectToCheckout(request: CreateCheckoutSessionRequest): Promise<void> {
    logStripe('INFO', 'Début redirection Stripe Checkout', request);
    
    logStripe('INFO', 'État Stripe avant redirection', {
      stripePromiseState: 'pending',
      functionsUrl: this.functionsUrl,
      isLocalEnvironment: this.isLocalEnvironment
    });
    
    try {
      const stripe = await this.stripePromise;
      if (!stripe) {
        logStripe('ERROR', 'Stripe non initialisé');
        throw new Error('Stripe non initialisé');
      }

      logStripe('INFO', 'Stripe initialisé, création de la session...');
      logStripe('INFO', 'Détails de la requête', {
        planType: request.planType,
        userEmail: request.userEmail,
        userId: request.userId
      });
      
      const session = await this.createCheckoutSession(request);
      
      logStripe('INFO', 'Session créée, redirection vers Stripe', { sessionId: session.sessionId });
      // Redirection vers Stripe Checkout
      const { error } = await stripe.redirectToCheckout({
        sessionId: session.sessionId,
      });

      if (error) {
        logStripe('ERROR', 'Erreur redirection Stripe', error);
        logStripe('ERROR', 'Détails erreur Stripe', {
          errorType: error.type,
          errorCode: error.code,
          errorMessage: error.message
        });
        throw new Error(error.message);
      }
      
      logStripe('INFO', 'Redirection Stripe réussie');
    } catch (error) {
      logStripe('ERROR', 'Erreur redirection paiement', error);
      logStripe('ERROR', 'Contexte erreur redirection', {
        functionsUrl: this.functionsUrl,
        isLocalEnvironment: this.isLocalEnvironment,
        requestData: request
      });
      throw error;
    }
  }

  // Méthode pour obtenir l'URL du webhook
  getWebhookUrl(): string {
    const webhookUrl = this.isLocalEnvironment 
      ? `${this.functionsUrl}/webhook`
      : `${this.functionsUrl}/stripeWebhook`;
    
    logStripe('INFO', 'URL webhook générée', { webhookUrl });
    return webhookUrl;
  }
}

export const stripeService = new StripeService();