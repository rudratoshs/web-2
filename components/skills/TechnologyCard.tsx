'use client';

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

interface TechnologyCardProps {
  name: string
  icon: string
  index: number
}

export function TechnologyCard({ name, icon, index }: TechnologyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="w-[180px] flex-shrink-0"
    >
      <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white/50 backdrop-blur-sm border-white/20">
        <CardContent className="p-6 flex flex-col items-center justify-center text-center">
          <div className="mb-4 relative w-16 h-16">
            <Image
              src={icon}
              alt={name}
              fill
              className="transition-all duration-300 group-hover:scale-110 object-contain"
            />
          </div>
          <h3 className="font-semibold">{name}</h3>
        </CardContent>
      </Card>
    </motion.div>
  )
}