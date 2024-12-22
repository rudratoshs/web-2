import { fetcher } from './fetcher';
import { endpoints } from '../config/strapi';
import type { Post, StrapiResponse } from '../types/strapi';

export async function getPosts() {
  const response = await fetcher<StrapiResponse<Post>>(
    `${endpoints.posts}?populate=*`
  );
  return response.data;
}

export async function getPost(slug: string) {
  const response = await fetcher<StrapiResponse<Post>>(
    `${endpoints.posts}?filters[slug][$eq]=${slug}&populate=*`
  );
  return response.data[0];
}