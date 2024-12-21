import { motion } from 'framer-motion'
import Image from 'next/image'
import { Calendar, Clock } from 'lucide-react'
import type { BlogPost } from '@/lib/blog-data'

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <motion.article 
      className="group relative flex flex-col h-full bg-card hover:shadow-lg transition-shadow duration-300 rounded-xl overflow-hidden"
      whileHover={{ y: -5 }}
    >
      <div className="relative h-60">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="absolute top-4 left-4">
        <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-white/10 text-white backdrop-blur-sm">
          {post.category}
        </span>
      </div>

      <div className="flex-1 p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {post.title}
        </h3>
        <p className="text-muted-foreground mb-4">
          {post.excerpt}
        </p>

        <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border">
          <div className="flex items-center gap-2">
            <div className="relative size-8 rounded-full overflow-hidden">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-medium">{post.author.name}</p>
              <p className="text-xs text-muted-foreground">{post.author.role}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 ml-auto text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="size-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="size-4" />
              {post.readTime}
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  )
}