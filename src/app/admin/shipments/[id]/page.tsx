'use client';

import React, { use } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { mockAdminShipments } from '@/data/adminMockData';
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  MapPin,
  Radio,
} from 'lucide-react';

interface ShipmentDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function AdminShipmentDetailPage({ params }: ShipmentDetailPageProps) {
  const resolvedParams = use(params);
  const shipmentId = resolvedParams.id;

  const foundShipment =
    mockAdminShipments.find((s) => s.id === shipmentId) || mockAdminShipments[0];

  return (
    <div className="space-y-6 max-w-5xl">
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/shipments"
            className="p-2 rounded-lg bg-white border border-neutral-200 text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl sm:text-2xl font-extrabold text-neutral-900">
                Tracking: {foundShipment.trackingNumber}
              </h1>
              <Badge variant="info" size="sm">
                {foundShipment.status.replace('_', ' ')}
              </Badge>
            </div>
            <p className="text-xs text-neutral-500 mt-0.5">
              Client: {foundShipment.customerName} ({foundShipment.customerId})
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200 font-semibold">
            <Radio className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
            <span>Telemetry Stream Active</span>
          </span>
        </div>
      </div>

      {/* Overview Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card variant="bordered" className="p-4 bg-white border-neutral-200">
          <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block">
            Carrier &amp; Vessel / Flight
          </span>
          <div className="text-sm font-bold text-neutral-900 mt-1">{foundShipment.carrierLine}</div>
          <div className="text-xs text-neutral-500">{foundShipment.vesselFlightNo}</div>
        </Card>

        <Card variant="bordered" className="p-4 bg-white border-neutral-200">
          <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block">
            Container &amp; Seal Number
          </span>
          <div className="text-sm font-mono font-bold text-neutral-900 mt-1">
            {foundShipment.containerNumber}
          </div>
          <div className="text-xs text-neutral-500">Seal: {foundShipment.sealNumber}</div>
        </Card>

        <Card variant="bordered" className="p-4 bg-white border-neutral-200">
          <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block">
            Thermal Log / Status
          </span>
          <div className="text-sm font-bold text-sky-700 mt-1">
            {foundShipment.temperature || 'Ambient Dry Cargo'}
          </div>
          <div className="text-xs text-neutral-500">
            ETA: {foundShipment.eta} ({foundShipment.destinationPort})
          </div>
        </Card>
      </div>

      {/* Visual Tracking Milestones Timeline */}
      <Card variant="bordered" className="p-6 sm:p-8 bg-white border-neutral-200">
        <h2 className="text-base font-bold text-neutral-900 mb-6 flex items-center gap-2">
          <Clock className="w-5 h-5 text-[#0284C7]" />
          <span>Multimodal Transit Milestones &amp; Port Gate Events</span>
        </h2>

        <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-2.5 sm:before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-neutral-200">
          {foundShipment.milestones.map((milestone, idx) => (
            <div key={idx} className="relative">
              {/* Dot Icon */}
              <div
                className={`absolute -left-6 sm:-left-8 top-0.5 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ring-4 ring-white ${
                  milestone.completed
                    ? 'bg-emerald-500 text-white'
                    : 'bg-neutral-200 text-neutral-500'
                }`}
              >
                {milestone.completed ? (
                  <CheckCircle2 className="w-4 h-4" />
                ) : (
                  <span>{idx + 1}</span>
                )}
              </div>

              {/* Milestone Details */}
              <div className="bg-neutral-50/80 rounded-xl p-4 border border-neutral-200/80">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="text-sm font-bold text-neutral-900">{milestone.stage}</h3>
                  <span className="text-xs font-mono text-neutral-500">{milestone.timestamp}</span>
                </div>
                <div className="text-xs text-[#0284C7] font-semibold mt-1 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{milestone.location}</span>
                </div>
                <p className="text-xs text-neutral-600 mt-2 leading-relaxed">{milestone.notes}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
