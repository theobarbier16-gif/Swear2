// Webhook proxy utility for handling Stripe webhooks in frontend environment
// This creates a simple proxy that forwards webhook calls to the Supabase edge function

export const setupWebhookProxy = () => {
  // In a real deployment, you would configure your server to handle this
  // For now, we'll use the Supabase edge function approach
  
  const webhookUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/stripe-webhook`;
  
  console.log('🔗 Webhook endpoint configured:', webhookUrl);
  
  return {
    webhookUrl,
    // Helper function to manually trigger webhook processing (for testing)
    processTestWebhook: async (eventData: any) => {
      try {
        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify(eventData)
        });
        
        const result = await response.json();
        console.log('✅ Test webhook processed:', result);
        return result;
      } catch (error) {
        console.error('❌ Test webhook failed:', error);
        throw error;
      }
    }
  };
};

// Export the webhook URL for Stripe configuration
export const getWebhookEndpoint = () => {
  const baseUrl = window.location.origin;
  return `${baseUrl}/api/webhooks/stripe`;
};