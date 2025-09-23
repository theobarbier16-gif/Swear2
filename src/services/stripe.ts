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
    logStripe('INFO', '🚀 VERSION 2.0 - Initialisation StripeService avec URLs Cloud Run FIXES');
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
      // Production - utiliser les URLs Cloud Run directement
      this.functionsUrl = 'https://createcheckout-ewygqh2kbq-uc.a.run.app';
      logStripe('INFO', '🎯 VERSION 2.0 - Environnement PRODUCTION - URLs Cloud Run configurées');
    }
    
    logStripe('INFO', '✅ VERSION 2.0 - Configuration terminée avec URLs Cloud Run', {
      functionsUrl: this.functionsUrl,
      hostname: window.location.hostname,
      environment: this.isLocalEnvironment ? 'local' : 'production',
      isLocalEnvironment: this.isLocalEnvironment,
      cloudRunMode: !this.isLocalEnvironment
    });
  }

  async createCheckoutSession(request: CreateCheckoutSessionRequest): Promise<CreateCheckoutSessionResponse> {
    logStripe('INFO', '🚀 VERSION 2.0 - Début création session Stripe avec Cloud Run', {
      request,
      functionsUrl: this.functionsUrl,
      hostname: window.location.hostname,
      origin: window.location.origin,
      isLocalEnvironment: this.isLocalEnvironment,
      timestamp: new Date().toISOString()
    });
    
    // VERSION 2.0 - Test de connectivité avec les vraies URLs Cloud Run
    try {
      logStripe('INFO', '🔍 VERSION 2.0 - Test de connectivité Cloud Run...');
      
      // Tester les endpoints Cloud Run réels
      const testEndpoints = [
        'https://createcheckout-ewygqh2kbq-uc.a.run.app',
        'https://createcheckouthttp-ewygqh2kbq-uc.a.run.app',
        'https://stripewebhook-ewygqh2kbq-uc.a.run.app'
      ];
      
      logStripe('INFO', '🎯 Test des endpoints Cloud Run', { testEndpoints });
      
      let healthResponse;
      let workingEndpoint = null;
      
      for (const endpoint of testEndpoints) {
        try {
          logStripe('INFO', `🔍 Test endpoint Cloud Run: ${endpoint}`);
          
          const testResponse = await fetch(endpoint, {
            method: 'OPTIONS',
            mode: 'cors',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Origin': window.location.origin
            }
          });
          
          logStripe('INFO', `✅ Réponse OPTIONS de ${endpoint}`, {
            status: testResponse.status,
            statusText: testResponse.statusText,
            headers: Object.fromEntries(testResponse.headers.entries())
          });
          
          // Si OPTIONS fonctionne ou retourne 405 (Method Not Allowed), l'endpoint existe
          if (testResponse.status === 200 || testResponse.status === 204 || testResponse.status === 405) {
            workingEndpoint = endpoint;
            healthResponse = testResponse;
            logStripe('INFO', `✅ Endpoint Cloud Run fonctionnel trouvé: ${endpoint}`);
            break;
          }
        } catch (endpointError) {
          logStripe('WARN', `❌ Endpoint ${endpoint} échoué`, {
            error: endpointError instanceof Error ? endpointError.message : endpointError
          });
        }
      }
      
      if (!workingEndpoint) {
        logStripe('ERROR', '❌ Aucun endpoint Cloud Run fonctionnel trouvé');
        workingEndpoint = 'https://createcheckout-ewygqh2kbq-uc.a.run.app';
        logStripe('WARN', `🔄 Utilisation de l'endpoint par défaut: ${workingEndpoint}`);
      }
      
      logStripe('INFO', '✅ Test de connectivité Cloud Run terminé', {
        workingEndpoint,
        finalFunctionsUrl: this.functionsUrl
      });
      
    } catch (healthError) {
      logStripe('WARN', '⚠️ Erreur test de connectivité Cloud Run - Continuation', {
        message: healthError instanceof Error ? healthError.message : healthError,
        functionsUrl: this.functionsUrl,
        isLocalEnvironment: this.isLocalEnvironment
      });
    }
    
    try {
      logStripe('INFO', '📦 Préparation du payload pour Cloud Run');
      const userId = this.getCurrentUserId();
      
      // Vérifier que l'utilisateur est connecté
      const finalUserId = request.userId || userId;
      if (!finalUserId) {
        logStripe('ERROR', '❌ Aucun utilisateur connecté trouvé');
        throw new Error('Vous devez être connecté pour effectuer un paiement. Veuillez vous reconnecter.');
      }
      
      // Payload pour Cloud Run (requête HTTP directe)
      const payload = {
        priceId: this.getPriceId(request.planType),
        userId: finalUserId,
        planType: request.planType,
        userEmail: request.userEmail,
        successUrl: request.successUrl || `${window.location.origin}/?success=true&plan=${request.planType}`,
        cancelUrl: request.cancelUrl || `${window.location.origin}/?canceled=true`,
      };
      
      logStripe('INFO', '📋 Payload Cloud Run préparé', {
        payload,
        targetUrl: 'https://createcheckout-ewygqh2kbq-uc.a.run.app',
        isLocalEnvironment: this.isLocalEnvironment,
        isCloudRun: true
      });
      
      // Essayer createCheckout, puis fallback sur createCheckoutHttp
      let response: Response;
      let attemptCount = 0;
      const maxAttempts = 2;
      
      while (attemptCount < maxAttempts) {
        attemptCount++;
        const currentEndpoint = attemptCount === 1 
          ? 'https://createcheckout-ewygqh2kbq-uc.a.run.app'
          : 'https://createcheckouthttp-ewygqh2kbq-uc.a.run.app';
        
        logStripe('INFO', `🚀 Tentative ${attemptCount}/${maxAttempts} - Cloud Run`, {
          endpoint: currentEndpoint,
          payloadType: 'http-direct'
        });
        
        // Timeout de 20 secondes
        const controller = new AbortController();
        const timeoutId = setTimeout(() => {
          logStripe('WARN', '⏰ Timeout atteint, annulation de la requête');
          controller.abort();
        }, 20000);
        
        try {
          logStripe('INFO', '📡 Envoi de la requête POST vers Cloud Run');
          response = await fetch(currentEndpoint, {
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
          logStripe('INFO', '✅ Requête Cloud Run terminée');
          
          // Si la requête réussit, sortir de la boucle
          if (response.ok) {
            logStripe('INFO', `✅ Tentative ${attemptCount} réussie avec Cloud Run`);
            break;
          } else {
            logStripe('WARN', `⚠️ Tentative ${attemptCount} échouée`, {
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
          logStripe('ERROR', `❌ Erreur tentative ${attemptCount} avec Cloud Run`, {
            error: fetchError instanceof Error ? fetchError.message : fetchError,
            endpoint: currentEndpoint
          });
          
          // Si c'est la dernière tentative, relancer l'erreur
          if (attemptCount === maxAttempts) {
            throw fetchError;
          }
        }
      }

      logStripe('INFO', '📨 Réponse Cloud Run reçue', {
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
          logStripe('WARN', '⚠️ Impossible de lire le texte d\'erreur', textError);
        }
        
        logStripe('ERROR', '❌ Erreur HTTP Cloud Run détaillée', {
          status: response.status,
          statusText: response.statusText,
          responseText: errorText,
          url: response.url,
          headers: Object.fromEntries(response.headers.entries())
        });
        
        throw new Error(`Erreur serveur Cloud Run (${response.status}): ${errorText || 'Service indisponible'}`);
      }

      let data;
      try {
        data = await response.json();
      } catch (jsonError) {
        logStripe('ERROR', '❌ Erreur parsing JSON Cloud Run', {
          error: jsonError instanceof Error ? jsonError.message : jsonError,
          responseStatus: response.status,
          contentType: response.headers.get('content-type')
        });
        throw new Error('Réponse invalide du serveur Cloud Run (JSON attendu)');
      }
      
      logStripe('INFO', '🎉 Session Stripe créée avec succès via Cloud Run', {
        sessionId: data.sessionId || data.id,
        url: data.url,
        fullResponse: data
      });
      
      return {
        sessionId: data.sessionId || data.id,
        url: data.url
      };
    } catch (error) {
      logStripe('ERROR', '❌ Erreur création session Cloud Run', error);
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
    logStripe('INFO', '💰 Price ID sélectionné', { planType, priceId });
    
    return priceId;
  }

  private getCurrentUserId(): string {
    logStripe('INFO', '👤 Récupération User ID');
    logStripe('INFO', 'LocalStorage disponible', {
      localStorageLength: localStorage.length,
      keys: Array.from({ length: localStorage.length }, (_, i) => localStorage.key(i))
    });
    
    // Méthode plus robuste pour récupérer l'ID utilisateur
    try {
      // Essayer plusieurs méthodes pour récupérer l'ID utilisateur
      
      // Méthode 1: localStorage Firebase
      const firebaseKey = `firebase:authUser:AIzaSyDRoNJkXmR7C3dt142AAz_hGCPpfKxkXxE:[DEFAULT]`;
      logStripe('INFO', `🔍 Recherche clé Firebase: ${firebaseKey}`);
      const storedUser = localStorage.getItem(firebaseKey);
      if (storedUser) {
        logStripe('INFO', '✅ Données utilisateur trouvées dans localStorage');
        const user = JSON.parse(storedUser);
        if (user.uid) {
          logStripe('INFO', '✅ User ID trouvé via localStorage', { uid: user.uid });
          return user.uid;
        }
      } else {
        logStripe('WARN', '⚠️ Aucune donnée trouvée pour la clé Firebase principale');
      }
      
      // Méthode 2: Essayer d'autres clés localStorage
      logStripe('INFO', '🔍 Recherche dans toutes les clés localStorage...');
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.includes('firebase:authUser')) {
          logStripe('INFO', `🔍 Clé Firebase trouvée: ${key}`);
          const userData = localStorage.getItem(key);
          if (userData) {
            try {
              const user = JSON.parse(userData);
              if (user.uid) {
                logStripe('INFO', '✅ User ID trouvé via clé alternative', { uid: user.uid, key });
                return user.uid;
              }
            } catch (parseError) {
              logStripe('WARN', `⚠️ Erreur parsing données pour clé ${key}`, parseError);
            }
          }
        }
      }
      
      logStripe('WARN', '⚠️ Aucun User ID trouvé dans localStorage');
      logStripe('INFO', 'Contenu localStorage complet', {
        allKeys: Array.from({ length: localStorage.length }, (_, i) => {
          const key = localStorage.key(i);
          return key ? { key, hasValue: !!localStorage.getItem(key) } : null;
        }).filter(Boolean)
      });
      return '';
    } catch (error) {
      logStripe('ERROR', '❌ Erreur récupération userId', { error });
      return '';
    }
  }

  async redirectToCheckout(request: CreateCheckoutSessionRequest): Promise<void> {
    logStripe('INFO', '🚀 NOUVELLE VERSION - Début redirection Stripe Checkout avec Cloud Run', request);
    
    logStripe('INFO', 'État Stripe avant redirection', {
      stripePromiseState: 'pending',
      functionsUrl: this.functionsUrl,
      isLocalEnvironment: this.isLocalEnvironment,
      cloudRunMode: !this.isLocalEnvironment
    });
    
    try {
      const stripe = await this.stripePromise;
      if (!stripe) {
        logStripe('ERROR', '❌ Stripe non initialisé');
        throw new Error('Stripe non initialisé');
      }

      logStripe('INFO', '✅ Stripe initialisé, création de la session Cloud Run...');
      logStripe('INFO', 'Détails de la requête', {
        planType: request.planType,
        userEmail: request.userEmail,
        userId: request.userId
      });
      
      const session = await this.createCheckoutSession(request);
      
      logStripe('INFO', '🎯 Session créée via Cloud Run, redirection vers Stripe', { sessionId: session.sessionId });
      // Redirection vers Stripe Checkout
      const { error } = await stripe.redirectToCheckout({
        sessionId: session.sessionId,
      });

      if (error) {
        logStripe('ERROR', '❌ Erreur redirection Stripe', error);
        logStripe('ERROR', 'Détails erreur Stripe', {
          errorType: error.type,
          errorCode: error.code,
          errorMessage: error.message
        });
        throw new Error(error.message);
      }
      
      logStripe('INFO', '🎉 Redirection Stripe réussie via Cloud Run');
    } catch (error) {
      logStripe('ERROR', '❌ Erreur redirection paiement Cloud Run', error);
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
    
    logStripe('INFO', '🔗 URL webhook Cloud Run générée', { webhookUrl });
    return webhookUrl;
  }
}

export const stripeService = new StripeService();