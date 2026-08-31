import type { Service } from '@/types';

export const servicesData: Service[] = [
  {
    id: 'licensing-registrations',
    title: 'Licensing & Registrations',
    slug: 'licensing-registrations',
    shortDescription:
      'Turnkey statutory approvals including DGFT IEC registration, RCMC certification, AEO certification, and industrial licensing.',
    description:
      'Navigating statutory foreign trade registrations is the critical foundation for seamless cross-border commerce. We manage end-to-end applications, statutory liaison, and compliance certifications with DGFT, Export Promotion Councils (EPCs), CBIC, and regulatory boards.',
    features: [
      'Importer-Exporter Code (IEC) Issuance & Annual Profile Updation',
      'Registration-cum-Membership Certificate (RCMC) with respective EPCs/Commodity Boards',
      'Authorized Economic Operator (AEO T1, T2, T3 & LO) Certification Advisory',
      'Special Economic Zone (SEZ) & 100% EOU Unit Approvals',
      'SCOMET (Special Chemicals, Organisms, Materials, Equipment & Technologies) Licensing',
    ],
    benefits: [
      'Accelerated registration with zero statutory objections',
      'Priority customs green-channel clearance via AEO certification',
      'Full eligibility for central and state export promotion schemes',
      'Protection against non-compliance penalties and licensing suspensions',
    ],
    faqs: [
      {
        question: 'How long does it take to secure an IEC and RCMC?',
        answer:
          'Standard IEC issuance is completed within 24-48 hours once documentation is verified. RCMC approval timelines depend on the specific Export Promotion Council, typically taking 3-7 business days with our direct liaison.',
      },
      {
        question: 'What is the advantage of obtaining AEO status?',
        answer:
          'AEO (Authorized Economic Operator) certification provides faster customs clearance with lower inspection rates, deferred duty payment privileges, and higher bank guarantee waivers.',
      },
    ],
    seoTitle: 'EXIM Licensing & Registrations | DGFT, IEC & AEO Advisory',
    seoDescription:
      'Comprehensive EXIM licensing services including IEC registration, RCMC certification, AEO status, and DGFT statutory liaison.',
  },
  {
    id: 'export-incentives',
    title: 'Export Incentives & Government Schemes',
    slug: 'export-incentives',
    shortDescription:
      'Maximize cash remissions and duty exemptions across RoDTEP, RoSCTL, Advance Authorisation, and EPCG schemes.',
    description:
      'Ensure your enterprise claims every available rupee and dollar in statutory export incentives. We conduct thorough incentive audits, prepare statutory reconciliation statements, and secure direct duty credit scrips.',
    features: [
      'Remission of Duties and Taxes on Exported Products (RoDTEP) Filings',
      'Rebate of State and Central Taxes and Levies (RoSCTL) for Textiles & Apparel',
      'Advance Authorisation Scheme for Duty-Free Raw Material Procurement',
      'Export Promotion Capital Goods (EPCG) Scheme for Zero-Duty Capital Machinery',
      'Duty Drawback (All Industry Rates & Brand Rate Fixation)',
    ],
    benefits: [
      'Up to 4-8% direct improvement in gross export margins',
      'Zero customs duty on imported inputs and manufacturing machinery',
      'Timely redemption and clubbing of EPCG/Advance Authorisation licenses',
      'Zero unutilized duty scrips and accelerated cash flow recovery',
    ],
    faqs: [
      {
        question: 'What is the difference between RoDTEP and Duty Drawback?',
        answer:
          'Duty Drawback refunds basic customs duties paid on imported inputs used in export manufacture, whereas RoDTEP reimburses embedded non-creditable central, state, and local levies (like electricity taxes, VAT on fuel, stamp duties).',
      },
      {
        question: 'How do you assist with EPCG Export Obligation (EO) fulfillment?',
        answer:
          'We manage the entire EO monitoring lifecycle, submit periodic installation certificates, handle average export maintenance, and obtain the final Export Obligation Discharge Certificate (EODC).',
      },
    ],
    seoTitle: 'Export Incentives & Schemes | RoDTEP, EPCG & Advance Authorisation',
    seoDescription:
      'Expert advisory for government export incentive schemes, duty drawbacks, Advance Authorisation, and EPCG license redemptions.',
  },
  {
    id: 'documentation-liaison',
    title: 'Documentation & Government Liaison',
    slug: 'documentation-liaison',
    shortDescription:
      'Flawless cross-border trade documentation, bank realization (e-BRC), and direct representation with DGFT and customs.',
    description:
      'Single-window documentation management ensuring absolute compliance with international trade laws, foreign exchange regulations (FEMA/RBI), and bilateral trade agreements.',
    features: [
      'Digital Certificate of Origin (Preferential under FTAs & Non-Preferential)',
      'Electronic Bank Realisation Certificate (e-BRC) Reconciliation & Closure',
      'Bill of Lading / Air Waybill Verification & Endorsements',
      'DGFT Policy Clarifications, Representations & Committee Hearings',
      'Customs Valuation & SVB (Special Valuation Branch) Documentation',
    ],
    benefits: [
      'Zero documentation discrepancy delays and eliminated bank penalties',
      'Full tariff concessions under Free Trade Agreements (FTAs/CEPAs)',
      'Fast resolution of complex DGFT policy and procedural bottlenecks',
      'Audit-ready electronic records for all cross-border transactions',
    ],
    faqs: [
      {
        question: 'Why is e-BRC reconciliation critical for exporters?',
        answer:
          'Without e-BRC realization linked to your shipping bills on the DGFT portal, DGFT will deny or recover export incentives, and the RBI/ED may flag the enterprise under the Caution Listing database (EDPMS).',
      },
    ],
    seoTitle: 'EXIM Documentation & Government Liaison | DGFT & Customs Liaison',
    seoDescription:
      'Zero-defect export-import documentation, Certificate of Origin issuance, e-BRC reconciliation, and direct DGFT representations.',
  },
  {
    id: 'logistics-shipping',
    title: 'Logistics & International Shipping',
    slug: 'logistics-shipping',
    shortDescription:
      'Direct carrier allocations, competitive ocean freight negotiation, air cargo charters, and multimodal port coordination.',
    description:
      'We link manufacturers, exporters, and importers directly with major global shipping lines and air freight carriers. Our logistics architecture eliminates middlemen markups while guaranteeing predictable vessel space allocations.',
    features: [
      'Full Container Load (FCL) & Less than Container Load (LCL) Ocean Freight',
      'Time-Critical Air Cargo & Scheduled Consolidation Services',
      'Direct Tier-1 Carrier Space Contracting & Spot Rate Optimization',
      'Intermodal Rail & Road Transit to Major Inland Container Depots (ICDs)',
      'Port Handling, Stevedoring & First-Mile/Last-Mile Drayage',
    ],
    benefits: [
      '15-25% reduction in freight costs through direct volume negotiations',
      'Guaranteed container allocations even during peak shipping seasons',
      'End-to-end cargo visibility from factory gate to final consignee warehouse',
      'Minimization of detention and demurrage liabilities through proactive tracking',
    ],
    faqs: [
      {
        question: 'How do you secure better freight rates than standard forwarders?',
        answer:
          'We leverage consolidated multi-client volume contracts and direct API integrations with leading global shipping lines (Maersk, MSC, CMA CGM, Hapag-Lloyd) without multi-layer broker margins.',
      },
    ],
    seoTitle: 'Global Logistics & International Freight Forwarding | Ocean & Air Freight',
    seoDescription:
      'Reliable international ocean and air freight forwarding, container leasing, multimodal transport, and direct carrier freight negotiation.',
  },
  {
    id: 'customs-compliance',
    title: 'Customs Clearance & Regulatory Compliance',
    slug: 'customs-compliance',
    shortDescription:
      'Authorized customs brokerage, accurate HS code classification, valuation scrutiny, and post-clearance audit defense.',
    description:
      'Navigating customs regulations requires meticulous technical accuracy. Our licensed customs compliance team ensures error-free filing of Shipping Bills and Bills of Entry across major sea ports, airports, and ICDs.',
    features: [
      'Harmonized System (HS) Code Classification & General Rules of Interpretation (GRI)',
      'Electronic Bill of Entry & Shipping Bill Filing via ICEGATE',
      'Customs Valuation Advisory & SVB Assessment Assistance',
      'Handling of Faceless Assessment Queries & Dispute Resolution',
      'Post-Clearance Audit (PCA) Readiness & Internal Compliance Reviews',
    ],
    benefits: [
      'Immediate turnaround with minimal query interventions from customs officers',
      'Elimination of misclassification penalties, seizures, and tariff disputes',
      'Optimized duty payment through lawful notification benefits',
      'Comprehensive defense during audits and show-cause proceedings',
    ],
    faqs: [
      {
        question: 'What happens if an incorrect HS code is applied on an export or import?',
        answer:
          'Misclassification can trigger immediate seizure of goods, severe statutory fines under the Customs Act, demand for differential duties with retrospective interest, and loss of export incentives.',
      },
    ],
    seoTitle: 'Customs Clearance & Brokerage | HS Code & Regulatory Compliance',
    seoDescription:
      'Fast, lawful customs clearance, tariff assessment, HS code classification, and regulatory compliance across all major ports.',
  },
  {
    id: 'warehousing-distribution',
    title: 'Warehousing & Global Distribution',
    slug: 'warehousing-distribution',
    shortDescription:
      'Customs bonded warehousing, Free Trade Warehousing Zones (FTWZ), cross-docking, and hub-and-spoke inventory distribution.',
    description:
      'Strategic warehousing infrastructure positioned at major port hinterlands and key logistics corridors, enabling duty deferment, repackaging, and streamlined distribution.',
    features: [
      'Public & Private Customs Bonded Warehouses (Section 58 & 65 MOOWR)',
      'Free Trade and Warehousing Zone (FTWZ) Storage & Transshipment',
      'Cross-Docking, Consolidation & Deconsolidation Hubs',
      'Pick, Pack, Kitting, Quality Inspection & Relabeling Services',
      'WMS (Warehouse Management System) with Real-Time Stock Tracking',
    ],
    benefits: [
      'Deferred customs duty until goods enter domestic tariff area',
      'Manufacturing and other operations in bonded warehouse without upfront duty (MOOWR)',
      'Faster fulfillment for domestic and regional international markets',
      'Reduced inventory holding costs and optimized supply chain cash flow',
    ],
    faqs: [
      {
        question: 'What is the benefit of the MOOWR scheme in bonded warehousing?',
        answer:
          'Under MOOWR (Manufacture and Other Operations in Warehouse Regulations), you can import capital goods and raw materials without paying customs duties until the finished goods are cleared for domestic sale (and zero duty if exported).',
      },
    ],
    seoTitle: 'Bonded Warehousing & FTWZ Logistics | SkyLink Global Services',
    seoDescription:
      'Strategic customs bonded warehousing, FTWZ storage, MOOWR duty deferment advisory, and global distribution solutions.',
  },
  {
    id: 'cold-chain-solutions',
    title: 'Cold Chain Logistics & Temperature Control',
    slug: 'cold-chain-solutions',
    shortDescription:
      'GDP and FDA-compliant refrigerated transit for pharmaceuticals, biologicals, fresh produce, and seafood.',
    description:
      'Preserving thermal integrity across international trade lanes demands validated packaging, continuous telemetry, and emergency contingency protocols. We ensure complete cold-chain continuity from origin cold-storage to final destination.',
    features: [
      'Reefer Containers (-25°C to +25°C, Ultra-Low Deep Freeze -80°C)',
      'Active & Passive Thermal Packaging Validation',
      'Real-Time IoT Temperature, Humidity & GPS Telemetry Monitoring',
      'GDP (Good Distribution Practice) Certified Pharma Logistics Protocols',
      'Expedited Customs Clearance for Time & Temperature-Sensitive Life Sciences',
    ],
    benefits: [
      'Zero thermal excursions and guaranteed product efficacy upon arrival',
      'Full regulatory compliance with US FDA, EU GDP, and WHO standards',
      'Comprehensive temperature log audit trails provided with every shipment',
      'Specialized handling for high-value APIs, vaccines, seafood, and fruits',
    ],
    faqs: [
      {
        question: 'How do you monitor temperature during ocean transit?',
        answer:
          'We deploy cellular/satellite IoT data loggers that transmit real-time temperature, humidity, light exposure, and location directly to our 24/7 monitoring desk, triggering immediate interventions if anomalies occur.',
      },
    ],
    seoTitle: 'Cold Chain Logistics | Pharmaceutical & Perishable Freight Solutions',
    seoDescription:
      'End-to-end GDP-compliant temperature-controlled logistics, reefer container management, and IoT tracking for pharma, seafood, and perishables.',
  },
  {
    id: 'tax-gst-advisory',
    title: 'Trade Tax & GST Advisory',
    slug: 'tax-gst-advisory',
    shortDescription:
      'Strategic GST structuring on export/import, Letter of Undertaking (LUT) filings, and expedited Input Tax Credit (ITC) refunds.',
    description:
      'Cross-border tax structuring designed to eliminate double taxation, maximize cash flow, and ensure complete compliance with Goods & Services Tax (GST) and customs duty statutes.',
    features: [
      'Export without Payment of Tax under Letter of Undertaking (LUT)',
      'Expedited Processing & Liaison for Accumulated ITC Refunds on Exports',
      'Integrated GST (IGST) Refund Verification with Customs ICEGATE Systems',
      'Advisory on High Seas Sales, Merchanting Trade, and In-Transit Sales Tax',
      'Cross-Border Transfer Pricing & Related Party Customs Valuation (SVB)',
    ],
    benefits: [
      'Rapid liquidation of blocked capital in GST refund pipelines',
      'Zero cash outflow on output GST through compliant LUT filings',
      'Seamless matching between GSTR-1, GSTR-3B, and ICEGATE shipping data',
      'Protection against retrospective tax demands and departmental notices',
    ],
    faqs: [
      {
        question: 'Why do export GST refunds get stuck on ICEGATE?',
        answer:
          'Common reasons include invoice number mismatches, incorrect port code filings, SB005 errors, IGST amount discrepancies, or GSTIN mismatches between GST returns and customs shipping bills. We audit and correct these systematically.',
      },
    ],
    seoTitle: 'EXIM Tax & GST Advisory | Export ITC Refunds & LUT Structuring',
    seoDescription:
      'Comprehensive GST advisory for exporters and importers, LUT management, ITC refund acceleration, and ICEGATE error resolution.',
  },
  {
    id: 'trade-risk-management',
    title: 'Trade Risk Management & Marine Insurance',
    slug: 'trade-risk-management',
    shortDescription:
      'All-risk marine cargo insurance, foreign exchange hedging strategies, geopolitical trade lane advisory, and dispute resolution.',
    description:
      'Protect your cross-border transactions against maritime hazards, cargo loss, carrier insolvencies, currency fluctuations, and contractual counterparty defaults with comprehensive trade risk frameworks.',
    features: [
      'Institute Cargo Clauses (A, B, C) Marine Cargo Insurance Broking',
      'Incoterms® 2020 Risk Allocation Advisory for Commercial Contracts',
      'Trade Sanctions, Restricted Entity Screening & Geopolitical Risk Review',
      'Demurrage, Detention & General Average Claim Defense',
      'International Commercial Dispute Advisory & Carrier Liability Claims',
    ],
    benefits: [
      '100% financial protection against catastrophic loss or damage during transit',
      'Clear contractual risk boundaries eliminating legal ambiguity with overseas buyers',
      'Protection against unexpected General Average contributions',
      'Proactive rerouting advisory to bypass conflict zones and port congestions',
    ],
    faqs: [
      {
        question: 'What is General Average and why is marine insurance essential?',
        answer:
          'Under maritime law, General Average requires all cargo owners on a vessel to proportionally share the financial losses if cargo is jettisoned or expenses are incurred to save the ship in an emergency. Marine insurance fully indemnifies you against these sudden multi-million dollar claims.',
      },
    ],
    seoTitle: 'Trade Risk Management & Marine Cargo Insurance | SkyLink Global Services',
    seoDescription:
      'Comprehensive international trade risk mitigation, marine insurance coverage, Incoterms contract review, and maritime dispute resolution.',
  },
];

export async function getAllServices(): Promise<Service[]> {
  return servicesData;
}

export async function getServiceBySlug(slug: string): Promise<Service | undefined> {
  return servicesData.find((service) => service.slug === slug);
}
