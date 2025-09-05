// Utility for processing images with N8N webhook
import { ClothingOptions } from '../App';

export interface WebhookResponse {
  success: boolean;
  imageUrl?: string;
  error?: string;
}

export const processImageWithN8N = async (file: File, options: ClothingOptions): Promise<WebhookResponse> => {
  try {
    // Validation du fichier
    if (!file || file.size === 0) {
      throw new Error('Fichier invalide ou vide');
    }
    
    if (file.size > 10 * 1024 * 1024) { // 10MB max
      throw new Error('Fichier trop volumineux (max 10MB)');
    }
    
    if (!file.type.startsWith('image/')) {
      throw new Error('Le fichier doit être une image');
    }
    
    // Convert file to base64
    let base64;
    try {
      base64 = await fileToBase64(file);
    } catch (error) {
      console.error('❌ Erreur conversion base64:', error);
      throw new Error('Impossible de traiter l\'image');
    }
    
    if (!base64 || base64.length === 0) {
      throw new Error('Échec de la conversion de l\'image');
    }
    
    console.log('🚀 Envoi vers N8N webhook...');
    console.log('📁 Nom du fichier:', file.name);
    console.log('📏 Taille du fichier:', file.size, 'bytes');
    console.log('🎨 Type MIME:', file.type);
    console.log('👤 Genre:', options.gender);
    console.log('📐 Taille:', options.size.toUpperCase());
    console.log('🪞 Vue:', options.mirror === 'mirror' ? 'photo dans le miroir' : 'vue normale');
    
    // Send to N8N webhook avec timeout et retry
    let response;
    const maxRetries = 2;
    let lastError;
    
    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      try {
        console.log(`🔄 Tentative ${attempt + 1}/${maxRetries + 1}`);
        
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 30000); // 30s timeout
        
        response = await fetch('https://n8n-automatisation.fr/webhook-test/testvolt', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': '*/*',
          },
          body: JSON.stringify({
            image: base64,
            filename: file.name,
            gender: options.gender,
            size: options.size,
            mirror: options.mirror === 'mirror' ? 'photo dans le miroir' : 'normale',
            timestamp: new Date().toISOString(),
          }),
          signal: controller.signal,
        });
        
        clearTimeout(timeoutId);
        break; // Succès, sortir de la boucle
        
      } catch (error) {
        lastError = error;
        console.log(`⚠️ Tentative ${attempt + 1} échouée:`, error);
        
        if (attempt === maxRetries) {
          throw error; // Dernière tentative échouée
        }
        
        // Attendre avant de réessayer
        await new Promise(resolve => setTimeout(resolve, 1000 * (attempt + 1)));
      }
    }
    
    if (!response) {
      throw new Error('Impossible de contacter le serveur');
    }

    console.log('📡 Statut de la réponse N8N:', response.status);
    console.log('📋 Headers de la réponse:', Object.fromEntries(response.headers.entries()));
    
    if (!response.ok) {
      const errorText = await response.text().catch(() => 'Erreur inconnue');
      throw new Error(`Erreur serveur (${response.status}): ${errorText}`);
    }

    // Vérifier le type de contenu de la réponse
    const contentType = response.headers.get('content-type');
    console.log('🎭 Type de contenu reçu:', contentType);
    
    // Cloner la réponse pour pouvoir la lire plusieurs fois
    const responseClone = response.clone();
    
    // Gestion robuste de la réponse
    try {
      const textContent = await responseClone.text();
      console.log('📝 Contenu brut de la réponse (premiers 500 caractères):');
      console.log(textContent.substring(0, 500));
      console.log('📏 Taille totale de la réponse:', textContent.length, 'caractères');
      
      if (textContent.length === 0) {
        throw new Error('Réponse vide du serveur');
      }
      
      // Vérifier si c'est du JSON
      if (contentType?.includes('application/json')) {
        console.log('🔍 Tentative de parsing JSON...');
        const jsonData = JSON.parse(textContent);
        console.log('📊 Données JSON reçues:', jsonData);
        
        // Si le JSON contient une image en base64
        if (jsonData.image || jsonData.imageUrl || jsonData.result) {
          console.log('🖼️ Image trouvée dans la réponse JSON');
          // Traiter selon le format JSON reçu
          const imageData = jsonData.image || jsonData.imageUrl || jsonData.result;
          
          if (typeof imageData === 'string') {
            // Si c'est une URL
            if (imageData.startsWith('http')) {
              return {
                success: true,
                imageUrl: imageData,
              };
            }
            // Si c'est du base64
            else if (imageData.startsWith('data:image/')) {
              const imageUrl = imageData;
              return {
                success: true,
                imageUrl: imageUrl,
              };
            }
            // Si c'est du base64 sans préfixe
            else {
              const imageUrl = `data:image/png;base64,${imageData}`;
              return {
                success: true,
                imageUrl: imageUrl,
              };
            }
          }
        }
        
        return {
          success: false,
          error: 'Format de réponse non reconnu',
        };
      }
    } catch (textError) {
      console.log('⚠️ Impossible de lire comme texte:', textError);
    }
    
    // Si ce n'est pas du JSON, essayer comme blob d'image
    console.log('🖼️ Tentative de traitement comme image binaire...');
    let imageBlob;
    try {
      imageBlob = await response.blob();
    } catch (blobError) {
      console.error('❌ Erreur lecture blob:', blobError);
      throw new Error('Impossible de lire la réponse du serveur');
    }
    
    console.log('📦 Taille du blob:', imageBlob.size, 'bytes');
    console.log('🎨 Type du blob:', imageBlob.type);
    
    if (imageBlob.size === 0) {
      throw new Error('Image reçue vide');
    }
    
    // Create a URL for the received image blob
    const imageUrl = URL.createObjectURL(imageBlob);
    console.log('✅ URL de l\'image créée:', imageUrl);
    
    return {
      success: true,
      imageUrl: imageUrl,
    };
  } catch (error) {
    console.error('❌ Erreur lors du traitement avec N8N:', error);
    
    let errorMessage = 'Erreur de traitement inconnue';
    
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        errorMessage = 'Délai d\'attente dépassé. Vérifiez votre connexion.';
      } else if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
        errorMessage = 'Problème de connexion. Vérifiez votre réseau.';
      } else {
        errorMessage = error.message;
      }
    }
    
    return {
      success: false,
      error: errorMessage,
    };
  }
};

const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (!file) {
      reject(new Error('Aucun fichier fourni'));
      return;
    }
    
    const reader = new FileReader();
    
    reader.onload = () => {
      try {
        if (typeof reader.result === 'string') {
          // Remove the data:image/jpeg;base64, prefix
          const base64 = reader.result.split(',')[1];
          if (!base64 || base64.length === 0) {
            reject(new Error('Conversion base64 échouée'));
            return;
          }
          resolve(base64);
        } else {
          reject(new Error('Format de fichier non supporté'));
        }
      } catch (error) {
        reject(new Error('Erreur lors de la conversion'));
      }
    };
    
    reader.onerror = () => {
      reject(new Error('Impossible de lire le fichier'));
    };
    
    reader.onabort = () => {
      reject(new Error('Lecture du fichier interrompue'));
    };
    
    // Utiliser readAsDataURL avec gestion d'erreur
    try {
      reader.readAsDataURL(file);
    } catch (error) {
      reject(new Error('Impossible d\'initier la lecture du fichier'));
    }
  });
};
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        // Remove the data:image/jpeg;base64, prefix
        const base64 = reader.result.split(',')[1];
        resolve(base64);
      } else {
        reject(new Error('Failed to convert file to base64'));
      }
    };
    reader.onerror = error => reject(error);
  });
};