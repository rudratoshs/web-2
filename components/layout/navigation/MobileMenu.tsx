'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { navigationItems } from './navigationData'

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(true)}
        className="relative z-50"
      >
        <Menu className="h-6 w-6" />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 20 }}
              className="fixed inset-y-0 right-0 w-full max-w-sm bg-card border-l border-border p-6 overflow-y-auto z-50"
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-lg font-semibold">Menu</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>

              <div className="space-y-6">
                {navigationItems.map((item) => (
                  <div key={item.title}>
                    <button
                      onClick={() => setActiveSection(activeSection === item.title ? null : item.title)}
                      className="flex items-center justify-between w-full text-left py-2 text-lg font-medium"
                    >
                      {item.title}
                      <ChevronRight
                        className={`h-5 w-5 transition-transform ${
                          activeSection === item.title ? 'rotate-90' : ''
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {activeSection === item.title && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-2 pb-4 pl-4">
                            {item.sections?.map((section) => (
                              <div key={section.title} className="mb-4">
                                <h3 className="text-sm font-semibold text-muted-foreground mb-2">
                                  {section.title}
                                </h3>
                                <ul className="space-y-2">
                                  {section.items.map((subItem) => (
                                    <motion.li
                                      key={subItem.title}
                                      whileTap={{ scale: 0.95 }}
                                    >
                                      <Link
                                        href={subItem.href}
                                        onClick={() => setIsOpen(false)}
                                        className="block text-base text-foreground hover:text-primary transition-colors"
                                      >
                                        {subItem.title}
                                      </Link>
                                      {subItem.description && (
                                        <p className="text-sm text-muted-foreground mt-0.5">
                                          {subItem.description}
                                        </p>
                                      )}
                                    </motion.li>
                                  ))}
                                </ul>
                              </div>
                            ))}

                            {item.featured && (
                              <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                                <h3 className="font-semibold mb-2">
                                  {item.featured.title}
                                </h3>
                                <p className="text-sm text-muted-foreground mb-3">
                                  {item.featured.description}
                                </p>
                                <Link
                                  href={item.featured.href}
                                  onClick={() => setIsOpen(false)}
                                  className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                                >
                                  Learn More →
                                </Link>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}

                <div className="pt-6 border-t border-border">
                  <div className="flex flex-col gap-3">
                    <Button variant="outline" className="w-full">
                      Sign In
                    </Button>
                    <Button className="w-full">
                      Get Started
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}