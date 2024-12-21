import { Logo } from "@/components/layout/Logo"
import { FooterNav } from "./FooterNav"
import { LanguageSelector } from "./LanguageSelector"
import { SocialLinks } from "./SocialLinks"

export function Footer() {
  return (
    <footer className="bg-card mt-auto">
      <div className="max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-full lg:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">
              Building the future through innovative technology solutions.
            </p>
          </div>

          <FooterNav />

          <div className="col-span-full lg:col-span-1">
            <h4 className="font-semibold">Stay connected</h4>
            <form className="mt-4">
              <label htmlFor="footer-email" className="block text-sm text-muted-foreground mb-2">
                Subscribe to our newsletter
              </label>
              <div className="flex gap-2">
                <input
                  type="email"
                  id="footer-email"
                  name="email"
                  className="py-2 px-3 flex-1 border border-border rounded-md bg-background/50"
                  placeholder="Email address"
                />
                <button
                  type="submit"
                  className="py-2 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-primary text-white hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-8 lg:mt-12 border-t border-border pt-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="flex items-center gap-x-8">
              <LanguageSelector />
              <SocialLinks />
            </div>

            <div className="mt-4 md:mt-0 space-y-2 md:space-y-0 md:space-x-4 text-sm text-muted-foreground">
              <a href="#" className="inline-block hover:text-foreground">Terms</a>
              <a href="#" className="inline-block hover:text-foreground">Privacy</a>
              <a href="#" className="inline-block hover:text-foreground">Status</a>
              <p className="inline-block">&copy; 2024 TechCore. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}