// Utility for processing images with N8N webhook
export interface WebhookResponse {
  success: boolean;
  imageUrl?: string;
  error?: string;
}

export const processImageWithN8N = async (file: File): Promise<WebhookResponse> => {
  try {
    // Convert file to base64
    const base64 = await fileToBase64(file);
    
    // Send to N8N webhook
    const response = await fetch('https://n8n-automatisation.fr/webhook-test/testvolt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        image: base64,
        filename: file.name,
        timestamp: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // The webhook returns a PNG image directly, not JSON
    const imageBlob = await response.blob();
    
    // Create a URL for the received image blob
    const imageUrl = URL.createObjectURL(imageBlob);
    
    return {
      success: true,
      imageUrl: imageUrl,
    };
  } catch (error) {
    console.error('Error processing image with N8N:', error);
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