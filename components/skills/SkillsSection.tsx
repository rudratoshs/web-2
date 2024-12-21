import { motion } from 'framer-motion'
import { InfiniteSkillsScroll } from './InfiniteSkillsScroll'
import { technologies } from '@/lib/skills-data'

export function SkillsSection() {
  return (
    <section id="skills" className="px-4 py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5" />
      
      <div className="container mx-auto relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Our Technology Stack
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground text-lg">
            We leverage cutting-edge technologies to build scalable and innovative solutions
          </p>
        </motion.div>

        <div className="space-y-16">
          <InfiniteSkillsScroll technologies={technologies} />
        </div>
      </div>
    </section>
  )
}