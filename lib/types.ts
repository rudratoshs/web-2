// lib/types.ts
export interface Post {
    _id: string;
    title: string;
    slug: { current: string };
    coverImage: string;
    publishedAt: string;
    excerpt: string;
    readingTime: number;
    categories: Array<{
        _id: string;
        title: string;
    }>;
}