// Utility for processing images with N8N webhook
import { ClothingOptions } from '../App';

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

export interface WebhookResponse {
  success: boolean;
  imageUrl?: string;
  error?: string;
}

export const processImageWithN8N = async (file: File, options: ClothingOptions): Promise<WebhookResponse> => {
  debugLog('🚀 Début du traitement d\'image');
  
  try {
    // Validation du fichier
    console.log('🔍 [MOBILE DEBUG] Validation du fichier...');
    if (!file || file.size === 0) {
      console.error('❌ [MOBILE DEBUG] Fichier invalide ou vide');
      throw new Error('Fichier invalide ou vide');
    }
    
    if (file.size > 10 * 1024 * 1024) { // 10MB max
      debugLog(`❌ Fichier trop volumineux: ${file.size} bytes`);
      throw new Error('Fichier trop volumineux (max 10MB)');
    }
    
    if (!file.type.startsWith('image/')) {
      debugLog(`❌ Type de fichier invalide: ${file.type}`);
      throw new Error('Le fichier doit être une image');
    }
    
    debugLog(`✅ Fichier validé: ${file.name} (${file.size} bytes, ${file.type})`);
    
    // Convert file to base64
    let base64;
    try {
      debugLog('🔄 Conversion en base64...');
      base64 = await fileToBase64(file);
      debugLog(`✅ Conversion réussie (${base64.length} caractères)`);
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
    const payload = {
      image: base64,
      filename: file.name,
      gender: options.gender,
      size: options.size,
      mirror: options.mirror === 'mirror' ? 'photo dans le miroir' : 'normale',
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    };
    
    debugLog(`📦 Payload préparé (${JSON.stringify(payload).length} caractères)`);
    
    // Send to N8N webhook avec timeout et retry
    let response;
    const maxRetries = 3; // Plus de tentatives pour mobile
    let lastError;
    
    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      try {
        debugLog(`🔄 Tentative ${attempt + 1}/${maxRetries + 1}`);
        
        const controller = new AbortController();
        const timeoutDuration = 30000; // 30s timeout
        const timeoutId = setTimeout(() => {
          debugLog('⏰ Timeout - annulation de la requête');
          controller.abort();
        }, timeoutDuration);
        
        debugLog('📡 Envoi de la requête...');
        
        response = await fetch('https://n8n-automatisation.fr/webhook-test/testvolt', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': '*/*',
            'User-Agent': navigator.userAgent,
          },
          body: JSON.stringify(payload),
          signal: controller.signal,
        });
        
        clearTimeout(timeoutId);
        debugLog('✅ Requête envoyée avec succès');
        break; // Succès, sortir de la boucle
        
      } catch (error) {
        lastError = error;
        debugLog(`⚠️ Tentative ${attempt + 1} échouée: ${error instanceof Error ? error.message : error}`);
        
        if (attempt === maxRetries) {
          debugLog('❌ Toutes les tentatives ont échoué');
          throw error; // Dernière tentative échouée
        }
        
        // Attendre avant de réessayer
        const waitTime = 1000 * (attempt + 1);
        debugLog(`⏳ Attente de ${waitTime}ms avant retry...`);
        await new Promise(resolve => setTimeout(resolve, waitTime));
      }
    }
    
    if (!response) {
      debugLog('❌ Aucune réponse reçue');
      throw new Error('Impossible de contacter le serveur');
    }

    debugLog(`📡 Statut de la réponse: ${response.status}`);
    
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
        errorMessage = 'Échec du chargement. Réessayez avec une image plus petite.';
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

const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    debugLog('🔄 Début conversion fileToBase64');
    
    if (!file) {
      debugLog('❌ Aucun fichier fourni');
      reject(new Error('Aucun fichier fourni'));
      return;
    }
    
    debugLog(`📁 Conversion: ${file.name} (${file.size} bytes)`);
    
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
          debugLog(`✅ Conversion réussie: ${base64.length} caractères`);
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
      debugLog('🚀 Démarrage readAsDataURL...');
      reader.readAsDataURL(file);
    } catch (error) {
      debugLog(`❌ Erreur démarrage readAsDataURL: ${error}`);
      reject(new Error('Impossible d\'initier la lecture du fichier'));
    }
  });
};