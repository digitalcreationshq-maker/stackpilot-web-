import { Fraunces, IBM_Plex_Sans } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  variable: '--font-plex',
  weight: ['400', '500', '600'],
  display: 'swap',
});

export const metadata = {
  title: {
    default: 'Stack Pilot — Software Buying Guides for Small Business',
    template: '%s — Stack Pilot',
  },
  description:
    'Stack Pilot is an independent buying guide to small business software, AI tools and digital services — reviewed, compared and ranked.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#16232E',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${plexSans.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
  }
