import type { MetadataRoute } from 'next';
import { siteUrl } from '@/sanity/env';
import { sanityFetch } from '@/sanity/lib/fetch';
import { SITEMAP_PROJECTS_QUERY, type SanitySitemapProject } from '@/sanity/lib/queries';
import { PORTFOLIO_PROJECTS } from '@/data/mockData';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteUrl.replace(/\/$/, '');
  const now = new Date();

  // 1. Halaman Statis
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/tentang-kami`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/layanan`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/kontak`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // 2. Halaman Dinamis Portofolio (/portfolio/[slug])
  const sanityProjects = await sanityFetch<SanitySitemapProject[]>({
    query: SITEMAP_PROJECTS_QUERY,
    tags: ['portfolioProject'],
  });

  const portfolioEntries: MetadataRoute.Sitemap =
    sanityProjects && sanityProjects.length > 0
      ? sanityProjects.map((project) => ({
          url: `${baseUrl}/portfolio/${project.slug}`,
          lastModified: project.projectDate
            ? new Date(project.projectDate)
            : project._updatedAt
              ? new Date(project._updatedAt)
              : now,
          changeFrequency: 'monthly',
          priority: 0.7,
        }))
      : PORTFOLIO_PROJECTS.map((project) => ({
          url: `${baseUrl}/portfolio/${project.slug}`,
          lastModified: now,
          changeFrequency: 'monthly',
          priority: 0.7,
        }));

  return [...staticRoutes, ...portfolioEntries];
}

