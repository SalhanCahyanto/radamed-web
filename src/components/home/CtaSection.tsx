import React from 'react';
import { COMPANY_PROFILE } from '@/data/mockData';
import { MotionWrapper } from '@/components/common/MotionWrapper';
import type { SanitySiteSettings } from '@/sanity/lib/queries';

interface CtaSectionProps {
  settings?: SanitySiteSettings | null;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ settings }) => {
  const phoneRaw = settings?.phone
    ? settings.phone.replace(/[^0-9+]/g, '')
    : COMPANY_PROFILE.contact.phoneRaw;
  const email = settings?.email || COMPANY_PROFILE.contact.email;

  return (
    <section
      className="w-full py-16 lg:py-20 text-white"
      style={{ backgroundColor: '#0B2343' }}
      aria-label="Ajakan Bertindak"
    >
      <div className="container-custom flex flex-col md:flex-row md:items-center justify-between gap-8">
        {/* Sisi Kiri: Pesan Ajakan */}
        <MotionWrapper delay={0.05} className="max-w-xl">
          <h2
            className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2 leading-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Butuh instalasi, perawatan, atau perbaikan alat kesehatan?
          </h2>
          <p className="text-base text-white/80">Hubungi tim kami.</p>
        </MotionWrapper>

        {/* Sisi Kanan: Tombol Kontak Langsung */}
        <MotionWrapper delay={0.1} className="shrink-0">
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={`tel:${phoneRaw}`}
              className="inline-flex items-center justify-center bg-white text-[#0B2343] font-semibold text-[15px] px-6 py-3.5 rounded-lg shadow-sm hover:bg-slate-100 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Telepon Sekarang
            </a>
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center justify-center bg-transparent border border-white/40 hover:bg-white/10 hover:border-white text-white font-semibold text-[15px] px-6 py-3.5 rounded-lg transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Kirim Email
            </a>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
};
