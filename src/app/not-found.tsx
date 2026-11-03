import React from 'react';
import Link from 'next/link';
import { Home, HelpCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center py-20 px-4 bg-white">
      <div className="container-custom max-w-2xl text-center flex flex-col items-center">
        {/* Error Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#EAF1FC] text-[#04467A] text-xs font-semibold uppercase tracking-wider mb-6">
          <HelpCircle className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Status 404 • Not Found</span>
        </div>

        {/* Large Code Display */}
        <h1
          className="text-6xl sm:text-7xl font-bold text-[#0B2343] tracking-tight mb-4"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          404
        </h1>

        {/* Headline */}
        <h2
          className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Halaman Tidak Ditemukan
        </h2>

        {/* Explanation */}
        <p className="text-base sm:text-lg text-slate-600 max-w-lg mb-10 leading-relaxed">
          Tautan yang Anda tuju tidak tersedia, telah dipindahkan, atau alamat URL salah dimasukkan.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#04467A] hover:bg-[#0B2343] active:bg-[#0B2343] text-white font-semibold text-[15px] px-6 py-3 rounded-lg transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#04467A]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            <Home className="w-4 h-4" aria-hidden="true" />
            <span>Kembali ke Beranda</span>
          </Link>

          <Link
            href="/kontak"
            className="inline-flex items-center gap-2 bg-transparent border border-[#04467A] text-[#04467A] hover:bg-[#EAF1FC] active:bg-[#EAF1FC] font-semibold text-[15px] px-6 py-3 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#04467A]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            <span>Hubungi Kami</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

