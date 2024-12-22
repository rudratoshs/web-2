import useSWR from 'swr';
import { getPosts } from '../api/posts';
import type { Post } from '../types/strapi';

export function usePosts() {
  const { data, error, isLoading } = useSWR<Post[]>('posts', getPosts);
  return {
    posts: data,
    isLoading,
    isError: error
  };
}