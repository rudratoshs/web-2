import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePortfolios } from '@/lib/hooks/usePortfolio';

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('All Projects');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Fetch portfolio data using the custom hook
  const { portfolios, isLoading, isError } = usePortfolios();
  console.log('port', portfolios)
  // Handle loading and error states
  if (isLoading) return <p>Loading portfolios...</p>;
  if (isError) return <p>Failed to load portfolios. Please try again later.</p>;

  // Function to extract text content from the description array
  const getDescriptionText = (descriptionArray) =>
    descriptionArray
      ?.map((block) =>
        block.children?.map((child) => child.text).join(' ')
      )
      .join('\n');

  // Filter projects by the active category
  const filteredProjects =
    activeCategory === 'All Projects'
      ? portfolios
      : portfolios.filter((project) =>
        project.categories.some(
          (category) =>
            category.name.toLowerCase() === activeCategory.toLowerCase()
        )
      );

  // Scroll functionality for the project list
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover our latest work and see how we bring ideas to life
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3">
          {['All Projects', ...new Set(portfolios.flatMap((p) => p.categories.map((c) => c.name)))].map(
            (category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-6 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category
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
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </motion.button>
            )
          )}
        </div>

        {/* Projects */}
        <div className="mt-12 relative group">
          {/* Scroll Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={() => scroll('left')}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={() => scroll('right')}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Project Cards */}
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto hide-scrollbar flex gap-6 px-8 snap-x snap-mandatory"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="min-w-[800px] snap-center"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <ProjectCard
                    project={{
                      ...project,
                      description: getDescriptionText(project.description),
                    }}
                    index={index}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}