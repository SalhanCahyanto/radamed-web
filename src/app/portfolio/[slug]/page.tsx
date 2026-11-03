import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '@/data/mockData';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return PORTFOLIO_PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PORTFOLIO_PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Proyek Tidak Ditemukan',
    };
  }

  return {
    title: `${project.title} | Portofolio`,
    description: project.summary,
  };
}

export default async function PortfolioDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = PORTFOLIO_PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const otherProjects = PORTFOLIO_PROJECTS.filter((p) => p.id !== project.id).slice(0, 3);

  return (
    <div className="flex flex-col w-full">
      {/* Header Detail */}
      <section
        className="w-full text-white pt-14 pb-20"
        style={{
          background: 'linear-gradient(135deg, #0B2343 0%, #04467A 100%)',
        }}
      >
        <div className="container-custom flex flex-col gap-5">
          {/* Top Bar: Back Link & Breadcrumb */}
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-white/80">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              <span>Kembali ke Portofolio</span>
            </Link>
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <Link href="/portfolio" className="hover:text-white transition-colors">
                Portofolio
              </Link>
              <span>/</span>
              <span className="text-white font-medium">{project.title}</span>
            </div>
          </div>

          {/* Project Title & Summary */}
          <div className="mt-2 flex flex-col gap-2 max-w-4xl">
            <span className="inline-block text-xs uppercase tracking-wider text-[#8bbffd] font-semibold">
              {project.category}
            </span>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {project.title}
            </h1>
            <p className="text-lg text-white/85 leading-relaxed mt-1">
              {project.summary}
            </p>
            <p className="text-xs sm:text-sm text-white/70 mt-2">
              Nama fasilitas: {project.facility}
            </p>
          </div>
        </div>
      </section>

      {/* Main Hero Project Image */}
      <section className="w-full bg-white">
        <div className="container-custom -mt-10 sm:-mt-12">
          <div className="relative w-full aspect-[16/9] max-h-[540px] rounded-xl overflow-hidden shadow-md border border-[#DCE5F0] bg-slate-100">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>
        </div>
      </section>

      {/* Scope of Work & Category Info */}
      <section className="w-full bg-white py-14">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 md:divide-x md:divide-[#DCE5F0]">
            <div>
              <h2
                className="text-lg font-bold text-[#0B2343] mb-4 tracking-tight"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Lingkup Pekerjaan
              </h2>
              <ul className="flex flex-col gap-2.5 text-slate-700 text-sm sm:text-base">
                {project.scopeOfWork.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-[#04467A] font-bold text-lg leading-none mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:pl-12">
              <h2
                className="text-lg font-bold text-[#0B2343] mb-4 tracking-tight"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Kategori Layanan
              </h2>
              <p className="text-base text-slate-700">{project.category}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tantangan & Solusi */}
      <section
        className="w-full py-16 border-y border-[#DCE5F0]"
        style={{
          background: 'linear-gradient(180deg, #EAF1FC 0%, #FFFFFF 100%)',
        }}
      >
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <div>
              <h2
                className="text-xl font-bold text-[#0B2343] mb-3 tracking-tight"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Tantangan
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {project.challenge}
              </p>
            </div>
            <div>
              <h2
                className="text-xl font-bold text-[#0B2343] mb-3 tracking-tight"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Solusi dan Proses
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {project.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Galeri Dokumentasi */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="w-full bg-white py-16">
          <div className="container-custom">
            <h2
              className="text-2xl font-bold text-[#0B2343] mb-8 tracking-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Galeri
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Primary Gallery Image */}
              <div className="lg:col-span-7 flex flex-col">
                <div className="relative w-full h-[360px] sm:h-[420px] rounded-xl overflow-hidden border border-[#DCE5F0] bg-slate-100">
                  <Image
                    src={project.gallery[0].url}
                    alt={project.gallery[0].caption}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </div>
                <span className="text-xs text-slate-500 mt-2">
                  {project.gallery[0].caption}
                </span>
              </div>

              {/* Secondary Gallery Images */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                {project.gallery.slice(1).map((img, idx) => (
                  <div key={idx} className="flex flex-col">
                    <div className="relative w-full h-[180px] sm:h-[195px] rounded-xl overflow-hidden border border-[#DCE5F0] bg-slate-100">
                      <Image
                        src={img.url}
                        alt={img.caption}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />
                    </div>
                    <span className="text-xs text-slate-500 mt-1.5">
                      {img.caption}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Proyek Lainnya */}
      <section className="w-full bg-[#F5F8FD] py-16 border-t border-[#DCE5F0]">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <h2
              className="text-2xl font-bold text-[#0B2343] tracking-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Proyek Lainnya
            </h2>
            <Link
              href="/portfolio"
              className="text-sm font-semibold text-[#04467A] hover:underline flex items-center gap-1"
            >
              <span>Lihat semua portofolio</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherProjects.map((p) => (
              <Link
                key={p.id}
                href={`/portfolio/${p.slug}`}
                className="group flex flex-col bg-white rounded-xl overflow-hidden border border-[#DCE5F0] shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={p.coverImage}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-4 flex flex-col">
                  <span className="text-xs uppercase text-[#04467A] font-semibold mb-1">
                    {p.category}
                  </span>
                  <h3
                    className="text-base font-bold text-[#0B2343] group-hover:text-[#04467A] transition-colors"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {p.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Band */}
      <section className="w-full bg-white text-center py-16 border-t border-[#DCE5F0]">
        <div className="container-custom max-w-md mx-auto">
          <h2
            className="text-xl sm:text-2xl font-bold text-[#0B2343] mb-4 tracking-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Butuh pekerjaan serupa?
          </h2>
          <Link
            href="/kontak"
            className="inline-block bg-[#04467A] hover:bg-[#0B2343] text-white px-8 py-3 rounded-lg font-semibold text-[15px] transition-colors shadow-sm"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Hubungi Kami
          </Link>
        </div>
      </section>
    </div>
  );
}

