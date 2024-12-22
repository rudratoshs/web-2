'use client';

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function ContactForm() {
  return (
    <motion.form 
      className="mt-8 space-y-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
    >
      <div className="grid gap-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstname" className="block text-sm mb-2">First Name</label>
            <Input
              type="text"
              id="firstname"
              name="firstname"
              placeholder="First Name"
              className="bg-background/50"
            />
          </div>

          <div>
            <label htmlFor="lastname" className="block text-sm mb-2">Last Name</label>
            <Input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Last Name"
              className="bg-background/50"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm mb-2">Email</label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="you@company.com"
            className="bg-background/50"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm mb-2">Message</label>
          <Textarea
            id="message"
            name="message"
            placeholder="Your message here..."
            rows={4}
            className="bg-background/50"
          />
        </div>
      </div>

      <Button type="submit" className="w-full sm:w-auto">
        Send message
      </Button>
    </motion.form>
  )
}