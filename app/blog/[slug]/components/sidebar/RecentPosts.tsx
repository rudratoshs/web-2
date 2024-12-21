'use client';

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { formatDate } from "@/lib/sanity/utils"
import { useEffect, useState } from "react"
import { getAllPosts } from "@/lib/sanity/utils"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

interface RecentPostsProps {
  currentPostId: string;
}

export function RecentPosts({ currentPostId }: RecentPostsProps) {
  const [recentPosts, setRecentPosts] = useState<any[]>([])

  useEffect(() => {
    async function fetchPosts() {
      const posts = await getAllPosts()
      const filtered = posts
        .filter(post => post._id !== currentPostId)
        .slice(0, 3)
      setRecentPosts(filtered)
    }
    fetchPosts()
  }, [currentPostId])

  return (
    <motion.div 
      className="bg-card rounded-xl p-6"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <h3 className="text-3xl font-bold mb-8">Recent Posts</h3>
      <div className="space-y-8">
        {recentPosts.map((post) => (
          <motion.div
            key={post._id}
            variants={item}
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <Link
              href={`/blog/${post.slug.current}`}
              className="flex gap-6 group items-start"
            >
              <div className="relative w-24 h-24 shrink-0 rounded-xl overflow-hidden">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <div className="flex items-center gap-2 mt-3">
                  <p className="text-sm text-muted-foreground">
                    {formatDate(post.publishedAt)}
                  </p>
                  <span className="text-sm text-muted-foreground">•</span>
                  <p className="text-sm text-muted-foreground">{post.readingTime}</p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}