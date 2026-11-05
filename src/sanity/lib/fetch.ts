import type { QueryParams } from 'next-sanity';
import { client } from './client';
import { projectId } from '../env';

interface SanityFetchProps {
  query: string;
  params?: QueryParams;
  tags?: string[];
  revalidate?: number | false;
}

export async function sanityFetch<T>({
  query,
  params = {},
  tags = [],
  revalidate = 60,
}: SanityFetchProps): Promise<T | null> {
  if (!projectId || projectId === 'MASUKKAN_PROJECT_ID_DARI_SANITY_DI_SINI') {
    return null;
  }

  try {
    return await client.fetch<T>(query, params, {
      next: {
        revalidate,
        tags,
      },
    });
  } catch (error) {
    console.warn('[Sanity Fetch Warning]: Failed to fetch, falling back to static data.', error);
    return null;
  }
}
