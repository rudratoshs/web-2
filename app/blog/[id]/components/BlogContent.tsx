'use client';
import Image from "next/image"
import { PortableText } from '@portabletext/react'
import { components } from '@/lib/sanity/portableText'
import { motion } from 'framer-motion'

interface BlogContentProps {
  post: {
    coverImage: string
    title: string
    excerpt: string
    body: any // Sanity Portable Text
  }
}

export function BlogContent({ post }: BlogContentProps) {
  return (
    <article className="prose prose-gray max-w-none">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative aspect-[16/9] mb-8 rounded-xl overflow-hidden"
      >
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover"
        />
      </motion.div>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="lead text-xl text-muted-foreground mb-8"
      >
        {post.excerpt}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <PortableText 
          value={post.body}
          components={components}
        />
      </motion.div>
    </article>
  )
}