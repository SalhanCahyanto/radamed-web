import type { MetadataRoute } from 'next';
import { siteUrl } from '@/sanity/env';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteUrl.replace(/\/$/, '');

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/studio/', '/api/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

