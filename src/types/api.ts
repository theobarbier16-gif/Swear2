// API types for future N8N webhook integration
export interface UploadRequest {
  file: File;
  userId?: string;
  preferences?: {
    mannequinStyle: 'classic' | 'modern' | 'casual';
    backgroundColor: 'white' | 'neutral' | 'lifestyle';
  };
}

export interface ProcessingStatus {
  jobId: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  progress: number;
  estimatedTime?: number;
  currentTask?: string;
}

export interface ProcessingResult {
  jobId: string;
  originalImageUrl: string;
  enhancedImageUrl: string;
  metadata: {
    processingTime: number;
    confidence: number;
    mannequinType: string;
  };
}

// N8N Webhook payload structure
export interface N8NWebhookPayload {
  event: 'image.upload' | 'image.processed' | 'image.failed';
  data: {
    jobId: string;
    userId?: string;
    originalImage: string;
    enhancedImage?: string;
    error?: string;
    timestamp: string;
  };
}