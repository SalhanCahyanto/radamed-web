'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';
import { Logo } from '@/components/common/Logo';
import { NAV_LINKS, COMPANY_PROFILE } from '@/data/mockData';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-[#DCE5F0] transition-colors">
      <div className="container-custom h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#04467A] rounded-lg py-1"
          aria-label="PT RADAMED - Halaman Beranda"
        >
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden lg:flex items-center gap-8"
          aria-label="Navigasi Utama"
        >
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? 'page' : undefined}
                className={`text-[15px] py-1 transition-colors relative ${
                  active
                    ? 'text-[#04467A] font-semibold border-b-2 border-[#04467A]'
                    : 'text-slate-600 font-medium hover:text-[#04467A]'
                }`}
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA Action */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/kontak"
            className="inline-flex items-center justify-center bg-[#04467A] hover:bg-[#0B2343] active:bg-[#0B2343] text-white font-semibold text-[15px] px-5 py-2.5 rounded-lg transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#04467A]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Hubungi Kami
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={COMPANY_PROFILE.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Hubungi via WhatsApp"
            className="w-10 h-10 flex items-center justify-center rounded-lg text-[#04467A] bg-[#EAF1FC] hover:bg-[#dbe7f9] transition-colors focus-visible:ring-2 focus-visible:ring-[#04467A]"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-menu"
            aria-label={mobileMenuOpen ? 'Tutup menu' : 'Buka menu navigasi'}
            className="w-11 h-11 flex items-center justify-center rounded-lg text-slate-700 hover:text-[#04467A] hover:bg-[#F5F8FD] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#04467A]"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-20 bg-slate-900/40 backdrop-blur-xs z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer Panel */}
      <div
        id="mobile-navigation-menu"
        className={`fixed top-20 right-0 bottom-0 w-full max-w-xs bg-white border-l border-[#DCE5F0] z-50 flex flex-col justify-between p-6 shadow-xl transition-transform duration-200 ease-in-out lg:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'
        }`}
        aria-label="Navigasi Menu Mobile"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex flex-col gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
            Menu Navigasi
          </span>
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                aria-current={active ? 'page' : undefined}
                className={`py-3 px-3.5 rounded-lg text-base font-medium transition-colors ${
                  active
                    ? 'bg-[#EAF1FC] text-[#04467A] font-semibold'
                    : 'text-slate-700 hover:bg-[#F5F8FD] hover:text-[#04467A]'
                }`}
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="pt-6 border-t border-[#DCE5F0] flex flex-col gap-3">
          <Link
            href="/kontak"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full inline-flex items-center justify-center bg-[#04467A] hover:bg-[#0B2343] text-white font-semibold text-[15px] py-3 rounded-lg transition-colors text-center shadow-sm"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Hubungi Kami
          </Link>
          <div className="text-xs text-slate-500 text-center leading-relaxed mt-2">
            Telepon: {COMPANY_PROFILE.contact.phoneDisplay}
          </div>
        </div>
      </div>
    </header>
  );
};

