import { fetcher } from './fetcher';
import { endpoints } from '../config/strapi';
import type { MenuItem, StrapiResponse } from '../types/strapi';

export async function getMenu(identifier: string = 'main-menu') {
  const response = await fetcher<StrapiResponse<MenuItem>>(
    `${endpoints.menus}?filters[identifier][$eq]=${identifier}&populate=*`
  );
  return response.data[0]?.attributes?.items;
}