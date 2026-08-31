'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { Input } from '@/components/ui/Input';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/Table';
import { servicesData } from '@/data/services';
import type { Service } from '@/types';
import { Plus, Edit3, ExternalLink } from 'lucide-react';

interface AdminServiceItem extends Service {
  status: 'PUBLISHED' | 'DRAFT';
  lastUpdated: string;
}

export default function AdminServicesPage() {
  const [services, setServices] = useState<AdminServiceItem[]>(
    servicesData.map((s) => ({
      ...s,
      status: 'PUBLISHED',
      lastUpdated: '2026-08-30',
    }))
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newDesc, setNewDesc] = useState('');

  const toggleStatus = (id: string) => {
    setServices((prev) =>
      prev.map((s) =>
        s.id === id
          ? {
              ...s,
              status: s.status === 'PUBLISHED' ? 'DRAFT' : 'PUBLISHED',
            }
          : s
      )
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-900">
            Public Services Catalog
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500 mt-1">
            Manage public EXIM service offerings, descriptions, capabilities, and SEO slugs.
          </p>
        </div>

        <Button
          onClick={() => setIsModalOpen(true)}
          variant="secondary"
          size="sm"
          leftIcon={<Plus className="w-3.5 h-3.5" />}
        >
          Add Service Offering
        </Button>
      </div>

      {/* Services Catalog Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Service Title &amp; Slug</TableHead>
            <TableHead>Overview Summary</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Last Updated</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {services.map((srv) => (
            <TableRow key={srv.id}>
              <TableCell>
                <div className="font-bold text-neutral-900">{srv.title}</div>
                <div className="font-mono text-[11px] text-neutral-400">/services/{srv.slug}</div>
              </TableCell>
              <TableCell className="max-w-md">
                <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                  {srv.shortDescription}
                </p>
              </TableCell>
              <TableCell>
                <button
                  onClick={() => toggleStatus(srv.id)}
                  title="Click to toggle publish status"
                  className="cursor-pointer"
                >
                  <Badge variant={srv.status === 'PUBLISHED' ? 'success' : 'default'}>
                    {srv.status}
                  </Badge>
                </button>
              </TableCell>
              <TableCell>
                <span className="text-xs text-neutral-500">{srv.lastUpdated}</span>
              </TableCell>
              <TableCell className="text-right space-x-2">
                <Link
                  href={`/services/${srv.slug}`}
                  target="_blank"
                  className="inline-flex items-center gap-1 text-xs font-bold text-neutral-600 hover:text-[#0284C7] bg-neutral-100 px-2.5 py-1.5 rounded-lg transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live</span>
                </Link>
                <button
                  onClick={() => alert(`Edit catalog editor opened for ${srv.title}`)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#0284C7] bg-sky-50 hover:bg-sky-100 px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Edit</span>
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Add Service Modal UI */}
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Add New Service Offering"
          description="Create a new EXIM advisory or logistics capability card."
          footer={
            <div className="flex justify-end gap-3 w-full">
              <Button variant="outline" size="sm" onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  if (newTitle) {
                    setServices([
                      ...services,
                      {
                        id: `srv-${Date.now()}`,
                        title: newTitle,
                        slug: newTitle.toLowerCase().replace(/\s+/g, '-'),
                        shortDescription: newDesc || 'Comprehensive trade advisory solution.',
                        description: newDesc || 'Comprehensive trade advisory solution.',
                        features: ['Statutory compliance review', 'Customs facilitation'],
                        benefits: ['Risk mitigation', 'Cost reduction'],
                        status: 'PUBLISHED',
                        lastUpdated: new Date().toISOString().split('T')[0],
                      },
                    ]);
                    setIsModalOpen(false);
                    setNewTitle('');
                    setNewDesc('');
                  }
                }}
              >
                Publish to Catalog
              </Button>
            </div>
          }
        >
          <div className="space-y-4">
            <Input
              label="Service Title *"
              required
              placeholder="e.g. Free Trade Agreement Advisory"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <div>
              <label htmlFor="newServiceDesc" className="block text-xs font-semibold text-neutral-800 mb-1.5">
                Short Description *
              </label>
              <textarea
                id="newServiceDesc"
                rows={3}
                required
                placeholder="Describe the scope of this EXIM service..."
                className="w-full rounded-lg border border-neutral-300 bg-white px-3.5 py-2 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#0284C7]/20 focus:border-[#0284C7]"
                value={newDesc}
                onChange={(e) => setNewDesc(e.target.value)}
              />
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
