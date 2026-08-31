'use client';

import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import {
  mockAdminLeads,
  mockAdminShipments,
  mockDashboardMetrics,
} from '@/data/adminMockData';
import {
  Inbox,
  Ship,
  FileText,
  Users,
  TrendingUp,
  ArrowRight,
  Plus,
  ShieldCheck,
  ArrowUpRight,
} from 'lucide-react';

export default function AdminDashboardPage() {
  const recentLeads = mockAdminLeads.slice(0, 4);
  const recentShipments = mockAdminShipments.slice(0, 3);

  return (
    <div className="space-y-8">
      {/* Welcome & Quick Actions Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-900">
            Operations &amp; Compliance Overview
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500 mt-1">
            Real-time telemetry, active trade inquiries, customs clearance states, and container flows.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            href="/admin/leads"
            variant="secondary"
            size="sm"
            leftIcon={<Plus className="w-3.5 h-3.5" />}
          >
            Review Leads ({mockDashboardMetrics.newLeads})
          </Button>
          <Button
            href="/admin/shipments"
            variant="outline"
            size="sm"
            leftIcon={<Ship className="w-3.5 h-3.5" />}
          >
            Active Shipments
          </Button>
        </div>
      </div>

      {/* KPI Metric Cards Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <Card variant="bordered" className="p-5 bg-white border-neutral-200">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
              Total Leads
            </span>
            <div className="w-8 h-8 rounded-lg bg-sky-50 text-[#0284C7] flex items-center justify-center">
              <Inbox className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-black text-neutral-900">
              {mockDashboardMetrics.totalLeads}
            </span>
            <Badge variant="info" size="sm">
              +{mockDashboardMetrics.newLeads} New
            </Badge>
          </div>
          <p className="mt-2 text-[11px] text-neutral-400">Inbound consultation requests</p>
        </Card>

        <Card variant="bordered" className="p-5 bg-white border-neutral-200">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
              Active Shipments
            </span>
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Ship className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-black text-neutral-900">
              {mockDashboardMetrics.activeShipments}
            </span>
            <Badge variant="success" size="sm">
              100% Monitored
            </Badge>
          </div>
          <p className="mt-2 text-[11px] text-neutral-400">Ocean, Air &amp; Cold-Chain Transit</p>
        </Card>

        <Card variant="bordered" className="p-5 bg-white border-neutral-200">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
              Pending Quotations
            </span>
            <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
              <FileText className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-black text-neutral-900">
              {mockDashboardMetrics.pendingQuotations}
            </span>
            <Badge variant="warning" size="sm">
              Action Required
            </Badge>
          </div>
          <p className="mt-2 text-[11px] text-neutral-400">Commercial trade lane estimates</p>
        </Card>

        <Card variant="bordered" className="p-5 bg-white border-neutral-200">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
              Total Customers
            </span>
            <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-black text-neutral-900">
              {mockDashboardMetrics.totalCustomers}
            </span>
            <Badge variant="purple" size="sm">
              Verified
            </Badge>
          </div>
          <p className="mt-2 text-[11px] text-neutral-400">Active enterprise accounts</p>
        </Card>
      </div>

      {/* Secondary Operational Stats Banner */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="rounded-xl bg-gradient-to-r from-[#0A2540] to-[#07192D] p-5 text-white flex items-center justify-between shadow-sm">
          <div>
            <span className="text-xs text-sky-300 font-semibold uppercase tracking-wider">
              On-Time Performance Rate
            </span>
            <div className="text-2xl font-extrabold text-white mt-1">
              {mockDashboardMetrics.onTimeDeliveryRate}
            </div>
            <p className="text-xs text-neutral-300 mt-1">
              Based on {mockDashboardMetrics.completedShipments} completed multimodal shipments
            </p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-300 flex items-center justify-center">
            <TrendingUp className="w-6 h-6" />
          </div>
        </div>

        <div className="rounded-xl bg-gradient-to-r from-[#0284C7] to-[#0369A1] p-5 text-white flex items-center justify-between shadow-sm">
          <div>
            <span className="text-xs text-sky-100 font-semibold uppercase tracking-wider">
              Duties &amp; Penalties Saved
            </span>
            <div className="text-2xl font-extrabold text-white mt-1">
              {mockDashboardMetrics.totalDutiesSavedUSD}
            </div>
            <p className="text-xs text-sky-100 mt-1">
              Via RoDTEP, Duty Drawbacks &amp; Tariff Classification
            </p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-white/20 text-white flex items-center justify-center">
            <ShieldCheck className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* 2-Column Split: Active Shipments & Recent Leads */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left 7 Cols: Active Shipments Monitor */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Ship className="w-5 h-5 text-[#0284C7]" />
              <h2 className="text-lg font-bold text-neutral-900">Active Shipments Tracker</h2>
            </div>
            <Link
              href="/admin/shipments"
              className="text-xs font-semibold text-[#0284C7] hover:underline flex items-center gap-1"
            >
              <span>View All ({mockDashboardMetrics.activeShipments})</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="space-y-3">
            {recentShipments.map((shipment) => (
              <Card
                key={shipment.id}
                variant="bordered"
                className="p-5 bg-white border-neutral-200 hover:border-[#0284C7]/40 transition-colors shadow-xs"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-neutral-900">
                        {shipment.trackingNumber}
                      </span>
                      <Badge
                        variant={
                          shipment.status === 'IN_TRANSIT'
                            ? 'info'
                            : shipment.status === 'CUSTOMS'
                            ? 'warning'
                            : 'success'
                        }
                        size="sm"
                      >
                        {shipment.status.replace('_', ' ')}
                      </Badge>
                    </div>
                    <div className="mt-1 text-sm font-bold text-neutral-800">
                      {shipment.customerName}
                    </div>
                    <div className="text-xs text-neutral-500 mt-0.5">{shipment.cargoType}</div>
                  </div>

                  <Link
                    href={`/admin/shipments/${shipment.id}`}
                    className="p-1.5 rounded-lg text-neutral-400 hover:text-[#0284C7] hover:bg-sky-50 transition-colors"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-100 grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-neutral-600">
                  <div>
                    <span className="text-neutral-400 block text-[10px]">Origin</span>
                    <span className="font-medium text-neutral-800">{shipment.originPort}</span>
                  </div>
                  <div>
                    <span className="text-neutral-400 block text-[10px]">Destination</span>
                    <span className="font-medium text-neutral-800">{shipment.destinationPort}</span>
                  </div>
                  <div>
                    <span className="text-neutral-400 block text-[10px]">Est. Arrival (ETA)</span>
                    <span className="font-medium text-neutral-800">{shipment.eta}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Right 5 Cols: Incoming Inquiries & Leads Pipeline */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Inbox className="w-5 h-5 text-[#0284C7]" />
              <h2 className="text-lg font-bold text-neutral-900">Recent Inbound Leads</h2>
            </div>
            <Link
              href="/admin/leads"
              className="text-xs font-semibold text-[#0284C7] hover:underline flex items-center gap-1"
            >
              <span>Manage Pipeline</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="space-y-3">
            {recentLeads.map((lead) => (
              <Card
                key={lead.id}
                variant="bordered"
                className="p-4 bg-white border-neutral-200 hover:border-[#0284C7]/40 transition-colors"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-neutral-900">{lead.companyName}</span>
                      <Badge
                        variant={
                          lead.status === 'NEW'
                            ? 'info'
                            : lead.status === 'QUALIFIED'
                            ? 'success'
                            : 'warning'
                        }
                        size="sm"
                      >
                        {lead.status}
                      </Badge>
                    </div>
                    <div className="text-xs text-neutral-600 mt-0.5">
                      {lead.fullName} • {lead.serviceType}
                    </div>
                  </div>
                  <Link
                    href={`/admin/leads/${lead.id}`}
                    className="text-xs font-bold text-[#0284C7] hover:underline shrink-0"
                  >
                    View &rarr;
                  </Link>
                </div>
                <p className="mt-2 text-[11px] text-neutral-500 line-clamp-2 leading-relaxed">
                  &quot;{lead.message}&quot;
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
