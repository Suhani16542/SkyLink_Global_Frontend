'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/Table';
import { mockAdminLeads, AdminLead } from '@/data/adminMockData';
import { Search, Eye, Mail, Plus } from 'lucide-react';

const statuses = [
  'ALL',
  'NEW',
  'CONTACTED',
  'QUALIFIED',
  'QUOTATION_SENT',
  'IN_PROGRESS',
  'COMPLETED',
  'CANCELLED',
] as const;

export default function AdminLeadsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string>('ALL');

  const filteredLeads = mockAdminLeads.filter((lead) => {
    const matchesSearch =
      lead.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.serviceType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.id.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = selectedStatus === 'ALL' || lead.status === selectedStatus;

    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: AdminLead['status']) => {
    switch (status) {
      case 'NEW':
        return <Badge variant="info">NEW</Badge>;
      case 'CONTACTED':
        return <Badge variant="warning">CONTACTED</Badge>;
      case 'QUALIFIED':
        return <Badge variant="purple">QUALIFIED</Badge>;
      case 'QUOTATION_SENT':
        return <Badge variant="info">QUOTATION SENT</Badge>;
      case 'IN_PROGRESS':
        return <Badge variant="warning">IN PROGRESS</Badge>;
      case 'COMPLETED':
        return <Badge variant="success">COMPLETED</Badge>;
      case 'CANCELLED':
        return <Badge variant="danger">CANCELLED</Badge>;
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
            Leads Pipeline &amp; Inquiries
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500 mt-1">
            Incoming consultation requests, B2B trade assessments, and commercial inquiries.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            href="/request-consultation"
            target="_blank"
            variant="secondary"
            size="sm"
            leftIcon={<Plus className="w-3.5 h-3.5" />}
          >
            Create Inbound Lead
          </Button>
        </div>
      </div>

      {/* Filter Tabs & Search Bar */}
      <Card variant="bordered" className="p-4 bg-white space-y-4">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-2.5 pointer-events-none" />
            <input
              type="text"
              placeholder="Search by company, name, service, lead ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#0284C7]/20 focus:border-[#0284C7]"
            />
          </div>

          <div className="text-xs text-neutral-500 font-medium">
            Showing <strong>{filteredLeads.length}</strong> of {mockAdminLeads.length} leads
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

      {/* Leads Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Lead ID &amp; Company</TableHead>
            <TableHead>Contact Person</TableHead>
            <TableHead>Service Required</TableHead>
            <TableHead>Trade Corridor</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Assigned Staff</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredLeads.map((lead) => (
            <TableRow key={lead.id}>
              <TableCell>
                <div className="font-bold text-neutral-900">{lead.companyName}</div>
                <div className="font-mono text-[11px] text-neutral-400">{lead.id}</div>
              </TableCell>
              <TableCell>
                <div className="font-semibold text-neutral-800">{lead.fullName}</div>
                <div className="text-[11px] text-neutral-500 flex items-center gap-2 mt-0.5">
                  <span className="flex items-center gap-1">
                    <Mail className="w-3 h-3 text-neutral-400" />
                    {lead.email}
                  </span>
                </div>
              </TableCell>
              <TableCell>
                <span className="font-medium text-neutral-900">{lead.serviceType}</span>
                <div className="text-[11px] text-neutral-500">Mode: {lead.shipmentMode}</div>
              </TableCell>
              <TableCell>
                <div className="text-xs text-neutral-800 font-medium">
                  {lead.originCountry.split('(')[0]} &rarr; {lead.destinationCountry.split('(')[0]}
                </div>
              </TableCell>
              <TableCell>{getStatusBadge(lead.status)}</TableCell>
              <TableCell>
                <span className="text-xs text-neutral-700 font-medium">{lead.assignedStaff}</span>
              </TableCell>
              <TableCell className="text-right">
                <Link
                  href={`/admin/leads/${lead.id}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#0284C7] hover:text-[#0369A1] bg-sky-50 hover:bg-sky-100 px-3 py-1.5 rounded-lg transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect</span>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
