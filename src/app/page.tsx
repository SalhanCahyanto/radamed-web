import React from 'react';
import type { Metadata } from 'next';
import { HeroSection } from '@/components/home/HeroSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { PortfolioSection } from '@/components/home/PortfolioSection';
import { AboutSection } from '@/components/home/AboutSection';
import { CtaSection } from '@/components/home/CtaSection';
import { COMPANY_PROFILE } from '@/data/mockData';

export const metadata: Metadata = {
  title: `${COMPANY_PROFILE.positioning} | ${COMPANY_PROFILE.shortName}`,
  description: `${COMPANY_PROFILE.legalName} (${COMPANY_PROFILE.shortName}) - ${COMPANY_PROFILE.tagline}. Layanan instalasi, perawatan preventif, dan perbaikan alat kesehatan serta renovasi ruang medis dengan spesialisasi radiologi.`,
  openGraph: {
    title: `${COMPANY_PROFILE.shortName} - ${COMPANY_PROFILE.positioning}`,
    description: COMPANY_PROFILE.footerDescription,
    url: '/',
    siteName: COMPANY_PROFILE.legalName,
    locale: 'id_ID',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section (#0B2343 Gradient) */}
      <HeroSection />

      {/* 2. Layanan Kami (#FFFFFF) */}
      <ServicesSection />

      {/* 3. Pekerjaan Kami (#F5F8FD Bento Grid) */}
      <PortfolioSection />

      {/* 4. Pengenalan Singkat (#FFFFFF + 5 Nilai Perusahaan) */}
      <AboutSection />

      {/* 5. Bottom CTA Section (#0B2343 Band) */}
      <CtaSection />
    </div>
  );
}
