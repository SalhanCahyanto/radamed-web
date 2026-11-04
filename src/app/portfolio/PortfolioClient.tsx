'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { PORTFOLIO_PROJECTS, PortfolioItem } from '@/data/mockData';
import { MotionWrapper } from '@/components/common/MotionWrapper';

const FILTER_TABS = [
  { label: 'Semua', value: 'all' },
  { label: 'Instalasi Alat', value: 'instalasi-alat' },
  { label: 'Instalasi Ruang', value: 'instalasi-ruang' },
  { label: 'Perbaikan', value: 'perbaikan' },
  { label: 'Renovasi', value: 'renovasi' },
];

export const PortfolioClient: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects =
    activeFilter === 'all'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.categorySlug === activeFilter);

  return (
    <div className="w-full">
      {/* Category Filter Tabs */}
      <div
        role="tablist"
        aria-label="Filter Kategori Portofolio"
        className="flex items-center gap-6 sm:gap-8 overflow-x-auto pb-2 mb-10 select-none border-b border-[#DCE5F0]"
      >
        {FILTER_TABS.map((tab) => {
          const isActive = activeFilter === tab.value;
          return (
            <button
              key={tab.value}
              role="tab"
              aria-selected={isActive}
              type="button"
              onClick={() => setActiveFilter(tab.value)}
              className={`text-sm pb-1.5 whitespace-nowrap cursor-pointer transition-colors duration-200 ${
                isActive
                  ? 'text-[#04467A] font-semibold border-b-2 border-[#04467A]'
                  : 'text-slate-600 hover:text-[#04467A] font-medium border-b-2 border-transparent'
              }`}
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Projects Grid: 3 cols desktop, 2 cols tablet, 1 col mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project: PortfolioItem, index: number) => (
          <MotionWrapper key={project.id} delay={0.05 * (index % 6)}>
            <Link
              href={`/portfolio/${project.slug}`}
              className="portfolio-item group bg-white rounded-xl overflow-hidden flex flex-col border border-[#DCE5F0] shadow-sm hover:shadow-md transition-all duration-300 h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#04467A]"
            >
              {/* Cover Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 rounded-t-xl">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div className="flex flex-col">
                  <span className="text-[#04467A] text-[12px] font-semibold uppercase tracking-wider mb-2">
                    {project.category}
                  </span>
                  <h2
                    className="text-[#0B2343] text-lg font-bold group-hover:text-[#04467A] transition-colors mb-2 tracking-tight"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {project.title}
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                <div className="pt-4 flex justify-end items-center">
                  <span className="text-slate-400 group-hover:text-[#04467A] group-hover:translate-x-1 transition-all">
                    <ArrowRight className="w-5 h-5" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </Link>
          </MotionWrapper>
        ))}
      </div>
    </div>
  );
};
