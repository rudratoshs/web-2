import { Logo } from "./Logo"
import { MegaMenu } from "./navigation/MegaMenu"
import { MobileMenu } from "./navigation/MobileMenu"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="flex items-center h-20 px-4 border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-[85rem] w-full mx-auto flex items-center justify-between">
        <Logo />
        
        <MegaMenu />
        <MobileMenu />

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost">Sign In</Button>
          <Button>Get Started</Button>
        </div>
      </div>
    </header>
  )
}