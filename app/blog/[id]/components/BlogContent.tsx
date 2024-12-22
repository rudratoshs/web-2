'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { STRAPI_URL } from "@/lib/config/strapi";
import { postRenderer } from "@/utils/post-renderer";

interface BlogContentProps {
  post: {
    cover: {
      url: string;
      alternativeText?: string;
    };
    title: string;
    excerpt: string;
    blocks: any[];
  };
}

export function BlogContent({ post }: BlogContentProps) {
  const coverImageUrl = `${STRAPI_URL}${post.cover.url}`;

  return (
    <article className="prose prose-gray max-w-none">
      {/* Cover Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative aspect-[16/9] mb-8 rounded-xl overflow-hidden"
      >
        <Image
          src={coverImageUrl}
          alt={post.cover.alternativeText || post.title}
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Excerpt */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="lead text-xl text-muted-foreground mb-8"
      >
        {post.excerpt}
      </motion.p>

      {/* Body Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {post.blocks.map((section: any, index: number) =>
          postRenderer(section, index)
        )}
      </motion.div>
    </article>
  );
}