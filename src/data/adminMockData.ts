export interface AdminLead {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  businessType: 'Manufacturer' | 'Exporter' | 'Importer' | 'Trader' | 'Distributor';
  serviceType: string;
  originCountry: string;
  destinationCountry: string;
  cargoType: string;
  shipmentMode: 'Sea' | 'Air' | 'Road';
  expectedShipmentDate: string;
  message: string;
  status: 'NEW' | 'CONTACTED' | 'QUALIFIED' | 'QUOTATION_SENT' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED';
  assignedStaff: string;
  createdAt: string;
}

export interface AdminCustomer {
  id: string;
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  gstOrTaxId: string;
  country: string;
  industry: string;
  activeShipments: number;
  totalVolumeTEU: number;
  status: 'ACTIVE' | 'PENDING_VERIFICATION' | 'INACTIVE';
  joinedDate: string;
}

export interface AdminQuotation {
  id: string;
  quotationNumber: string;
  customerId: string;
  customerName: string;
  serviceType: string;
  origin: string;
  destination: string;
  cargoDescription: string;
  weightVolume: string;
  baseFreightRate: number;
  customsDutyEstimate: number;
  documentationFee: number;
  insuranceFee: number;
  totalEstimatedAmount: number;
  currency: string;
  status: 'DRAFT' | 'SENT' | 'APPROVED' | 'REJECTED' | 'EXPIRED';
  validUntil: string;
  createdAt: string;
}

export interface ShipmentMilestone {
  stage: string;
  location: string;
  timestamp: string;
  completed: boolean;
  notes: string;
}

export interface AdminShipment {
  id: string;
  trackingNumber: string;
  customerId: string;
  customerName: string;
  originPort: string;
  destinationPort: string;
  cargoType: string;
  carrierLine: string;
  vesselFlightNo: string;
  containerNumber: string;
  sealNumber: string;
  etd: string;
  eta: string;
  temperature?: string;
  status: 'BOOKED' | 'PICKED_UP' | 'CUSTOMS' | 'LOADED' | 'IN_TRANSIT' | 'DELIVERED';
  milestones: ShipmentMilestone[];
  createdAt: string;
}

export interface AdminDocument {
  id: string;
  title: string;
  documentType:
    | 'Invoice'
    | 'Packing List'
    | 'Certificate of Origin'
    | 'Shipping Bill'
    | 'Bill of Lading'
    | 'GST Documents'
    | 'Insurance'
    | 'Other Documents';
  fileSize: string;
  fileFormat: string;
  relatedEntity: string;
  status: 'VERIFIED' | 'PENDING_AUDIT' | 'REJECTED';
  uploadedAt: string;
}

