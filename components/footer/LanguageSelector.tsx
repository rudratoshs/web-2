'use client'
import { useState } from "react"
import { Check, ChevronDown, Globe } from "lucide-react"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import { motion, AnimatePresence } from "framer-motion"

const languages = [
  { code: "en", name: "English (US)" },
  { code: "fr", name: "Français" },
  { code: "de", name: "Deutsch" },
  { code: "es", name: "Español" },
  { code: "ja", name: "日本語" },
]

export function LanguageSelector() {
  const [selectedLang, setSelectedLang] = useState(languages[0])
  const [open, setOpen] = useState(false)

  return (
    <DropdownMenu.Root open={open} onOpenChange={setOpen}>
      <DropdownMenu.Trigger asChild>
        <button className="inline-flex items-center gap-x-2 text-sm text-muted-foreground hover:text-foreground">
          <Globe className="size-4" />
          {selectedLang.name}
          <ChevronDown className={`size-4 transition-transform ${open ? "rotate-180" : ""}`} />
        </button>
      </DropdownMenu.Trigger>

      <AnimatePresence>
        {open && (
          <DropdownMenu.Portal forceMount>
            <DropdownMenu.Content
              align="start"
              sideOffset={8}
              asChild
            >
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="z-50 min-w-[150px] bg-card border border-border rounded-lg shadow-lg"
              >
                <div className="p-1.5">
                  {languages.map((lang) => (
                    <DropdownMenu.Item
                      key={lang.code}
                      className="flex items-center gap-2 px-2.5 py-1.5 text-sm rounded-md cursor-default
                        outline-none hover:bg-accent hover:text-accent-foreground
                        data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground"
                      onClick={() => setSelectedLang(lang)}
                    >
                      {lang.name}
                      {selectedLang.code === lang.code && (
                        <Check className="size-4 ml-auto" />
                      )}
                    </DropdownMenu.Item>
                  ))}
                </div>
              </motion.div>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        )}
      </AnimatePresence>
    </DropdownMenu.Root>
  )
}