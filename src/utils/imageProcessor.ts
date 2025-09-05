// Utility for processing images with N8N webhook
import { ClothingOptions } from '../App';

export interface WebhookResponse {
  success: boolean;
  imageUrl?: string;
  error?: string;
}

export const processImageWithN8N = async (file: File, options: ClothingOptions): Promise<WebhookResponse> => {
  console.log('🚀 [MOBILE DEBUG] Début du traitement d\'image');
  console.log('📱 [MOBILE DEBUG] User Agent:', navigator.userAgent);
  console.log('🌐 [MOBILE DEBUG] Connection:', (navigator as any).connection?.effectiveType || 'unknown');
  
  try {
    // Validation du fichier
    console.log('🔍 [MOBILE DEBUG] Validation du fichier...');
    if (!file || file.size === 0) {
      console.error('❌ [MOBILE DEBUG] Fichier invalide ou vide');
      throw new Error('Fichier invalide ou vide');
    }
    
    if (file.size > 10 * 1024 * 1024) { // 10MB max
      console.error('❌ [MOBILE DEBUG] Fichier trop volumineux:', file.size);
      throw new Error('Fichier trop volumineux (max 10MB)');
    }
    
    if (!file.type.startsWith('image/')) {
      console.error('❌ [MOBILE DEBUG] Type de fichier invalide:', file.type);
      throw new Error('Le fichier doit être une image');
    }
    
    console.log('✅ [MOBILE DEBUG] Fichier validé:', {
      name: file.name,
      size: file.size,
      type: file.type,
      lastModified: file.lastModified
    });
    
    // Convert file to base64
    let base64;
    try {
      console.log('🔄 [MOBILE DEBUG] Début conversion base64...');
      base64 = await fileToBase64(file);
      console.log('✅ [MOBILE DEBUG] Conversion base64 réussie, taille:', base64.length);
    } catch (error) {
      console.error('❌ [MOBILE DEBUG] Erreur conversion base64:', error);
      throw new Error('Impossible de traiter l\'image');
    }
    
    if (!base64 || base64.length === 0) {
      console.error('❌ [MOBILE DEBUG] Base64 vide après conversion');
      throw new Error('Échec de la conversion de l\'image');
    }
    
    console.log('🚀 [MOBILE DEBUG] Préparation envoi vers N8N webhook...');
    console.log('📁 [MOBILE DEBUG] Nom du fichier:', file.name);
    console.log('📏 [MOBILE DEBUG] Taille du fichier:', file.size, 'bytes');
    console.log('🎨 [MOBILE DEBUG] Type MIME:', file.type);
    console.log('👤 [MOBILE DEBUG] Genre:', options.gender);
    console.log('📐 [MOBILE DEBUG] Taille:', options.size.toUpperCase());
    console.log('🪞 [MOBILE DEBUG] Vue:', options.mirror === 'mirror' ? 'photo dans le miroir' : 'vue normale');
    
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
    
    console.log('📦 [MOBILE DEBUG] Payload préparé, taille JSON:', JSON.stringify(payload).length);
    
    // Send to N8N webhook avec timeout et retry
    let response;
    const maxRetries = 3; // Plus de tentatives pour mobile
    let lastError;
    
    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      try {
        console.log(`🔄 [MOBILE DEBUG] Tentative ${attempt + 1}/${maxRetries + 1}`);
        
        const controller = new AbortController();
        const timeoutDuration = 45000; // 45s timeout pour mobile
        const timeoutId = setTimeout(() => {
          console.log('⏰ [MOBILE DEBUG] Timeout atteint, annulation...');
          controller.abort();
        }, timeoutDuration);
        
        console.log('📡 [MOBILE DEBUG] Envoi de la requête...');
        
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
        console.log('✅ [MOBILE DEBUG] Requête envoyée avec succès');
        break; // Succès, sortir de la boucle
        
      } catch (error) {
        lastError = error;
        console.log(`⚠️ [MOBILE DEBUG] Tentative ${attempt + 1} échouée:`, error);
        
        if (error instanceof Error) {
          console.log('🔍 [MOBILE DEBUG] Type d\'erreur:', error.name);
          console.log('📝 [MOBILE DEBUG] Message d\'erreur:', error.message);
          console.log('📚 [MOBILE DEBUG] Stack trace:', error.stack);
        }
        
        if (attempt === maxRetries) {
          console.error('❌ [MOBILE DEBUG] Toutes les tentatives ont échoué');
          throw error; // Dernière tentative échouée
        }
        
        // Attendre avant de réessayer
        const waitTime = 2000 * (attempt + 1); // Plus de temps d'attente
        console.log(`⏳ [MOBILE DEBUG] Attente de ${waitTime}ms avant retry...`);
        await new Promise(resolve => setTimeout(resolve, waitTime));
      }
    }
    
    if (!response) {
      console.error('❌ [MOBILE DEBUG] Aucune réponse reçue');
      throw new Error('Impossible de contacter le serveur');
    }

    console.log('📡 [MOBILE DEBUG] Statut de la réponse N8N:', response.status);
    console.log('📋 [MOBILE DEBUG] Headers de la réponse:', Object.fromEntries(response.headers.entries()));
    
    if (!response.ok) {
      const errorText = await response.text().catch(() => 'Erreur inconnue');
      console.error('❌ [MOBILE DEBUG] Réponse non-OK:', response.status, errorText);
      throw new Error(`Erreur serveur (${response.status}): ${errorText}`);
    }

    // Vérifier le type de contenu de la réponse
    const contentType = response.headers.get('content-type');
    console.log('🎭 [MOBILE DEBUG] Type de contenu reçu:', contentType);
    
    // Cloner la réponse pour pouvoir la lire plusieurs fois
    const responseClone = response.clone();
    
    // Gestion robuste de la réponse
    try {
      const textContent = await responseClone.text();
      console.log('📝 [MOBILE DEBUG] Contenu brut de la réponse (premiers 500 caractères):');
      console.log(textContent.substring(0, 500));
      console.log('📏 [MOBILE DEBUG] Taille totale de la réponse:', textContent.length, 'caractères');
      
      if (textContent.length === 0) {
        console.error('❌ [MOBILE DEBUG] Réponse vide du serveur');
        throw new Error('Réponse vide du serveur');
      }
      
      // Vérifier si c'est du JSON
      if (contentType?.includes('application/json')) {
        console.log('🔍 [MOBILE DEBUG] Tentative de parsing JSON...');
        const jsonData = JSON.parse(textContent);
        console.log('📊 [MOBILE DEBUG] Données JSON reçues:', jsonData);
        
        // Si le JSON contient une image en base64
        if (jsonData.image || jsonData.imageUrl || jsonData.result) {
          console.log('🖼️ [MOBILE DEBUG] Image trouvée dans la réponse JSON');
          // Traiter selon le format JSON reçu
          const imageData = jsonData.image || jsonData.imageUrl || jsonData.result;
          
          if (typeof imageData === 'string') {
            // Si c'est une URL
            if (imageData.startsWith('http')) {
              console.log('✅ [MOBILE DEBUG] URL d\'image reçue');
              return {
                success: true,
                imageUrl: imageData,
              };
            }
            // Si c'est du base64
            else if (imageData.startsWith('data:image/')) {
              console.log('✅ [MOBILE DEBUG] Image base64 avec préfixe reçue');
              const imageUrl = imageData;
              return {
                success: true,
                imageUrl: imageUrl,
              };
            }
            // Si c'est du base64 sans préfixe
            else {
              console.log('✅ [MOBILE DEBUG] Image base64 sans préfixe reçue');
              const imageUrl = `data:image/png;base64,${imageData}`;
              return {
                success: true,
                imageUrl: imageUrl,
              };
            }
          }
        }
        
        console.error('❌ [MOBILE DEBUG] Format de réponse JSON non reconnu');
        return {
          success: false,
          error: 'Format de réponse non reconnu',
        };
      }
    } catch (textError) {
      console.log('⚠️ [MOBILE DEBUG] Impossible de lire comme texte:', textError);
    }
    
    // Si ce n'est pas du JSON, essayer comme blob d'image
    console.log('🖼️ [MOBILE DEBUG] Tentative de traitement comme image binaire...');
    let imageBlob;
    try {
      imageBlob = await response.blob();
    } catch (blobError) {
      console.error('❌ [MOBILE DEBUG] Erreur lecture blob:', blobError);
      throw new Error('Impossible de lire la réponse du serveur');
    }
    
    console.log('📦 [MOBILE DEBUG] Taille du blob:', imageBlob.size, 'bytes');
    console.log('🎨 [MOBILE DEBUG] Type du blob:', imageBlob.type);
    
    if (imageBlob.size === 0) {
      console.error('❌ [MOBILE DEBUG] Image reçue vide');
      throw new Error('Image reçue vide');
    }
    
    // Create a URL for the received image blob
    const imageUrl = URL.createObjectURL(imageBlob);
    console.log('✅ [MOBILE DEBUG] URL de l\'image créée:', imageUrl);
    
    return {
      success: true,
      imageUrl: imageUrl,
    };
  } catch (error) {
    console.error('❌ [MOBILE DEBUG] Erreur lors du traitement avec N8N:', error);
    
    let errorMessage = 'Erreur de traitement inconnue';
    
    if (error instanceof Error) {
      console.log('🔍 [MOBILE DEBUG] Analyse de l\'erreur:', {
        name: error.name,
        message: error.message,
        stack: error.stack
      });
      
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
    
    console.error('❌ [MOBILE DEBUG] Message d\'erreur final:', errorMessage);
    
    return {
      success: false,
      error: errorMessage,
    };
  }
};

