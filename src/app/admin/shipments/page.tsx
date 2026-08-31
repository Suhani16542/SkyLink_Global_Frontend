'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/Table';
import { mockAdminShipments, AdminShipment } from '@/data/adminMockData';
import { Search, Eye, ThermometerSnowflake } from 'lucide-react';

const statuses = ['ALL', 'BOOKED', 'PICKED_UP', 'CUSTOMS', 'LOADED', 'IN_TRANSIT', 'DELIVERED'] as const;

export default function AdminShipmentsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string>('ALL');

  const filteredShipments = mockAdminShipments.filter((s) => {
    const matchesSearch =
      s.trackingNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.carrierLine.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.containerNumber.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = selectedStatus === 'ALL' || s.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: AdminShipment['status']) => {
    switch (status) {
      case 'IN_TRANSIT':
        return <Badge variant="info">IN TRANSIT</Badge>;
      case 'CUSTOMS':
        return <Badge variant="warning">AT CUSTOMS</Badge>;
      case 'DELIVERED':
        return <Badge variant="success">DELIVERED</Badge>;
      case 'LOADED':
        return <Badge variant="purple">VESSEL LOADED</Badge>;
      case 'BOOKED':
        return <Badge variant="default">BOOKED</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-900">
            Cargo Shipments &amp; Live Tracking
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500 mt-1">
            Multimodal container tracking, reefer temperature telemetry, and port gate milestones.
          </p>
        </div>
      </div>

      {/* Filter Tabs & Search Bar */}
      <Card variant="bordered" className="p-4 bg-white space-y-4">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-2.5 pointer-events-none" />
            <input
              type="text"
              placeholder="Search by tracking #, client, container, carrier..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#0284C7]/20 focus:border-[#0284C7]"
            />
          </div>
          <div className="text-xs text-neutral-500 font-medium">
            Active Consignments: <strong>{filteredShipments.length}</strong>
          </div>
        </div>

        {/* Status Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
          {statuses.map((st) => (
            <button
              key={st}
              onClick={() => setSelectedStatus(st)}
              className={`px-3 py-1.5 rounded-lg font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                selectedStatus === st
                  ? 'bg-[#0A2540] text-white shadow-xs'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              {st.replace('_', ' ')}
            </button>
          ))}
        </div>
      </Card>

      {/* Shipments Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Tracking # &amp; Carrier</TableHead>
            <TableHead>Client &amp; Cargo</TableHead>
            <TableHead>Container / Seal</TableHead>
            <TableHead>Origin &rarr; Destination</TableHead>
            <TableHead>ETD / ETA</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredShipments.map((shipment) => (
            <TableRow key={shipment.id}>
              <TableCell>
                <div className="font-mono text-xs font-bold text-neutral-900">
                  {shipment.trackingNumber}
                </div>
                <div className="text-[11px] text-neutral-500 font-medium">{shipment.carrierLine}</div>
              </TableCell>
              <TableCell>
                <div className="font-bold text-neutral-800">{shipment.customerName}</div>
                <div className="text-[11px] text-neutral-500">{shipment.cargoType}</div>
              </TableCell>
              <TableCell>
                <div className="font-mono text-xs text-neutral-800">{shipment.containerNumber}</div>
                <div className="font-mono text-[11px] text-neutral-400">Seal: {shipment.sealNumber}</div>
              </TableCell>
              <TableCell>
                <div className="text-xs font-semibold text-neutral-800">
                  {shipment.originPort} &rarr; {shipment.destinationPort}
                </div>
                {shipment.temperature && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-sky-700 bg-sky-50 px-1.5 py-0.5 rounded mt-1">
                    <ThermometerSnowflake className="w-3 h-3" />
                    {shipment.temperature}
                  </span>
                )}
              </TableCell>
              <TableCell>
                <div className="text-xs text-neutral-800">
                  <span className="text-neutral-400 text-[10px]">ETD:</span> {shipment.etd}
                </div>
                <div className="text-xs text-neutral-800">
                  <span className="text-neutral-400 text-[10px]">ETA:</span> {shipment.eta}
                </div>
              </TableCell>
              <TableCell>{getStatusBadge(shipment.status)}</TableCell>
              <TableCell className="text-right">
                <Link
                  href={`/admin/shipments/${shipment.id}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#0284C7] hover:text-[#0369A1] bg-sky-50 hover:bg-sky-100 px-3 py-1.5 rounded-lg transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Timeline</span>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
