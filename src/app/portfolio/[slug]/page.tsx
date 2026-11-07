import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { PORTFOLIO_PROJECTS, COMPANY_PROFILE } from '@/data/mockData';
import { MotionWrapper } from '@/components/common/MotionWrapper';
import { PortableText } from '@/components/PortableText';
import { sanityFetch } from '@/sanity/lib/fetch';
import {
  PROJECT_BY_SLUG_QUERY,
  OTHER_PROJECTS_QUERY,
  ALL_PROJECT_SLUGS_QUERY,
  type SanityPortfolioProject,
} from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/image';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const sanitySlugs = await sanityFetch<string[]>({
    query: ALL_PROJECT_SLUGS_QUERY,
    tags: ['portfolioProject'],
  });

  if (sanitySlugs && sanitySlugs.length > 0) {
    return sanitySlugs.map((slug) => ({ slug }));
  }

  return PORTFOLIO_PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const sanityProject = await sanityFetch<SanityPortfolioProject>({
    query: PROJECT_BY_SLUG_QUERY,
    params: { slug },
    tags: [`portfolioProject:${slug}`],
  });

  if (sanityProject) {
    const metaTitle = sanityProject.seoTitle || `${sanityProject.title} | ${COMPANY_PROFILE.shortName}`;
    const metaDesc = sanityProject.seoDescription || sanityProject.excerpt;
    const imageUrl = sanityProject.coverImage ? urlForImage(sanityProject.coverImage).url() : undefined;

    return {
      title: metaTitle,
      description: metaDesc,
      openGraph: {
        title: metaTitle,
        description: metaDesc,
        url: `/portfolio/${sanityProject.slug.current}`,
        siteName: COMPANY_PROFILE.legalName,
        locale: 'id_ID',
        type: 'article',
        ...(imageUrl ? { images: [{ url: imageUrl, alt: sanityProject.title }] } : {}),
      },
    };
  }

  const mockProject = PORTFOLIO_PROJECTS.find((p) => p.slug === slug);
  if (!mockProject) {
    return {
      title: `Proyek Tidak Ditemukan | ${COMPANY_PROFILE.shortName}`,
    };
  }

  return {
    title: `${mockProject.title} | ${COMPANY_PROFILE.shortName}`,
    description: `${mockProject.summary} - Portofolio pekerjaan oleh ${COMPANY_PROFILE.legalName}.`,
    openGraph: {
      title: `${mockProject.title} | ${COMPANY_PROFILE.shortName}`,
      description: mockProject.summary,
      url: `/portfolio/${mockProject.slug}`,
      siteName: COMPANY_PROFILE.legalName,
      locale: 'id_ID',
      type: 'article',
      images: [
        {
          url: mockProject.coverImage,
          width: 1200,
          height: 630,
          alt: mockProject.title,
        },
      ],
    },
  };
}

