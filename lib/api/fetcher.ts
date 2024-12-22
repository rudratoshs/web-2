import { API_URL } from '../config/strapi';

export async function fetcher<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${API_URL}/${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.statusText}`);
  }

  return response.json();
}