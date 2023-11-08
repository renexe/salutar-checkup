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
    <div className="flex md:gap-6 lg:gap-20 h-full">
      <Link href="/" className="flex items-center space-x-2">
        <Typography variant={"h4"} className="inline-block font-bold text-primary-foreground">{siteConfig.name}</Typography>
      </Link>
      {items?.length ? (
        <nav className="md:flex gap-2 items-center hidden">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
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