export const mockAdminLeads: AdminLead[] = [
  {
    id: 'LEAD-8041',
    fullName: 'Rajesh Sharma',
    companyName: 'Apex Pharma BioTech Ltd',
    email: 'r.sharma@apexbiotech.in',
    phone: '+91 98201 44552',
    businessType: 'Manufacturer',
    serviceType: 'Cold Chain Solutions',
    originCountry: 'India (Mumbai Port / BOM Airport)',
    destinationCountry: 'Germany (Frankfurt / Hamburg)',
    cargoType: 'Temperature Sensitive Biological Reagents (2°C to 8°C)',
    shipmentMode: 'Air',
    expectedShipmentDate: '2026-09-15',
    message: 'Require validated active thermal air cargo packaging and ADC customs fast-track clearance for high-value export consignment.',
    status: 'NEW',
    assignedStaff: 'Vikram Mehta (Cold Chain Lead)',
    createdAt: '2026-08-30T14:20:00Z',
  },
  {
    id: 'LEAD-8038',
    fullName: 'Michael Sterling',
    companyName: 'EuroTrans Maritime GmbH',
    email: 'm.sterling@eurotrans.de',
    phone: '+49 40 829103',
    businessType: 'Importer',
    serviceType: 'Logistics & Shipping',
    originCountry: 'India (Nhava Sheva JNPT)',
    destinationCountry: 'Netherlands (Rotterdam)',
    cargoType: 'Automotive Castings & Precision Engineering Parts',
    shipmentMode: 'Sea',
    expectedShipmentDate: '2026-09-20',
    message: 'Seeking contracted 40ft HQ container allocations and direct ocean freight rate negotiation for 12 TEUs monthly.',
    status: 'CONTACTED',
    assignedStaff: 'Pooja Iyer (Ocean Freight Desk)',
    createdAt: '2026-08-29T10:15:00Z',
  },
  {
    id: 'LEAD-8025',
    fullName: 'Sunita Patel',
    companyName: 'Gujarat Marine Exports LLP',
    email: 'sunita@gujaratmarine.com',
    phone: '+91 94280 11984',
    businessType: 'Exporter',
    serviceType: 'Export Incentives',
    originCountry: 'India (Pipavav / Mundra)',
    destinationCountry: 'United States (Los Angeles)',
    cargoType: 'Frozen Black Tiger Shrimp (-25°C Deep Freeze)',
    shipmentMode: 'Sea',
    expectedShipmentDate: '2026-09-10',
    message: 'Assistance required for RoDTEP claim realization, EIA health certificate liaison, and reefer ocean container contracting.',
    status: 'QUALIFIED',
    assignedStaff: 'Amitabh Deshmukh (EXIM Compliance)',
    createdAt: '2026-08-28T09:40:00Z',
  },
  {
    id: 'LEAD-8012',
    fullName: 'David Chen',
    companyName: 'Pacific Asia Polymers Ltd',
    email: 'd.chen@pacificpolymers.hk',
    phone: '+852 2849 0112',
    businessType: 'Trader',
    serviceType: 'Licensing & Registrations',
    originCountry: 'Singapore',
    destinationCountry: 'India (Chennai / Ennore)',
    cargoType: 'Specialty Industrial Polymers (Raw Granules)',
    shipmentMode: 'Sea',
    expectedShipmentDate: '2026-09-25',
    message: 'Need complete BIS certification guidance, customs tariff classification, and MOOWR bonded warehouse setup in Chennai.',
    status: 'QUOTATION_SENT',
    assignedStaff: 'Kavita Menon (Regulatory Specialist)',
    createdAt: '2026-08-26T16:00:00Z',
  },
  {
    id: 'LEAD-7994',
    fullName: 'Harish Varma',
    companyName: 'Varma Global Textiles',
    email: 'h.varma@varmatextiles.com',
    phone: '+91 98410 77201',
    businessType: 'Manufacturer',
    serviceType: 'Tax & GST Advisory',
    originCountry: 'India (Tuticorin)',
    destinationCountry: 'United Kingdom (Southampton)',
    cargoType: 'Organic Cotton Garments & Made-Ups',
    shipmentMode: 'Sea',
    expectedShipmentDate: '2026-09-05',
    message: 'Pending accumulated GST ITC refund claims stuck on ICEGATE with SB005 errors. Require reconciliation and claim release.',
    status: 'IN_PROGRESS',
    assignedStaff: 'Rohan Joshi (GST & Tax Advisory)',
    createdAt: '2026-08-24T11:20:00Z',
  },
];

export const mockAdminCustomers: AdminCustomer[] = [
  {
    id: 'CUST-1092',
    companyName: 'Apex Pharma BioTech Ltd',
    contactPerson: 'Rajesh Sharma',
    email: 'r.sharma@apexbiotech.in',
    phone: '+91 98201 44552',
    gstOrTaxId: '27AAACA9081E1Z4',
    country: 'India',
    industry: 'Pharmaceuticals',
    activeShipments: 4,
    totalVolumeTEU: 48,
    status: 'ACTIVE',
    joinedDate: '2025-04-12',
  },
  {
    id: 'CUST-1088',
    companyName: 'EuroTrans Maritime GmbH',
    contactPerson: 'Michael Sterling',
    email: 'm.sterling@eurotrans.de',
    phone: '+49 40 829103',
    gstOrTaxId: 'DE814902194',
    country: 'Germany',
    industry: 'Automotive & Machinery',
    activeShipments: 6,
    totalVolumeTEU: 140,
    status: 'ACTIVE',
    joinedDate: '2024-11-19',
  },
  {
    id: 'CUST-1074',
    companyName: 'Gujarat Marine Exports LLP',
    contactPerson: 'Sunita Patel',
    email: 'sunita@gujaratmarine.com',
    phone: '+91 94280 11984',
    gstOrTaxId: '24AABCG5512J1ZT',
    country: 'India',
    industry: 'Seafood & Perishables',
    activeShipments: 3,
    totalVolumeTEU: 72,
    status: 'ACTIVE',
    joinedDate: '2025-01-08',
  },
  {
    id: 'CUST-1061',
    companyName: 'Pacific Asia Polymers Ltd',
    contactPerson: 'David Chen',
    email: 'd.chen@pacificpolymers.hk',
    phone: '+852 2849 0112',
    gstOrTaxId: 'HK-BR-99041284',
    country: 'Hong Kong',
    industry: 'Chemicals & Materials',
    activeShipments: 1,
    totalVolumeTEU: 24,
    status: 'ACTIVE',
    joinedDate: '2025-06-30',
  },
  {
    id: 'CUST-1045',
    companyName: 'Varma Global Textiles',
    contactPerson: 'Harish Varma',
    email: 'h.varma@varmatextiles.com',
    phone: '+91 98410 77201',
    gstOrTaxId: '33AABCV8910P1Z6',
    country: 'India',
    industry: 'Textiles & Consumer Goods',
    activeShipments: 2,
    totalVolumeTEU: 38,
    status: 'ACTIVE',
    joinedDate: '2024-08-15',
  },
];

