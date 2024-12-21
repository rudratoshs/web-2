import { motion } from "framer-motion"
import Image from "next/image"

interface TechBubbleProps {
  name: string
  x: string
  y: string
  delay: number
}

export function TechBubble({ name, x, y, delay }: TechBubbleProps) {
  return (
    <motion.div
      className="absolute hidden md:flex items-center justify-center"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: delay,
      }}
      style={{ left: x, top: y }}
    >
      <div className="relative w-16 h-16 bg-white/10 backdrop-blur-md rounded-full p-3 shadow-xl border border-white/20 hover:scale-110 transition-transform cursor-pointer">
        <Image
          src={`/icons/${name.toLowerCase().replace('.', '')}.svg`}
          alt={name}
          fill
          className="p-3 object-contain"
        />
      </div>
    </motion.div>
  )
}