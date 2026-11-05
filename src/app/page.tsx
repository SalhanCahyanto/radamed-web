import React from 'react';
import type { Metadata } from 'next';
import { HeroSection } from '@/components/home/HeroSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { PortfolioSection } from '@/components/home/PortfolioSection';
import { AboutSection } from '@/components/home/AboutSection';
import { CtaSection } from '@/components/home/CtaSection';
import { COMPANY_PROFILE } from '@/data/mockData';
import { sanityFetch } from '@/sanity/lib/fetch';
import {
  COMPANY_PROFILE_QUERY,
  SERVICES_QUERY,
  FEATURED_PROJECTS_QUERY,
  SITE_SETTINGS_QUERY,
  type SanityCompanyProfile,
  type SanityService,
  type SanityPortfolioProject,
  type SanitySiteSettings,
} from '@/sanity/lib/queries';

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

export default async function HomePage() {
  const [profile, services, featuredProjects, settings] = await Promise.all([
    sanityFetch<SanityCompanyProfile>({
      query: COMPANY_PROFILE_QUERY,
      tags: ['companyProfile'],
    }),
    sanityFetch<SanityService[]>({
      query: SERVICES_QUERY,
      tags: ['service'],
    }),
    sanityFetch<SanityPortfolioProject[]>({
      query: FEATURED_PROJECTS_QUERY,
      tags: ['portfolioProject'],
    }),
    sanityFetch<SanitySiteSettings>({
      query: SITE_SETTINGS_QUERY,
      tags: ['siteSettings'],
    }),
  ]);

  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section (#0B2343 Gradient) */}
      <HeroSection profile={profile} />

      {/* 2. Layanan Kami (#FFFFFF) */}
      <ServicesSection services={services} />

      {/* 3. Pekerjaan Kami (#F5F8FD Bento Grid) */}
      <PortfolioSection projects={featuredProjects} />

      {/* 4. Pengenalan Singkat (#FFFFFF + 5 Nilai Perusahaan) */}
      <AboutSection profile={profile} />

      {/* 5. Bottom CTA Section (#0B2343 Band) */}
      <CtaSection settings={settings} />
    </div>
  );
}
