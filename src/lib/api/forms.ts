import { apiClient, ApiResponse } from './client';
import { API_ENDPOINTS } from './endpoints';

export interface ConsultationFormPayload {
  formType: 'consultation';
  fullName: string;
  companyName: string;
  officialWorkEmail: string;
  contactPhoneWhatsApp: string;
  countryHeadOfficeLocation: string;
  businessType: string;
  tradeDirection: string;
  productCommodityDescription: string;
  originPortCity: string;
  destinationPortCity: string;
  cargoCategory: string;
  preferredShipmentMode: string;
  expectedShipmentDateTimeline: string;
  detailedTradeRequirements: string;
}

export interface FormSubmissionResponse {
  status?: string;
  message?: string;
  success?: boolean;
  [key: string]: any;
}

/**
 * Submit consultation request form to backend API
 */
export async function submitConsultationForm(
  payload: ConsultationFormPayload
): Promise<ApiResponse<FormSubmissionResponse>> {
  return apiClient<FormSubmissionResponse>(API_ENDPOINTS.forms.submit, {
    method: 'POST',
    body: payload,
    skipAuth: true,
  });
}
