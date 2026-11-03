import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '@/data/mockData';

export const metadata: Metadata = {
  title: 'Layanan Kami',
  description:
    'Layanan instalasi, pemeliharaan preventif, perbaikan elektromedis, dan renovasi fasilitas medis oleh PT RADAMED.',
};

export default function LayananPage() {
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
              Layanan Kami
            </h1>
            <p className="text-lg sm:text-xl text-white/85 leading-relaxed font-normal">
              Dari konsultasi hingga perawatan berkala, kami mendampingi kebutuhan alat dan ruang medis Anda.
            </p>
          </div>
        </div>
      </section>

      {/* 4 Alternating Services */}
      <div className="flex flex-col w-full">
        {SERVICES.map((service, index) => {
          const isEven = index % 2 === 1;
          return (
            <section
              key={service.id}
              className={`w-full py-20 ${
                isEven ? 'bg-[#F5F8FD] border-y border-[#DCE5F0]' : 'bg-white'
              }`}
            >
              <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  {/* Image Column */}
                  <div className={`w-full ${isEven ? 'order-1 lg:order-2' : ''}`}>
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-[#DCE5F0] shadow-sm bg-slate-100">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>

                  {/* Content Column */}
                  <div
                    className={`flex flex-col items-start ${
                      isEven ? 'order-2 lg:order-1' : ''
                    }`}
                  >
                    <span
                      className="text-4xl sm:text-5xl font-bold tracking-tight mb-3 text-[#04467A]"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {service.number}
                    </span>
                    <h2
                      className="text-2xl sm:text-3xl font-bold text-[#0B2343] mb-4 tracking-tight"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {service.title}
                    </h2>
                    <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
                      {service.fullDescription}
                    </p>
                    <Link
                      href="/kontak"
                      className="inline-flex items-center gap-1.5 font-semibold text-[#04467A] hover:text-[#0B2343] transition-colors"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      <span>Hubungi kami tentang layanan ini</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
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

