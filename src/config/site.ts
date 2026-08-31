import { env } from './env';

export const siteConfig = {
  name: 'SkyLink Global Services',
  shortName: 'SkyLink Global',
  tagline: 'Connecting Markets. Delivering Opportunities.',
  description:
    'Premier B2B EXIM Consultancy, Global Logistics and Trade Compliance solutions. End-to-end foreign trade advisory, customs clearance, freight forwarding, and temperature-controlled logistics.',
  url: env.siteUrl,
  ogImage: `${env.siteUrl}/images/og-image.jpg`,
  contact: {
    email: 'connect@skylinkglobal.in',
    phone: '+91-9512114113',
    whatsapp: '+919512114113',
    supportHours: 'Mon - Sat: 9:00 AM - 7:00 PM IST',
    address: 'International Trade Tower, Corporate Logistics Hub, India',
  },
  mainNav: [
    { title: 'Home', href: '/' },
    { title: 'About Us', href: '/about' },
    { title: 'Services', href: '/services' },
    { title: 'Industries', href: '/industries' },
    { title: 'Blog', href: '/blog' },
    { title: 'Contact', href: '/contact' },
  ],
  adminNav: [
    { title: 'Dashboard', href: '/admin/dashboard', icon: 'LayoutDashboard' },
    { title: 'Leads', href: '/admin/leads', icon: 'Inbox' },
    { title: 'Customers', href: '/admin/customers', icon: 'Users' },
    { title: 'Quotations', href: '/admin/quotations', icon: 'FileText' },
    { title: 'Shipments', href: '/admin/shipments', icon: 'Ship' },
    { title: 'Documents', href: '/admin/documents', icon: 'FolderArchive' },
    { title: 'Services Catalog', href: '/admin/services', icon: 'Boxes' },
    { title: 'Settings', href: '/admin/settings', icon: 'Settings' },
  ],
  socialLinks: {
    linkedin: 'https://linkedin.com/company/skylink-global-services',
    twitter: 'https://twitter.com/skylink_global',
  },
} as const;
