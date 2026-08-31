export type LeadStatus = 'new' | 'contacted' | 'qualified' | 'converted' | 'closed';

export interface Lead {
  id: string;
  fullName: string;
  email: string;
  phone?: string;
  companyName?: string;
  serviceRequested: string;
  message?: string;
  status: LeadStatus;
  createdAt: string;
  updatedAt: string;
}

export interface Customer {
  id: string;
  name: string;
  companyName: string;
  email: string;
  phone: string;
  gstOrTaxId?: string;
  country: string;
  createdAt: string;
}

export type QuotationStatus = 'draft' | 'sent' | 'accepted' | 'rejected' | 'expired';

export interface Quotation {
  id: string;
  quotationNumber: string;
  customerId: string;
  customerName: string;
  serviceType: string;
  estimatedAmount: number;
  currency: string;
  status: QuotationStatus;
  validUntil: string;
  createdAt: string;
}

export type ShipmentStatus = 
  | 'booked' 
  | 'customs_clearance' 
  | 'in_transit' 
  | 'arrived_at_port' 
  | 'delivered' 
  | 'on_hold';

export interface Shipment {
  id: string;
  trackingNumber: string;
  customerId: string;
  customerName: string;
  origin: string;
  destination: string;
  cargoType: string;
  status: ShipmentStatus;
  estimatedDelivery: string;
  createdAt: string;
}

export interface DocumentItem {
  id: string;
  title: string;
  documentType: string;
  fileUrl: string;
  relatedEntityId?: string;
  createdAt: string;
}

export interface ConsultationRequest {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  serviceType: string;
  originCountry?: string;
  destinationCountry?: string;
  message: string;
}
