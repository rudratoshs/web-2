export const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1338';
export const API_URL = `${STRAPI_URL}/api`;

export const endpoints = {
    posts: 'articles',
    menus: 'menus',
    portfolios: 'portfolios'
} as const;