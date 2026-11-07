import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { COMPANY_PROFILE, SERVICES } from '@/data/mockData';
import { MotionWrapper } from '@/components/common/MotionWrapper';
import { PortableText } from '@/components/PortableText';
import { sanityFetch } from '@/sanity/lib/fetch';
import {
  COMPANY_PROFILE_QUERY,
  SITE_SETTINGS_QUERY,
  type SanityCompanyProfile,
  type SanitySiteSettings,
} from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/image';

export const metadata: Metadata = {
  title: `Tentang Kami | ${COMPANY_PROFILE.shortName}`,
  description: `Profil ${COMPANY_PROFILE.legalName} (${COMPANY_PROFILE.shortName}) - ${COMPANY_PROFILE.tagline}. Pengalaman lebih dari 10 tahun di bidang radiologi dan peralatan elektromedis.`,
  openGraph: {
    title: `Tentang Kami | ${COMPANY_PROFILE.shortName}`,
    description: COMPANY_PROFILE.aboutStory,
    url: '/tentang-kami',
    siteName: COMPANY_PROFILE.legalName,
    locale: 'id_ID',
    type: 'website',
  },
};

export default async function TentangKamiPage() {
  const [profile, settings] = await Promise.all([
    sanityFetch<SanityCompanyProfile>({
      query: COMPANY_PROFILE_QUERY,
      tags: ['companyProfile'],
    }),
    sanityFetch<SanitySiteSettings>({
      query: SITE_SETTINGS_QUERY,
      tags: ['siteSettings'],
    }),
  ]);

  const tagline = settings?.tagline || COMPANY_PROFILE.tagline;
  const headline = profile?.title || 'Dibangun dari pengalaman lapangan.';
  const visionText = profile?.vision || COMPANY_PROFILE.vision;
  const missionText = profile?.mission
    ? Array.isArray(profile.mission)
      ? profile.mission.join(' ')
      : profile.mission
    : COMPANY_PROFILE.mission;

  const valuesList =
    profile?.values && profile.values.length > 0
      ? profile.values.map((v, i) => ({
          number: String(i + 1).padStart(2, '0'),
          title: v.title,
          description: v.description,
        }))
      : COMPANY_PROFILE.values;

  const imageSrc = profile?.heroImage?.asset
    ? urlForImage(profile.heroImage).url()
    : SERVICES[2].image;

  return (
    <div className="flex flex-col w-full">
      {/* 1. Page Header Band */}
      <section
        className="w-full bg-gradient-to-br from-[#0B2343] to-[#04467A] py-16 sm:py-20 text-white"
        aria-label="Header Tentang Kami"
      >
        <div className="container-custom">
          <div className="max-w-3xl">
            <MotionWrapper delay={0.05}>
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Tentang Kami
              </h1>
            </MotionWrapper>

            <MotionWrapper delay={0.1}>
              <p className="text-lg sm:text-xl text-white/85 leading-relaxed font-normal">
                {tagline}
              </p>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* 2. Section Profil Perusahaan */}
      <section className="w-full bg-white py-20 lg:py-24" aria-label="Profil Perusahaan">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Kolom Kiri: Cerita dan 3 Metrik */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <MotionWrapper delay={0.05}>
                <h2
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B2343] tracking-tight mb-6 leading-tight"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {headline}
                </h2>
              </MotionWrapper>

              <MotionWrapper delay={0.1}>
                {profile?.description && profile.description.length > 0 ? (
                  <div className="mb-8">
                    <PortableText value={profile.description} />
                  </div>
                ) : (
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
                    {profile?.intro || COMPANY_PROFILE.aboutStory}
                  </p>
                )}
              </MotionWrapper>

              <MotionWrapper delay={0.15}>
                <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-6 border-t border-[#DCE5F0] text-slate-800 font-medium text-sm sm:text-base">
                  {COMPANY_PROFILE.metrics.map((metric, idx) => (
                    <React.Fragment key={metric.label}>
                      <div className="flex items-center">
                        <span className="font-semibold text-[#0B2343]">{metric.label}</span>
                      </div>
                      {idx < COMPANY_PROFILE.metrics.length - 1 && (
                        <div
                          className="h-4 w-px bg-[#DCE5F0] hidden sm:block"
                          aria-hidden="true"
                        />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </MotionWrapper>
            </div>

            {/* Kolom Kanan: Foto dengan Offset Card Dekoratif */}
            <div className="lg:col-span-5 relative pr-4 pb-4 sm:pr-6 sm:pb-6">
              <MotionWrapper delay={0.2}>
                <div className="relative">
                  {/* Offset Decorative Card */}
                  <div
                    className="absolute inset-0 bg-[#EAF1FC] rounded-xl translate-x-4 sm:translate-x-6 translate-y-4 sm:translate-y-6"
                    aria-hidden="true"
                  />
                  {/* Photo Frame */}
                  <div className="relative rounded-xl overflow-hidden shadow-sm aspect-[4/5] bg-slate-100 border border-[#DCE5F0]">
                    <Image
                      src={imageSrc}
                      alt="Engineer RADAMED bekerja pada peralatan medis"
                      fill
                      priority
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                </div>
              </MotionWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Section Visi & Misi */}
      <section
        className="w-full py-20 sm:py-24 border-y border-[#DCE5F0]"
        style={{
          background: 'linear-gradient(180deg, #EAF1FC 0%, #D9E6F7 100%)',
        }}
        aria-label="Visi dan Misi"
      >
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 relative">
            {/* Kolom Visi */}
            <MotionWrapper delay={0.05} className="flex flex-col gap-3 md:pr-10">
              <span
                className="text-xs uppercase tracking-wider font-semibold text-[#1E5C94]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Visi
              </span>
              <p
                className="text-xl sm:text-2xl font-semibold text-[#0B2343] leading-snug"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {visionText}
              </p>
            </MotionWrapper>

            {/* Pemisah Vertikal Desktop */}
            <div
              className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#04467A]/20 -translate-x-1/2"
              aria-hidden="true"
            />

            {/* Kolom Misi */}
            <MotionWrapper delay={0.1} className="flex flex-col gap-3 md:pl-10">
              <span
                className="text-xs uppercase tracking-wider font-semibold text-[#1E5C94]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Misi
              </span>
              <p
                className="text-xl sm:text-2xl font-semibold text-[#0B2343] leading-snug"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {missionText}
              </p>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* 4. Section Nilai Perusahaan */}
      <section className="w-full bg-white py-20 lg:py-24" aria-label="Nilai Perusahaan">
        <div className="container-custom">
          <MotionWrapper delay={0.05}>
            <div className="mb-12">
              <h2
                className="text-3xl font-bold text-[#0B2343] tracking-tight"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Nilai Perusahaan
              </h2>
            </div>
          </MotionWrapper>

          <div className="flex flex-col border-t border-[#DCE5F0]">
            {valuesList.map((val, index) => (
              <MotionWrapper key={val.number} delay={0.1 + index * 0.05}>
                <div className="py-7 border-b border-[#DCE5F0] grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                  <div className="md:col-span-1 text-[#04467A] font-bold text-xl sm:text-2xl">
                    {val.number}
                  </div>
                  <div
                    className="md:col-span-4 text-lg sm:text-xl font-bold text-[#0B2343]"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {val.title}
                  </div>
                  <div className="md:col-span-7 text-sm sm:text-base text-slate-600 leading-relaxed">
                    {val.description}
                  </div>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Bottom Strip Layanan */}
      <section
        className="w-full bg-[#EAF1FC] py-12 sm:py-14 border-t border-[#DCE5F0]"
        aria-label="Ringkasan Layanan Kami"
      >
        <div className="container-custom">
          <MotionWrapper delay={0.05}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-slate-700 text-sm sm:text-base leading-relaxed">
                <span className="font-semibold text-[#0B2343]">Layanan kami:</span>{' '}
                {SERVICES.map((s) => s.title).join(', ')}.
              </div>
              <Link
                href="/layanan"
                className="inline-flex items-center gap-1.5 text-[#04467A] font-semibold hover:text-[#0B2343] transition-colors shrink-0 text-sm sm:text-base focus-visible:outline-none focus-visible:underline"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                <span>Lihat semua layanan</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </MotionWrapper>
        </div>
      </section>
    </div>
  );
}
