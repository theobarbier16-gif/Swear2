// Utility for processing images with N8N webhook
import { ClothingOptions } from '../App';

export interface WebhookResponse {
  success: boolean;
  imageUrl?: string;
  error?: string;
}

export const processImageWithN8N = async (file: File, options: ClothingOptions): Promise<WebhookResponse> => {
  try {
    // Convert file to base64
    const base64 = await fileToBase64(file);
    
    console.log('🚀 Envoi vers N8N webhook...');
    console.log('📁 Nom du fichier:', file.name);
    console.log('📏 Taille du fichier:', file.size, 'bytes');
    console.log('🎨 Type MIME:', file.type);
    console.log('👤 Genre:', options.gender);
    console.log('📐 Taille:', options.size.toUpperCase());
    console.log('🪞 Vue:', options.mirror === 'mirror' ? 'photo dans le miroir' : 'vue normale');
    
    // Send to N8N webhook
    const response = await fetch('https://n8n-automatisation.fr/webhook-test/testvolt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        image: base64,
        filename: file.name,
        gender: options.gender,
        size: options.size,
        mirror: options.mirror,
        timestamp: new Date().toISOString(),
      }),
    });

    console.log('📡 Statut de la réponse N8N:', response.status);
    console.log('📋 Headers de la réponse:', Object.fromEntries(response.headers.entries()));
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Vérifier le type de contenu de la réponse
    const contentType = response.headers.get('content-type');
    console.log('🎭 Type de contenu reçu:', contentType);
    
    // Cloner la réponse pour pouvoir la lire plusieurs fois
    const responseClone = response.clone();
    
    // Essayer de lire comme texte d'abord pour voir le format
    try {
      const textContent = await responseClone.text();
      console.log('📝 Contenu brut de la réponse (premiers 500 caractères):');
      console.log(textContent.substring(0, 500));
      console.log('📏 Taille totale de la réponse:', textContent.length, 'caractères');
      
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
          error: 'Format JSON non reconnu',
        };
      }
    } catch (textError) {
      console.log('⚠️ Impossible de lire comme texte:', textError);
    }
    
    // Si ce n'est pas du JSON, essayer comme blob d'image
    console.log('🖼️ Tentative de traitement comme image binaire...');
    const imageBlob = await response.blob();
    console.log('📦 Taille du blob:', imageBlob.size, 'bytes');
    console.log('🎨 Type du blob:', imageBlob.type);
    
    // Create a URL for the received image blob
    const imageUrl = URL.createObjectURL(imageBlob);
    console.log('✅ URL de l\'image créée:', imageUrl);
    
    return {
      success: true,
      imageUrl: imageUrl,
    };
  } catch (error) {
    console.error('❌ Erreur lors du traitement avec N8N:', error);
    console.error('📋 Détails de l\'erreur:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
    });
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
};

const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
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