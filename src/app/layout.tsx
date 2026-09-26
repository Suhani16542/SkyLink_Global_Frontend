import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { constructMetadata } from '@/lib/seo/metadata';
import { WebSiteSchema } from '@/components/seo/WebSiteSchema';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${inter.variable}`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`min-h-full flex flex-col ${inter.className} font-sans bg-white text-neutral-900`}>
        <WebSiteSchema />
        {children}
      </body>
    </html>
  );
}


