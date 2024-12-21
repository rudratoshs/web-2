import { useState } from 'react'
import { ProjectPreview } from './ProjectPreview'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '@/public/projects/portfolio-data'

const categories = [
  'All Projects',
  'Web Development',
  'Mobile Apps',
  'UI/UX Design',
  'Branding'
]

export function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState('All Projects')

  const filteredProjects = activeCategory === 'All Projects'
    ? projects
    : projects.filter(project => project.category === activeCategory)

  return (
    <div className="space-y-8">
      <div className="flex gap-4 overflow-x-auto pb-4 md:justify-start">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
              activeCategory === category
                ? 'bg-gradient-to-r from-primary to-secondary text-white'
                : 'bg-secondary/10 hover:bg-secondary/20 text-secondary'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <AnimatePresence>
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project) => (
            <ProjectPreview key={project.id} project={project} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}