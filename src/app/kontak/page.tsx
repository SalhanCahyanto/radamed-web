import React from 'react';
import type { Metadata } from 'next';
import { Phone, Mail, MapPin, ArrowRight, PhoneCall } from 'lucide-react';
import { COMPANY_PROFILE } from '@/data/mockData';
import { MotionWrapper } from '@/components/common/MotionWrapper';

export const metadata: Metadata = {
  title: `Hubungi Kami | ${COMPANY_PROFILE.shortName}`,
  description: `Hubungi ${COMPANY_PROFILE.legalName} (${COMPANY_PROFILE.shortName}) di Mijen, Kota Semarang. Sampaikan kebutuhan instalasi, perawatan, atau perbaikan alat kesehatan Anda melalui telepon ${COMPANY_PROFILE.contact.phoneDisplay} atau email ${COMPANY_PROFILE.contact.email}.`,
  openGraph: {
    title: `Hubungi Kami | ${COMPANY_PROFILE.shortName}`,
    description:
      'Sampaikan kebutuhan instalasi, perawatan, atau perbaikan alat kesehatan Anda.',
    url: '/kontak',
    siteName: COMPANY_PROFILE.legalName,
    locale: 'id_ID',
    type: 'website',
  },
};

export default function KontakPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Page Header (#0B2343 Gradient) */}
      <section
        className="w-full py-16 sm:py-20 text-white"
        style={{
          background: 'linear-gradient(135deg, #0B2343 0%, #04467A 100%)',
        }}
        aria-label="Header Kontak"
      >
        <div className="container-custom text-center md:text-left">
          <div className="max-w-2xl">
            <MotionWrapper delay={0.05}>
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Hubungi Kami
              </h1>
            </MotionWrapper>

            <MotionWrapper delay={0.1}>
              <p className="text-lg sm:text-xl text-white/85 leading-relaxed font-normal">
                Sampaikan kebutuhan instalasi, perawatan, atau perbaikan alat kesehatan Anda.
              </p>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* 2. Section Kontak Langsung (#FFFFFF) */}
      <section className="w-full py-16 sm:py-20 bg-white border-b border-[#DCE5F0]" aria-label="Kontak Langsung">
        <div className="container-custom max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#DCE5F0]">
            {/* Kolom Kiri: Telepon */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left pb-12 md:pb-0 md:pr-12">
              <MotionWrapper delay={0.05} className="flex flex-col items-center md:items-start">
                <div className="w-12 h-12 rounded-lg bg-[#EAF1FC] flex items-center justify-center text-[#04467A] mb-4">
                  <Phone className="w-6 h-6" aria-hidden="true" />
                </div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  TELEPON
                </span>
                <span
                  className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-6 select-all"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {COMPANY_PROFILE.contact.phoneDisplay}
                </span>
                <a
                  href={`tel:${COMPANY_PROFILE.contact.phoneRaw}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#04467A] hover:bg-[#0B2343] text-white rounded-lg font-semibold text-sm transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#04467A]"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  <PhoneCall className="w-4 h-4" aria-hidden="true" />
                  <span>Telepon Sekarang</span>
                </a>
              </MotionWrapper>
            </div>

            {/* Kolom Kanan: Email */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left pt-12 md:pt-0 md:pl-12">
              <MotionWrapper delay={0.1} className="flex flex-col items-center md:items-start">
                <div className="w-12 h-12 rounded-lg bg-[#EAF1FC] flex items-center justify-center text-[#04467A] mb-4">
                  <Mail className="w-6 h-6" aria-hidden="true" />
                </div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  EMAIL
                </span>
                <span
                  className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-6 select-all break-all"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {COMPANY_PROFILE.contact.email}
                </span>
                <a
                  href={`mailto:${COMPANY_PROFILE.contact.email}`}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-[#04467A] text-[#04467A] hover:bg-[#EAF1FC] rounded-lg font-semibold text-sm transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#04467A]"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  <span>Kirim Email</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </MotionWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Section Alamat Kantor & Peta (#F5F8FD) */}
      <section
        className="w-full py-16 sm:py-20 bg-[#F5F8FD]"
        aria-label="Alamat Kantor dan Peta"
      >
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Detail Alamat */}
            <div className="flex flex-col">
              <MotionWrapper delay={0.05}>
                <h2
                  className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Alamat Kantor
                </h2>
              </MotionWrapper>

              <MotionWrapper delay={0.1}>
                <address className="not-italic text-slate-600 text-base sm:text-lg leading-relaxed mt-4">
                  {COMPANY_PROFILE.contact.address}
                </address>
              </MotionWrapper>

              <MotionWrapper delay={0.15}>
                <div className="mt-6">
                  <a
                    href={COMPANY_PROFILE.contact.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#04467A] font-semibold text-base hover:text-[#0B2343] transition-colors focus-visible:outline-none focus-visible:underline"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    <span>Buka di Peta</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              </MotionWrapper>
            </div>

            {/* Kartu Visual Peta Arsitektural */}
            <MotionWrapper delay={0.15}>
              <div className="w-full rounded-xl overflow-hidden shadow-sm border border-[#DCE5F0] bg-white relative">
                <div className="w-full h-[320px] sm:h-[340px] relative bg-[#e5e9ec] overflow-hidden">
                  <svg
                    className="w-full h-full"
                    fill="none"
                    preserveAspectRatio="xMidYMid slice"
                    viewBox="0 0 600 340"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <rect fill="#e9ecef" height="340" width="600" />
                    <path
                      d="M-20,120 C80,100 160,180 280,150 C400,120 480,80 620,100"
                      fill="none"
                      stroke="#dee2e6"
                      strokeWidth="16"
                    />
                    <path
                      d="M120,-20 C140,80 180,160 220,360"
                      fill="none"
                      stroke="#dee2e6"
                      strokeWidth="12"
                    />
                    <path
                      d="M-20,240 C120,220 220,260 380,210 C500,170 560,220 620,210"
                      fill="none"
                      stroke="#f8f9fa"
                      strokeWidth="22"
                    />
                    <path
                      d="M420,-20 C400,100 370,220 390,360"
                      fill="none"
                      stroke="#dee2e6"
                      strokeWidth="14"
                    />
                    <path d="M260,80 L360,280" fill="none" stroke="#ffffff" strokeWidth="8" />
                    <path
                      d="M60,180 L520,160"
                      fill="none"
                      opacity="0.5"
                      stroke="#38bdf8"
                      strokeDasharray="4 4"
                      strokeWidth="3"
                    />
                    <rect fill="#d1e7dd" height="70" opacity="0.6" rx="6" width="120" x="40" y="30" />
                    <text
                      fill="#495057"
                      fontFamily="Inter, sans-serif"
                      fontSize="11"
                      opacity="0.7"
                      textAnchor="middle"
                      x="100"
                      y="70"
                    >
                      Mijen
                    </text>
                    <rect fill="#cfe2ff" height="60" opacity="0.5" rx="6" width="110" x="440" y="220" />
                    <text
                      fill="#495057"
                      fontFamily="Inter, sans-serif"
                      fontSize="11"
                      opacity="0.7"
                      textAnchor="middle"
                      x="495"
                      y="255"
                    >
                      Tambangan
                    </text>
                    <g transform="translate(300, 160)">
                      <ellipse cx="0" cy="18" fill="rgba(0,0,0,0.15)" rx="10" ry="4" />
                      <path
                        d="M0,18 C-10,4 -14,-4 -14,-14 C-14,-22 -7,-28 0,-28 C7,-28 14,-22 14,-14 C14,-4 10,4 0,18 Z"
                        fill="#04467A"
                      />
                      <circle cx="0" cy="-14" fill="#ffffff" r="5" />
                    </g>
                  </svg>

                  {/* Location Badge */}
                  <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-[#DCE5F0] text-xs text-slate-700 font-medium shadow-sm flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#04467A]" aria-hidden="true" />
                    <span>Megah Residence Kav 5A, Mijen</span>
                  </div>
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>
    </div>
  );
}