export const mockAdminQuotations: AdminQuotation[] = [
  {
    id: 'QT-2026-901',
    quotationNumber: 'SKL-QTE-2026-0901',
    customerId: 'CUST-1092',
    customerName: 'Apex Pharma BioTech Ltd',
    serviceType: 'Cold Chain Air Freight + Customs Clearance',
    origin: 'Mumbai (BOM)',
    destination: 'Frankfurt (FRA)',
    cargoDescription: '12 Pallets Temperature Sensitive Biological Reagents (2°C - 8°C)',
    weightVolume: '2,400 kg / 14.8 CBM',
    baseFreightRate: 14850,
    customsDutyEstimate: 1200,
    documentationFee: 450,
    insuranceFee: 680,
    totalEstimatedAmount: 17180,
    currency: 'USD',
    status: 'APPROVED',
    validUntil: '2026-09-15',
    createdAt: '2026-08-28',
  },
  {
    id: 'QT-2026-902',
    quotationNumber: 'SKL-QTE-2026-0902',
    customerId: 'CUST-1088',
    customerName: 'EuroTrans Maritime GmbH',
    serviceType: 'Ocean Freight FCL (4x40ft HQ)',
    origin: 'Nhava Sheva (INNSA)',
    destination: 'Rotterdam (NLRTM)',
    cargoDescription: 'Heavy Automotive Precision Castings',
    weightVolume: '88,000 kg / 4 x 40ft HQ Containers',
    baseFreightRate: 8600,
    customsDutyEstimate: 950,
    documentationFee: 300,
    insuranceFee: 520,
    totalEstimatedAmount: 10370,
    currency: 'USD',
    status: 'SENT',
    validUntil: '2026-09-12',
    createdAt: '2026-08-29',
  },
  {
    id: 'QT-2026-903',
    quotationNumber: 'SKL-QTE-2026-0903',
    customerId: 'CUST-1074',
    customerName: 'Gujarat Marine Exports LLP',
    serviceType: 'Reefer Ocean Freight (-25°C Deep Freeze)',
    origin: 'Mundra (INMUN)',
    destination: 'Los Angeles (USLAX)',
    cargoDescription: 'Frozen Black Tiger Shrimp in Reefer Containers',
    weightVolume: '54,000 kg / 2 x 40ft High Cube Reefer',
    baseFreightRate: 9800,
    customsDutyEstimate: 1400,
    documentationFee: 600,
    insuranceFee: 890,
    totalEstimatedAmount: 12690,
    currency: 'USD',
    status: 'DRAFT',
    validUntil: '2026-09-18',
    createdAt: '2026-08-30',
  },
  {
    id: 'QT-2026-904',
    quotationNumber: 'SKL-QTE-2026-0904',
    customerId: 'CUST-1061',
    customerName: 'Pacific Asia Polymers Ltd',
    serviceType: 'Customs Clearance & Bonded Warehousing Setup',
    origin: 'Singapore (SGSIN)',
    destination: 'Chennai (INMAA)',
    cargoDescription: 'Specialty Polymer Granules',
    weightVolume: '45,000 kg / 2 x 20ft Standard Containers',
    baseFreightRate: 4200,
    customsDutyEstimate: 2100,
    documentationFee: 400,
    insuranceFee: 350,
    totalEstimatedAmount: 7050,
    currency: 'USD',
    status: 'EXPIRED',
    validUntil: '2026-08-25',
    createdAt: '2026-08-10',
  },
];

