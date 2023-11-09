'use client'
import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";


export function SiteHeader() {

  const [isNavFilled, setIsNavFilled] = useState<boolean>(false);
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setIsNavFilled(true) : setIsNavFilled(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <header className={cn(isNavFilled ? "bg-foreground" : "bg-transparent", "fixed top-0 z-40 w-full py-6 transition-all duration-300")}>
      <div className="container flex items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} isNavFilled={isNavFilled} />
        <div className="hidden md:flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Button size="lg" variant={isNavFilled ? "default-foreground" : "default"} >Portal do paciente</Button>
          </nav>
        </div>
      </div>
    </header>
  )
}