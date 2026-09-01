'use client';

import React, { useState } from 'react';
import {
  ShieldCheck,
  Ship,
  Plane,
  FileCheck2,
  Check,
  X,
  ArrowRight,
  Info,
  Layers,
  Sparkles,
  Navigation,
} from 'lucide-react';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import { StaggerContainer } from '@/components/animation/StaggerContainer';
import { Button } from '@/components/ui/Button';

export interface IncotermDetail {
  code: string;
  name: string;
  category: 'multimodal' | 'maritime';
  categoryLabel: string;
  summary: string;
  riskTransfer: string;
  costTransfer: string;
  sellerResponsibilities: string[];
  buyerResponsibilities: string[];
  skylinkAdvisory: string;
  matrix: {
    packaging: 'seller' | 'buyer';
    originDrayage: 'seller' | 'buyer';
    exportClearance: 'seller' | 'buyer';
    mainFreight: 'seller' | 'buyer';
    marineInsurance: 'seller' | 'buyer' | 'negotiable';
    importClearance: 'seller' | 'buyer';
    importDutyTaxes: 'seller' | 'buyer';
    finalDelivery: 'seller' | 'buyer';
  };
}

export const incotermsData: IncotermDetail[] = [
  {
    code: 'FOB',
    name: 'Free On Board (named port of shipment)',
    category: 'maritime',
    categoryLabel: 'Sea & Inland Waterway',
    summary:
      'The seller delivers goods on board the vessel nominated by the buyer at the named port of shipment. The seller clears goods for export.',
    riskTransfer: 'When goods are loaded safely on board the vessel at port of origin.',
    costTransfer: 'Seller pays until loaded on board; buyer pays ocean freight, insurance, and import clearance.',
    sellerResponsibilities: [
      'Export packaging & commercial documentation',
      'Inland freight to origin sea port',
      'Export customs clearance & port terminal handling charges (OTHC)',
      'Loading cargo onto the overseas carrier vessel',
    ],
    buyerResponsibilities: [
      'Main ocean freight booking & carrier freight costs',
      'Marine cargo insurance coverage',
      'Destination port handling charges (DTHC)',
      'Import customs clearance, tariffs & final-mile delivery',
    ],
    skylinkAdvisory:
      'Ideal for standard containerized exports. SkyLink manages factory-to-port logistics, ICEGATE shipping bill filing, and statutory export incentive claims (RoDTEP/Duty Drawback) seamlessly.',
    matrix: {
      packaging: 'seller',
      originDrayage: 'seller',
      exportClearance: 'seller',
      mainFreight: 'buyer',
      marineInsurance: 'buyer',
      importClearance: 'buyer',
      importDutyTaxes: 'buyer',
      finalDelivery: 'buyer',
    },
  },
  {
    code: 'CIF',
    name: 'Cost, Insurance and Freight (named port of destination)',
    category: 'maritime',
    categoryLabel: 'Sea & Inland Waterway',
    summary:
      'The seller delivers goods on board the vessel, procures minimum marine cargo insurance, and pays ocean freight to the named destination port.',
    riskTransfer: 'When goods are loaded on board the vessel at origin port (same as FOB).',
    costTransfer: 'Seller pays ocean freight and insurance to destination port; buyer assumes import clearance and inland haulage.',
    sellerResponsibilities: [
      'Export packaging, documentation & ICEGATE clearance',
      'Inland transport to port of departure',
      'Loading cargo onto the vessel & ocean freight payment',
      'Procurement of marine insurance (minimum Institute Cargo Clauses C)',
    ],
    buyerResponsibilities: [
      'Destination port discharge and terminal fees (DTHC)',
      'Import customs clearance, statutory duty & GST/VAT',
      'Inland transportation from destination port to final warehouse',
      'Transit risks after loading (protected by insurance policy transferred by seller)',
    ],
    skylinkAdvisory:
      'SkyLink leverages Tier-1 maritime carrier contracts to secure competitive ocean freight rates and all-risk Institute Cargo Clauses (A) insurance to protect cross-border margins.',
    matrix: {
      packaging: 'seller',
      originDrayage: 'seller',
      exportClearance: 'seller',
      mainFreight: 'seller',
      marineInsurance: 'seller',
      importClearance: 'buyer',
      importDutyTaxes: 'buyer',
      finalDelivery: 'buyer',
    },
  },
  {
    code: 'CFR',
    name: 'Cost and Freight (named port of destination)',
    category: 'maritime',
    categoryLabel: 'Sea & Inland Waterway',
    summary:
      'The seller delivers goods on board the vessel and pays freight to the destination port, but is not responsible for procuring marine insurance.',
    riskTransfer: 'When goods are placed on board the vessel at the port of shipment.',
    costTransfer: 'Seller pays ocean freight to destination port; buyer pays insurance and destination charges.',
    sellerResponsibilities: [
      'Export packaging & statutory export clearance',
      'Origin port handling & vessel loading',
      'Ocean freight contracting and payment to named destination port',
    ],
    buyerResponsibilities: [
      'Marine cargo insurance procurement from point of origin loading',
      'Destination port handling charges & demurrage risks',
      'Import customs clearance, duties, and final inland drayage',
    ],
    skylinkAdvisory:
      'When quoting CFR, we coordinate real-time vessel milestone tracking and pre-alert documentation to ensure the buyer arranges continuous insurance without coverage gaps.',
    matrix: {
      packaging: 'seller',
      originDrayage: 'seller',
      exportClearance: 'seller',
      mainFreight: 'seller',
      marineInsurance: 'buyer',
      importClearance: 'buyer',
      importDutyTaxes: 'buyer',
      finalDelivery: 'buyer',
    },
  },
  {
    code: 'FCA',
    name: 'Free Carrier (named place of delivery)',
    category: 'multimodal',
    categoryLabel: 'Any Mode of Transport (Multimodal)',
    summary:
      'The seller delivers goods, cleared for export, to the carrier or person nominated by the buyer at the named premises or inland terminal.',
    riskTransfer: 'When goods are loaded onto buyer’s transport or made available at named terminal.',
    costTransfer: 'Seller pays up to delivery to buyer’s carrier; buyer pays subsequent main carriage.',
    sellerResponsibilities: [
      'Export packaging and statutory export clearance',
      'Delivery to buyer’s nominated carrier or inland container depot (ICD)',
      'Loading if delivery occurs at seller’s premises',
    ],
    buyerResponsibilities: [
      'Contracting and paying main carriage (Air, Ocean, Rail, Road)',
      'Marine/Air cargo insurance',
      'Import customs clearance, tariffs, and destination distribution',
    ],
    skylinkAdvisory:
      'The preferred modern alternative to FOB for containerized cargo and air freight. SkyLink manages factory pickup, ICD handover, and Bill of Lading with on-board notation.',
    matrix: {
      packaging: 'seller',
      originDrayage: 'seller',
      exportClearance: 'seller',
      mainFreight: 'buyer',
      marineInsurance: 'buyer',
      importClearance: 'buyer',
      importDutyTaxes: 'buyer',
      finalDelivery: 'buyer',
    },
  },
  {
    code: 'DDP',
    name: 'Delivered Duty Paid (named place of destination)',
    category: 'multimodal',
    categoryLabel: 'Any Mode of Transport (Multimodal)',
    summary:
      'The seller bears maximum responsibility: delivers goods cleared for import, having paid all customs duties, taxes, and destination transport to the buyer’s doorstep.',
    riskTransfer: 'When goods are placed at buyer’s disposal, cleared for import, ready for unloading.',
    costTransfer: 'Seller pays all costs including freight, insurance, import duties, and destination delivery.',
    sellerResponsibilities: [
      'Complete end-to-end export packaging, transport, and freight',
      'Export and import customs clearance, license compliance, and permits',
      'Payment of import duties, VAT/GST, and statutory port gate surcharges',
      'Final delivery to buyer’s designated warehouse or store',
    ],
    buyerResponsibilities: [
      'Unloading the goods at final destination premises',
      'Assisting seller with local regulatory data where required',
    ],
    skylinkAdvisory:
      'High-converting for international B2B buyers who demand turnkey delivery. SkyLink acts as your global delivery partner, handling destination customs brokerage, duty remittance, and final-mile haulage.',
    matrix: {
      packaging: 'seller',
      originDrayage: 'seller',
      exportClearance: 'seller',
      mainFreight: 'seller',
      marineInsurance: 'seller',
      importClearance: 'seller',
      importDutyTaxes: 'seller',
      finalDelivery: 'seller',
    },
  },
  {
    code: 'DAP',
    name: 'Delivered at Place (named place of destination)',
    category: 'multimodal',
    categoryLabel: 'Any Mode of Transport (Multimodal)',
    summary:
      'The seller delivers goods when placed at the buyer’s disposal on the arriving means of transport, ready for unloading at the named place. Buyer handles import clearance.',
    riskTransfer: 'When goods arrive at the named destination, ready for unloading by the buyer.',
    costTransfer: 'Seller pays all transit freight to destination; buyer pays import customs duties and local taxes.',
    sellerResponsibilities: [
      'Export packaging, inland transport, and export clearance',
      'International freight carriage and transit insurance',
      'Transport to named destination address (buyer’s warehouse or facility)',
    ],
    buyerResponsibilities: [
      'Import customs clearance, statutory duty payments, and taxes',
      'Unloading goods from the arriving transport vehicle',
    ],
    skylinkAdvisory:
      'Popular for cross-border supply chains. Eliminates foreign tax registration complexities for the seller while offering seamless doorstep delivery for the overseas buyer.',
    matrix: {
      packaging: 'seller',
      originDrayage: 'seller',
      exportClearance: 'seller',
      mainFreight: 'seller',
      marineInsurance: 'seller',
      importClearance: 'buyer',
      importDutyTaxes: 'buyer',
      finalDelivery: 'seller',
    },
  },
  {
    code: 'CPT',
    name: 'Carriage Paid To (named place of destination)',
    category: 'multimodal',
    categoryLabel: 'Any Mode of Transport (Multimodal)',
    summary:
      'The seller delivers goods to their appointed carrier and pays freight to the named destination. Risk transfers to buyer upon first carrier handover.',
    riskTransfer: 'When goods are handed over to the first carrier contracted by the seller.',
    costTransfer: 'Seller pays freight to destination; buyer pays insurance, destination handling, and import clearance.',
    sellerResponsibilities: [
      'Export packaging and export customs clearance',
      'Freight contract and payment to the named destination terminal/point',
    ],
    buyerResponsibilities: [
      'Cargo transit insurance',
      'Destination terminal handling, import customs clearance, and duties',
      'Inland delivery from destination terminal to final warehouse',
    ],
    skylinkAdvisory:
      'Excellent for multimodal container routes and air shipments. SkyLink coordinates air waybill and multimodal transport documents (FBL) with complete milestone tracking.',
    matrix: {
      packaging: 'seller',
      originDrayage: 'seller',
      exportClearance: 'seller',
      mainFreight: 'seller',
      marineInsurance: 'buyer',
      importClearance: 'buyer',
      importDutyTaxes: 'buyer',
      finalDelivery: 'buyer',
    },
  },
  {
    code: 'CIP',
    name: 'Carriage and Insurance Paid To (named place of destination)',
    category: 'multimodal',
    categoryLabel: 'Any Mode of Transport (Multimodal)',
    summary:
      'Seller pays carriage and high-level Institute Cargo Clauses (A) all-risk insurance to the named destination. Risk transfers upon first carrier handover.',
    riskTransfer: 'When goods are handed over to the first carrier contracted by seller.',
    costTransfer: 'Seller pays freight and all-risk insurance to destination; buyer handles import clearance.',
    sellerResponsibilities: [
      'Export packaging and statutory export clearance',
      'Main freight transport to named destination',
      'Comprehensive Institute Cargo Clauses (A) all-risk insurance',
    ],
    buyerResponsibilities: [
      'Destination customs clearance, statutory duty payments, and taxes',
      'Destination terminal charges and final-mile haulage',
    ],
    skylinkAdvisory:
      'Under Incoterms® 2020, CIP mandates high-level Clause (A) insurance cover, making it standard for high-value pharmaceuticals, electronics, and precision machinery.',
    matrix: {
      packaging: 'seller',
      originDrayage: 'seller',
      exportClearance: 'seller',
      mainFreight: 'seller',
      marineInsurance: 'seller',
      importClearance: 'buyer',
      importDutyTaxes: 'buyer',
      finalDelivery: 'buyer',
    },
  },
  {
    code: 'EXW',
    name: 'Ex Works (named place of delivery)',
    category: 'multimodal',
    categoryLabel: 'Any Mode of Transport (Multimodal)',
    summary:
      'The seller makes goods available at their premises (factory/warehouse). Buyer bears maximum responsibility, including loading and export clearance.',
    riskTransfer: 'At seller’s premises before loading onto buyer’s transport vehicle.',
    costTransfer: 'Buyer pays all freight, loading, insurance, export/import clearance, and duties.',
    sellerResponsibilities: [
      'Commercial packaging of goods at factory/warehouse',
      'Providing commercial invoice and packing list data for export',
    ],
    buyerResponsibilities: [
      'Loading cargo onto origin transport vehicle',
      'Export customs clearance and statutory declarations in origin country',
      'All international freight, marine insurance, import clearance, and delivery',
    ],
    skylinkAdvisory:
      'While simple for sellers, EXW creates export compliance risks because foreign buyers may struggle with domestic customs filing. SkyLink advises upgrading to FCA to retain export tax incentives.',
    matrix: {
      packaging: 'seller',
      originDrayage: 'buyer',
      exportClearance: 'buyer',
      mainFreight: 'buyer',
      marineInsurance: 'buyer',
      importClearance: 'buyer',
      importDutyTaxes: 'buyer',
      finalDelivery: 'buyer',
    },
  },
  {
    code: 'DPU',
    name: 'Delivered at Place Unloaded (named place of destination)',
    category: 'multimodal',
    categoryLabel: 'Any Mode of Transport (Multimodal)',
    summary:
      'The only Incoterm where seller is responsible for unloading goods at the destination terminal or warehouse. Buyer clears import customs.',
    riskTransfer: 'Once goods have been unloaded at the named destination place.',
    costTransfer: 'Seller pays freight and unloading costs; buyer pays import customs duties.',
    sellerResponsibilities: [
      'Export clearance, international carriage, and transit insurance',
      'Delivering and unloading cargo at destination terminal or facility',
    ],
    buyerResponsibilities: [
      'Import customs clearance, payment of statutory duties and taxes',
    ],
    skylinkAdvisory:
      'Essential for heavy project machinery and containerized bulk where specialized crane and terminal unloading equipment is required at destination.',
    matrix: {
      packaging: 'seller',
      originDrayage: 'seller',
      exportClearance: 'seller',
      mainFreight: 'seller',
      marineInsurance: 'seller',
      importClearance: 'buyer',
      importDutyTaxes: 'buyer',
      finalDelivery: 'seller',
    },
  },
];

