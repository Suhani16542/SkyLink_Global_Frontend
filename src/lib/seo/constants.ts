export const SEO_DEFAULTS = {
  titleTemplate: '%s | SkyLink Global Services',
  defaultTitle: 'SkyLink Global Services | B2B EXIM Consultancy & Global Logistics',
  description:
    'Comprehensive B2B EXIM consultancy, international freight forwarding, customs clearance, and global trade compliance solutions.',
  keywords: [
    'EXIM Consultancy',
    'Global Logistics',
    'Trade Compliance',
    'Customs Clearance',
    'Freight Forwarding',
    'Supply Chain Solutions',
    'Export Import Advisory',
    'International Trade Logistics',
  ],
  locale: 'en_US',
  robotsDefault: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  robotsAdmin: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
} as const;
