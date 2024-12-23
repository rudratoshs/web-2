import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import type { NavigationItem } from './navigationData'

interface MegaMenuContentProps {
  item: NavigationItem
}

export function MegaMenuContent({ item }: MegaMenuContentProps) {
  return (
    <div className="w-[800px] bg-card/95 backdrop-blur-lg border border-border rounded-xl shadow-2xl p-6">
      <div className="grid grid-cols-12 gap-8">
        {/* Main Content */}
        <div className="col-span-8">
          <div className="grid grid-cols-2 gap-8">
            {item.sections?.map((section) => (
              <div key={section.title}>
                <h3 className="font-semibold mb-4 text-foreground">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((subItem) => (
                    <motion.li
                      key={subItem.title}
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                      <Link
                        href={subItem.href}
                        className="group flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {subItem.icon && (
                          <subItem.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        )}
                        <div>
                          <span className="font-medium">{subItem.title}</span>
                          {subItem.description && (
                            <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                              {subItem.description}
                            </p>
                          )}
                        </div>
                        <ArrowRight className="w-3 h-3 ml-auto opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Content */}
        <div className="col-span-4">
          {item.featured && (
            <div className="bg-muted/50 rounded-lg p-4">
              <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                <Image
                  src={item.featured.image}
                  alt={item.featured.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="font-semibold text-foreground mb-2">
                {item.featured.title}
              </h4>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {item.featured.description}
              </p>
              <Link
                href={item.featured.href}
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}