'use client';

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { getAllCategories } from "@/lib/sanity/utils"

export function CategoryList() {
  const [categories, setCategories] = useState<any[]>([])

  useEffect(() => {
    async function fetchCategories() {
      const data = await getAllCategories()
      setCategories(data)
    }
    fetchCategories()
  }, [])

  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category, index) => (
        <motion.a
          key={category._id}
          href={`/blog/category/${category.title.toLowerCase()}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 + 0.4 }}
          whileHover={{ scale: 1.05 }}
          className="px-6 py-3 rounded-xl text-base font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
        >
          {category.title}
        </motion.a>
      ))}
    </div>
  )
}