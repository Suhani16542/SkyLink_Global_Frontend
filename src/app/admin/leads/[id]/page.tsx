'use client';

import React, { useState, use } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { mockAdminLeads, AdminLead } from '@/data/adminMockData';
import {
  ArrowLeft,
  Phone,
  Ship,
  CheckCircle2,
  FileText,
  UserCheck,
  ShieldCheck,
} from 'lucide-react';

interface LeadDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function AdminLeadDetailPage({ params }: LeadDetailPageProps) {
  const resolvedParams = use(params);
  const leadId = resolvedParams.id;

  const foundLead = mockAdminLeads.find((l) => l.id === leadId) || mockAdminLeads[0];

  const [lead, setLead] = useState<AdminLead>(foundLead);
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);

  const triggerAction = (newStatus: AdminLead['status'], message: string) => {
    setLead({ ...lead, status: newStatus });
    setFeedbackMessage(message);
    setTimeout(() => setFeedbackMessage(null), 3000);
  };

  return (
    <div className="space-y-6 max-w-5xl">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/leads"
            className="p-2 rounded-lg bg-white border border-neutral-200 text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl sm:text-2xl font-extrabold text-neutral-900">
                Lead: {lead.id}
              </h1>
              <Badge variant="info" size="sm">
                {lead.status}
              </Badge>
            </div>
            <p className="text-xs text-neutral-500 mt-0.5">
              Captured on {new Date(lead.createdAt).toLocaleString()}
            </p>
          </div>
        </div>

        {/* Quick Action Triggers */}
        <div className="flex flex-wrap items-center gap-2">
          <Button
            onClick={() => triggerAction('CONTACTED', 'Lead updated: Contact logged.')}
            variant="outline"
            size="sm"
            leftIcon={<Phone className="w-3.5 h-3.5" />}
          >
            Mark Contacted
          </Button>
          <Button
            onClick={() => triggerAction('QUOTATION_SENT', 'Quotation drafted and dispatched.')}
            variant="secondary"
            size="sm"
            leftIcon={<FileText className="w-3.5 h-3.5" />}
          >
            Send Quotation
          </Button>
          <Button
            onClick={() => triggerAction('IN_PROGRESS', 'Lead converted to active shipment workflow.')}
            variant="primary"
            size="sm"
            leftIcon={<Ship className="w-3.5 h-3.5" />}
          >
            Convert to Shipment
          </Button>
        </div>
      </div>

      {feedbackMessage && (
        <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4 text-xs font-semibold text-emerald-800 flex items-center gap-2 animate-in fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{feedbackMessage}</span>
        </div>
      )}

      {/* Main Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Comprehensive Profile */}
        <div className="lg:col-span-2 space-y-6">
          <Card variant="bordered" className="p-6 bg-white space-y-6">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-400">
                Enterprise &amp; Contact Information
              </h2>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3.5 rounded-lg bg-neutral-50 border border-neutral-200">
                  <span className="text-[10px] uppercase font-bold text-neutral-400 block">
                    Company Name
                  </span>
                  <span className="text-sm font-bold text-neutral-900">{lead.companyName}</span>
                </div>
                <div className="p-3.5 rounded-lg bg-neutral-50 border border-neutral-200">
                  <span className="text-[10px] uppercase font-bold text-neutral-400 block">
                    Contact Person
                  </span>
                  <span className="text-sm font-bold text-neutral-900">{lead.fullName}</span>
                </div>
                <div className="p-3.5 rounded-lg bg-neutral-50 border border-neutral-200">
                  <span className="text-[10px] uppercase font-bold text-neutral-400 block">
                    Work Email
                  </span>
                  <a
                    href={`mailto:${lead.email}`}
                    className="text-sm font-semibold text-[#0284C7] hover:underline"
                  >
                    {lead.email}
                  </a>
                </div>
                <div className="p-3.5 rounded-lg bg-neutral-50 border border-neutral-200">
                  <span className="text-[10px] uppercase font-bold text-neutral-400 block">
                    Direct Phone
                  </span>
                  <span className="text-sm font-semibold text-neutral-900">{lead.phone}</span>
                </div>
              </div>
            </div>

            <div className="border-t border-neutral-100 pt-6">
              <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-400">
                Trade &amp; Logistics Specifications
              </h2>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="space-y-1">
                  <span className="text-neutral-500">Service Category:</span>
                  <div className="font-bold text-neutral-900">{lead.serviceType}</div>
                </div>
                <div className="space-y-1">
                  <span className="text-neutral-500">Shipment Mode:</span>
                  <div className="font-bold text-neutral-900">{lead.shipmentMode} Freight</div>
                </div>
                <div className="space-y-1">
                  <span className="text-neutral-500">Origin Corridor:</span>
                  <div className="font-bold text-neutral-900">{lead.originCountry}</div>
                </div>
                <div className="space-y-1">
                  <span className="text-neutral-500">Destination Corridor:</span>
                  <div className="font-bold text-neutral-900">{lead.destinationCountry}</div>
                </div>
                <div className="sm:col-span-2 space-y-1">
                  <span className="text-neutral-500">Cargo / Commodity:</span>
                  <div className="font-bold text-neutral-900">{lead.cargoType}</div>
                </div>
              </div>
            </div>

            <div className="border-t border-neutral-100 pt-6">
              <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-400">
                Original Message / Client Requirements
              </h2>
              <div className="mt-3 p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-xs sm:text-sm text-neutral-800 leading-relaxed italic">
                &quot;{lead.message}&quot;
              </div>
            </div>
          </Card>
        </div>

        {/* Right 1 Col: Management & Status */}
        <div className="space-y-6">
          <Card variant="bordered" className="p-6 bg-white space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-400">
              Account Handler
            </h2>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-sky-50 text-[#0284C7] flex items-center justify-center font-bold">
                <UserCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-neutral-900">{lead.assignedStaff}</div>
                <div className="text-xs text-neutral-500">Lead Account Officer</div>
              </div>
            </div>

            <div className="pt-3 border-t border-neutral-100">
              <span className="text-[11px] text-neutral-400 block mb-1">Assigned Pipeline Status</span>
              <Badge variant="success">{lead.status}</Badge>
            </div>
          </Card>

          <Card variant="bordered" className="p-6 bg-gradient-to-br from-[#0A2540] to-[#07192D] text-white space-y-3 shadow-md">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Direct Quotation Generator</span>
            </h3>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Auto-generate commercial freight estimate with statutory RoDTEP/EPCG reconciliation.
            </p>
            <Link
              href="/admin/quotations"
              className="inline-flex items-center justify-center w-full rounded-lg bg-[#0284C7] px-4 py-2 text-xs font-bold text-white hover:bg-[#0369A1] transition-colors"
            >
              Open Quotation Matrix &rarr;
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
}
