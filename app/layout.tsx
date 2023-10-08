import { cn } from '@/lib/utils';
import './globals.css';
import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'kenLovesToCode',
  description: 'kenlovestocode '
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn([outfit.className, 'bg-black-100 min-h-screen'])}>
        {children}
      </body>
    </html>
  );
}
