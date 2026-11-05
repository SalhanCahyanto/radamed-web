import React from 'react';
import type { Metadata } from 'next';
import { COMPANY_PROFILE } from '@/data/mockData';
import { MotionWrapper } from '@/components/common/MotionWrapper';
import { PortfolioClient } from './PortfolioClient';

export const metadata: Metadata = {
  title: `Portofolio | ${COMPANY_PROFILE.shortName}`,
  description:
    'Dokumentasi pekerjaan instalasi alat radiologi, instalasi ruang medis, dan perbaikan peralatan kesehatan oleh PT RADAMED.',
  openGraph: {
    title: `Portofolio | ${COMPANY_PROFILE.shortName}`,
    description:
      'Dokumentasi pekerjaan instalasi alat radiologi, instalasi ruang medis, dan perbaikan peralatan kesehatan oleh PT RADAMED.',
    url: '/portfolio',
    siteName: COMPANY_PROFILE.legalName,
    locale: 'id_ID',
    type: 'website',
  },
};

export default function PortfolioPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Page Header (#0B2343 Gradient) */}
      <section
        className="w-full py-16 sm:py-20 text-white"
        style={{
          background: 'linear-gradient(135deg, #0B2343 0%, #04467A 100%)',
        }}
        aria-label="Header Portofolio"
      >
        <div className="container-custom">
          <div className="max-w-2xl">
            <MotionWrapper delay={0.05}>
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Portofolio
              </h1>
            </MotionWrapper>

            <MotionWrapper delay={0.1}>
              <p className="text-lg sm:text-xl text-white/85 leading-relaxed font-normal">
                Dokumentasi pekerjaan instalasi, perbaikan, dan penataan ruang medis yang kami kerjakan.
              </p>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* 2. Main Content with Interactive Category Filter (#F5F8FD) */}
      <section className="w-full py-16 sm:py-20 bg-[#F5F8FD]" aria-label="Daftar Portofolio">
        <div className="container-custom">
          <PortfolioClient />
        </div>
      </section>
    </div>
  );
}
