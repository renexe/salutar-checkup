import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"


export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-accent bg-primary">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="hidden md:flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Button size="lg">Login</Button>
          </nav>
        </div>
      </div>
    </header>
  )
}