import useSWR from 'swr';
import { fetcher } from '@/lib/api/fetcher';
import { STRAPI_URL } from '@/lib/config/strapi';

// Define the Category type
export interface Category {
  id: number;
  name: string;
  slug: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

// Fetcher function to get categories from Strapi
export async function getCategories(): Promise<Category[]> {
  const response = await fetcher<{ data: Category[] }>(
    `${STRAPI_URL}/api/categories`
  );
  return response.data;
}

// Hook to use categories
export function useCategories() {
  const { data, error, isLoading } = useSWR<Category[]>('categories', getCategories);

  return {
    categories: data,
    isLoading,
    isError: !!error,
  };
}