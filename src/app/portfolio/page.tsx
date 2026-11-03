import React from 'react';
import type { Metadata } from 'next';
import { PortfolioClient } from './PortfolioClient';

export const metadata: Metadata = {
  title: 'Portofolio',
  description:
    'Dokumentasi pekerjaan instalasi alat radiologi, instalasi ruang medis, dan perbaikan peralatan kesehatan oleh PT RADAMED.',
};

export default function PortfolioPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Page Header */}
      <section
        className="w-full py-16 sm:py-20 text-white"
        style={{
          background: 'linear-gradient(135deg, #0B2343 0%, #04467A 100%)',
        }}
      >
        <div className="container-custom">
          <div className="max-w-2xl">
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Portofolio
            </h1>
            <p className="text-lg sm:text-xl text-white/85 leading-relaxed font-normal">
              Dokumentasi pekerjaan instalasi, perbaikan, dan penataan ruang medis yang kami kerjakan.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content with Interactive Filter */}
      <section className="w-full py-16 sm:py-20 bg-[#F5F8FD]">
        <div className="container-custom">
          <PortfolioClient />
        </div>
      </section>
    </div>
  );
}

