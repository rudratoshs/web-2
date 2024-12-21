import { motion } from 'framer-motion'

const categories = [
  'All Projects',
  'Web Development',
  'Mobile Apps',
  'UI/UX Design',
  'Branding'
]

interface CategoryFilterProps {
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export function CategoryFilter({ activeCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {categories.map((category) => (
        <motion.button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`relative px-6 py-2 rounded-full text-sm font-medium transition-all ${
            activeCategory === category
              ? 'text-white'
              : 'text-muted-foreground hover:text-foreground'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {activeCategory === category && (
            <motion.div
              layoutId="activeCategory"
              className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full"
              initial={false}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10">{category}</span>
        </motion.button>
      ))}
    </div>
  )
}