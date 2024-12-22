import useSWR from 'swr';
import { getPortfolios } from '../api/portfolios';
import type { Portfolio } from '../types/strapi';

export function usePortfolios() {
  const { data, error, isLoading } = useSWR<Portfolio[]>('portfolios', getPortfolios);

  return {
    portfolios: data,
    isLoading,
    isError: error,
  };
}