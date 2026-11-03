import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '@/data/mockData';
import { MotionWrapper } from '@/components/common/MotionWrapper';

export const ServicesSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-20 lg:py-24" aria-label="Layanan Kami">
      <div className="container-custom">
        <MotionWrapper delay={0.05}>
          <div className="mb-12">
            <h2
              className="text-3xl font-bold text-slate-900 tracking-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Layanan Kami
            </h2>
          </div>
        </MotionWrapper>

        {/* 4 Baris Layanan Arsitektural */}
        <div className="border-t border-slate-200">
          {SERVICES.map((service, index) => (
            <MotionWrapper key={service.id} delay={0.1 + index * 0.05}>
              <Link
                href="/layanan"
                className="group py-7 sm:py-8 border-b border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-colors hover:bg-[#F5F8FD] px-4 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#04467A]"
              >
                {/* Nomor & Judul Layanan */}
                <div className="flex items-center gap-6 md:gap-8 md:w-5/12 shrink-0">
                  <span className="w-12 sm:w-16 shrink-0 text-xl sm:text-2xl font-bold text-slate-400 group-hover:text-[#04467A] transition-colors">
                    {service.number}
                  </span>
                  <h3
                    className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#04467A] transition-colors"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {service.title}
                  </h3>
                </div>

                {/* Deskripsi Singkat */}
                <p className="text-sm sm:text-base text-slate-600 md:flex-1 leading-relaxed md:pl-4">
                  {service.summary}
                </p>

                {/* Indikator Panah Interaktif */}
                <div className="hidden md:flex justify-end w-12 shrink-0 text-slate-400 group-hover:text-[#04467A] group-hover:translate-x-1 transition-all">
                  <ArrowRight className="w-6 h-6" aria-hidden="true" />
                </div>
              </Link>
            </MotionWrapper>
          ))}
        </div>

        {/* Link Bawah Seluruh Layanan */}
        <MotionWrapper delay={0.35}>
          <div className="mt-8">
            <Link
              href="/layanan"
              className="inline-flex items-center gap-2 text-[#04467A] font-semibold text-[15px] hover:text-[#0B2343] transition-colors focus-visible:outline-none focus-visible:underline"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              <span>Lihat semua layanan</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
};