export const mockAdminShipments: AdminShipment[] = [
  {
    id: 'SHP-9842',
    trackingNumber: 'SKL-TRK-984210',
    customerId: 'CUST-1092',
    customerName: 'Apex Pharma BioTech Ltd',
    originPort: 'Mumbai Air Cargo (BOM)',
    destinationPort: 'Frankfurt Airport (FRA)',
    cargoType: 'Temperature Sensitive Vaccines & Biologicals',
    carrierLine: 'Lufthansa Cargo / SkyLink Air Charter',
    vesselFlightNo: 'LH-Cargo 8221',
    containerNumber: 'RKN-LH-449102',
    sealNumber: 'PHARMA-SL-9081',
    etd: '2026-08-30',
    eta: '2026-09-02',
    temperature: '4.2°C (Set Range: 2°C to 8°C - Normal)',
    status: 'IN_TRANSIT',
    milestones: [
      {
        stage: 'Consignment Booked & Packaging Validated',
        location: 'Mumbai BioTech Hub',
        timestamp: '2026-08-28 09:00 IST',
        completed: true,
        notes: 'Active thermal container pre-conditioned to +4°C.',
      },
      {
        stage: 'Customs Clearance & ADC Port Release',
        location: 'Mumbai Air Cargo Complex (ACC)',
        timestamp: '2026-08-29 16:30 IST',
        completed: true,
        notes: 'Zero query green channel clearance approved by customs.',
      },
      {
        stage: 'Ramp Loading & Flight Departure',
        location: 'Chhatrapati Shivaji Maharaj Intl Airport (BOM)',
        timestamp: '2026-08-30 03:15 IST',
        completed: true,
        notes: 'Loaded into temperature-controlled forward cargo hold.',
      },
      {
        stage: 'In-Flight Air Transit & Telemetry Logging',
        location: 'Air Corridor (En Route FRA)',
        timestamp: '2026-08-31 11:00 UTC',
        completed: false,
        notes: 'Real-time telemetry confirms stable 4.2°C temperature.',
      },
      {
        stage: 'Import Clearance & Final Delivery',
        location: 'Frankfurt Perishable Center (FRA)',
        timestamp: 'Expected 2026-09-02 14:00 CET',
        completed: false,
        notes: 'Consignee notified for refrigerated last-mile transfer.',
      },
    ],
    createdAt: '2026-08-28',
  },
  {
    id: 'SHP-9835',
    trackingNumber: 'SKL-TRK-983504',
    customerId: 'CUST-1088',
    customerName: 'EuroTrans Maritime GmbH',
    originPort: 'Nhava Sheva Port (INNSA)',
    destinationPort: 'Rotterdam Port (NLRTM)',
    cargoType: 'Automotive Precision Machinery',
    carrierLine: 'MSC Mediterranean Shipping Co.',
    vesselFlightNo: 'MSC Gülsün / Voy 241W',
    containerNumber: 'MSCU-9081245',
    sealNumber: 'INNSA-99410',
    etd: '2026-08-25',
    eta: '2026-09-18',
    status: 'IN_TRANSIT',
    milestones: [
      {
        stage: 'Container Stuffed & Factory Gated Out',
        location: 'Pune Auto Manufacturing Zone',
        timestamp: '2026-08-23 11:00 IST',
        completed: true,
        notes: 'Lashing and choke certified by marine surveyor.',
      },
      {
        stage: 'Customs Clearance & Port Gate-In',
        location: 'JNPT Port Terminal 4, Nhava Sheva',
        timestamp: '2026-08-24 18:45 IST',
        completed: true,
        notes: 'Shipping bill assessment completed on ICEGATE.',
      },
      {
        stage: 'Vessel Loaded & Ocean Departure',
        location: 'Nhava Sheva Harbor',
        timestamp: '2026-08-25 22:30 IST',
        completed: true,
        notes: 'Vessel sailed on scheduled oceanic trade lane.',
      },
      {
        stage: 'Maritime Ocean Transit (Suez Corridor)',
        location: 'Arabian Sea / Red Sea Corridor',
        timestamp: '2026-08-31 08:00 UTC',
        completed: false,
        notes: 'Vessel progressing on time with estimated speed of 18 knots.',
      },
      {
        stage: 'Destination Port Discharge & Delivery',
        location: 'Rotterdam ECT Delta Terminal',
        timestamp: 'Expected 2026-09-18',
        completed: false,
        notes: 'Pre-arrival clearance documentation transmitted to European agent.',
      },
    ],
    createdAt: '2026-08-23',
  },
  {
    id: 'SHP-9820',
    trackingNumber: 'SKL-TRK-982099',
    customerId: 'CUST-1074',
    customerName: 'Gujarat Marine Exports LLP',
    originPort: 'Mundra Port (INMUN)',
    destinationPort: 'Los Angeles Port (USLAX)',
    cargoType: 'Frozen Seafood (-25°C Deep Freeze)',
    carrierLine: 'Maersk Line',
    vesselFlightNo: 'Maersk Mc-Kinney Møller',
    containerNumber: 'MSKU-4401823',
    sealNumber: 'EIA-US-10924',
    etd: '2026-08-29',
    eta: '2026-09-24',
    temperature: '-25.8°C (Normal)',
    status: 'CUSTOMS',
    milestones: [
      {
        stage: 'Reefer Container Pre-Tripped & Loaded',
        location: 'Veraval Cold Storage Depot',
        timestamp: '2026-08-27 14:00 IST',
        completed: true,
        notes: 'PTI certificate verified. Temperature set to -25°C.',
      },
      {
        stage: 'Customs Examination & US FDA Health Inspection',
        location: 'Mundra Customs CFS Zone',
        timestamp: '2026-08-29 10:00 IST',
        completed: true,
        notes: 'Health certification and origin inspection cleared.',
      },
      {
        stage: 'Vessel Berth Loading',
        location: 'Mundra International Container Terminal (MICT)',
        timestamp: 'In Progress',
        completed: false,
        notes: 'Connected to terminal reefer monitoring power grid.',
      },
    ],
    createdAt: '2026-08-27',
  },
];

