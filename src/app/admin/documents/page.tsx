'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/Table';
import { mockAdminDocuments } from '@/data/adminMockData';
import { Search, FileText, Upload, Download } from 'lucide-react';

const docTypes = [
  'ALL',
  'Invoice',
  'Packing List',
  'Certificate of Origin',
  'Shipping Bill',
  'Bill of Lading',
  'GST Documents',
  'Insurance',
] as const;

export default function AdminDocumentsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('ALL');
  const [isUploadOpen, setIsUploadOpen] = useState(false);

  const filteredDocs = mockAdminDocuments.filter((d) => {
    const matchesSearch =
      d.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.relatedEntity.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.documentType.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType = selectedType === 'ALL' || d.documentType === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-900">
            Trade Documents &amp; Compliance Matrix
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500 mt-1">
            Statutory repository for Bills of Lading, ICEGATE Shipping Bills, Certificates of Origin, and GST dossiers.
          </p>
        </div>

        <Button
          onClick={() => setIsUploadOpen(true)}
          variant="secondary"
          size="sm"
          leftIcon={<Upload className="w-3.5 h-3.5" />}
        >
          Upload Document Dossier
        </Button>
      </div>

      {/* Filter Tabs & Search Bar */}
      <Card variant="bordered" className="p-4 bg-white space-y-4">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-2.5 pointer-events-none" />
            <input
              type="text"
              placeholder="Search by title, related consignee, document type..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#0284C7]/20 focus:border-[#0284C7]"
            />
          </div>
          <span className="text-xs text-neutral-500 font-medium">
            Archived Files: <strong>{filteredDocs.length}</strong>
          </span>
        </div>

        {/* Type Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
          {docTypes.map((dt) => (
            <button
              key={dt}
              onClick={() => setSelectedType(dt)}
              className={`px-3 py-1.5 rounded-lg font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                selectedType === dt
                  ? 'bg-[#0A2540] text-white shadow-xs'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              {dt}
            </button>
          ))}
        </div>
      </Card>

      {/* Documents Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Document Title &amp; ID</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Related Consignment / Entity</TableHead>
            <TableHead>File Size / Format</TableHead>
            <TableHead>Audit Status</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredDocs.map((doc) => (
            <TableRow key={doc.id}>
              <TableCell>
                <div className="flex items-start gap-2.5">
                  <FileText className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-neutral-900">{doc.title}</div>
                    <div className="font-mono text-[10px] text-neutral-400">
                      {doc.id} • Uploaded {doc.uploadedAt}
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <span className="rounded-md bg-neutral-100 px-2 py-0.5 text-xs font-semibold text-neutral-700">
                  {doc.documentType}
                </span>
              </TableCell>
              <TableCell>
                <span className="text-xs font-medium text-neutral-800">{doc.relatedEntity}</span>
              </TableCell>
              <TableCell>
                <span className="text-xs text-neutral-600">{doc.fileSize} ({doc.fileFormat})</span>
              </TableCell>
              <TableCell>
                <Badge variant={doc.status === 'VERIFIED' ? 'success' : 'warning'}>
                  {doc.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <button
                  onClick={() => alert(`Downloading ${doc.title}`)}
                  className="p-1.5 rounded-lg text-neutral-500 hover:text-[#0284C7] hover:bg-sky-50 transition-colors cursor-pointer"
                  title="Download Document"
                >
                  <Download className="w-4 h-4" />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Upload Modal UI */}
      {isUploadOpen && (
        <Modal
          isOpen={isUploadOpen}
          onClose={() => setIsUploadOpen(false)}
          title="Upload Trade Document Dossier"
          description="Attach commercial invoices, packing lists, or customs certificates."
          footer={
            <div className="flex justify-end gap-3 w-full">
              <Button variant="outline" size="sm" onClick={() => setIsUploadOpen(false)}>
                Cancel
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  alert('Document dossier uploaded to audit pipeline.');
                  setIsUploadOpen(false);
                }}
              >
                Upload &amp; Verify
              </Button>
            </div>
          }
        >
          <div className="space-y-4 text-xs">
            <div className="border-2 border-dashed border-neutral-300 rounded-xl p-8 text-center bg-neutral-50 hover:bg-sky-50/50 transition-colors cursor-pointer">
              <Upload className="w-8 h-8 text-neutral-400 mx-auto mb-2" />
              <p className="font-semibold text-neutral-700">
                Drag &amp; drop PDF or scanned files here
              </p>
              <p className="text-[11px] text-neutral-400 mt-1">Supports PDF, PNG, TIFF up to 25MB</p>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
