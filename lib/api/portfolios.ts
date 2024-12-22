import { fetcher } from './fetcher';
import { endpoints } from '../config/strapi';
import type { Portfolio, StrapiResponse } from '../types/strapi';

export async function getPortfolios() {
  const response = await fetcher<StrapiResponse<Portfolio>>(
    `${endpoints.portfolios}?populate=*`
  );
  return response.data;
}

export async function getPortfolio(slug: string) {
  const response = await fetcher<StrapiResponse<Portfolio>>(
    `${endpoints.portfolios}?filters[slug][$eq]=${slug}&populate=*`
  );
  return response.data[0];
}