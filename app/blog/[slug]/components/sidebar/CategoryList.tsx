'use client';

import { motion } from "framer-motion";

interface Category {
  id: number;
  title: string;
  slug: string;
}

interface CategoryListProps {
  categories: Category[];
}

export function CategoryList({ categories }: CategoryListProps) {
  return (
    <div className="flex flex-wrap gap-3 p-6">
      {categories.map((category, index) => (
        <motion.a
          key={category.id}
          href={`/blog/category/${category.slug}`}
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
  );
}