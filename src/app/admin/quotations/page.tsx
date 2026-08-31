'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/Table';
import { mockAdminQuotations, AdminQuotation } from '@/data/adminMockData';
import { formatCurrency } from '@/lib/utils/formatters';
import { Search, Eye, Send } from 'lucide-react';

export default function AdminQuotationsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedQuote, setSelectedQuote] = useState<AdminQuotation | null>(null);

  const filteredQuotes = mockAdminQuotations.filter(
    (q) =>
      q.quotationNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.serviceType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: AdminQuotation['status']) => {
    switch (status) {
      case 'APPROVED':
        return <Badge variant="success">APPROVED</Badge>;
      case 'SENT':
        return <Badge variant="info">SENT TO CLIENT</Badge>;
      case 'DRAFT':
        return <Badge variant="default">DRAFT</Badge>;
      case 'EXPIRED':
        return <Badge variant="danger">EXPIRED</Badge>;
      case 'REJECTED':
        return <Badge variant="danger">REJECTED</Badge>;
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
            Commercial Quotations Pipeline
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500 mt-1">
            Freight rate estimates, customs brokerage fees, and statutory duty reconciliations.
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <Card variant="bordered" className="p-4 bg-white flex items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-2.5 pointer-events-none" />
          <input
            type="text"
            placeholder="Search by quote #, client, service..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#0284C7]/20 focus:border-[#0284C7]"
          />
        </div>
        <span className="text-xs text-neutral-500 font-medium">
          Active Estimates: <strong>{mockAdminQuotations.length}</strong>
        </span>
      </Card>

      {/* Quotations Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Quotation # &amp; Date</TableHead>
            <TableHead>Enterprise Client</TableHead>
            <TableHead>Service &amp; Route</TableHead>
            <TableHead>Estimated Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredQuotes.map((quote) => (
            <TableRow key={quote.id}>
              <TableCell>
                <div className="font-mono text-xs font-bold text-neutral-900">
                  {quote.quotationNumber}
                </div>
                <div className="text-[11px] text-neutral-400">Created: {quote.createdAt}</div>
              </TableCell>
              <TableCell>
                <div className="font-bold text-neutral-800">{quote.customerName}</div>
                <div className="text-[11px] text-neutral-500">{quote.customerId}</div>
              </TableCell>
              <TableCell>
                <div className="font-medium text-neutral-900">{quote.serviceType}</div>
                <div className="text-[11px] text-neutral-500">
                  {quote.origin} &rarr; {quote.destination}
                </div>
              </TableCell>
              <TableCell>
                <div className="font-bold text-neutral-900">
                  {formatCurrency(quote.totalEstimatedAmount, quote.currency)}
                </div>
                <div className="text-[11px] text-neutral-400">Valid until {quote.validUntil}</div>
              </TableCell>
              <TableCell>{getStatusBadge(quote.status)}</TableCell>
              <TableCell className="text-right">
                <button
                  onClick={() => setSelectedQuote(quote)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#0284C7] hover:text-[#0369A1] bg-sky-50 hover:bg-sky-100 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Invoice Preview</span>
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Invoice-Style Quotation Detail Modal */}
      {selectedQuote && (
        <Modal
          isOpen={!!selectedQuote}
          onClose={() => setSelectedQuote(null)}
          title={`Commercial Estimate: ${selectedQuote.quotationNumber}`}
          description={`Issued to ${selectedQuote.customerName} • Valid until ${selectedQuote.validUntil}`}
          maxWidth="lg"
          footer={
            <div className="flex items-center justify-between w-full">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelectedQuote(null)}
              >
                Close Preview
              </Button>
              <div className="flex items-center gap-2">
                <Button
                  variant="secondary"
                  size="sm"
                  leftIcon={<Send className="w-3.5 h-3.5" />}
                  onClick={() => {
                    alert(`Estimate dispatched to ${selectedQuote.customerName}`);
                    setSelectedQuote(null);
                  }}
                >
                  Dispatch to Client
                </Button>
              </div>
            </div>
          }
        >
          <div className="space-y-5 text-neutral-800">
            {/* Header info */}
            <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 grid grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-neutral-400 uppercase font-bold block">Trade Route</span>
                <span className="font-bold text-neutral-900 text-sm">
                  {selectedQuote.origin} &rarr; {selectedQuote.destination}
                </span>
              </div>
              <div>
                <span className="text-neutral-400 uppercase font-bold block">Cargo Specification</span>
                <span className="font-bold text-neutral-900 text-sm">
                  {selectedQuote.cargoDescription}
                </span>
              </div>
            </div>

            {/* Itemized Cost Breakdown Table */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
                Itemized Cost Breakdown
              </h3>
              <div className="rounded-lg border border-neutral-200 divide-y divide-neutral-100 text-xs">
                <div className="p-3 flex items-center justify-between bg-neutral-50 font-semibold text-neutral-700">
                  <span>Line Item Description</span>
                  <span>Amount ({selectedQuote.currency})</span>
                </div>
                <div className="p-3 flex items-center justify-between">
                  <span>Primary Ocean / Air Freight Carrier Tariff ({selectedQuote.weightVolume})</span>
                  <span className="font-mono font-bold">{formatCurrency(selectedQuote.baseFreightRate, selectedQuote.currency)}</span>
                </div>
                <div className="p-3 flex items-center justify-between">
                  <span>Customs Clearance, HS Classification &amp; Port Handling</span>
                  <span className="font-mono font-bold">{formatCurrency(selectedQuote.customsDutyEstimate, selectedQuote.currency)}</span>
                </div>
                <div className="p-3 flex items-center justify-between">
                  <span>Documentation, e-BRC &amp; Certificate of Origin Liaison</span>
                  <span className="font-mono font-bold">{formatCurrency(selectedQuote.documentationFee, selectedQuote.currency)}</span>
                </div>
                <div className="p-3 flex items-center justify-between">
                  <span>Institute Cargo Clauses (A) Marine All-Risk Insurance</span>
                  <span className="font-mono font-bold">{formatCurrency(selectedQuote.insuranceFee, selectedQuote.currency)}</span>
                </div>
                <div className="p-4 flex items-center justify-between bg-sky-50 font-bold text-sm text-[#0A2540]">
                  <span>Total Estimated Cost</span>
                  <span className="font-mono text-base text-[#0284C7]">
                    {formatCurrency(selectedQuote.totalEstimatedAmount, selectedQuote.currency)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
