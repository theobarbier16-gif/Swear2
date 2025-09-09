// Utility for processing images with N8N webhook
import { ClothingOptions } from '../App';

// Configuration des proxies CORS
const CORS_PROXIES = [
  'https://cors-anywhere.herokuapp.com/',
  'https://api.allorigins.win/raw?url=',
  'https://corsproxy.io/?',
];

// Variable globale pour la fonction d'ajout de logs
let addDebugLogFunction: ((message: string) => void) | null = null;

export const setDebugLogger = (logFunction: (message: string) => void) => {
  addDebugLogFunction = logFunction;
};

const debugLog = (message: string) => {
  const timestamp = new Date().toLocaleTimeString();
  const logMessage = `[${timestamp}] ${message}`;
  console.log(logMessage);
  if (addDebugLogFunction) {
    addDebugLogFunction(logMessage);
  }
};

// Fonction pour redimensionner l'image à 896x1152
const resizeImage = (file: File): Promise<File> => {
  return new Promise((resolve, reject) => {
    debugLog('🔄 Redimensionnement de l\'image à 896x1152...');
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    if (!ctx) {
      reject(new Error('Impossible de créer le contexte canvas'));
      return;
    }
    
    img.onload = () => {
      // Définir les dimensions cibles
      const targetWidth = 896;
      const targetHeight = 1152;
      
      canvas.width = targetWidth;
      canvas.height = targetHeight;
      
      // Fond blanc
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, targetWidth, targetHeight);
      
      // Calculer les dimensions pour maintenir le ratio
      const imgRatio = img.width / img.height;
      const targetRatio = targetWidth / targetHeight;
      
      let drawWidth, drawHeight;
      
      // Toujours remplir complètement le canvas (crop si nécessaire)
      if (imgRatio > targetRatio) {
        // Image plus large - on crop les côtés
        drawHeight = targetHeight;
        drawWidth = targetHeight * imgRatio;
      } else {
        // Image plus haute - on crop le haut/bas
        drawWidth = targetWidth;
        drawHeight = targetWidth / imgRatio;
      }
      
      // Centrer l'image et la dessiner (crop automatique)
      const offsetX = (targetWidth - drawWidth) / 2;
      const offsetY = (targetHeight - drawHeight) / 2;
      
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      
      // Convertir en blob puis en File
      canvas.toBlob((blob) => {
        if (blob) {
          const resizedFile = new File([blob], file.name, {
            type: 'image/jpeg',
            lastModified: Date.now()
          });
          debugLog(`✅ Image redimensionnée: ${resizedFile.size} bytes`);
          resolve(resizedFile);
        } else {
          reject(new Error('Impossible de créer le blob redimensionné'));
        }
      }, 'image/jpeg', 0.9);
    };
    
    img.onerror = () => {
      reject(new Error('Impossible de charger l\'image'));
    };
    
    img.src = URL.createObjectURL(file);
  });
};

export interface WebhookResponse {
  success: boolean;
  imageUrl?: string;
  error?: string;
}

