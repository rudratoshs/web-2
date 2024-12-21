import { ContactForm } from "./ContactForm"
import { ContactInfo } from "./ContactInfo"
import { motion } from "framer-motion"

export function ContactSection() {
  return (
    <section className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="relative p-6 md:p-16">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent rounded-xl" />
        
        <div className="relative z-10 lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <motion.h2 
              className="text-3xl font-bold lg:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Get in touch
            </motion.h2>
            <motion.p 
              className="mt-4 text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              We'd love to talk about how we can help you.
            </motion.p>

            <ContactForm />
          </div>

          <div className="mt-12 lg:mt-0">
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>
  )
}