const matrixStages = [
  { key: 'packaging', label: 'Export Packaging' },
  { key: 'originDrayage', label: 'Origin Inland Haulage' },
  { key: 'exportClearance', label: 'Export Customs Clearance' },
  { key: 'mainFreight', label: 'Main Ocean / Air Freight' },
  { key: 'marineInsurance', label: 'Marine Cargo Insurance' },
  { key: 'importClearance', label: 'Import Customs Clearance' },
  { key: 'importDutyTaxes', label: 'Import Duties & Taxes' },
  { key: 'finalDelivery', label: 'Final Destination Door' },
] as const;

export function IncotermsMatrix() {
  const [selectedCode, setSelectedCode] = useState<string>('FOB');
  const [filterMode, setFilterMode] = useState<'all' | 'maritime' | 'multimodal'>('all');

  const filteredTerms = incotermsData.filter((term) => {
    if (filterMode === 'all') return true;
    return term.category === filterMode;
  });

  const currentTerm =
    incotermsData.find((t) => t.code === selectedCode) || incotermsData[0];

  return (
    <section className="py-20 sm:py-28 bg-[#07192D] text-white relative overflow-hidden border-t border-white/10">
      {/* Background ambient accents */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-[#0284C7]/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-50" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <ScrollReveal effect="fade-down" delay={0}>
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 border border-sky-400/30 px-3.5 py-1.5 text-xs font-semibold text-sky-300">
              <Layers className="w-4 h-4 text-sky-400" />
              <span>International Trade Advisory</span>
            </div>
          </ScrollReveal>
          <ScrollReveal effect="fade-up" delay={80}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Incoterms® 2020 Risk &amp; Responsibility Matrix
            </h2>
          </ScrollReveal>
          <ScrollReveal effect="fade-up" delay={160}>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              Choosing the right International Commercial Term defines risk allocation, freight liability, and statutory customs obligations between buyer and seller. Explore our interactive operational guide below.
            </p>
          </ScrollReveal>
        </div>

        {/* Filter Pills */}
        <ScrollReveal effect="fade-up" delay={200} className="flex justify-center mb-8">
          <div className="inline-flex p-1 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
            <button
              onClick={() => setFilterMode('all')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                filterMode === 'all'
                  ? 'bg-[#0284C7] text-white shadow-md'
                  : 'text-neutral-300 hover:text-white'
              }`}
            >
              All 10 Core Terms
            </button>
            <button
              onClick={() => setFilterMode('maritime')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                filterMode === 'maritime'
                  ? 'bg-[#0284C7] text-white shadow-md'
                  : 'text-neutral-300 hover:text-white'
              }`}
            >
              <Ship className="w-3.5 h-3.5" />
              <span>Ocean &amp; Waterway</span>
            </button>
            <button
              onClick={() => setFilterMode('multimodal')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                filterMode === 'multimodal'
                  ? 'bg-[#0284C7] text-white shadow-md'
                  : 'text-neutral-300 hover:text-white'
              }`}
            >
              <Plane className="w-3.5 h-3.5" />
              <span>Multimodal / Any Mode</span>
            </button>
          </div>
        </ScrollReveal>

        {/* Incoterm Quick Select Bar */}
        <ScrollReveal effect="fade-up" delay={240}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {filteredTerms.map((term) => {
              const isSelected = selectedCode === term.code;
              return (
                <button
                  key={term.code}
                  onClick={() => setSelectedCode(term.code)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold font-mono transition-all flex items-center gap-2 border ${
                    isSelected
                      ? 'bg-sky-500 text-white border-sky-400 shadow-lg shadow-sky-500/25 scale-105'
                      : 'bg-white/5 text-neutral-300 border-white/10 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  <span>{term.code}</span>
                  <span className="text-[10px] opacity-70 font-sans font-normal hidden md:inline">
                    ({term.code === 'FOB' || term.code === 'CIF' || term.code === 'DDP' ? 'Common' : term.category === 'maritime' ? 'Sea' : 'Multi'})
                  </span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Main Interactive Matrix Card */}
        <ScrollReveal effect="scale-up" delay={300} duration={750}>
          <div className="rounded-3xl border border-white/15 bg-gradient-to-b from-[#0A2540] to-[#07192D] p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-xl">
            {/* Header of Active Term */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-8 border-b border-white/10 gap-6">
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-3xl sm:text-4xl font-black text-sky-400 font-mono tracking-tight">
                    {currentTerm.code}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30">
                    {currentTerm.categoryLabel}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mt-2">
                  {currentTerm.name}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 mt-2 max-w-3xl leading-relaxed">
                  {currentTerm.summary}
                </p>
              </div>

              {/* SkyLink Action CTA */}
              <div className="shrink-0">
                <Button
                  href="/request-consultation"
                  variant="secondary"
                  size="md"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                  className="shadow-lg shadow-sky-500/20"
                >
                  Consult on {currentTerm.code} Contracts
                </Button>
              </div>
            </div>

            {/* Visual International Cargo Journey Progression Track */}
            <div className="py-6 border-b border-white/10">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-sky-400 flex items-center gap-1.5">
                  <Navigation className="w-3.5 h-3.5 text-sky-400" />
                  <span>Physical Cargo &amp; Legal Responsibility Journey</span>
                </span>
                <span className="text-xs text-neutral-400">
                  Active Term: <strong className="text-sky-300 font-mono">{currentTerm.code}</strong>
                </span>
              </div>

              <div className="relative p-4 rounded-2xl bg-white/5 border border-white/10 overflow-x-auto">
                <div className="min-w-[700px] flex items-center justify-between relative">
                  {/* Background track line */}
                  <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/10 -translate-y-1/2 z-0" />

                  {[
                    { label: 'Seller Factory', sub: 'Packaging', key: 'packaging' },
                    { label: 'Inland Drayage', sub: 'Origin Transit', key: 'originDrayage' },
                    { label: 'Origin Port', sub: 'Customs & OTHC', key: 'exportClearance' },
                    { label: 'Main Freight', sub: 'Ocean / Air', key: 'mainFreight' },
                    { label: 'Marine Insurance', sub: 'Cargo Cover', key: 'marineInsurance' },
                    { label: 'Destination Port', sub: 'Discharge & DTHC', key: 'importClearance' },
                    { label: 'Import Customs', sub: 'Duty & GST/VAT', key: 'importDutyTaxes' },
                    { label: 'Consignee Door', sub: 'Final Unloading', key: 'finalDelivery' },
                  ].map((node, nIdx) => {
                    const isSeller = currentTerm.matrix[node.key as keyof typeof currentTerm.matrix] === 'seller';
                    return (
                      <div key={nIdx} className="relative z-10 flex flex-col items-center text-center px-1">
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center font-mono text-[10px] font-bold border-2 transition-all ${
                            isSeller
                              ? 'bg-[#0284C7] border-white text-white shadow-md shadow-sky-500/30 scale-110'
                              : 'bg-amber-500 border-amber-200 text-white shadow-md shadow-amber-500/30 scale-110'
                          }`}
                        >
                          {nIdx + 1}
                        </div>
                        <span className="text-[11px] font-bold text-white mt-1.5 whitespace-nowrap">
                          {node.label}
                        </span>
                        <span
                          className={`text-[9px] font-mono mt-0.5 px-1.5 py-0.2 rounded font-bold ${
                            isSeller
                              ? 'bg-sky-500/30 text-sky-200'
                              : 'bg-amber-500/30 text-amber-200'
                          }`}
                        >
                          {isSeller ? 'SELLER' : 'BUYER'}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Stage-by-Stage Obligation Responsibility Grid */}
            <div className="py-8 border-b border-white/10">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                  Responsibility &amp; Cost Allocation Breakdown
                </h4>
                <div className="flex items-center gap-4 text-xs">
                  <span className="flex items-center gap-1.5 text-sky-300">
                    <span className="w-3 h-3 rounded-full bg-[#0284C7] inline-block" />
                    <span>Seller (Exporter)</span>
                  </span>
                  <span className="flex items-center gap-1.5 text-amber-300">
                    <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                    <span>Buyer (Importer)</span>
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
                {matrixStages.map((stage) => {
                  const assignment = currentTerm.matrix[stage.key];
                  const isSeller = assignment === 'seller';
                  return (
                    <div
                      key={stage.key}
                      className={`p-3.5 rounded-2xl border text-center transition-all flex flex-col justify-between ${
                        isSeller
                          ? 'bg-[#0284C7]/20 border-sky-500/40 text-white'
                          : 'bg-amber-500/10 border-amber-500/30 text-neutral-200'
                      }`}
                    >
                      <div className="text-[11px] font-bold leading-tight mb-3">
                        {stage.label}
                      </div>
                      <div className="mt-auto">
                        <span
                          className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                            isSeller
                              ? 'bg-sky-500 text-white'
                              : 'bg-amber-500/80 text-white'
                          }`}
                        >
                          {isSeller ? (
                            <>
                              <Check className="w-3 h-3" />
                              <span>Seller</span>
                            </>
                          ) : (
                            <>
                              <Check className="w-3 h-3" />
                              <span>Buyer</span>
                            </>
                          )}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Split Details: Risk Transfer & SkyLink Strategic Advisory */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-start">
              {/* Left 6 Cols: Precise Risk & Cost Demarcations */}
              <div className="lg:col-span-6 space-y-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-2 text-sky-400 mb-1.5">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">
                      Critical Risk Transfer Point
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed">
                    {currentTerm.riskTransfer}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-2 text-emerald-400 mb-1.5">
                    <FileCheck2 className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">
                      Cost Boundary &amp; Payment Cutoff
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed">
                    {currentTerm.costTransfer}
                  </p>
                </div>
              </div>

              {/* Right 6 Cols: SkyLink Strategic Advisory Note */}
              <div className="lg:col-span-6 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-sky-950/60 to-[#0A2540] border border-sky-500/30">
                <div className="flex items-center gap-2 text-sky-300 mb-2">
                  <Sparkles className="w-4 h-4 text-sky-400" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    SkyLink Trade Advisory &amp; Optimization
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed">
                  {currentTerm.skylinkAdvisory}
                </p>

                <div className="mt-4 pt-4 border-t border-sky-500/20 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <span className="text-sky-300 font-semibold">
                    Need contract term structuring for foreign buyers?
                  </span>
                  <a
                    href="/contact"
                    className="text-white hover:text-sky-300 underline font-bold inline-flex items-center gap-1"
                  >
                    Speak with EXIM Advisor &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
