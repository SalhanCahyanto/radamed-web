import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { COMPANY_PROFILE, SERVICES } from '@/data/mockData';
import { MotionWrapper } from '@/components/common/MotionWrapper';

export const HeroSection: React.FC = () => {
  return (
    <section
      className="w-full relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-20 text-white"
      style={{
        background: 'linear-gradient(135deg, #0B2343 0%, #04467A 100%)',
      }}
      aria-label="Hero PT RADAMED"
    >
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Kolom Kiri: Teks & Aksi */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <MotionWrapper delay={0.05}>
              <h1
                className="text-3xl sm:text-4xl lg:text-[42px] lg:leading-[50px] font-bold text-white tracking-tight mb-4"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {COMPANY_PROFILE.positioning}.
              </h1>
            </MotionWrapper>

            <MotionWrapper delay={0.1}>
              <p className="text-base sm:text-lg text-white/85 max-w-xl mb-8 leading-relaxed">
                Layanan instalasi, perawatan, dan perbaikan alat kesehatan dengan spesialisasi radiologi.
              </p>
            </MotionWrapper>

            <MotionWrapper delay={0.15}>
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <Link
                  href="/kontak"
                  className="inline-flex items-center justify-center font-semibold text-[15px] px-6 py-3.5 rounded-lg shadow-sm bg-white text-[#04467A] hover:bg-slate-100 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Hubungi Kami
                </Link>

                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center gap-2 bg-transparent border border-white/40 text-white hover:bg-white/10 hover:border-white font-semibold text-[15px] px-6 py-3.5 rounded-lg transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  <span>Lihat Portofolio</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </MotionWrapper>

            {/* 3 Metrik Utama */}
            <MotionWrapper delay={0.2} className="w-full">
              <div className="w-full flex flex-wrap items-center text-white/90 text-sm sm:text-base border-t border-white/20 pt-6">
                {COMPANY_PROFILE.metrics.map((metric, idx) => (
                  <div
                    key={metric.label}
                    className={`py-1 ${
                      idx === 0
                        ? 'pr-6 sm:pr-8'
                        : idx === COMPANY_PROFILE.metrics.length - 1
                        ? 'pl-6 sm:pl-8'
                        : 'px-6 sm:px-8 border-x border-white/25'
                    }`}
                  >
                    <span className="font-semibold text-white">{metric.label}</span>
                  </div>
                ))}
              </div>
            </MotionWrapper>
          </div>

          {/* Kolom Kanan: Foto Alat Radiologi */}
          <div className="lg:col-span-6 flex flex-col">
            <MotionWrapper delay={0.25}>
              <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl shadow-2xl border border-white/15 bg-slate-900">
                <Image
                  src={SERVICES[0].image}
                  alt="Instalasi dan pengujian peralatan radiologi presisi tinggi"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </MotionWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

