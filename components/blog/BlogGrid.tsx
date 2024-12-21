import { motion } from 'framer-motion'
import { BlogCard } from './BlogCard'
import type { BlogPost } from '@/lib/blog-data'

interface BlogGridProps {
  posts: BlogPost[]
}

export function BlogGrid({ posts }: BlogGridProps) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post, index) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <BlogCard post={post} />
        </motion.div>
      ))}
    </div>
  )
}