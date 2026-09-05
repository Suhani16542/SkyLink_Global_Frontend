import type { Service } from '@/types';

export const servicesData: Service[] = [
  {
    id: 'logistics-shipping',
    title: 'Logistics & Shipping',
    slug: 'logistics-shipping',
    shortDescription:
      'Strong logistics and shipping management ensures exporters achieve cost efficiency, timely delivery, and risk protection in global trade.',
    description:
      'By integrating freight negotiation, route optimization, consolidations, Incoterms advisory, and marine insurance, exporters can streamline supply chains, reduce costs, and safeguard against risks—enhancing competitiveness in international markets.',
    features: [
      'Freight Negotiation: Securing competitive rates with carriers and forwarders, balancing cost with delivery timelines across sea, air, and multimodal transport.',
      'Route Optimization: Identifying the most efficient shipping routes to minimize transit time and costs, using analytics and avoiding congestion points.',
      'Consolidations: Combining smaller shipments into full container loads (FCL) for cost savings and maximizing space utilization.',
      'Incoterms Advisory: Guidance on international commercial terms (FOB, CIF, DDP, EXW) to ensure clarity on responsibilities and prevent disputes.',
      'Marine Insurance: Coverage against loss, damage, or delay during transit with specialized policies and claims support.',
    ],
    benefits: [
      'Competitive freight rates via direct carrier negotiation and volume benchmarking',
      'Minimised transit times and congestion bypass through route optimization',
      'Complete risk indemnification through specialized marine cargo insurance',
    ],
    faqs: [
      {
        question: 'How does freight negotiation reduce overall export costs?',
        answer:
          'By benchmarking rates across premier carriers, securing long-term service contracts, and balancing multi-modal transport options, exporters significantly cut overhead costs.',
      },
    ],
    seoTitle:
      'Logistics & Shipping: Freight Negotiation, Route Optimization, Consolidations, Incoterms & Insurance',
    seoDescription:
      'Strong logistics and shipping management ensures exporters achieve cost efficiency, timely delivery, and risk protection in global trade.',
  },
  {
    id: 'warehousing-solutions',
    title: 'Warehousing Solutions',
    slug: 'warehousing-solutions',
    shortDescription:
      'As an export consultant, warehousing is not just about storage—it is a strategic function that supports compliance, efficiency, and cost optimization in global trade.',
    description:
      'Warehousing solutions form a critical link in the export supply chain. By leveraging bonded facilities, advanced inventory systems, and value-added services, exporters can reduce costs, ensure compliance, and maintain reliability in international markets.',
    features: [
      'Bonded & Non-Bonded Warehouses: Duty-free storage until goods are cleared for export, easing cash-flow pressure, and secure domestic storage.',
      'Inventory & Compliance Management: Implementation of Warehouse Management Systems (WMS) and RFID/barcode tracking for real-time visibility.',
      'Value-Added Services: Packaging, labeling, palletization tailored to buyer standards, quality checks, and consolidation/de-consolidation.',
      'Distribution & Logistics Integration: Coordination with freight forwarders, route planning, and last-mile delivery support.',
    ],
    benefits: [
      'Deferred duty payment in bonded facilities easing working capital pressure',
      'Real-time inventory visibility and audit readiness via advanced WMS tracking',
      'Customized packaging, labeling, and quality compliance for international markets',
    ],
    faqs: [
      {
        question: 'What is the main advantage of a bonded warehouse for exporters?',
        answer:
          'Bonded warehouses allow duty-free storage until goods are cleared for export, significantly easing working capital and cash-flow pressure.',
      },
    ],
    seoTitle: 'Warehousing Solutions for Exporters | SkyLink Global Services',
    seoDescription:
      'Strategic warehousing solutions for exporters: bonded & non-bonded storage, WMS inventory management, value-added packaging, and logistics integration.',
  },
  {
    id: 'cold-chain-solutions',
    title: 'Cold Chain Solutions',
    slug: 'cold-chain-solutions',
    shortDescription:
      'Protects product quality and temperature integrity throughout the supply chain (-25°C to +25°C).',
    description:
      'Prevents cargo spoilage and preserves pharmaceutical potency through validated reefer equipment, continuous 24/7 IoT temperature telemetry, and GDP/FDA life science compliance.',
    features: [
      'Reefer Containers (-25°C Deep Freeze to +25°C Controlled Room Temperature, Ultra-Low -80°C)',
      'Active & Passive Thermal Packaging Validation & Pre-Cooling Protocols',
      'Real-Time IoT Temperature, Humidity, Shock & Geofencing GPS Telemetry Monitoring',
      'GDP (Good Distribution Practice), US FDA, and European Union Life Science Compliance',
      'Pre-Arrival Customs Green-Channel Expedited Clearance for Perishables and Pharma',
    ],
    benefits: [
      'Zero thermal excursions and guaranteed product potency upon arrival',
      'Full regulatory compliance with international pharmacopeia standards',
      'Comprehensive time-temperature audit logs provided with every shipment',
    ],
    faqs: [
      {
        question: 'How do you monitor temperature during ocean transit?',
        answer:
          'We deploy cellular/satellite IoT data loggers that transmit real-time temperature, humidity, and location directly to our 24/7 monitoring desk.',
      },
    ],
    seoTitle: 'Cold Chain Logistics | Pharmaceutical & Perishable Freight Solutions',
    seoDescription:
      'End-to-end GDP-compliant temperature-controlled logistics, reefer container management, and IoT tracking for pharma, seafood, and perishables.',
  },
  {
    id: 'export-incentives',
    title: 'Freight Cost Optimization',
    slug: 'export-incentives',
    shortDescription:
      'Recovers maximum cash remissions and duty exemptions across RoDTEP, RoSCTL, Advance Authorisation, and EPCG schemes.',
    description:
      'Reclaims legitimate statutory subsidies and eliminates upfront import duties on manufacturing machinery and raw materials, boosting gross export profitability by 4% to 8%.',
    features: [
      'Remission of Duties and Taxes on Exported Products (RoDTEP) Electronic Filings',
      'Rebate of State and Central Taxes and Levies (RoSCTL) for Textiles, Garments & Made-ups',
      'Advance Authorisation Scheme for Duty-Free Input Raw Material Procurement',
      'Export Promotion Capital Goods (EPCG) Scheme for Zero-Duty Capital Machinery Imports',
      'Duty Drawback (All Industry Rates & Section 74/75 Brand Rate Fixation)',
    ],
    benefits: [
      'Up to 4-8% direct improvement in gross export margins through systematic claims',
      'Zero basic customs duty and IGST on imported inputs and manufacturing machinery',
      'Timely redemption and clubbing of EPCG and Advance Authorisation obligations (EODC)',
    ],
    faqs: [
      {
        question: 'What is the difference between RoDTEP and Duty Drawback?',
        answer:
          'Duty Drawback refunds basic customs duties paid on imported inputs, whereas RoDTEP reimburses embedded non-creditable central, state, and local levies.',
      },
    ],
    seoTitle: 'Export Incentives & Schemes | RoDTEP, EPCG & Advance Authorisation',
    seoDescription:
      'Expert advisory for government export incentive schemes, duty drawbacks, Advance Authorisation, and EPCG license redemptions.',
  },
  {
    id: 'tax-gst-compliance',
    title: 'Tax & GST Compliance',
    slug: 'tax-gst-compliance',
    shortDescription:
      'Tax advisory is a critical service for exporters, ensuring compliance with GST regulations while optimizing cash flow.',
    description:
      'Tax advisory services—covering GST refunds, LUT filing, and ITC reconciliation—help exporters maintain compliance, improve liquidity, and avoid disputes. Consultants act as a bridge between businesses and tax authorities, ensuring smooth operations in international trade.',
    features: [
      'GST Refunds: Filing claims on zero-rated supplies, proper documentation (invoices, shipping bills, e-BRC), and liaison with GST authorities.',
      'LUT (Letter of Undertaking) Filing: Guiding duty-free exports without upfront tax payment, annual renewals, and compliance monitoring.',
      'ITC (Input Tax Credit) Reconciliation: Matching purchase invoices with GSTR-2B, identifying mismatches, and safeguarding against audit penalties.',
    ],
    benefits: [
      'Expedited GST refund processing and working capital optimization',
      'Duty-free exports under compliant Letter of Undertaking (LUT)',
      'Accurate GSTR-2B ITC reconciliation safeguarding against audit penalties',
    ],
    faqs: [
      {
        question: 'How does LUT filing benefit exporters?',
        answer:
          'Filing a Letter of Undertaking (LUT) enables exporters to export goods and services without upfront payment of IGST, preserving working capital.',
      },
    ],
    seoTitle: 'Tax Advisory: GST Refunds, LUT Filing & ITC Reconciliation',
    seoDescription:
      'Tax advisory services for exporters covering GST refunds, LUT filing, and ITC reconciliation to maintain compliance and improve liquidity.',
  },
  {
    id: 'documentation-liaison',
    title: 'Documentation & Liaison',
    slug: 'documentation-liaison',
    shortDescription:
      'Accurate documentation and effective liaison with authorities are vital for exporters to ensure compliance, avoid delays, and secure incentives.',
    description:
      'By managing invoices, shipping bills, CoO, ICEGATE filings, AD Code registration, and inspection agency liaison, export consultants provide comprehensive compliance support. This ensures exporters avoid penalties, claim incentives, and maintain credibility in international trade.',
    features: [
      'Custom & Commercial Invoices: Statutory drafting aligned with customs, buyer, and bank requirements.',
      'Shipping Bills: Electronic filings, HS code classification, and CHA coordination.',
      'Certificate of Origin (CoO): Chamber liaison and FTA/PTA preferential compliance.',
      'ICEGATE Filings: e-SANCHIT document uploads, clearance tracking, and query resolution.',
      'AD Code Registration: Customs port linking for seamless foreign exchange remittance.',
      'Inspection Agency Liaison: Pre-shipment quality and destination country standard certification.',
    ],
    benefits: [
      'Zero documentation discrepancy rejections and eliminated bank delays',
      'Full tariff concessions under Free Trade Agreements via certified Certificate of Origin',
      'Seamless foreign exchange remittance via authorized AD Code registration',
    ],
    faqs: [
      {
        question: 'Why is AD Code registration mandatory?',
        answer:
          'An Authorized Dealer (AD) Code registered with customs at the port of export is required to generate shipping bills and facilitate legitimate foreign exchange remittance.',
      },
    ],
    seoTitle:
      'Documentation & Liaison: Custom Invoice, Shipping Bills, CoO, ICEGATE & AD Code',
    seoDescription:
      'End-to-end export documentation and regulatory liaison: custom invoices, shipping bills, Certificate of Origin, ICEGATE filings, and AD code registration.',
  },
  {
    id: 'risk-management',
    title: 'Risk Management',
    slug: 'risk-management',
    shortDescription:
      'Effective risk management is essential for exporters to safeguard against financial losses, shipment delays, and unforeseen disruptions.',
    description:
      'By combining insurance coverage, proactive contingency planning, and strong claims support, exporters can mitigate risks, protect their financial interests, and maintain reliability in global trade.',
    features: [
      'Insurance Coverage: Marine cargo insurance against theft, loss, or damage, and specialized policies for sensitive cargo and high-risk destinations.',
      'Contingency Planning: Backup logistics arrangements (alternate carriers, routes, warehouses) and scenario planning for disruptions.',
      'Claims Support: Preparation of documentation, claim filing, negotiation of settlements, and timely compensation recovery.',
    ],
    benefits: [
      'Comprehensive marine and specialized cargo insurance coverage',
      'Backup logistics and scenario contingency reducing shipment downtime',
      'End-to-end documentation and negotiation for accelerated claims settlement',
    ],
    faqs: [
      {
        question: 'How do contingency plans protect export supply chains?',
        answer:
          'Contingency plans establish alternate shipping corridors, backup warehousing, and secondary carrier agreements to minimize downtime during strikes or port congestion.',
      },
    ],
    seoTitle:
      'Risk Management in Exports: Insurance, Contingency Planning & Claims Support',
    seoDescription:
      'Comprehensive export risk management: marine cargo insurance, proactive contingency planning, and end-to-end claims settlement support.',
  },
];

export async function getAllServices(): Promise<Service[]> {
  return servicesData;
}

export async function getServiceBySlug(slug: string): Promise<Service | undefined> {
  // Support slug aliases
  const normalizedSlug =
    slug === 'tax-gst-advisory'
      ? 'tax-gst-compliance'
      : slug === 'warehousing-distribution'
      ? 'warehousing-solutions'
      : slug === 'trade-risk-management' || slug === 'customs-compliance'
      ? 'risk-management'
      : slug;

  return servicesData.find(
    (service) => service.slug === normalizedSlug || service.slug === slug
  );
}
