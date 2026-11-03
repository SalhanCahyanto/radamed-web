import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { COMPANY_PROFILE, SERVICES } from '@/data/mockData';
import { MotionWrapper } from '@/components/common/MotionWrapper';

export const AboutSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-20 lg:py-24" aria-label="Tentang RADAMED">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Kolom Kiri: Profil Singkat */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <MotionWrapper delay={0.05}>
              <h2
                className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-6 leading-tight"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Dibangun dari pengalaman lapangan.
              </h2>
            </MotionWrapper>

            <MotionWrapper delay={0.1}>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
                RADAMED dibangun oleh tiga engineer dengan pengalaman lebih dari 10 tahun di bidang radiologi dan berbagai jenis peralatan kesehatan. Pelayanan dan kepuasan pelanggan adalah prioritas kami.
              </p>
            </MotionWrapper>

            <MotionWrapper delay={0.15}>
              <Link
                href="/tentang-kami"
                className="inline-flex items-center gap-2 text-[#04467A] font-semibold text-[15px] hover:text-[#0B2343] transition-colors focus-visible:outline-none focus-visible:underline"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                <span>Selengkapnya</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </MotionWrapper>
          </div>

          {/* Kolom Kanan: Foto Teknisi Bekerja */}
          <div className="lg:col-span-6">
            <MotionWrapper delay={0.2}>
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-[#EAF1FC] bg-slate-100">
                <Image
                  src={SERVICES[2].image}
                  alt="Biomedical engineer RADAMED saat melakukan perbaikan dan pengujian teknis"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </MotionWrapper>
          </div>
        </div>

        {/* 5 Nilai Perusahaan Horizontal Bar */}
        <MotionWrapper delay={0.25}>
          <div className="mt-16 pt-8 border-t border-slate-200">
            <div className="flex flex-wrap items-center justify-between gap-y-4 text-xs sm:text-sm font-medium text-slate-600">
              {COMPANY_PROFILE.values.map((val, idx) => (
                <React.Fragment key={val.number}>
                  <span className="py-1">{val.title}</span>
                  {idx < COMPANY_PROFILE.values.length - 1 && (
                    <span className="hidden md:inline text-slate-300" aria-hidden="true">
                      |
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
};

