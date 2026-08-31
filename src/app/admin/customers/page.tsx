'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/Table';
import { mockAdminCustomers } from '@/data/adminMockData';
import { Search, Ship } from 'lucide-react';

export default function AdminCustomersPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCustomers = mockAdminCustomers.filter(
    (c) =>
      c.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.contactPerson.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.gstOrTaxId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-900">
            Enterprise Customer Directory
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500 mt-1">
            Registered corporate clients, manufacturers, EXIM accounts, and statutory tax identifiers.
          </p>
        </div>
      </div>

      {/* Search Filter Bar */}
      <Card variant="bordered" className="p-4 bg-white flex items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-2.5 pointer-events-none" />
          <input
            type="text"
            placeholder="Search by company name, contact, GST/Tax ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#0284C7]/20 focus:border-[#0284C7]"
          />
        </div>
        <span className="text-xs text-neutral-500 font-medium">
          Total Enterprise Clients: <strong>{mockAdminCustomers.length}</strong>
        </span>
      </Card>

      {/* Customers Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Company &amp; ID</TableHead>
            <TableHead>Contact Person</TableHead>
            <TableHead>GST / Tax ID</TableHead>
            <TableHead>Country &amp; Sector</TableHead>
            <TableHead>Active Shipments</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredCustomers.map((cust) => (
            <TableRow key={cust.id}>
              <TableCell>
                <div className="font-bold text-neutral-900">{cust.companyName}</div>
                <div className="font-mono text-[11px] text-neutral-400">{cust.id}</div>
              </TableCell>
              <TableCell>
                <div className="font-semibold text-neutral-800">{cust.contactPerson}</div>
                <div className="text-[11px] text-neutral-500">{cust.email}</div>
              </TableCell>
              <TableCell>
                <span className="font-mono text-xs text-neutral-700 bg-neutral-100 px-2 py-0.5 rounded">
                  {cust.gstOrTaxId}
                </span>
              </TableCell>
              <TableCell>
                <div className="font-medium text-neutral-900">{cust.country}</div>
                <div className="text-[11px] text-neutral-500">{cust.industry}</div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-1.5 font-bold text-emerald-700">
                  <Ship className="w-3.5 h-3.5" />
                  <span>{cust.activeShipments} Active ({cust.totalVolumeTEU} TEU)</span>
                </div>
              </TableCell>
              <TableCell>
                <Badge variant={cust.status === 'ACTIVE' ? 'success' : 'warning'}>
                  {cust.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
