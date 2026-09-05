'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SkyLinkLogo } from '@/components/ui/SkyLinkLogo';
import {
  LayoutDashboard,
  Inbox,
  Users,
  FileText,
  Ship,
  FolderArchive,
  Boxes,
  Settings,
  Search,
  Bell,
  LogOut,
  Menu,
  X,
  Globe,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';

const adminNavItems = [
  { title: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
  { title: 'Leads Pipeline', href: '/admin/leads', icon: Inbox, badge: '7' },
  { title: 'Customers', href: '/admin/customers', icon: Users },
  { title: 'Quotations', href: '/admin/quotations', icon: FileText, badge: '4' },
  { title: 'Shipments', href: '/admin/shipments', icon: Ship, badge: '16' },
  { title: 'Documents Matrix', href: '/admin/documents', icon: FolderArchive },
  { title: 'Services Catalog', href: '/admin/services', icon: Boxes },
  { title: 'Settings', href: '/admin/settings', icon: Settings },
];

export function AdminLayoutShell({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // If on login page, don't show the dashboard shell
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-neutral-100 flex flex-col md:flex-row text-neutral-900 font-sans">
      {/* Mobile Top Bar */}
      <div className="md:hidden bg-[#0A2540] text-white px-4 py-3 flex items-center justify-between sticky top-0 z-40 shadow-sm">
        <SkyLinkLogo variant="light" size="sm" href="/admin/dashboard" />
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Toggle admin sidebar"
          className="p-1.5 rounded-lg text-neutral-300 hover:bg-white/10"
        >
          {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Admin Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#0A2540] text-white flex flex-col justify-between transition-transform duration-300 ease-in-out md:static md:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div>
          {/* Logo Brand Header */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <SkyLinkLogo variant="light" size="md" href="/admin/dashboard" />
            <button
              onClick={() => setSidebarOpen(false)}
              aria-label="Close sidebar"
              className="md:hidden text-neutral-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-1.5" aria-label="Admin Portal Navigation">
            <div className="px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-sky-400">
              Operations &amp; Compliance
            </div>
            {adminNavItems.map((item) => {
              const IconComp = item.icon;
              const isActive =
                item.href === '/admin/dashboard'
                  ? pathname === '/admin/dashboard'
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-[#0284C7] text-white shadow-sm'
                      : 'text-neutral-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <IconComp className="w-4 h-4 shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  {item.badge && (
                    <span
                      className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                        isActive
                          ? 'bg-white text-[#0284C7]'
                          : 'bg-sky-950 text-sky-300 border border-sky-800'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Profile & Public Site Link */}
        <div className="p-4 border-t border-white/10 space-y-3">
          <Link
            href="/"
            target="_blank"
            className="flex items-center justify-between px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-neutral-300 transition-colors"
          >
            <div className="flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 text-sky-400" />
              <span>Public Website</span>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
          </Link>

          <div className="flex items-center justify-between px-3 py-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/40 flex items-center justify-center text-xs font-bold">
                AD
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-white">Admin Desk</div>
                <div className="text-[10px] text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Terminal Online
                </div>
              </div>
            </div>
            <Link
              href="/admin/login"
              title="Sign Out"
              className="p-1.5 rounded-lg text-neutral-400 hover:text-red-400 hover:bg-white/5 transition-colors"
            >
              <LogOut className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="hidden md:flex h-16 bg-white border-b border-neutral-200 px-8 items-center justify-between sticky top-0 z-30 shadow-xs">
          <div className="flex items-center gap-3 w-96">
            <div className="relative w-full">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-2.5 pointer-events-none" />
              <input
                type="text"
                placeholder="Search leads, tracking #, shipments, customers..."
                className="w-full pl-9 pr-4 py-1.5 text-xs rounded-lg border border-neutral-200 bg-neutral-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0284C7]/20 focus:border-[#0284C7]"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-xs text-neutral-600 bg-neutral-100 px-3 py-1.5 rounded-full border border-neutral-200">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span className="font-semibold text-neutral-800">DGFT &amp; Customs Gate Active</span>
            </div>

            <button
              aria-label="Notifications"
              className="relative p-2 rounded-lg text-neutral-500 hover:bg-neutral-100 transition-colors"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#0284C7]" />
            </button>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
