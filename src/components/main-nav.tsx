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
        <Typography variant={"h4"} className="inline-block font-bold">{siteConfig.name}</Typography>
      </Link>
      {items?.length ? (
        <nav className="md:flex gap-2 items-center hidden">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className="leading-8 overflow-hidden px-3 relative font-bold before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-1 before:bg-foreground before:transition-all before:duration-300 before:z-10 hover:before:translate-x-0 before:-translate-x-full"
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