'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { MegaMenuContent } from './MegaMenuContent'
import { navigationItems } from './navigationData'

export function MegaMenu() {
  const [activeItem, setActiveItem] = useState<string | null>(null)

  return (
    <nav className="hidden md:flex items-center gap-6">
      {navigationItems.map((item) => (
        <div
          key={item.title}
          className="relative"
          onMouseEnter={() => setActiveItem(item.title)}
          onMouseLeave={() => setActiveItem(null)}
        >
          <button className="flex items-center gap-1 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            {item.title}
            <ChevronDown className="h-4 w-4" />
          </button>

          <AnimatePresence>
            {activeItem === item.title && (
              <div className="absolute top-full left-0 pt-4 z-50">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="relative -left-96"
                >
                  <MegaMenuContent item={item} />
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </nav>
  )
}