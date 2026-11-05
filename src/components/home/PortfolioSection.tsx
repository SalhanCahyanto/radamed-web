import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '@/data/mockData';
import { MotionWrapper } from '@/components/common/MotionWrapper';
import type { SanityPortfolioProject } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/image';

interface PortfolioSectionProps {
  projects?: SanityPortfolioProject[] | null;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ projects }) => {
  const hasSanity = projects && projects.length >= 3;

  const mainProject = hasSanity
    ? {
        slug: projects[0].slug.current,
        title: projects[0].title,
        facility: projects[0].clientName,
        category: projects[0].serviceCategory,
        image: projects[0].coverImage ? urlForImage(projects[0].coverImage).url() : PORTFOLIO_PROJECTS[0].coverImage,
      }
    : {
        slug: PORTFOLIO_PROJECTS[0].slug,
        title: PORTFOLIO_PROJECTS[0].title,
        facility: PORTFOLIO_PROJECTS[0].facility,
        category: PORTFOLIO_PROJECTS[0].category,
        image: PORTFOLIO_PROJECTS[0].coverImage,
      };

  const secondaryProjects = hasSanity
    ? projects.slice(1, 3).map((p) => ({
        slug: p.slug.current,
        title: p.title,
        facility: p.clientName,
        category: p.serviceCategory,
        image: p.coverImage ? urlForImage(p.coverImage).url() : PORTFOLIO_PROJECTS[1].coverImage,
      }))
    : PORTFOLIO_PROJECTS.slice(1, 3).map((p) => ({
        slug: p.slug,
        title: p.title,
        facility: p.facility,
        category: p.category,
        image: p.coverImage,
      }));

  return (
    <section
      className="w-full py-20 lg:py-24 border-y border-[#EAF1FC]"
      style={{
        background: 'linear-gradient(180deg, #EAF1FC 0%, #F5F8FD 100%)',
      }}
      aria-label="Pekerjaan Kami"
    >
      <div className="container-custom">
        {/* Header Section */}
        <MotionWrapper delay={0.05}>
          <div className="flex items-center justify-between mb-10">
            <h2
              className="text-3xl font-bold text-slate-900 tracking-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Pekerjaan Kami
            </h2>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-1.5 text-[#04467A] font-semibold text-[15px] hover:text-[#0B2343] transition-colors focus-visible:outline-none focus-visible:underline"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              <span>Lihat semua portofolio</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </MotionWrapper>

        {/* Bento Grid Layout (1 Large 60% Left, 2 Stacked 40% Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Kartu Besar Kiri */}
          {mainProject && (
            <div className="lg:col-span-7">
              <MotionWrapper delay={0.1}>
                <Link
                  href={`/portfolio/${mainProject.slug}`}
                  className="relative group block overflow-hidden rounded-xl bg-slate-900 aspect-[4/3] lg:aspect-auto lg:h-[480px] shadow-sm hover:shadow-md transition-shadow border border-[#DCE5F0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#04467A]"
                >
                  <Image
                    src={mainProject.image}
                    alt={mainProject.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                  {/* Overlay Gradient Halus */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none" />

                  {/* Konten Kartu */}
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 flex flex-col justify-end text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-block px-2.5 py-1 bg-[#04467A] text-white text-xs font-semibold rounded uppercase tracking-wider">
                        {mainProject.category}
                      </span>
                      <span className="text-white/80 text-xs sm:text-sm font-medium">
                        {mainProject.facility}
                      </span>
                    </div>
                    <h3
                      className="text-xl sm:text-2xl font-bold text-white group-hover:text-sky-300 transition-colors"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {mainProject.title}
                    </h3>
                  </div>
                </Link>
              </MotionWrapper>
            </div>
          )}

          {/* 2 Kartu Bertumpuk Kanan */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {secondaryProjects.map((project, idx) => (
              <MotionWrapper key={project.slug} delay={0.15 + idx * 0.1}>
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="relative group block overflow-hidden rounded-xl bg-slate-900 h-[228px] shadow-sm hover:shadow-md transition-shadow border border-[#DCE5F0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#04467A]"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  {/* Overlay Gradient Halus */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent pointer-events-none" />

                  {/* Konten Kartu */}
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 flex flex-col justify-end text-white">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="inline-block px-2 py-0.5 bg-[#04467A] text-white text-[11px] font-semibold rounded uppercase tracking-wider">
                        {project.category}
                      </span>
                      <span className="text-white/80 text-xs font-medium">
                        {project.facility}
                      </span>
                    </div>
                    <h3
                      className="text-lg sm:text-xl font-bold text-white group-hover:text-sky-300 transition-colors line-clamp-1"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {project.title}
                    </h3>
                  </div>
                </Link>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
