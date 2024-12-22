import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight, Calendar, Users } from 'lucide-react';
import { STRAPI_URL } from '@/lib/config/strapi'; // Import centralized Strapi base URL
import type { Portfolio } from '@/lib/portfolio-data';

interface ProjectCardProps {
  project: Portfolio;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  // Get the main image URL from the project
  const imageUrl = project.images?.[0]?.formats?.medium?.url
    ? `${STRAPI_URL}${project.images[0].formats.medium.url}`
    : '/fallback-image.jpg'; // Provide a fallback image in case of missing data

  // Extract category name
  const category = project.categories?.[0]?.name || 'Uncategorized'; // Access `name` property of the first category

  return (
    <div className="group bg-card rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="flex flex-row h-[400px]">
        {/* Project Image */}
        <div className="relative w-[350px] shrink-0">
          <Image
            src={imageUrl}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
          <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.color}`} />
        </div>

        {/* Project Content */}
        <div className="grow p-8 flex flex-col">
          <div className="mb-4 flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-primary/10 text-primary">
              {category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <Calendar className="w-3 h-3" /> {project.date || 'No Date'}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <Users className="w-3 h-3" /> {project.team || 'Unknown Team'}
            </span>
          </div>

          <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
            {project.title}
          </h3>

          <p className="text-muted-foreground mb-6">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 rounded-md text-xs font-medium bg-secondary/10 text-secondary"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-auto">
            <motion.a
              href={project.link}
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
              whileHover={{ x: 5 }}
            >
              View Project <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
}