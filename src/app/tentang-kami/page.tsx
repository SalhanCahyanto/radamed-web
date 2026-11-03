import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { COMPANY_PROFILE, SERVICES } from '@/data/mockData';

export const metadata: Metadata = {
  title: 'Tentang Kami',
  description: `Profil ${COMPANY_PROFILE.legalName} (${COMPANY_PROFILE.shortName}) - ${COMPANY_PROFILE.tagline}`,
};

export default function TentangKamiPage() {
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
          <div className="max-w-3xl">
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Tentang Kami
            </h1>
            <p className="text-lg sm:text-xl text-white/85 leading-relaxed font-normal">
              {COMPANY_PROFILE.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Profil Perusahaan */}
      <section className="w-full bg-white py-20 lg:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col items-start">
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B2343] tracking-tight mb-6"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Dibangun dari pengalaman lapangan.
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
                {COMPANY_PROFILE.aboutStory}
              </p>

              {/* 3 Metrik Utama */}
              <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-[#DCE5F0] text-slate-800 font-medium text-sm sm:text-base">
                {COMPANY_PROFILE.metrics.map((metric, idx) => (
                  <React.Fragment key={metric.label}>
                    <div className="flex items-center">
                      <span className="font-semibold text-[#0B2343]">{metric.label}</span>
                    </div>
                    {idx < COMPANY_PROFILE.metrics.length - 1 && (
                      <div className="h-4 w-px bg-[#DCE5F0] hidden sm:block" aria-hidden="true" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="p-8 rounded-xl bg-[#F5F8FD] border border-[#DCE5F0]">
                <h3
                  className="text-lg font-bold text-[#0B2343] mb-3"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {COMPANY_PROFILE.shortName}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {COMPANY_PROFILE.positioning}
                </p>
                <div className="text-xs text-slate-500 leading-relaxed border-t border-[#DCE5F0] pt-4">
                  {COMPANY_PROFILE.contact.address}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visi & Misi */}
      <section
        className="w-full py-20 border-y border-[#DCE5F0]"
        style={{
          background: 'linear-gradient(180deg, #EAF1FC 0%, #FFFFFF 100%)',
        }}
      >
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 relative">
            <div className="flex flex-col gap-3">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#04467A]">
                Visi
              </span>
              <p
                className="text-xl sm:text-2xl font-semibold text-[#0B2343] leading-snug"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {COMPANY_PROFILE.vision}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#04467A]">
                Misi
              </span>
              <p
                className="text-xl sm:text-2xl font-semibold text-[#0B2343] leading-snug"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {COMPANY_PROFILE.mission}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nilai Perusahaan */}
      <section className="w-full bg-white py-20 lg:py-24">
        <div className="container-custom">
          <div className="mb-12">
            <h2
              className="text-3xl font-bold text-[#0B2343] tracking-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Nilai Perusahaan
            </h2>
          </div>

          <div className="flex flex-col border-t border-[#DCE5F0]">
            {COMPANY_PROFILE.values.map((val) => (
              <div
                key={val.number}
                className="py-7 border-b border-[#DCE5F0] grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline"
              >
                <div className="md:col-span-1 text-[#04467A] font-bold text-lg">
                  {val.number}
                </div>
                <div
                  className="md:col-span-4 text-lg font-semibold text-[#0B2343]"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {val.title}
                </div>
                <div className="md:col-span-7 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {val.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="w-full bg-[#EAF1FC] py-12 border-t border-[#DCE5F0]">
        <div className="container-custom flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="text-slate-700 text-sm sm:text-base">
            <span className="font-semibold text-[#0B2343]">Layanan kami:</span>{' '}
            {SERVICES.map((s) => s.title).join(', ')}.
          </div>
          <Link
            href="/layanan"
            className="inline-flex items-center gap-1.5 text-[#04467A] font-semibold hover:underline shrink-0 text-sm sm:text-base"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            <span>Lihat semua layanan</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}

