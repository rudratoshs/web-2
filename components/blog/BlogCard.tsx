'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock } from 'lucide-react';
import { formatDate } from '@/lib/sanity/utils';

interface Post {
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

interface BlogCardProps {
  post: Post;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug.current}`} className="block group">
      <article className="h-full bg-card rounded-xl overflow-hidden border border-border/50 hover:border-border transition-colors">
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        <div className="p-6">
          {post.categories && post.categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {post.categories.map(category => (
                <span
                  key={category._id}
                  className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-primary/10 text-primary"
                >
                  {category.title}
                </span>
              ))}
            </div>
          )}

          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>

          {post.excerpt && (
            <p className="mt-3 text-muted-foreground line-clamp-2">
              {post.excerpt}
            </p>
          )}

          <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="size-4" />
              {formatDate(post.publishedAt)}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="size-4" />
              {post.readingTime} min read
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