export default async function PortfolioDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const [sanityProject, sanityOthers] = await Promise.all([
    sanityFetch<SanityPortfolioProject>({
      query: PROJECT_BY_SLUG_QUERY,
      params: { slug },
      tags: [`portfolioProject:${slug}`],
    }),
    sanityFetch<SanityPortfolioProject[]>({
      query: OTHER_PROJECTS_QUERY,
      params: { slug },
      tags: ['portfolioProject'],
    }),
  ]);

  const mockProject = PORTFOLIO_PROJECTS.find((p) => p.slug === slug);

  if (!sanityProject && !mockProject) {
    notFound();
  }

  const projectTitle = sanityProject ? sanityProject.title : mockProject!.title;
  const projectSummary = sanityProject ? sanityProject.excerpt : mockProject!.summary;
  const projectFacility = sanityProject ? sanityProject.clientName : mockProject!.facility;
  const projectCategory = sanityProject ? sanityProject.serviceCategory : mockProject!.category;
  const projectCover = sanityProject && sanityProject.coverImage?.asset
    ? urlForImage(sanityProject.coverImage).url()
    : mockProject!.coverImage;

  const projectScope = mockProject?.scopeOfWork || [
    'Pemeriksaan dan persiapan lokasi penempatan alat medis',
    'Pemasangan mekanikal, elektrikal, dan sistem pelindung radiasi',
    'Uji fungsi (commissioning test) dan verifikasi kalibrasi presisi',
    'Pelatihan operasional bagi tenaga medis rumah sakit',
  ];

  const galleryItems = sanityProject?.gallery && sanityProject.gallery.length > 0
    ? sanityProject.gallery.map((item) => ({
        url: urlForImage(item.image).url(),
        caption: item.caption || item.altText || projectTitle,
      }))
    : mockProject?.gallery || [];

  const otherProjects = sanityOthers && sanityOthers.length > 0
    ? sanityOthers.map((o) => ({
        id: o._id,
        slug: o.slug.current,
        title: o.title,
        category: o.serviceCategory,
        coverImage: o.coverImage ? urlForImage(o.coverImage).url() : PORTFOLIO_PROJECTS[0].coverImage,
      }))
    : PORTFOLIO_PROJECTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="flex flex-col w-full">
      {/* 1. Top Header Band (#0B2343 Gradient) */}
      <section
        className="w-full text-white pt-16 pb-24 sm:pt-20 sm:pb-28"
        style={{
          background: 'linear-gradient(135deg, #0B2343 0%, #04467A 100%)',
        }}
        aria-label="Header Detail Portofolio"
      >
        <div className="container-custom flex flex-col gap-6">
          {/* Top Bar: Navigasi Kembali & Breadcrumb */}
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-white/80">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 hover:text-white transition-colors focus-visible:outline-none focus-visible:underline font-medium"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              <span>Kembali ke Portofolio</span>
            </Link>

            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-white/75">
              <Link href="/portfolio" className="hover:text-white transition-colors">
                Portofolio
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-white font-medium truncate max-w-[200px] sm:max-w-none">
                {projectTitle}
              </span>
            </nav>
          </div>

          {/* Judul, Deskripsi Singkat, & Nama Fasilitas */}
          <div className="flex flex-col gap-3 max-w-3xl pt-2">
            <MotionWrapper delay={0.05}>
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {projectTitle}
              </h1>
            </MotionWrapper>

            <MotionWrapper delay={0.1}>
              <p className="text-base sm:text-lg text-white/85 leading-relaxed font-normal">
                {projectSummary}
              </p>
            </MotionWrapper>

            <MotionWrapper delay={0.15}>
              <p className="text-xs sm:text-sm text-white/70 mt-1">
                <span className="font-medium text-white/90">Nama fasilitas:</span> {projectFacility}
              </p>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* 2. Overlapping Hero Image */}
      <section className="w-full bg-white relative" aria-label="Foto Utama Proyek">
        <div className="container-custom -mt-14 sm:-mt-20 relative z-10">
          <MotionWrapper delay={0.1}>
            <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-md bg-slate-100 border border-[#DCE5F0]">
              <Image
                src={projectCover}
                alt={projectTitle}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
          </MotionWrapper>
        </div>
      </section>

      {/* 3. Section Lingkup Pekerjaan & Kategori Layanan (#FFFFFF) */}
      <section className="w-full bg-white py-14 sm:py-18 border-b border-[#DCE5F0]" aria-label="Lingkup dan Kategori">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 md:divide-x md:divide-[#DCE5F0]">
            {/* Kolom Kiri: Lingkup Pekerjaan */}
            <MotionWrapper delay={0.05}>
              <div>
                <h2
                  className="text-lg sm:text-xl font-bold text-[#0B2343] mb-4 tracking-tight"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Lingkup Pekerjaan
                </h2>
                <ul className="flex flex-col gap-2.5 text-slate-700 text-sm sm:text-base">
                  {projectScope.map((scope, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-[#04467A] font-bold text-lg leading-none mt-0.5">•</span>
                      <span className="leading-relaxed">{scope}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </MotionWrapper>

            {/* Kolom Kanan: Kategori Layanan */}
            <MotionWrapper delay={0.1}>
              <div className="md:pl-12">
                <h2
                  className="text-lg sm:text-xl font-bold text-[#0B2343] mb-4 tracking-tight"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Kategori Layanan
                </h2>
                <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
                  {projectCategory}
                </p>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* 4. Section Tantangan & Solusi (#F5F8FD) */}
      <section
        className="w-full py-16 sm:py-20 bg-[#F5F8FD] border-b border-[#DCE5F0]"
        aria-label="Tantangan dan Solusi"
      >
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {/* Tantangan */}
            <MotionWrapper delay={0.05}>
              <div>
                <h2
                  className="text-xl sm:text-2xl font-bold text-[#0B2343] mb-4 tracking-tight"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Tantangan
                </h2>
                {sanityProject?.challenge && sanityProject.challenge.length > 0 ? (
                  <PortableText value={sanityProject.challenge} />
                ) : (
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    {mockProject?.challenge}
                  </p>
                )}
              </div>
            </MotionWrapper>

            {/* Solusi dan Proses */}
            <MotionWrapper delay={0.1}>
              <div>
                <h2
                  className="text-xl sm:text-2xl font-bold text-[#0B2343] mb-4 tracking-tight"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Solusi dan Proses
                </h2>
                {sanityProject?.solution && sanityProject.solution.length > 0 ? (
                  <PortableText value={sanityProject.solution} />
                ) : (
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    {mockProject?.solution}
                  </p>
                )}
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* 5. Section Galeri (#FFFFFF) */}
      {galleryItems.length > 0 && (
        <section className="w-full bg-white py-16 sm:py-20 border-b border-[#DCE5F0]" aria-label="Galeri Dokumentasi">
          <div className="container-custom">
            <MotionWrapper delay={0.05}>
              <h2
                className="text-2xl sm:text-3xl font-bold text-[#0B2343] mb-8 sm:mb-10 tracking-tight"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Galeri
              </h2>
            </MotionWrapper>

            {/* Asymmetric Gallery Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Foto Besar Kolom Kiri (7 Kolom) */}
              {galleryItems[0] && (
                <div className="lg:col-span-7 flex flex-col">
                  <MotionWrapper delay={0.1}>
                    <div className="relative w-full h-[320px] sm:h-[400px] rounded-xl overflow-hidden bg-slate-100 border border-[#DCE5F0] shadow-sm">
                      <Image
                        src={galleryItems[0].url}
                        alt={galleryItems[0].caption || projectTitle}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 60vw"
                      />
                    </div>
                    <span className="text-xs text-slate-500 mt-2 font-normal">
                      {galleryItems[0].caption}
                    </span>
                  </MotionWrapper>
                </div>
              )}

              {/* Dua Foto Bertumpuk Kolom Kanan (5 Kolom) */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                {galleryItems.slice(1, 3).map((item, idx) => (
                  <div key={idx} className="flex flex-col">
                    <MotionWrapper delay={0.15 + idx * 0.05}>
                      <div className="relative w-full h-[180px] sm:h-[188px] rounded-xl overflow-hidden bg-slate-100 border border-[#DCE5F0] shadow-sm">
                        <Image
                          src={item.url}
                          alt={item.caption || projectTitle}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 40vw"
                        />
                      </div>
                      <span className="text-xs text-slate-500 mt-1.5 font-normal">
                        {item.caption}
                      </span>
                    </MotionWrapper>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 6. Section Proyek Lainnya (#F5F8FD) */}
      <section
        className="w-full bg-[#F5F8FD] py-16 sm:py-20 border-b border-[#DCE5F0]"
        aria-label="Proyek Lainnya"
      >
        <div className="container-custom">
          {/* Header Bar */}
          <div className="flex items-center justify-between mb-8 sm:mb-10">
            <MotionWrapper delay={0.05}>
              <h2
                className="text-2xl sm:text-3xl font-bold text-[#0B2343] tracking-tight"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Proyek Lainnya
              </h2>
            </MotionWrapper>

            <MotionWrapper delay={0.05}>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#04467A] hover:text-[#0B2343] transition-colors focus-visible:outline-none focus-visible:underline"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                <span>Lihat semua portofolio</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </MotionWrapper>
          </div>

          {/* Grid 3 Proyek Terkait */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {otherProjects.map((other, idx) => (
              <MotionWrapper key={other.id || other.slug} delay={0.1 + idx * 0.05}>
                <Link
                  href={`/portfolio/${other.slug}`}
                  className="group flex flex-col bg-white rounded-xl overflow-hidden border border-[#DCE5F0] shadow-sm hover:shadow-md transition-all duration-300 h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#04467A]"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={other.coverImage}
                      alt={other.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>

                  <div className="p-5 flex flex-col justify-between flex-1">
                    <div>
                      <span className="text-[#04467A] text-[11px] font-semibold uppercase tracking-wider block mb-1.5">
                        {other.category}
                      </span>
                      <h3
                        className="text-[#0B2343] text-base font-bold group-hover:text-[#04467A] transition-colors line-clamp-2"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        {other.title}
                      </h3>
                    </div>

                    <div className="pt-3 mt-2 flex justify-end items-center">
                      <span className="text-slate-400 group-hover:text-[#04467A] group-hover:translate-x-1 transition-all">
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                </Link>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Bottom CTA (#FFFFFF) */}
      <section className="w-full bg-white text-center py-16 sm:py-20" aria-label="Kontak Bantuan">
        <div className="max-w-md mx-auto px-4 sm:px-6">
          <MotionWrapper delay={0.05}>
            <h2
              className="text-2xl sm:text-3xl font-bold text-[#0B2343] mb-4 tracking-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Butuh pekerjaan serupa?
            </h2>
          </MotionWrapper>

          <MotionWrapper delay={0.1}>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              Diskusikan kebutuhan instalasi, pemeliharaan, atau renovasi fasilitas medis Anda bersama tim engineer ahli kami.
            </p>
          </MotionWrapper>

          <MotionWrapper delay={0.15}>
            <Link
              href="/kontak"
              className="inline-flex items-center justify-center bg-[#04467A] text-white px-8 py-3.5 rounded-lg font-semibold text-sm sm:text-base hover:bg-[#0B2343] transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#04467A]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Hubungi Kami
            </Link>
          </MotionWrapper>
        </div>
      </section>
    </div>
  );
}
