'use client';

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { getAllPosts } from "@/lib/sanity/utils"
import { formatDate } from "@/lib/sanity/utils"

const categories = ["Technology", "Architecture", "Infrastructure", "Development"]

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

export async function BlogSidebar() {
  const posts = await getAllPosts()
  console.log('rudra',posts)
  const recentPosts = posts.slice(0, 3)

  return (
    <div className="space-y-8 lg:mt-[-19.5rem]">
      {/* Recent Posts */}
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

      {/* Author Bio */}
      <motion.div 
        className="bg-card rounded-xl p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="text-2xl font-bold mb-6">About the Author</h3>
        <div className="flex items-start gap-6">
          <Image
            src="/team/author.jpg"
            alt="Author"
            width={80}
            height={80}
            className="rounded-xl"
          />
          <div>
            <h4 className="text-xl font-semibold text-foreground">John Doe</h4>
            <p className="text-muted-foreground mt-2 leading-relaxed">
              Senior Software Engineer with 10+ years of experience in web development 
              and cloud architecture.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Categories */}
      <div className="flex flex-wrap gap-3">
        {categories.map((category, index) => (
          <motion.a
            key={category}
            href="#"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.4 }}
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 rounded-xl text-base font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
          >
            {category}
          </motion.a>
        ))}
      </div>
    </div>
  )
}