export const mockAdminDocuments: AdminDocument[] = [
  {
    id: 'DOC-501',
    title: 'Commercial Invoice & Packing List (Consignment AP-2026-08)',
    documentType: 'Invoice',
    fileSize: '1.4 MB',
    fileFormat: 'PDF',
    relatedEntity: 'Apex Pharma BioTech Ltd (SHP-9842)',
    status: 'VERIFIED',
    uploadedAt: '2026-08-28',
  },
  {
    id: 'DOC-502',
    title: 'Preferential Certificate of Origin (India-EU FTA Format)',
    documentType: 'Certificate of Origin',
    fileSize: '850 KB',
    fileFormat: 'PDF',
    relatedEntity: 'EuroTrans Maritime GmbH (SHP-9835)',
    status: 'VERIFIED',
    uploadedAt: '2026-08-24',
  },
  {
    id: 'DOC-503',
    title: 'Customs Assessed Shipping Bill No. 9081442 (ICEGATE)',
    documentType: 'Shipping Bill',
    fileSize: '2.1 MB',
    fileFormat: 'PDF',
    relatedEntity: 'Gujarat Marine Exports LLP (SHP-9820)',
    status: 'VERIFIED',
    uploadedAt: '2026-08-29',
  },
  {
    id: 'DOC-504',
    title: 'Ocean Master Bill of Lading (MSCU-9081245)',
    documentType: 'Bill of Lading',
    fileSize: '1.8 MB',
    fileFormat: 'PDF',
    relatedEntity: 'EuroTrans Maritime GmbH (SHP-9835)',
    status: 'VERIFIED',
    uploadedAt: '2026-08-25',
  },
  {
    id: 'DOC-505',
    title: 'Marine Institute Cargo Clauses (A) Insurance Policy Certificate',
    documentType: 'Insurance',
    fileSize: '1.1 MB',
    fileFormat: 'PDF',
    relatedEntity: 'Apex Pharma BioTech Ltd (SHP-9842)',
    status: 'VERIFIED',
    uploadedAt: '2026-08-28',
  },
  {
    id: 'DOC-506',
    title: 'GST Input Tax Credit Export Refund Claim Dossier & LUT',
    documentType: 'GST Documents',
    fileSize: '3.4 MB',
    fileFormat: 'PDF',
    relatedEntity: 'Varma Global Textiles (LEAD-7994)',
    status: 'PENDING_AUDIT',
    uploadedAt: '2026-08-30',
  },
];

export const mockDashboardMetrics = {
  totalLeads: 48,
  newLeads: 7,
  activeShipments: 16,
  pendingQuotations: 9,
  totalCustomers: 34,
  completedShipments: 192,
  onTimeDeliveryRate: '99.4%',
  totalDutiesSavedUSD: '$1.42M',
};
