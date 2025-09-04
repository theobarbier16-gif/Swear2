// API utilities for future backend integration

export const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl;
  }

  async uploadImage(file: File): Promise<ApiResponse<{ jobId: string }>> {
    const formData = new FormData();
    formData.append('image', file);
    
    try {
      const response = await fetch(`${this.baseUrl}/upload`, {
        method: 'POST',
        body: formData,
      });
      
      return await response.json();
    } catch (error) {
      return {
        success: false,
        error: 'Failed to upload image',
      };
    }
  }

  async getProcessingStatus(jobId: string): Promise<ApiResponse<{ status: string; progress: number }>> {
    try {
      const response = await fetch(`${this.baseUrl}/status/${jobId}`);
      return await response.json();
    } catch (error) {
      return {
        success: false,
        error: 'Failed to get processing status',
      };
    }
  }

  async getResult(jobId: string): Promise<ApiResponse<{ enhancedImageUrl: string }>> {
    try {
      const response = await fetch(`${this.baseUrl}/result/${jobId}`);
      return await response.json();
    } catch (error) {
      return {
        success: false,
        error: 'Failed to get result',
      };
    }
  }

  // N8N webhook endpoints for future integration
  async triggerN8NWorkflow(payload: any): Promise<ApiResponse<any>> {
    try {
      const response = await fetch(`${this.baseUrl}/webhook/n8n/trigger`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      
      return await response.json();
    } catch (error) {
      return {
        success: false,
        error: 'Failed to trigger workflow',
      };
    }
  }
}

export const apiClient = new ApiClient();