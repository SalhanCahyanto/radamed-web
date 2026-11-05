import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { COMPANY_PROFILE, SERVICES } from '@/data/mockData';
import { MotionWrapper } from '@/components/common/MotionWrapper';
import { PortableText } from '@/components/PortableText';
import { sanityFetch } from '@/sanity/lib/fetch';
import { SERVICES_QUERY, type SanityService } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/image';

export const metadata: Metadata = {
  title: `Layanan Kami | ${COMPANY_PROFILE.shortName}`,
  description:
    'Layanan instalasi, pemeliharaan preventif, perbaikan elektromedis, dan renovasi fasilitas medis oleh PT RADAMED di Semarang.',
  openGraph: {
    title: `Layanan Kami | ${COMPANY_PROFILE.shortName}`,
    description:
      'Dari konsultasi hingga perawatan berkala, kami mendampingi kebutuhan alat dan ruang medis Anda.',
    url: '/layanan',
    siteName: COMPANY_PROFILE.legalName,
    locale: 'id_ID',
    type: 'website',
  },
};

export default async function LayananPage() {
  const sanityServices = await sanityFetch<SanityService[]>({
    query: SERVICES_QUERY,
    tags: ['service'],
  });

  const servicesList =
    sanityServices && sanityServices.length > 0
      ? sanityServices.map((s, idx) => ({
          id: s._id,
          number: String(idx + 1).padStart(2, '0'),
          title: s.title,
          summary: s.shortDescription || '',
          description: s.description,
          image: s.image
            ? urlForImage(s.image).url()
            : SERVICES[idx % SERVICES.length].image,
        }))
      : SERVICES.map((s) => ({
          id: s.id,
          number: s.number,
          title: s.title,
          summary: s.summary,
          description: null,
          image: s.image,
        }));

  return (
    <div className="flex flex-col w-full">
      {/* 1. Page Header Band */}
      <section
        className="w-full bg-gradient-to-br from-[#0B2343] to-[#04467A] py-16 sm:py-20 text-white"
        aria-label="Header Layanan Kami"
      >
        <div className="container-custom">
          <div className="max-w-2xl">
            <MotionWrapper delay={0.05}>
              <h1
                className="text-4xl sm:text-5xl font-bold text-white tracking-tight"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Layanan Kami
              </h1>
            </MotionWrapper>

            <MotionWrapper delay={0.1}>
              <p className="text-white/85 text-lg sm:text-xl mt-3 max-w-2xl leading-relaxed font-normal">
                Dari konsultasi hingga perawatan berkala, kami mendampingi kebutuhan alat dan ruang medis Anda.
              </p>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* 2. Empat Section Layanan Zig-Zag */}
      <div className="flex flex-col w-full">
        {servicesList.map((service, index) => {
          // Genap: index 0 (01) dan 2 (03) -> Background Putih, Foto Kiri, Teks Kanan
          // Ganjil: index 1 (02) dan 3 (04) -> Background #F5F8FD, Teks Kiri, Foto Kanan
          const isOddIndex = index % 2 === 1;

          return (
            <section
              key={service.id}
              className={`w-full py-20 ${
                isOddIndex ? 'bg-[#F5F8FD] border-y border-[#DCE5F0]' : 'bg-white'
              }`}
              aria-label={`Layanan ${service.number} ${service.title}`}
            >
              <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  {/* Kolom Foto */}
                  <div
                    className={`w-full ${
                      isOddIndex ? 'order-1 lg:order-2' : 'order-1 lg:order-1'
                    }`}
                  >
                    <MotionWrapper delay={0.1}>
                      <div className="aspect-[4/3] w-full overflow-hidden rounded-xl shadow-md border border-[#DCE5F0] bg-slate-100 relative">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          priority={index === 0}
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      </div>
                    </MotionWrapper>
                  </div>

                  {/* Kolom Konten Teks */}
                  <div
                    className={`flex flex-col items-start ${
                      isOddIndex ? 'order-2 lg:order-1' : 'order-2 lg:order-2'
                    }`}
                  >
                    <MotionWrapper delay={0.15}>
                      <span
                        className="text-4xl sm:text-5xl font-bold tracking-tight mb-3 text-[#04467A] block"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        {service.number}
                      </span>
                    </MotionWrapper>

                    <MotionWrapper delay={0.2}>
                      <h2
                        className="text-2xl sm:text-3xl font-bold text-[#0B2343] mb-4 tracking-tight"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        {service.title}
                      </h2>
                    </MotionWrapper>

                    <MotionWrapper delay={0.25}>
                      {service.description && service.description.length > 0 ? (
                        <div className="mb-6">
                          <PortableText value={service.description} />
                        </div>
                      ) : (
                        <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
                          {service.summary}
                        </p>
                      )}
                    </MotionWrapper>

                    <MotionWrapper delay={0.3}>
                      <Link
                        href="/kontak"
                        className="inline-flex items-center gap-1.5 font-semibold text-[#04467A] hover:text-[#0B2343] transition-colors focus-visible:outline-none focus-visible:underline"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        <span>Hubungi kami tentang layanan ini</span>
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </Link>
                    </MotionWrapper>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
