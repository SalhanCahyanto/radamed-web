import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '@/data/mockData';
import { MotionWrapper } from '@/components/common/MotionWrapper';

export const PortfolioSection: React.FC = () => {
  const mainProject = PORTFOLIO_PROJECTS[0]; // Instalasi Alat Radiologi
  const secondaryProjects = PORTFOLIO_PROJECTS.slice(1, 3); // Instalasi Ruang Radiologi & Perbaikan Alat Kesehatan

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
                    src={mainProject.coverImage}
                    alt={mainProject.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                  {/* Subtle Contrast Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex items-end p-6 sm:p-8">
                    <h3
                      className="text-xl sm:text-2xl font-bold text-white tracking-tight"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {mainProject.title}
                    </h3>
                  </div>
                </Link>
              </MotionWrapper>
            </div>
          )}

          {/* Kartu Bertumpuk Kanan */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {secondaryProjects.map((project, index) => (
              <MotionWrapper key={project.id} delay={0.15 + index * 0.1}>
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="relative group block overflow-hidden rounded-xl bg-slate-900 aspect-[16/10] lg:h-[228px] shadow-sm hover:shadow-md transition-shadow border border-[#DCE5F0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#04467A]"
                >
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  {/* Subtle Contrast Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex items-end p-6">
                    <h3
                      className="text-lg sm:text-xl font-bold text-white tracking-tight"
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