const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    console.log('🔄 [MOBILE DEBUG] Début conversion fileToBase64');
    
    if (!file) {
      console.error('❌ [MOBILE DEBUG] Aucun fichier fourni pour conversion');
      reject(new Error('Aucun fichier fourni'));
      return;
    }
    
    console.log('📁 [MOBILE DEBUG] Fichier à convertir:', {
      name: file.name,
      size: file.size,
      type: file.type
    });
    
    const reader = new FileReader();
    
    reader.onload = () => {
      console.log('✅ [MOBILE DEBUG] FileReader onload déclenché');
      try {
        if (typeof reader.result === 'string') {
          console.log('🔍 [MOBILE DEBUG] Résultat FileReader est une string, taille:', reader.result.length);
          // Remove the data:image/jpeg;base64, prefix
          const base64 = reader.result.split(',')[1];
          if (!base64 || base64.length === 0) {
            console.error('❌ [MOBILE DEBUG] Base64 vide après split');
            reject(new Error('Conversion base64 échouée'));
            return;
          }
          console.log('✅ [MOBILE DEBUG] Conversion base64 réussie, taille:', base64.length);
          resolve(base64);
        } else {
          console.error('❌ [MOBILE DEBUG] Résultat FileReader n\'est pas une string');
          reject(new Error('Format de fichier non supporté'));
        }
      } catch (error) {
        console.error('❌ [MOBILE DEBUG] Erreur dans onload:', error);
        reject(new Error('Erreur lors de la conversion'));
      }
    };
    
    reader.onerror = () => {
      console.error('❌ [MOBILE DEBUG] FileReader onerror déclenché');
      reject(new Error('Impossible de lire le fichier'));
    };
    
    reader.onabort = () => {
      console.error('❌ [MOBILE DEBUG] FileReader onabort déclenché');
      reject(new Error('Lecture du fichier interrompue'));
    };
    
    // Utiliser readAsDataURL avec gestion d'erreur
    try {
      console.log('🚀 [MOBILE DEBUG] Démarrage readAsDataURL...');
      reader.readAsDataURL(file);
    } catch (error) {
      console.error('❌ [MOBILE DEBUG] Erreur lors du démarrage readAsDataURL:', error);
      reject(new Error('Impossible d\'initier la lecture du fichier'));
    }
  });
};