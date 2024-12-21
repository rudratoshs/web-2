import { motion } from 'framer-motion'
import Image from 'next/image'
import { StarRating } from './StarRating'
import type { Testimonial } from '@/lib/testimonials-data'

interface TestimonialCardProps {
  testimonial: Testimonial
  index: number
}

export function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <motion.div 
        className="h-full bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-white/10 transition-all duration-300"
        whileHover={{ 
          scale: 1.02,
          boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.2)",
          borderColor: "rgba(var(--primary), 0.2)"
        }}
      >
        <div className="flex flex-col h-[400px]">
          <div className="shrink-0">
            <StarRating rating={testimonial.rating} />
          </div>
          
          <motion.blockquote 
            className="mt-6 flex-grow"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-muted-foreground leading-relaxed text-lg">
              "{testimonial.quote}"
            </p>
          </motion.blockquote>

          <motion.div 
            className="mt-6 pt-6 border-t border-muted/20"
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1 }}
          >
            <div className="flex items-center gap-4">
              <motion.div 
                className="relative w-12 h-12 rounded-full overflow-hidden bg-muted/10 ring-2 ring-white/10"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </motion.div>
              <div>
                <motion.div 
                  className="font-medium text-foreground text-lg"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  {testimonial.name}
                </motion.div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role} at {testimonial.company}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}