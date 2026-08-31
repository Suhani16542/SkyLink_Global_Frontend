'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { siteConfig } from '@/config/site';
import {
  User,
  Shield,
  Bell,
  Globe,
  Save,
  CheckCircle2,
} from 'lucide-react';

export default function AdminSettingsPage() {
  const [activeTab, setActiveTab] = useState<'profile' | 'security' | 'notifications' | 'website'>('profile');
  const [savedMessage, setSavedMessage] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedMessage(true);
    setTimeout(() => setSavedMessage(false), 3000);
  };

  return (
    <div className="space-y-6 max-w-4xl">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-900">
          Portal &amp; System Settings
        </h1>
        <p className="text-xs sm:text-sm text-neutral-500 mt-1">
          Manage operations staff credentials, notification triggers, and enterprise configurations.
        </p>
      </div>

      {savedMessage && (
        <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4 text-xs font-semibold text-emerald-800 flex items-center gap-2 animate-in fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Configuration preferences updated successfully.</span>
        </div>
      )}

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-neutral-200 pb-2 overflow-x-auto text-xs font-semibold">
        {[
          { id: 'profile', label: 'Admin Profile', icon: User },
          { id: 'security', label: 'Security & Password', icon: Shield },
          { id: 'notifications', label: 'Notification Triggers', icon: Bell },
          { id: 'website', label: 'Company & Website', icon: Globe },
        ].map((tab) => {
          const IconComp = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-[#0A2540] text-white shadow-xs'
                  : 'text-neutral-600 hover:bg-neutral-100'
              }`}
            >
              <IconComp className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Form Body */}
      <Card variant="bordered" className="p-6 sm:p-8 bg-white border-neutral-200 shadow-sm">
        <form onSubmit={handleSave} className="space-y-6">
          {activeTab === 'profile' && (
            <div className="space-y-4">
              <h2 className="text-base font-bold text-neutral-900">Admin Account Profile</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input label="Staff Name" defaultValue="Vikram Singhania" />
                <Input label="Role / Department" defaultValue="Head of EXIM Trade Operations" />
                <Input label="Staff Email Address" defaultValue="admin@skylinkglobal.com" />
                <Input label="Direct Phone" defaultValue="+91 95121 14113" />
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="space-y-4">
              <h2 className="text-base font-bold text-neutral-900">Security Credentials</h2>
              <div className="space-y-4 max-w-md">
                <Input label="Current Password" type="password" defaultValue="••••••••••••" />
                <Input label="New Password" type="password" placeholder="Enter new strong password" />
                <Input label="Confirm New Password" type="password" placeholder="Confirm new password" />
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="space-y-4">
              <h2 className="text-base font-bold text-neutral-900">Notification Triggers</h2>
              <div className="space-y-3 text-xs text-neutral-700">
                {[
                  'Instant email alert on new incoming B2B Consultation Requests',
                  'Urgent SMS alert on Cold Chain Temperature Excursion events',
                  'Daily digest on ICEGATE customs clearance approvals & holds',
                  'Commercial Quotation approval and acceptance notifications',
                ].map((pref, idx) => (
                  <label key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-neutral-50 border border-neutral-200 cursor-pointer">
                    <input type="checkbox" defaultChecked className="rounded border-neutral-300 text-[#0284C7] focus:ring-[#0284C7]" />
                    <span className="font-medium">{pref}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'website' && (
            <div className="space-y-4">
              <h2 className="text-base font-bold text-neutral-900">Company &amp; Website Configurations</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input label="Official Legal Name" defaultValue={siteConfig.name} />
                <Input label="Brand Tagline" defaultValue={siteConfig.tagline} />
                <Input label="Official Contact Email" defaultValue={siteConfig.contact.email} />
                <Input label="Official Advisory Phone" defaultValue={siteConfig.contact.phone} />
                <div className="sm:col-span-2">
                  <Input label="Corporate Headquarters Address" defaultValue={siteConfig.contact.address} />
                </div>
              </div>
            </div>
          )}

          <div className="pt-4 border-t border-neutral-100 flex justify-end">
            <Button
              type="submit"
              variant="secondary"
              size="md"
              leftIcon={<Save className="w-4 h-4" />}
            >
              Save Configuration Changes
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
