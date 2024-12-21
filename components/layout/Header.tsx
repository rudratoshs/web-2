import { Logo } from "./Logo"
import Link from "next/link"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  return (
    <header className="flex items-center h-16 px-4 border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-[85rem] w-full mx-auto flex items-center justify-between">
        <Logo />
        
        <nav className="hidden md:flex items-center gap-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}