import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { COMPANY_PROFILE } from '@/data/mockData';
import { sanityFetch } from '@/sanity/lib/fetch';
import { SITE_SETTINGS_QUERY, type SanitySiteSettings } from '@/sanity/lib/queries';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
  weight: ['500', '600', '700', '800'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    default: `${COMPANY_PROFILE.shortName} | ${COMPANY_PROFILE.positioning}`,
    template: `%s | ${COMPANY_PROFILE.shortName}`,
  },
  description: `${COMPANY_PROFILE.legalName} (${COMPANY_PROFILE.shortName}) - ${COMPANY_PROFILE.tagline}. ${COMPANY_PROFILE.footerDescription}`,
  keywords: [
    'PT Rahardia Abadi Medika',
    'RADAMED',
    'instalasi alat kesehatan',
    'perbaikan alat kesehatan',
    'instalasi radiologi',
    'maintenance alkes semarang',
    'renovasi ruang medis',
  ],
  authors: [{ name: COMPANY_PROFILE.legalName }],
  creator: COMPANY_PROFILE.legalName,
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#04467A',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await sanityFetch<SanitySiteSettings>({
    query: SITE_SETTINGS_QUERY,
    tags: ['siteSettings'],
  });

  return (
    <html lang="id" className={`${plusJakartaSans.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-white text-slate-900 antialiased selection:bg-[#04467A] selection:text-white">
        {/* Skip to Content for Keyboard Accessibility (WCAG AA) */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#04467A] focus:text-white focus:rounded-lg focus:shadow-md focus:outline-none"
        >
          Lewati ke konten utama
        </a>

        {/* Global Navigation Bar */}
        <Navbar settings={settings} />

        {/* Main Content Area */}
        <main id="main-content" className="flex-1 w-full pt-20">
          {children}
        </main>

        {/* Global Institutional Footer */}
        <Footer settings={settings} />
      </body>
    </html>
  );
}
