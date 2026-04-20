import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TBH Auto Sales',
  description: 'Used cars for sale in San Diego, CA',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
