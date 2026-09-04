import type { Service } from '@/types';

export const servicesData: Service[] = [
  {
    id: 'licensing-registrations',
    title: 'Licensing & Statutory Registrations',
    slug: 'licensing-registrations',
    shortDescription:
      'Secures mandatory DGFT authorizations (IEC, RCMC, AEO, SCOMET) to establish legal trading authority and prevent customs holds.',
    description:
      'Establishes legal authority for cross-border operations and unlocks government incentive eligibility. Secures verified IEC codes, Export Promotion Council memberships (RCMC), and certified AEO status for priority customs clearance.',
    features: [
      'Importer-Exporter Code (IEC) Issuance, Annual Profile Renewal & Modifications',
      'Registration-cum-Membership Certificate (RCMC) with EPCs (EEPC, FIEO, APEDA, Pharmexcil, MPEDA)',
      'Authorized Economic Operator (AEO T1, T2, T3 & LO) Certification Advisory',
      'Special Economic Zone (SEZ) & 100% Export Oriented Unit (EOU) Approvals',
      'SCOMET (Dual-Use Items) Export Authorization & Regulatory Clearances',
    ],
    benefits: [
      'Expedited licensing with zero statutory show-cause interventions',
      'Priority customs green-channel clearance via certified AEO status',
      'Full eligibility for central and state export promotion incentive schemes',
      'Continuous compliance audit readiness protecting against license suspension',
    ],
    faqs: [
      {
        question: 'How long does it take to secure an IEC and RCMC?',
        answer:
          'Standard IEC issuance is completed within 24-48 hours once documentation is verified. RCMC approval timelines depend on the specific Export Promotion Council, typically taking 3-7 business days with our direct liaison.',
      },
      {
        question: 'What is the operational advantage of obtaining AEO status?',
        answer:
          'AEO (Authorized Economic Operator) certification provides faster customs clearance with lower inspection rates, deferred duty payment privileges, higher bank guarantee waivers, and reciprocal green-channel privileges in partner nations.',
      },
    ],
    seoTitle: 'EXIM Licensing & Registrations | DGFT, IEC, RCMC & AEO Advisory',
    seoDescription:
      'Comprehensive EXIM licensing services including IEC registration, RCMC certification, AEO status, and DGFT statutory liaison.',
  },
  {
    id: 'export-incentives',
    title: 'Export Incentives & Government Schemes',
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
      'Zero unutilized duty credit scrips and accelerated cash flow recovery',
    ],
    faqs: [
      {
        question: 'What is the difference between RoDTEP and Duty Drawback?',
        answer:
          'Duty Drawback refunds basic customs duties paid on imported inputs used in export manufacture, whereas RoDTEP reimburses embedded non-creditable central, state, and local levies (like electricity taxes, VAT on fuel, stamp duties). Both can be structured synergistically.',
      },
      {
        question: 'How do you assist with EPCG Export Obligation (EO) fulfillment?',
        answer:
          'We manage the entire EO monitoring lifecycle, submit periodic installation certificates, handle average export maintenance, and obtain the final Export Obligation Discharge Certificate (EODC) from DGFT.',
      },
    ],
    seoTitle: 'Export Incentives & Schemes | RoDTEP, EPCG & Advance Authorisation',
    seoDescription:
      'Expert advisory for government export incentive schemes, duty drawbacks, Advance Authorisation, and EPCG license redemptions.',
  },
  {
    id: 'documentation-liaison',
    title: 'Cross-Border Documentation & Liaison',
    slug: 'documentation-liaison',
    shortDescription:
      'Prevents bank payment rejections, ICEGATE queries, and LC discrepancies with zero-defect compliance dossiers.',
    description:
      'Ensures discrepancy-free trade documentation, digital Certificates of Origin, and complete UCP 600 Letter of Credit compliance to eliminate bank delays and accelerate export proceeds realization (e-BRC closure).',
    features: [
      'Digital Certificate of Origin (Preferential under CEPA/FTA & Non-Preferential)',
      'Letter of Credit (LC) Scrutiny & Compliance under UCP 600 / ISBP Guidelines',
      'Electronic Bank Realisation Certificate (e-BRC) Reconciliation & EDPMS / IDPMS Closure',
      'Multimodal Bill of Lading (FBL) and Air Waybill Verification & Endorsements',
      'Direct Representation for DGFT Policy Clarifications, Norms Committees & Grievances',
    ],
    benefits: [
      'Zero documentation discrepancy rejections and eliminated bank amendment penalties',
      'Full tariff concessions under Free Trade Agreements (FTAs, CEPAs, CECA)',
      'Fast resolution of complex DGFT policy and procedural bottlenecks',
      'Audit-ready electronic trade dossiers for all cross-border transactions',
    ],
    faqs: [
      {
        question: 'Why is e-BRC reconciliation critical for exporters?',
        answer:
          'Without e-BRC realization linked to your shipping bills on the DGFT portal, DGFT will deny or recover export incentives, and the RBI/ED may flag the enterprise under the EDPMS Caution Listing database.',
      },
    ],
    seoTitle: 'EXIM Documentation & Government Liaison | DGFT & Customs Liaison',
    seoDescription:
      'Zero-defect export-import documentation, Certificate of Origin issuance, e-BRC reconciliation, and direct DGFT representations.',
  },
  {
    id: 'logistics-shipping',
    title: 'International Freight & Multimodal Logistics',
    slug: 'logistics-shipping',
    shortDescription:
      'Secures direct wholesale vessel space, reliable container allocations, and competitive ocean/air freight rates across all Incoterms®.',
    description:
      'Lowers landed logistics costs by 15–25% through direct premier carrier volume contracts (Maersk, MSC, CMA CGM), eliminating middleman markups and guaranteeing space during peak freight cycles.',
    features: [
      'Full Container Load (FCL) & Less than Container Load (LCL) Ocean Freight',
      'Time-Critical Air Cargo Charters & Scheduled Consolidation Corridors',
      'Direct Premier Carrier Space Contracting & Transparent All-In Spot Rate Negotiation',
      'Incoterms® Operational Execution (Factory Gate EXW/FCA to Destination DDP/DAP)',
      'Intermodal Rail & Road Transit to Major Inland Container Depots (ICDs) and Gateway Ports',
    ],
    benefits: [
      '15-25% reduction in landed freight costs through direct volume negotiations',
      'Guaranteed container allocations even during peak shipping cycles and equipment shortages',
      'End-to-end cargo visibility from factory floor to final consignee warehouse',
      'Proactive detention and demurrage mitigation via integrated gate logging',
    ],
    faqs: [
      {
        question: 'How do you secure better freight rates than standard forwarders?',
        answer:
          'We leverage consolidated multi-client volume contracts and direct premier carrier service agreements (SCAs) without multi-layer broker margins, passing wholesale ocean and air rates directly to our clients.',
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
      'Accelerates cargo release and eliminates demurrage penalties through authorized brokerage and pre-arrival ICEGATE EDI filing.',
    description:
      'Eliminates port dwell time and tariff misclassification penalties through pre-arrival electronic customs filings, SVB related-party defense, and certified AEO green-channel release.',
    features: [
      'Harmonized System (HS) Code Classification & General Rules of Interpretation (GRI)',
      'Electronic Bill of Entry & Shipping Bill Filing via ICEGATE EDI',
      'Customs Valuation Advisory & Special Valuation Branch (SVB) Documentation',
      'Handling of Faceless Assessment First-Check / Second-Check Customs Queries',
      'Post-Clearance Audit (PCA) Readiness & Internal Regulatory Reviews',
    ],
    benefits: [
      'Immediate port turnaround with zero demurrage and minimal customs inspection delays',
      'Elimination of misclassification penalties, cargo seizures, and tariff disputes',
      'Optimized duty payment through lawful customs exemption notification benefits',
      'Comprehensive legal representation during departmental audits and show-cause proceedings',
    ],
    faqs: [
      {
        question: 'What happens if an incorrect HS code is applied on an export or import?',
        answer:
          'Misclassification can trigger immediate seizure of cargo, statutory penalties under Section 112/114 of the Customs Act, demands for differential duties with retrospective interest, and denial of export incentives.',
      },
    ],
    seoTitle: 'Customs Clearance & Brokerage | HS Code & Regulatory Compliance',
    seoDescription:
      'Fast, lawful customs clearance, tariff assessment, HS code classification, and regulatory compliance across all major ports.',
  },
  {
    id: 'warehousing-distribution',
    title: 'Bonded Warehousing & Global Distribution',
    slug: 'warehousing-distribution',
    shortDescription:
      'Defers customs duties and improves working capital cash flow using MOOWR Section 65 and FTWZ bonded facilities.',
    description:
      'Protects supply chain working capital by legally deferring customs duty payments until domestic market entry, enabling in-bond manufacturing, and supporting flexible regional distribution.',
    features: [
      'Customs Bonded Warehousing under Section 58 & Section 65 MOOWR Regulations',
      'Free Trade and Warehousing Zone (FTWZ) Storage, De-consolidation & Transshipment',
      'Cross-Docking, Consolidation & Hub-and-Spoke Logistics Architecture',
      'Pick, Pack, Kitting, Quality Inspection & Relabeling under Bonded Status',
      'Enterprise WMS (Warehouse Management System) with Real-Time Inventory Telemetry',
    ],
    benefits: [
      'Deferred customs duty payment until goods are cleared for domestic consumption',
      'Manufacture and value-addition in bonded warehouse with zero upfront duty (MOOWR)',
      'Faster regional order fulfillment with minimized stock-out risks',
      'Optimized supply chain working capital and reduced carrying costs',
    ],
    faqs: [
      {
        question: 'What is the benefit of the MOOWR scheme in bonded warehousing?',
        answer:
          'Under MOOWR (Manufacture and Other Operations in Warehouse Regulations), you can import capital goods and raw materials without paying customs duties or IGST until the finished goods enter the domestic market (and 100% duty waiver if exported).',
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
      'Specialized handling for high-value APIs, vaccines, seafood, and fresh agricultural produce',
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
      'Liquidates blocked export working capital by resolving ICEGATE errors and accelerating ITC / IGST refunds.',
    description:
      'Maximizes cash flow and prevents audit penalties through compliant Letter of Undertaking (LUT) zero-tax structures, rapid Input Tax Credit (ITC) refund realization, and ICEGATE mismatch resolution.',
    features: [
      'Export without Payment of Output Tax under compliant Letter of Undertaking (LUT)',
      'Expedited Processing & Departmental Liaison for Accumulated ITC Refunds on Exports',
      'Integrated GST (IGST) Refund Verification and ICEGATE SB005 Error Resolution',
      'Advisory on High Seas Sales, Merchanting Trade, and In-Transit Sales Tax Structuring',
      'Cross-Border Transfer Pricing & Special Valuation Branch (SVB) Related-Party Customs Filing',
    ],
    benefits: [
      'Rapid liquidation of working capital tied up in GST refund pipelines',
      'Zero cash outflow on output GST through compliant LUT structuring',
      'Seamless matching between GSTR-1, GSTR-3B, and ICEGATE shipping data',
      'Protection against retrospective tax demands and departmental audit notices',
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
      'Shields cross-border shipments against maritime catastrophes, physical loss, and contractual disputes with all-risk coverage.',
    description:
      'Provides complete balance sheet protection against catastrophic maritime loss, General Average liabilities, and foreign buyer defaults through structured Institute Cargo Clauses (A) policies.',
    features: [
      'Institute Cargo Clauses (A, B, C) Marine Cargo Insurance Broking & Policy Structuring',
      'Incoterms® Contract Risk Demarcation (EXW, FOB, CIF, CIP, DAP, DDP)',
      'Trade Sanctions, Restricted Party Screening & Geopolitical Corridor Assessment',
      'Demurrage, Detention & General Average Claim Defense',
      'International Commercial Dispute Advisory & Carrier Liability Claims Recovery',
    ],
    benefits: [
      '100% financial protection against catastrophic loss or physical damage during transit',
      'Clear contractual risk boundaries eliminating legal ambiguity with overseas buyers',
      'Protection against unexpected General Average contributions on maritime vessels',
      'Proactive rerouting advisory to bypass conflict zones and congested gateway ports',
    ],
    faqs: [
      {
        question: 'What is General Average and why is marine insurance essential?',
        answer:
          'Under maritime law, General Average requires all cargo owners on a vessel to proportionally share the financial losses if cargo is jettisoned or extraordinary expenses are incurred to save the ship in an emergency. Marine insurance fully indemnifies you against these sudden multi-million dollar liabilities.',
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

