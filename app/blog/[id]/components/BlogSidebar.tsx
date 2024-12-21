'use client';

import { blogPosts } from "@/lib/blog-data"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

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

export function BlogSidebar() {
    const recentPosts = blogPosts.slice(0, 3);
  
    return (
      <div className="space-y-10 lg:pt-2"> {/* Adjust padding to align with the title */}
        {/* Recent Posts */}
        <motion.div 
          className="bg-card rounded-xl p-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <h3 className="text-2xl font-bold mb-6">Recent Posts</h3>
          <div className="space-y-6">
            {recentPosts.map((post) => (
              <motion.div
                key={post.id}
                variants={item}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                className="flex gap-4 group items-start"
              >
                <Link href={`/blog/${post.id}`} className="flex items-start gap-4 group">
                  <div className="relative w-16 h-16 shrink-0 rounded-xl overflow-hidden">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                    <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                      <p>{post.date}</p>
                      <span>•</span>
                      <p>{post.readTime}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
  
        {/* Author Bio */}
        <motion.div 
          className="bg-card rounded-xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-xl font-bold mb-4">About the Author</h3>
          <div className="flex items-start gap-4">
            <Image
              src="/team/author.jpg"
              alt="Author"
              width={64}
              height={64}
              className="rounded-xl"
            />
            <div>
              <h4 className="text-base font-semibold text-foreground">John Doe</h4>
              <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                Senior Software Engineer with 10+ years of experience in web development and cloud architecture.
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
              className="px-4 py-2 rounded-lg text-sm font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            >
              {category}
            </motion.a>
          ))}
        </div>
      </div>
    )
  }