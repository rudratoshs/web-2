import { FeaturedTestimonial } from './FeaturedTestimonial'
import { Stats } from './Stats'
import { motion } from 'framer-motion'

export function TestimonialsSection() {
  const featuredTestimonial = {
    quote: "Amazing people to work with. Very fast and professional partner.",
    author: {
      name: "Josh Grazioso",
      role: "Director Payments & Risk",
      company: "Airbnb",
      image:"/clients/client_1.jpg"

    }
  }

  return (
    <section className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
         <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Client Success Stories
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground text-lg">
            Hear what our clients say about their experience working with us
          </p>
        </motion.div>
      <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
        <div className="lg:col-span-5 lg:col-start-1">
          <FeaturedTestimonial {...featuredTestimonial} />
        </div>

        <div className="mt-10 lg:mt-0 lg:col-span-6 lg:col-end-13">
          <div className="space-y-6 sm:space-y-8">
            <Stats />
          </div>
        </div>
      </div>
    </section>
  )
}