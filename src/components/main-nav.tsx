import * as React from "react"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { Typography } from "./ui/typography"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-20 h-full">
      <Link href="/" className="flex items-center space-x-2">
        <Typography variant={"h4"} className="inline-block font-bold text-primary-foreground">{siteConfig.name}</Typography>
      </Link>
      {items?.length ? (
        <nav className="flex gap-2 items-center">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  // className={cn(
                  //   "flex items-center text-base font-medium text-primary-foreground hover:text transition-all duration-200",
                  //   item.disabled && "cursor-not-allowed opacity-80"
                  // )}
                  className="bg-primary text-primary-foreground px-3 py-0 hover:py-5 hover:bg-accent/90 transition-all duration-400"
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}