export const processImageWithN8N = async (file: File, options: ClothingOptions): Promise<WebhookResponse> => {
  debugLog('🚀 Début du traitement d\'image');
  
  try {
    // Validation du fichier
    debugLog('🔍 Validation du fichier...');
    if (!file || file.size === 0) {
      debugLog('❌ Fichier invalide ou vide');
      throw new Error('Fichier invalide ou vide');
    }
    
    if (file.size > 25 * 1024 * 1024) { // 25MB max pour mobile
      debugLog(`❌ Fichier trop volumineux: ${file.size} bytes`);
      throw new Error('Fichier trop volumineux (max 25MB)');
    }
    
    // Log détaillé de la taille
    const sizeInMB = (file.size / (1024 * 1024)).toFixed(2);
    debugLog(`📏 Taille du fichier: ${file.size} bytes (${sizeInMB} MB)`);
    
    if (!file.type.startsWith('image/')) {
      debugLog(`❌ Type de fichier invalide: ${file.type}`);
      throw new Error('Le fichier doit être une image');
    }
    
    debugLog(`✅ Fichier validé: ${file.name} (${file.size} bytes, ${file.type})`);
    
    // Redimensionner l'image à 896x1152
    let processedFile;
    try {
      processedFile = await resizeImage(file);
    } catch (error) {
      debugLog(`❌ Erreur redimensionnement: ${error}`);
      throw new Error('Impossible de redimensionner l\'image');
    }
    
    // Convert file to base64
    debugLog('🔄 Début conversion base64...');
    let base64;
    try {
      base64 = await fileToBase64(processedFile);
      const base64SizeKB = (base64.length * 0.75 / 1024).toFixed(2); // Approximation taille base64
      debugLog(`✅ Conversion réussie: ${base64.length} caractères (~${base64SizeKB} KB)`);
    } catch (error) {
      debugLog(`❌ Erreur conversion: ${error}`);
      throw new Error('Impossible de traiter l\'image');
    }
    
    if (!base64 || base64.length === 0) {
      debugLog('❌ Base64 vide après conversion');
      throw new Error('Échec de la conversion de l\'image');
    }
    
    debugLog(`🚀 Envoi vers webhook: ${options.gender} ${options.size.toUpperCase()}`);
    
    // Préparer le payload
    debugLog('📦 Préparation du payload...');
    // Traiter la valeur mirror
    const mirrorValue = options.mirror === 'mirror' ? 'photo dans le miroir' : 'normal';
    
    const payload = {
      image: base64,
      gender: options.gender,
      size: options.size,
      mirror: mirrorValue
    };
    
    debugLog(`📋 Paramètres ajoutés au payload:`);
    debugLog(`  - gender: "${options.gender}"`);
    debugLog(`  - size: "${options.size}"`);
    debugLog(`  - mirror: "${mirrorValue}"`);
    
    const payloadSize = JSON.stringify(payload).length;
    const payloadSizeMB = (payloadSize / (1024 * 1024)).toFixed(2);
    debugLog(`📦 Payload: ${payloadSize} caractères (${payloadSizeMB} MB)`);
    
    // Vérifier si le payload n'est pas trop gros
    if (payloadSize > 100 * 1024 * 1024) { // 100MB limit pour le payload JSON
      debugLog('❌ Payload trop volumineux pour l\'envoi');
      throw new Error('Image trop complexe à traiter. Essayez avec une image plus simple.');
    }
    debugLog(`📋 Paramètres: gender=${options.gender}, size=${options.size}, mirror=${options.mirror}`);
    
    // Test de connectivité avant l'envoi principal
    debugLog('🔍 Test de connectivité vers le serveur...');
    try {
      // Test avec une requête OPTIONS pour vérifier CORS
      const testResponse = await fetch('https://n8n-automatisation.fr/webhook-test/testvolt', {
        method: 'OPTIONS',
        headers: {
          'Accept': '*/*',
          'Access-Control-Request-Method': 'POST',
          'Access-Control-Request-Headers': 'Content-Type',
          'Origin': window.location.origin,
        },
      });
      debugLog(`✅ Test CORS: ${testResponse.status} ${testResponse.statusText}`);
      
      // Vérifier les headers CORS
      const corsHeaders = {
        'Access-Control-Allow-Origin': testResponse.headers.get('Access-Control-Allow-Origin'),
        'Access-Control-Allow-Methods': testResponse.headers.get('Access-Control-Allow-Methods'),
        'Access-Control-Allow-Headers': testResponse.headers.get('Access-Control-Allow-Headers'),
      };
      debugLog(`🔍 Headers CORS: ${JSON.stringify(corsHeaders)}`);
      
    } catch (testError) {
      debugLog(`⚠️ Test CORS échoué: ${testError}`);
      // Continuer quand même, parfois OPTIONS n'est pas supporté
    }
    
    // Essayer plusieurs URLs de fallback
    const webhookUrls = [
      'https://n8n-automatisation.fr/webhook-test/testvolt',
      'https://n8n-automatisation.fr/webhook/testvolt'
    ];
    
    let response;
    const maxRetries = 1; // Réduire les tentatives pour éviter les timeouts multiples
    let lastError;
    let successUrl = null;
    
    // Essayer chaque URL
    for (const webhookUrl of webhookUrls) {
      debugLog(`🌐 Test de l'URL: ${webhookUrl}`);
      
      for (let attempt = 0; attempt <= maxRetries; attempt++) {
        try {
          debugLog(`🔄 Tentative ${attempt + 1}/${maxRetries + 1} pour ${webhookUrl}`);
          
          const controller = new AbortController();
          const timeoutDuration = 15000; // Réduire à 15s pour éviter les longs timeouts
          const timeoutId = setTimeout(() => {
            debugLog('⏰ Timeout - annulation de la requête');
            controller.abort();
          }, timeoutDuration);
          
          debugLog(`📡 Envoi de la requête... (${payloadSizeMB} MB)`);
          
          // Log du début de l'envoi
          const startTime = Date.now();
          
          // Headers optimisés pour mobile et CORS
          const headers = {
            'Content-Type': 'application/json',
          };
          
          debugLog(`📋 Headers envoyés: ${JSON.stringify(headers)}`);
          
          response = await fetch(webhookUrl, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(payload),
            signal: controller.signal,
          });
          
          clearTimeout(timeoutId);
          const endTime = Date.now();
          const duration = endTime - startTime;
          debugLog(`✅ Requête envoyée en ${duration}ms`);
          debugLog(`📡 Statut reçu: ${response.status} ${response.statusText}`);
          
          // Log des headers de réponse
          const responseHeaders = {};
          response.headers.forEach((value, key) => {
            responseHeaders[key] = value;
          });
          debugLog(`📋 Headers réponse: ${JSON.stringify(responseHeaders)}`);
          
          successUrl = webhookUrl;
          break; // Succès, sortir de la boucle
          
        } catch (error) {
          lastError = error;
          debugLog(`❌ Tentative ${attempt + 1} échouée pour ${webhookUrl}: ${error instanceof Error ? error.message : String(error)}`);
          
          // Log détaillé de l'erreur
          if (error instanceof Error) {
            debugLog(`🔍 Type d'erreur: ${error.name}`);
            debugLog(`🔍 Message: ${error.message}`);
            
            // Diagnostics spécifiques
            if (error.message.includes('Load failed')) {
              debugLog('🌐 Erreur "Load failed" - Essai avec proxy CORS...');
            } else if (error.message.includes('NetworkError')) {
              debugLog('📡 Erreur réseau - Vérifiez votre connexion');
            } else if (error.message.includes('CORS')) {
              debugLog('🚫 Erreur CORS - Tentative avec proxy...');
            } else if (error.message.includes('Failed to fetch')) {
              debugLog('📡 Failed to fetch - Tentative avec méthode alternative...');
            }
          }
          
          if (attempt === maxRetries) {
            debugLog(`❌ Toutes les tentatives ont échoué pour ${webhookUrl}`);
          } else {
            // Attendre avant de réessayer
            const waitTime = 2000; // Temps d'attente fixe de 2s
            debugLog(`⏳ Attente de ${waitTime}ms avant retry...`);
            await new Promise(resolve => setTimeout(resolve, waitTime));
          }
        }
      }
      
      // Si on a une réponse, sortir de la boucle des URLs
      if (response) {
        debugLog(`✅ Succès avec l'URL: ${successUrl}`);
        break;
      }
    }
    
    if (!response) {
      debugLog('❌ Aucune réponse reçue - passage en mode simulation');
      
      // Retourner une erreur au lieu de passer en mode simulation
      debugLog('❌ Impossible de contacter le serveur');
      return {
        success: false,
        error: 'Impossible de contacter le serveur de traitement. Vérifiez votre connexion internet.',
      };
    }

    debugLog(`📡 Analyse de la réponse: ${response.status} ${response.statusText}`);
    
    if (!response.ok) {
      const errorText = await response.text().catch(() => 'Erreur inconnue');
      debugLog(`❌ Erreur serveur (${response.status}): ${errorText}`);
      throw new Error(`Erreur serveur (${response.status}): ${errorText}`);
    }

    // Vérifier le type de contenu de la réponse
    const contentType = response.headers.get('content-type');
    debugLog(`🎭 Type de contenu: ${contentType}`);
    
    // Cloner la réponse pour pouvoir la lire plusieurs fois
    const responseClone = response.clone();
    
    // Gestion robuste de la réponse
    try {
      const textContent = await responseClone.text();
      debugLog(`📝 Réponse reçue (${textContent.length} caractères)`);
      
      if (textContent.length === 0) {
        debugLog('❌ Réponse vide du serveur');
        throw new Error('Réponse vide du serveur');
      }
      
      // Vérifier si c'est du JSON
      if (contentType?.includes('application/json')) {
        debugLog('🔍 Parsing JSON...');
        const jsonData = JSON.parse(textContent);
        debugLog('📊 Données JSON reçues');
        
        // Si le JSON contient une image en base64
        if (jsonData.image || jsonData.imageUrl || jsonData.result) {
          debugLog('🖼️ Image trouvée dans la réponse');
          // Traiter selon le format JSON reçu
          const imageData = jsonData.image || jsonData.imageUrl || jsonData.result;
          
          if (typeof imageData === 'string') {
            // Si c'est une URL
            if (imageData.startsWith('http')) {
              debugLog('✅ URL d\'image reçue');
              return {
                success: true,
                imageUrl: imageData,
              };
            }
            // Si c'est du base64
            else if (imageData.startsWith('data:image/')) {
              debugLog('✅ Image base64 avec préfixe reçue');
              const imageUrl = imageData;
              return {
                success: true,
                imageUrl: imageUrl,
              };
            }
            // Si c'est du base64 sans préfixe
            else {
              debugLog('✅ Image base64 sans préfixe reçue');
              const imageUrl = `data:image/png;base64,${imageData}`;
              return {
                success: true,
                imageUrl: imageUrl,
              };
            }
          }
        }
        
        debugLog('❌ Format de réponse JSON non reconnu');
        return {
          success: false,
          error: 'Format de réponse non reconnu',
        };
      }
    } catch (textError) {
      debugLog(`⚠️ Impossible de lire comme texte: ${textError}`);
    }
    
    // Si ce n'est pas du JSON, essayer comme blob d'image
    debugLog('🖼️ Traitement comme image binaire...');
    let imageBlob;
    try {
      imageBlob = await response.blob();
    } catch (blobError) {
      debugLog(`❌ Erreur lecture blob: ${blobError}`);
      throw new Error('Impossible de lire la réponse du serveur');
    }
    
    debugLog(`📦 Blob reçu: ${imageBlob.size} bytes (${imageBlob.type})`);
    
    if (imageBlob.size === 0) {
      debugLog('❌ Image reçue vide');
      throw new Error('Image reçue vide');
    }
    
    // Create a URL for the received image blob
    const imageUrl = URL.createObjectURL(imageBlob);
    debugLog('✅ URL de l\'image créée');
    
    // Signaler que l'image a été reçue avec succès
    debugLog('🎯 Image reçue avec succès - Crédit sera déduit');
    
    return {
      success: true,
      imageUrl: imageUrl,
    };
  } catch (error) {
    debugLog(`❌ Erreur finale: ${error instanceof Error ? error.message : error}`);
    
    let errorMessage = 'Erreur de traitement inconnue';
    
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        errorMessage = 'Délai d\'attente dépassé. Vérifiez votre connexion.';
      } else if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
        errorMessage = 'Problème de connexion. Vérifiez votre réseau.';
      } else if (error.message.includes('Load failed')) {
        errorMessage = 'Problème de connexion réseau. Vérifiez votre connexion internet.';
      } else if (error.message.includes('413') || error.message.includes('Request Entity Too Large')) {
        errorMessage = 'Image trop volumineuse pour le serveur. Réduisez la taille de votre image.';
      } else {
        errorMessage = error.message;
      }
    }
    
    debugLog(`❌ Message final: ${errorMessage}`);
    
    return {
      success: false,
      error: errorMessage,
    };
  }
};

