import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import ScrollInit from '@/components/ScrollInit';

const inter = Inter({ subsets: ['latin'], variable: '--sans' });
const cormorant = Cormorant_Garamond({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--serif',
});

export const metadata: Metadata = {
  title: 'PT Cahaya Indo Gemilang – Solusi HSE Terintegrasi Radiasi',
  description: 'Solusi pengelolaan limbah B3 dan TENORM/MIR untuk industri Migas & Minerba Indonesia.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className={`${inter.variable} ${cormorant.variable}`}>
        {children}
        <ScrollInit />
      </body>
    </html>
  );
}
