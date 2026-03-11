import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Strategic Writing Editor | Premium Strategic Editing Service',
  description:
    'Strategic editing for writers with ambitious ideas. Improve structure, clarity, and persuasion in 24–72 hours.',
  openGraph: {
    title: 'Strategic Writing Editor',
    description:
      'Make your ideas read as clearly as you think them. Premium strategic editing for idea-driven writers.',
    type: 'website'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  );
}
