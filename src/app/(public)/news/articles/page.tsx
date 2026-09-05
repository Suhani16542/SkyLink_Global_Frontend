import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getPageMetadata } from '@/lib/seo/metadata';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import {
  FileText,
  BookOpen,
  Scale,
  ShieldCheck,
  Award,
  ArrowRight,
  Download,
  Calendar,
  Clock,
  CheckCircle2,
  ExternalLink,
  Search,
  Filter,
} from 'lucide-react';

export const metadata: Metadata = getPageMetadata('newsArticles');


interface ArticleItem {
  id: string;
  refNo: string;
  title: string;
  domain: string;
  date: string;
  readingTime: string;
  executiveAbstract: string;
  keyFindings: string[];
  authorDivision: string;
}

const articlesData: ArticleItem[] = [
  {
    id: 'art-01',
    refNo: 'SKL-PUB-2026-01',
    title: 'CAROTAR Rules of Origin & FTA Verification: Statutory Compliance Framework',
    domain: 'Customs & Tariff Law',
    date: 'February 2026',
    readingTime: '8 min analysis',
    executiveAbstract:
      'A technical breakdown of the Customs Administration of Rules of Origin under Trade Agreements (CAROTAR) regulations. Analyzes burden-of-proof requirements, value addition calculations, and origin verification audit readiness.',
    keyFindings: [
      'Mandatory origin documentation checklist under Section 28DA',
      'Mitigating CAROTAR inquiry notices through documented bill of materials',
      'Analysis of CEPA & ECTA preferential tariff claim workflows',
    ],
    authorDivision: 'Customs Legal & Statutory Advisory Cell',
  },
  {
    id: 'art-02',
    refNo: 'SKL-PUB-2026-02',
    title: 'RoDTEP & RoSCTL Incentive Realization: Resolving ICEGATE SB005/SB006 Port Errors',
    domain: 'DGFT Export Remissions',
    date: 'January 2026',
    readingTime: '10 min analysis',
    executiveAbstract:
      'Detailed operational analysis of systemic data mismatch errors in the ICEGATE portal preventing the automated generation of duty remission scrolls. Provides step-by-step remediation procedures for shipping bill and invoice corrections.',
    keyFindings: [
      'Root-cause matrix for SB005 (invoice number mismatch) and SB006 (port code errors)',
      'e-BRC realization tracking protocols with Authorized Dealer banks',
      'Statutory timelines for filing script claims under updated Foreign Trade Policy',
    ],
    authorDivision: 'Trade Incentive Monetization Division',
  },
  {
    id: 'art-03',
    refNo: 'SKL-PUB-2026-03',
    title: 'Section 65 MOOWR Scheme: Capital Machinery Duty Deferment & Cash-Flow Architecture',
    domain: 'Bonded Warehousing & Tax',
    date: 'January 2026',
    readingTime: '12 min whitepaper',
    executiveAbstract:
      'Comprehensive economic and legal assessment of Manufacture and Other Operations in Warehouse Regulations (MOOWR). Details how export manufacturers achieve complete interest-free customs duty and IGST deferment on capital goods and raw materials.',
    keyFindings: [
      'Cash flow liquidity impact modeling for manufacturing plants',
      'Dual domestic-tariff-area (DTA) and export sales clearance calculations',
      'Statutory compliance filing, monthly returns, and warehouse maintenance obligations',
    ],
    authorDivision: 'Corporate Tax & Bonded Logistics Group',
  },
  {
    id: 'art-04',
    refNo: 'SKL-PUB-2026-04',
    title: 'Incoterms® 2020 in Practice: Allocation of Freight Risk, Marine Insurance & Demurrage',
    domain: 'International Trade Governance',
    date: 'December 2025',
    readingTime: '9 min guide',
    executiveAbstract:
      'Practical evaluation of commercial contracts under FOB, CIF, CFR, and DDP terms. Focuses on critical risk-transfer points, carrier liability ceilings under Hague-Visby rules, and proactive clause structuring to prevent unexpected port detention charges.',
    keyFindings: [
      'Clear differentiation between transfer of physical custody vs transfer of risk',
      'Marine Cargo Insurance clauses (Institute Cargo Clauses A vs C)',
      'Structuring demurrage and detention responsibility in sales contracts',
    ],
    authorDivision: 'Global Marine & Logistics Risk Practice',
  },
];

