'use client';

import { Mail, MapPin, Phone } from "lucide-react"
import { motion } from "framer-motion"

const contactDetails = [
  {
    icon: MapPin,
    title: "Visit us",
    details: ["100 Smith Street", "Melbourne VIC 3000", "Australia"]
  },
  {
    icon: Phone,
    title: "Call us",
    details: ["+1 (555) 000-0000"]
  },
  {
    icon: Mail,
    title: "Email us",
    details: ["hello@example.com", "support@example.com"]
  }
]

export function ContactInfo() {
  return (
    <motion.div 
      className="divide-y divide-border rounded-xl bg-card/50 backdrop-blur-sm"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      {contactDetails.map((item, index) => (
        <motion.div 
          key={item.title}
          className="flex gap-x-7 py-6 px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ x: 5 }}
        >
          <div className="flex-none">
            <item.icon className="size-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">{item.title}</h3>
            {item.details.map((detail, i) => (
              <p key={i} className="text-muted-foreground">
                {detail}
              </p>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}