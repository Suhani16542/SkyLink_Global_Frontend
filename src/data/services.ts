import type { Service } from '@/types';

export const servicesData: Service[] = [
  {
    id: 'logistics-shipping',
    title: 'Logistics & Shipping',
    slug: 'logistics-shipping',
    shortDescription:
      'Comprehensive international freight forwarding services and end-to-end logistics solutions supporting ocean freight, air freight, multimodal transportation, and cargo protection for global trade.',
    description:
      'By integrating international freight forwarding services, direct carrier negotiations across ocean and air freight services, multimodal transportation planning, route analytics, consolidations, and cargo protection, SkyLink Global delivers reliable cargo transportation services while maintaining complete shipment tracking and visibility.',
    features: [
      'Ocean Freight Services & Air Freight Forwarding: Negotiated carrier contracts and global freight rate benchmarking across primary trade corridors.',
      'Multimodal Transportation & Road Freight Services: Coordinated sea, air, rail, and road transit networks with proactive port staging.',
      'Shipment Tracking and Visibility: Real-time telemetry and corridor analytics to minimize transit delays and transshipment dwell times.',
      'Consolidations & Space Planning: Combining LCL shipments into full container loads (FCL) for optimized cargo transportation services.',
      'Incoterms & Customs Clearance Support: Commercial terms advisory (FOB, CIF, DDP, EXW) and documentation alignment for smooth customs clearance.',
      'Marine Cargo Insurance: Comprehensive cargo risk protection policies against transit loss, damage, or general average declarations.',
    ],
    benefits: [
      'Comprehensive ocean freight services and scheduled air freight services via carrier contracts',
      'Optimized transit times and reduced port dwell through multimodal route analytics',
      'End-to-end shipment tracking and visibility and customs clearance support',
      'Structured cargo protection through marine insurance advisory and Incoterms clarity',
    ],
    faqs: [
      {
        question: 'How do international freight forwarding services optimize cross-border shipping?',
        answer:
          'By benchmarking rates across ocean and air freight carriers, coordinating multimodal transportation routes, and managing consolidation schedules, businesses achieve reliable transit timelines and cost efficiency.',
      },
      {
        question: 'What export incentive schemes are integrated with shipping operations?',
        answer:
          'We assist with RoDTEP, RoSCTL, Advance Authorisation, and Duty Drawback electronic filings to support statutory cash recovery on every eligible shipment.',
      },
    ],
    seoTitle: 'International Freight Forwarding Services',
    seoDescription:
      'SkyLink Global provides international freight forwarding services across ocean and air freight, multimodal transportation, and real-time shipment tracking.',
  },
  {
    id: 'tax-gst-compliance',
    title: 'Tax & GST Compliance',
    slug: 'tax-gst-compliance',
    shortDescription:
      'Comprehensive customs clearance services and trade compliance advisory ensuring seamless customs documentation, export GST refunds, LUT filings, and accurate ITC reconciliation for international trade.',
    description:
      'Our customs clearance services and trade compliance advisory—spanning customs documentation review, LUT filings, ITC reconciliation, and export refund coordination—help businesses maintain complete import export compliance, protect working capital, and avoid cross-border regulatory disputes.',
    features: [
      'Customs Clearance Support & Export GST Refunds: Filing claims on zero-rated supplies with verified customs documentation and authority liaison.',
      'LUT (Letter of Undertaking) Filing: Guiding duty-free exports without upfront tax payment, annual renewals, and trade compliance services.',
      'Customs Documentation & ITC Reconciliation: Matching purchase invoices with GSTR-2B, resolving declaration discrepancies, and supporting customs compliance services.',
    ],
    benefits: [
      'Structured customs clearance support and expedited export GST refund advisory',
      'Duty-free exports under compliant Letter of Undertaking (LUT) filings',
      'Accurate GSTR-2B ITC reconciliation and customs compliance verification',
    ],
    faqs: [
      {
        question: 'How does LUT filing benefit exporters under customs and GST rules?',
        answer:
          'Filing a Letter of Undertaking (LUT) enables exporters to export goods and services without upfront payment of IGST, preserving working capital while maintaining statutory import export compliance.',
      },
    ],
    seoTitle: 'Customs Clearance Services',
    seoDescription:
      'SkyLink Global delivers customs clearance services, import customs clearance, customs declaration support, and trade compliance services for global shipments.',
  },
  {
    id: 'documentation-liaison',
    title: 'Documentation & Liaison',
    slug: 'documentation-liaison',
    shortDescription:
      'Comprehensive export documentation and import export documentation services, managing commercial invoice preparation, shipping bill processing, bill of lading coordination, and regulatory liaison.',
    description:
      'By managing commercial invoice preparation, shipping bill and bill of entry filings, bill of lading alignment, IEC code linking, certificate of origin issuance, and icegate shipping bill submissions, SkyLink Global delivers comprehensive import export documentation and shipping documentation support for cross-border commerce.',
    features: [
      'Commercial Invoice & Customs Invoices: Statutory drafting aligned with destination customs requirements and foreign trade standards.',
      'Shipping Bill & Bill of Entry: Electronic filing of shipping bills for export clearance and bill of entry documents for import consignments.',
      'Certificate of Origin (CoO): Chamber liaison and preferential origin validation under trade agreements (FTA/PTA).',
      'ICEGATE Shipping Bill Filings: e-SANCHIT uploads and structured import export documentation status tracking.',
      'IEC Code & AD Code Registration: Customs port linking and Authorized Dealer bank documentation for foreign exchange remittance.',
      'Bill of Lading & Inspection Liaison: Pre-shipment certification and bill of lading alignment with shipping documentation records.',
    ],
    benefits: [
      'Comprehensive export documentation and shipping documentation review',
      'Full tariff concessions under trade agreements via certified Certificate of Origin',
      'Electronic icegate shipping bill, bill of entry, and bill of lading alignment',
    ],
    faqs: [
      {
        question: 'Why are IEC code and AD Code registrations necessary for export documentation?',
        answer:
          'An active IEC code (Importer Exporter Code) and Authorized Dealer (AD) Code registered with customs are mandatory statutory prerequisites to file a shipping bill and process foreign exchange remittances.',
      },
    ],
    seoTitle: 'Export Documentation & Shipping Documentation',
    seoDescription:
      'SkyLink Global delivers export documentation and shipping documentation: commercial invoice, shipping bill, bill of entry, and certificate of origin filing.',
  },
  {
    id: 'cold-chain-solutions',
    title: 'Cold Chain Solutions',
    slug: 'cold-chain-solutions',
    shortDescription:
      'Comprehensive cold chain logistics and temperature controlled logistics designed for pharmaceutical cold chain logistics and perishable cargo, integrating cold chain transportation with active cold chain monitoring.',
    description:
      'SkyLink Global delivers end-to-end cold chain solutions and temperature controlled logistics. Combining cold chain transportation, continuous cold chain monitoring, pharmaceutical logistics, and integrated cold storage and distribution, we protect sensitive cargo across the global cold chain supply chain.',
    features: [
      'Multi-Zone Temperature Controlled Logistics: Precision thermal regimes supporting pharmaceutical logistics, vaccines (+2°C to +8°C), and frozen perishable goods.',
      'Active Cold Chain Monitoring: Real-time telemetry and data loggers providing full visibility across the cold chain supply chain.',
      'Cold Chain Transportation & Port Handling: Coordinating refrigerated container movements and terminal shore-power plug-in for dependable cold storage transport.',
      'Cold Storage and Distribution: Bonded and non-bonded refrigerated facilities with expedited statutory liaison for pharmaceutical cold chain logistics.',
    ],
    benefits: [
      'Multi-zone temperature controlled logistics and active cold chain monitoring',
      'Coordinated cold chain transportation and priority port shore-power plug-in',
      'Expedited statutory regulatory liaison for pharmaceutical cold chain logistics',
      'Reliable cold storage and distribution network across global trade corridors',
    ],
    faqs: [
      {
        question: 'What temperature ranges are supported under SkyLink cold chain logistics?',
        answer:
          'We manage multi-zone temperature regimes ranging from deep freeze (-25°C to -40°C) for seafood/biologics, chilled (+2°C to +8°C) for vaccines and pharmaceutical logistics, to controlled ambient (+15°C to +25°C).',
      },
      {
        question: 'How does cold chain monitoring protect temperature sensitive cargo?',
        answer:
          'Through real-time telemetry, continuous data logging, and automated threshold alerts, our cold chain monitoring system provides full chain-of-custody visibility across the cold chain supply chain.',
      },
    ],
    seoTitle: 'Cold Chain Logistics & Solutions',
    seoDescription:
      'SkyLink Global provides cold chain logistics and temperature controlled logistics, including cold chain transportation, cold chain monitoring, and pharmaceutical logistics.',
  },
  {
    id: 'warehousing-solutions',
    title: 'Warehousing Solutions',
    slug: 'warehousing-solutions',
    shortDescription:
      'Comprehensive warehousing solutions and warehouse logistics for exporters, providing bonded warehouse storage, advanced inventory management, and WMS integration.',
    description:
      'Strategic warehousing solutions form a critical link in the export supply chain. By combining bonded warehouse storage, an automated warehouse management system (WMS), precise inventory management, and integrated warehousing and logistics, exporters optimize costs and maintain reliable international delivery.',
    features: [
      'Bonded Warehouse & Storage: Duty-deferred warehouse storage facilities enabling cash flow optimization for export cargo.',
      'Inventory Management & WMS: Automated warehouse management system (WMS) tracking with barcode and RFID scanning for full stock visibility.',
      'Value-Added Warehouse Management: Packaging, labeling, palletization, and pre-shipment quality inspection tailored to buyer standards.',
      'Warehousing and Logistics Integration: Seamless warehouse logistics and drayage connecting storage facilities with gateway ports.',
    ],
    benefits: [
      'Duty-deferred storage in bonded warehouse facilities easing cash flow',
      'Real-time inventory management and tracking via an advanced warehouse management system (WMS)',
      'Value-added packaging, palletization, and export warehouse logistics integration',
    ],
    faqs: [
      {
        question: 'How do bonded warehouse facilities benefit exporters?',
        answer:
          'Operating through a bonded warehouse allows exporters and importers to defer customs duty payments until cargo is cleared for export or domestic distribution, preserving liquidity and optimizing warehouse logistics.',
      },
    ],
    seoTitle: 'Warehousing Solutions for Exporters',
    seoDescription:
      'SkyLink Global delivers warehousing solutions and warehouse storage: bonded warehouse facilities, WMS inventory management, and export warehouse logistics.',
  },
  {
    id: 'risk-management',
    title: 'Risk Management',
    slug: 'risk-management',
    shortDescription:
      'Effective trade risk management is essential for exporters to safeguard international cargo through comprehensive marine insurance, proactive contingency planning, and dedicated claims support.',
    description:
      'By combining marine insurance, marine cargo insurance, freight insurance, export credit insurance, and proactive contingency planning, SkyLink Global delivers comprehensive trade risk management to protect exporters against transit losses and financial disruptions.',
    features: [
      'Marine Cargo Insurance & Cargo Insurance: Comprehensive policies and marine transit insurance protecting shipments against loss or damage.',
      'Contingency Planning & Backup Logistics: Establishing alternative trade corridors to mitigate disruptions under disciplined trade risk management.',
      'Export Credit Insurance & Claims Support: Advisory on export credit insurance, export insurance, and end-to-end documentation for claims recovery.',
    ],
    benefits: [
      'Comprehensive marine cargo insurance and tailored cargo insurance coverage',
      'Disruption mitigation through proactive contingency planning and backup logistics',
      'Dedicated claims support and export credit insurance advisory',
    ],
    faqs: [
      {
        question: 'How does marine insurance and contingency planning protect exporters?',
        answer:
          'Marine insurance and structured contingency planning safeguard cargo value against transit perils while maintaining alternative logistics routes to avoid costly trade disruptions.',
      },
    ],
    seoTitle: 'Risk Management in Exports | Marine Insurance',
    seoDescription:
      'SkyLink Global delivers trade risk management for exporters: marine cargo insurance, export insurance, freight insurance, and proactive contingency planning.',
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
