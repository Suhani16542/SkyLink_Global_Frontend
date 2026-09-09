import type { Service } from '@/types';

export const servicesData: Service[] = [
  {
    id: 'logistics-shipping',
    title: 'Logistics & Shipping',
    slug: 'logistics-shipping',
    shortDescription:
      'Strong logistics and shipping management ensures exporters achieve freight cost optimization, timely delivery, and risk protection in global trade.',
    description:
      'By integrating freight negotiation, cost optimization, route analytics, consolidations, Incoterms advisory, statutory export incentives, and marine insurance, exporters can streamline supply chains, reduce costs by 15%–25%, and safeguard against cross-border risks—enhancing competitiveness in international markets.',
    features: [
      'Freight Negotiation & Cost Optimization: Securing competitive volume-contracted rates with premier ocean and air carriers, tariff benchmarking, and bunker fuel surcharge optimization.',
      'Route Optimization & Analytics: Identifying the most efficient multimodal shipping corridors to minimize transit time and bypass congested transshipment hubs.',
      'Consolidations & Space Allocation: Combining smaller shipments into full container loads (FCL) for cost savings and guaranteed vessel space allocations.',
      'Export Incentives & Statutory Recovery: Reclaiming cash remissions across RoDTEP, RoSCTL, Duty Drawback, and Advance Authorisation schemes.',
      'Incoterms & Contract Advisory: Guidance on international commercial terms (FOB, CIF, DDP, EXW) to ensure clarity on responsibilities and prevent disputes.',
      'Marine Cargo Insurance: Comprehensive coverage against transit loss, damage, or port delays with dedicated claims settlement support.',
    ],
    benefits: [
      'Competitive freight rates and 15%–25% cost reduction via direct carrier contracts and tariff benchmarking',
      'Minimised transit times and congestion bypass through multimodal route optimization',
      'Systematic recovery of government export incentives (RoDTEP, RoSCTL, Duty Drawback)',
      'Complete risk indemnification through specialized marine cargo insurance and Incoterms alignment',
    ],
    faqs: [
      {
        question: 'How does freight negotiation and cost optimization reduce overall export costs?',
        answer:
          'By benchmarking rates across premier carriers, securing long-term contracted space, and balancing multi-modal transport options, exporters significantly cut logistics overheads.',
      },
      {
        question: 'What export incentive schemes are integrated with shipping operations?',
        answer:
          'We assist with RoDTEP, RoSCTL, Advance Authorisation, and Duty Drawback electronic filings to maximize statutory cash recovery on every shipment.',
      },
    ],
    seoTitle:
      'Logistics & Shipping: Freight Negotiation, Cost Optimization, Route Analytics & Insurance',
    seoDescription:
      'End-to-end logistics, ocean/air shipping, and freight cost optimization ensuring exporters achieve cost efficiency, timely delivery, and risk protection.',
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
      : slug === 'export-incentives' || slug === 'freight-cost-optimization'
      ? 'logistics-shipping'
      : slug;

  return servicesData.find(
    (service) => service.slug === normalizedSlug || service.slug === slug
  );
}
