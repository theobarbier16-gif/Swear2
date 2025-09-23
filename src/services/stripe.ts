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
      this.functionsUrl = 'http://localhost:5001/swear-30c84/us-central1';
      logStripe('INFO', 'Environnement LOCAL détecté');
    } else {
      // Production - utiliser les fonctions déployées
      // URL de base pour les fonctions Cloud Run (Gen2)
      this.functionsUrl = 'https://createcheckout-ewygqh2kbq-uc.a.run.app';
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
      
      // Tester les endpoints réels de vos Firebase Functions
      const testEndpoints = [
        // URLs Cloud Run réelles - vos fonctions déployées
        'https://createcheckout-ewygqh2kbq-uc.a.run.app',
        'https://createcheckouthttp-ewygqh2kbq-uc.a.run.app',
        'https://stripewebhook-ewygqh2kbq-uc.a.run.app',
        // Fallback vers les URLs Firebase Functions classiques (si elles existent)
        'https://us-central1-swear-30c84.cloudfunctions.net/createCheckout'
      ];
      
      logStripe('INFO', 'Test des endpoints', { testEndpoints });
      
      let healthResponse;
      let workingEndpoint = null;
      
      for (const endpoint of testEndpoints) {
        try {
          logStripe('INFO', `Test endpoint: ${endpoint}`);
          
          // Pour les Firebase Functions, on teste avec une requête OPTIONS d'abord (CORS preflight)
          const testResponse = await fetch(endpoint, {
            method: 'OPTIONS',
            mode: 'cors',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Origin': window.location.origin
            }
          });
          
          logStripe('INFO', `Réponse OPTIONS de ${endpoint}`, {
            status: testResponse.status,
            statusText: testResponse.statusText,
            headers: Object.fromEntries(testResponse.headers.entries())
          });
          
          // Si OPTIONS fonctionne ou retourne 405 (Method Not Allowed), l'endpoint existe
          if (testResponse.status === 200 || testResponse.status === 204 || testResponse.status === 405) {
            workingEndpoint = endpoint;
            healthResponse = testResponse;
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
        logStripe('ERROR', 'Aucun endpoint fonctionnel trouvé - Tentative directe');
        // Si aucun endpoint ne répond, on essaie quand même avec l'URL principale
        workingEndpoint = `${this.functionsUrl}/createCheckout`;
        logStripe('WARN', `Utilisation de l'endpoint par défaut: ${workingEndpoint}`);
      }
      
      // Mettre à jour l'URL de base si on a trouvé un endpoint Cloud Run
      if (workingEndpoint && workingEndpoint.includes('.run.app')) {
        // Pour Cloud Run, on utilise l'URL complète
        logStripe('INFO', `Endpoint Cloud Run détecté: ${workingEndpoint}`);
      } else if (workingEndpoint) {
        const baseUrl = workingEndpoint.replace(/\/(createCheckout|stripeWebhook)$/, '');
        if (baseUrl !== this.functionsUrl) {
          logStripe('INFO', `Mise à jour URL de base: ${this.functionsUrl} → ${baseUrl}`);
          this.functionsUrl = baseUrl;
        }
      }
      
      logStripe('INFO', 'Test de connectivité terminé', {
        workingEndpoint,
        finalFunctionsUrl: this.functionsUrl
      });
      
    } catch (healthError) {
      logStripe('WARN', 'Erreur test de connectivité - Continuation avec URL par défaut', {
        message: healthError instanceof Error ? healthError.message : healthError,
        functionsUrl: this.functionsUrl,
        isLocalEnvironment: this.isLocalEnvironment
      });
      // Ne pas lancer d'erreur ici, on essaie quand même la requête principale
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
        data: {
          priceId: this.getPriceId(request.planType),
          userId: finalUserId,
          planType: request.planType,
          userEmail: request.userEmail,
          successUrl: request.successUrl || `${window.location.origin}/?success=true&plan=${request.planType}`,
          cancelUrl: request.cancelUrl || `${window.location.origin}/?canceled=true`,
        }
      };
      
      // Payload alternatif pour les requêtes directes (non-callable)
      const directPayload = {
        priceId: this.getPriceId(request.planType),
        userId: finalUserId,
        planType: request.planType,
        userEmail: request.userEmail,
        successUrl: request.successUrl || `${window.location.origin}/?success=true&plan=${request.planType}`,
        cancelUrl: request.cancelUrl || `${window.location.origin}/?canceled=true`,
      };
      
      // Déterminer l'endpoint et le payload selon le type de fonction
      let finalEndpoint: string;
      let finalPayload: any;
      let useCallableFunction = false; // Cloud Run utilise HTTP direct
      
      // Utiliser directement l'URL Cloud Run
      finalEndpoint = 'https://createcheckout-ewygqh2kbq-uc.a.run.app';
      finalPayload = directPayload;
      logStripe('INFO', 'Mode Cloud Run détecté - requête HTTP directe');
      
      logStripe('INFO', 'Payload et endpoint préparés', {
        payload: finalPayload,
        targetUrl: finalEndpoint,
        isLocalEnvironment: this.isLocalEnvironment,
        isCloudRun: true,
        useCallableFunction
      });
      
      // Essayer d'abord createCheckout, puis fallback sur createCheckoutHttp
      let response: Response;
      let attemptCount = 0;
      const maxAttempts = 2;
      
      while (attemptCount < maxAttempts) {
        attemptCount++;
        const currentEndpoint = attemptCount === 1 
          ? 'https://createcheckout-ewygqh2kbq-uc.a.run.app'
          : 'https://createcheckouthttp-ewygqh2kbq-uc.a.run.app';
        const currentPayload = directPayload;
        
        logStripe('INFO', `Tentative ${attemptCount}/${maxAttempts}`, {
          endpoint: currentEndpoint,
          payloadType: 'http-direct'
        });
        
        // Ajouter un timeout et une gestion d'erreur améliorée
        logStripe('INFO', 'Configuration timeout 20s');
        const controller = new AbortController();
        const timeoutId = setTimeout(() => {
          logStripe('WARN', 'Timeout atteint, annulation de la requête');
          controller.abort();
        }, 20000); // 20 secondes timeout
        
        try {
          logStripe('INFO', 'Envoi de la requête POST');
          response = await fetch(currentEndpoint, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Origin': window.location.origin,
              'Referer': window.location.href,
            },
            body: JSON.stringify(currentPayload),
            signal: controller.signal,
            mode: 'cors',
            credentials: 'omit',
          });
          
          clearTimeout(timeoutId);
          logStripe('INFO', 'Requête terminée, timeout annulé');
          
          // Si la requête réussit, sortir de la boucle
          if (response.ok) {
            logStripe('INFO', `Tentative ${attemptCount} réussie`);
            break;
          } else {
            logStripe('WARN', `Tentative ${attemptCount} échouée`, {
              status: response.status,
              statusText: response.statusText
            });
            
            // Si c'est la dernière tentative ou si ce n'est pas une erreur CORS/404, lancer l'erreur
            if (attemptCount === maxAttempts || (response.status !== 404 && response.status !== 0)) {
              break;
            }
          }
        } catch (fetchError) {
          clearTimeout(timeoutId);
          logStripe('ERROR', `Erreur tentative ${attemptCount}`, {
            error: fetchError instanceof Error ? fetchError.message : fetchError,
            endpoint: currentEndpoint
          });
          
          // Si c'est la dernière tentative, relancer l'erreur
          if (attemptCount === maxAttempts) {
            throw fetchError;
          }
        }
      }

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
      ? 'http://localhost:5001/swear-30c84/us-central1/stripeWebhook'
      : 'https://stripewebhook-ewygqh2kbq-uc.a.run.app';
    
    logStripe('INFO', 'URL webhook générée', { webhookUrl });
    return webhookUrl;
  }
}

export const stripeService = new StripeService();