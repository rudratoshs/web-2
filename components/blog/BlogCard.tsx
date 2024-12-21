'use client';
import Link from 'next/link';
import Image from 'next/image';
import type { BlogPost } from '@/lib/blog-data';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug.current}`} className="block group">
      <div className="relative w-full h-64 rounded-lg overflow-hidden mb-4">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
        {post.title}
      </h3>
      <p className="text-sm text-muted-foreground mt-2">{post.date}</p>
    </Link>
  );
}