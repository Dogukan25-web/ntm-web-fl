import { Axios } from 'axios';
import emailjs from '@emailjs/browser';
import API from '@/common/configs/api.config';
import { IApiClient } from '@/types/boilerplate.types';
import { ContactFormData, QuoteFormData } from '@/types/form.types';

class ApiClient implements IApiClient {
  public readonly API: Axios;

  public readonly defaultError: string;

  constructor() {
    this.API = API;
    this.defaultError = 'errors.default';
  }

  public async sendContactMail(data: ContactFormData): Promise<{
    success: boolean;
    data?: any;
    error?: {
      message: string;
      code?: string | number;
    };
  }> {
    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID!,
        data as Record<string, unknown>,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      return {
        success: true,
        data: response,
      };
    } catch (error) {
      const { message, code } = this.errorHandler(error);
      return {
        success: false,
        error: {
          message,
          code,
        },
      };
    }
  }

  public async sendQuoteMail(data: QuoteFormData): Promise<{
    success: boolean;
    data?: any;
    error?: {
      message: string;
      code?: string | number;
    };
  }> {
    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_QUOTE_TEMPLATE_ID!,
        data,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      return {
        success: true,
        data: response,
      };
    } catch (error) {
      const { message, code } = this.errorHandler(error);
      return {
        success: false,
        error: {
          message,
          code,
        },
      };
    }
  }

  errorHandler(error: any): { message: string; code?: string | number } {
    const errorResponse = error?.response?.data;
    const defaultError = error;

    const message = errorResponse?.message || this.defaultError;
    const code = errorResponse?.code || defaultError?.code;

    // Implement your own error handling here
    // if (code === 'USERNOTFOUND') {
    //   return {
    //     message: 'errors.userNotFound',
    //     code,
    //   };
    // }

    return {
      message,
      code,
    };
  }
}

const apiClient = new ApiClient();

export default apiClient;
