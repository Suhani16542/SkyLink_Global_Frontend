import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo/metadata';
import './globals.css';

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans bg-white text-neutral-900">
        {children}
      </body>
    </html>
  );
}
