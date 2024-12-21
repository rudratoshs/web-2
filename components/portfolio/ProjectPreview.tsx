import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

interface ProjectPreviewProps {
  project: {
    id: number
    title: string
    category: string
    image: string
    color: string
  }
}

export function ProjectPreview({ project }: ProjectPreviewProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-secondary/5"
    >
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
      
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-black/60 to-black/80" />
      
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
          <p className="text-sm font-medium text-primary mb-2">
            {project.category}
          </p>
          <h3 className="text-xl font-bold text-white mb-4">
            {project.title}
          </h3>
          <button className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors">
            View Project <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.color}`} />
    </motion.div>
  )
}