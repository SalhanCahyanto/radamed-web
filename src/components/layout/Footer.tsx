import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Logo } from '@/components/common/Logo';
import { NAV_LINKS, SERVICES, COMPANY_PROFILE } from '@/data/mockData';
import type { SanitySiteSettings } from '@/sanity/lib/queries';

interface FooterProps {
  settings?: SanitySiteSettings | null;
}

export const Footer: React.FC<FooterProps> = ({ settings }) => {
  const tagline = settings?.tagline || COMPANY_PROFILE.tagline;
  const phone = settings?.phone || COMPANY_PROFILE.contact.phoneDisplay;
  const phoneRaw = settings?.phone
    ? settings.phone.replace(/[^0-9+]/g, '')
    : COMPANY_PROFILE.contact.phoneRaw;
  const email = settings?.email || COMPANY_PROFILE.contact.email;
  const address = settings?.address || COMPANY_PROFILE.contact.address;
  const companyName = settings?.companyName || COMPANY_PROFILE.legalName;

  return (
    <footer
      className="w-full text-white pt-16 pb-12 border-t border-[#04467A]/30"
      style={{ backgroundColor: '#0B2343' }}
      aria-label="Footer Perusahaan"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/15">
          {/* Kolom 1: Logo + Tagline + Deskripsi Singkat */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link
              href="/"
              className="bg-white p-2.5 rounded-lg shadow-sm inline-flex mb-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="PT RADAMED - Halaman Beranda"
            >
              <Logo variant="default" />
            </Link>
            <div
              className="text-base sm:text-lg font-semibold text-white tracking-tight mb-2.5"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {tagline}
            </div>
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              {COMPANY_PROFILE.footerDescription}
            </p>
          </div>

          {/* Kolom 2: Navigasi Cepat */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h3
              className="text-xs uppercase tracking-wider font-semibold text-white/90"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Navigasi Cepat
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm text-slate-300">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors focus-visible:outline-none focus-visible:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3: Layanan */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h3
              className="text-xs uppercase tracking-wider font-semibold text-white/90"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Layanan
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm text-slate-300">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    href="/layanan"
                    className="hover:text-white transition-colors focus-visible:outline-none focus-visible:underline"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 4: Kontak Resmi */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h3
              className="text-xs uppercase tracking-wider font-semibold text-white/90"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Kontak Resmi
            </h3>
            <div className="flex flex-col gap-3.5 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#8bbffd] mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <span className="block text-white font-medium text-xs">Telepon:</span>
                  <a
                    href={`tel:${phoneRaw}`}
                    className="hover:text-white transition-colors focus-visible:outline-none focus-visible:underline"
                  >
                    {phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#8bbffd] mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <span className="block text-white font-medium text-xs">Email:</span>
                  <a
                    href={`mailto:${email}`}
                    className="hover:text-white transition-colors break-all focus-visible:outline-none focus-visible:underline"
                  >
                    {email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#8bbffd] mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <span className="block text-white font-medium text-xs">Alamat Kantor:</span>
                  <address className="not-italic text-slate-300 leading-relaxed text-xs">
                    {address}
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Baris Bawah: Hak Cipta */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} {companyName}. Hak cipta dilindungi undang-undang.</p>
          <p className="text-slate-400">Semarang, Jawa Tengah, Indonesia</p>
        </div>
      </div>
    </footer>
  );
};