export default function NewsArticlesPage() {
  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#07192D] via-[#0A2540] to-[#07192D] text-white py-16 sm:py-24 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 right-1/4 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-center">
            <ScrollReveal effect="fade-down" delay={0}>
              <Breadcrumbs
                items={[
                  { name: 'Home', item: '/' },
                  { name: 'News', item: '/news/blogs' },
                  { name: 'Articles & Whitepapers', item: '/news/articles' },
                ]}
                className="text-neutral-400 mb-6 justify-center"
              />
            </ScrollReveal>
          </div>

          <div className="max-w-4xl mx-auto text-center space-y-5">
            <ScrollReveal effect="fade-up" delay={80}>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-400/10 px-3.5 py-1.5 rounded-full border border-sky-400/30">
                <FileText className="w-3.5 h-3.5" />
                Statutory Publications &amp; Technical Briefings
              </span>
            </ScrollReveal>

            <ScrollReveal effect="fade-up" delay={140}>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                Regulatory Articles &amp; Whitepapers
              </h1>
            </ScrollReveal>

            <ScrollReveal effect="fade-up" delay={200}>
              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-3xl mx-auto">
                Formal technical analyses, DGFT policy breakdowns, customs jurisprudence, and executive trade whitepapers published by the SkyLink Advisory Board.
              </p>
            </ScrollReveal>

            <ScrollReveal effect="fade-up" delay={260}>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <Link
                  href="/news/articles"
                  className="rounded-full bg-[#0284C7] text-white text-xs font-bold px-4 py-2 shadow-sm"
                >
                  Technical Articles &amp; Whitepapers
                </Link>
                <Link
                  href="/news/blogs"
                  className="rounded-full bg-white/10 text-neutral-300 hover:text-white hover:bg-white/20 transition-colors text-xs font-bold px-4 py-2 border border-white/20 flex items-center gap-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  Read Casual Field Blogs &rarr;
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2. ARTICLES LISTING (Distinct Document / Publication Format) */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-neutral-200">
            <div>
              <h2 className="text-2xl font-black text-[#0A2540] tracking-tight">
                Published Whitepapers &amp; Advisory Briefings
              </h2>
              <p className="text-sm text-neutral-600 mt-1">
                Rigorous regulatory research prepared for enterprise trade counsel and EXIM directors.
              </p>
            </div>
            <span className="text-xs font-mono font-bold text-neutral-500 bg-white px-3 py-1.5 rounded-lg border border-neutral-200 shadow-2xs self-start md:self-auto">
              Total Publications: {articlesData.length}
            </span>
          </div>

          <div className="space-y-6">
            {articlesData.map((article) => (
              <div
                key={article.id}
                className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-xs hover:shadow-md transition-all hover:border-sky-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Top Header Strip */}
                  <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-200">
                        {article.refNo}
                      </span>
                      <span className="font-semibold text-neutral-700 bg-neutral-100 px-2.5 py-1 rounded-md">
                        {article.domain}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-neutral-500 text-xs">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {article.readingTime}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {article.date}
                      </span>
                    </div>
                  </div>

                  {/* Title & Abstract */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0A2540] leading-snug">
                    {article.title}
                  </h3>

                  <div className="p-4 bg-neutral-50 rounded-2xl border border-neutral-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 block mb-1">
                      Executive Abstract
                    </span>
                    <p className="text-sm text-neutral-700 leading-relaxed">
                      {article.executiveAbstract}
                    </p>
                  </div>

                  {/* Key Findings Checklist */}
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-bold text-neutral-900 block">
                      Core Technical Subject Areas:
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                      {article.keyFindings.map((finding, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-neutral-600 bg-white p-2.5 rounded-xl border border-neutral-150">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{finding}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Footer Bar */}
                <div className="mt-6 pt-4 border-t border-neutral-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="text-xs text-neutral-600 font-medium">
                    <span className="text-neutral-400">Authoring Cell: </span>
                    <span className="font-semibold text-neutral-800">{article.authorDivision}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Button
                      href="/request-consultation"
                      variant="secondary"
                      size="sm"
                      className="text-xs"
                    >
                      Request Detailed Briefing
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CTA */}
      <section className="py-16 sm:py-20 bg-[#07192D] text-white text-center">
        <div className="mx-auto max-w-3xl px-4 space-y-4">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Need Custom Statutory Research for Your Vertical?
          </h2>
          <p className="text-sm sm:text-base text-neutral-300">
            Commission a dedicated EXIM policy impact report tailored to your product tariffs and international corridors.
          </p>
          <div className="pt-3 flex flex-wrap justify-center gap-4">
            <Button href="/request-consultation" variant="secondary" size="md">
              Commission Regulatory Study
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
            <Button href="/contact" variant="outline-light" size="md">
              Speak to Senior Counsel
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