// Fonction pour générer un ID de session unique
const generateSessionId = (): string => {
  return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    debugLog(`🔄 Conversion ${file.name}: ${file.size} bytes`);
    
    if (!file) {
      debugLog('❌ Aucun fichier fourni');
      reject(new Error('Aucun fichier fourni'));
      return;
    }
    
    debugLog(`📁 Type: ${file.type}, Taille: ${(file.size/1024).toFixed(1)} KB`);
    
    const reader = new FileReader();
    
    reader.onload = () => {
      debugLog('✅ FileReader onload');
      try {
        if (typeof reader.result === 'string') {
          // Remove the data:image/jpeg;base64, prefix
          const base64 = reader.result.split(',')[1];
          if (!base64 || base64.length === 0) {
            debugLog('❌ Base64 vide après split');
            reject(new Error('Conversion base64 échouée'));
            return;
          }
          debugLog(`✅ Base64: ${base64.length} chars`);
          resolve(base64);
        } else {
          debugLog('❌ Résultat FileReader invalide');
          reject(new Error('Format de fichier non supporté'));
        }
      } catch (error) {
        debugLog(`❌ Erreur dans onload: ${error}`);
        reject(new Error('Erreur lors de la conversion'));
      }
    };
    
    reader.onerror = () => {
      debugLog('❌ FileReader onerror');
      reject(new Error('Impossible de lire le fichier'));
    };
    
    reader.onabort = () => {
      debugLog('❌ FileReader onabort');
      reject(new Error('Lecture du fichier interrompue'));
    };
    
    // Utiliser readAsDataURL avec gestion d'erreur
    try {
      debugLog('🚀 Lecture fichier...');
      reader.readAsDataURL(file);
    } catch (error) {
      debugLog(`❌ Erreur démarrage readAsDataURL: ${error}`);
      reject(new Error('Impossible d\'initier la lecture du fichier'));
    }
  });
};