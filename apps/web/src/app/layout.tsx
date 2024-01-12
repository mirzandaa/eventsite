import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import Termina from 'next/font/local';
import './globals.css';
import Header from '@/components/Header';
import { Footer } from '@/components/Footer';

const spaceGro = Space_Grotesk({
  weight: ['400', '700'],
  variable: '--font-space-grotesk',
  subsets: ['latin'],
});

const termina = Termina({
  src: './TerminaTest-Heavy.otf',
  variable: '--font-termina',
});

export const metadata: Metadata = {
  title: 'Eventales - Crafting Memories, One Event at a Time.',
  description:
    'Discover and book tickets for concerts, musical shows, exhibitions, classical performances, and opera events. Invite friends for exclusive discounts and create lasting memories.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${termina.variable} ${spaceGro.variable} font-sans`}
    >
      <body className={spaceGro.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
