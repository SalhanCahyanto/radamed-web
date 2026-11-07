import { groq } from 'next-sanity';
import type { PortableTextBlock } from '@portabletext/types';

export interface SanityImage {
  _type?: 'image';
  asset?: {
    _ref: string;
    _type: 'reference';
  };
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
}

export interface SanitySiteSettings {
  _id?: string;
  companyName?: string;
  logo?: SanityImage;
  tagline?: string;
  phone?: string;
  whatsappNumber?: string;
  email?: string;
  address?: string;
  mapUrl?: string;
  socialLinks?: Array<{ label: string; url: string }>;
  clientLogos?: Array<{ name: string; logo: SanityImage; altText?: string; url?: string }>;
}

export interface SanityCompanyValue {
  title: string;
  description: string;
}

export interface SanityCompanyProfile {
  _id?: string;
  title?: string;
  intro?: string;
  description?: PortableTextBlock[];
  vision?: string;
  mission?: string[];
  values?: SanityCompanyValue[];
  heroImage?: SanityImage;
}

export interface SanityService {
  _id: string;
  title: string;
  slug: { current: string };
  shortDescription?: string;
  description?: PortableTextBlock[];
  image?: SanityImage;
  sortOrder: number;
  isVisible: boolean;
}

export interface SanityGalleryItem {
  image: SanityImage;
  altText?: string;
  caption?: string;
}

export interface SanitySitemapProject {
  slug: string;
  projectDate?: string;
  _updatedAt?: string;
}

export interface SanityPortfolioProject {
  _id: string;
  title: string;
  slug: { current: string };
  clientName: string;
  excerpt: string;
  coverImage: SanityImage;
  serviceCategory: string;
  challenge?: PortableTextBlock[];
  solution?: PortableTextBlock[];
  gallery?: SanityGalleryItem[];
  projectDate?: string;
  isFeatured?: boolean;
  published?: boolean;
  seoTitle?: string;
  seoDescription?: string;
}

// 1. SITE_SETTINGS_QUERY
export const SITE_SETTINGS_QUERY = groq`
  *[_type == "siteSettings"][0] {
    _id,
    companyName,
    logo,
    tagline,
    phone,
    whatsappNumber,
    email,
    address,
    mapUrl,
    socialLinks,
    clientLogos
  }
`;

// 2. COMPANY_PROFILE_QUERY
export const COMPANY_PROFILE_QUERY = groq`
  *[_type == "companyProfile"][0] {
    _id,
    title,
    intro,
    description,
    vision,
    mission,
    values,
    heroImage
  }
`;

// 3. SERVICES_QUERY
export const SERVICES_QUERY = groq`
  *[_type == "service" && isVisible == true] | order(sortOrder asc) {
    _id,
    title,
    slug,
    shortDescription,
    description,
    image,
    sortOrder,
    isVisible
  }
`;

// 4. FEATURED_PROJECTS_QUERY
export const FEATURED_PROJECTS_QUERY = groq`
  *[_type == "portfolioProject" && published == true && isFeatured == true] | order(projectDate desc)[0...3] {
    _id,
    title,
    slug,
    clientName,
    excerpt,
    coverImage,
    serviceCategory,
    projectDate,
    isFeatured
  }
`;

// 5. ALL_PROJECTS_QUERY
export const ALL_PROJECTS_QUERY = groq`
  *[_type == "portfolioProject" && published == true] | order(projectDate desc) {
    _id,
    title,
    slug,
    clientName,
    excerpt,
    coverImage,
    serviceCategory,
    projectDate,
    isFeatured
  }
`;

// 6. PROJECT_BY_SLUG_QUERY
export const PROJECT_BY_SLUG_QUERY = groq`
  *[_type == "portfolioProject" && slug.current == $slug && published == true][0] {
    _id,
    title,
    slug,
    clientName,
    excerpt,
    coverImage,
    serviceCategory,
    challenge,
    solution,
    gallery,
    projectDate,
    isFeatured,
    published,
    seoTitle,
    seoDescription
  }
`;

// 7. OTHER_PROJECTS_QUERY
export const OTHER_PROJECTS_QUERY = groq`
  *[_type == "portfolioProject" && slug.current != $slug && published == true] | order(projectDate desc)[0...3] {
    _id,
    title,
    slug,
    clientName,
    excerpt,
    coverImage,
    serviceCategory,
    projectDate
  }
`;

// 8. ALL_PROJECT_SLUGS_QUERY
export const ALL_PROJECT_SLUGS_QUERY = groq`
  *[_type == "portfolioProject" && published == true && defined(slug.current)][].slug.current
`;

// 9. SITEMAP_PROJECTS_QUERY
export const SITEMAP_PROJECTS_QUERY = groq`
  *[_type == "portfolioProject" && published == true && defined(slug.current)] {
    "slug": slug.current,
    projectDate,
    _updatedAt
  }
`;
