export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Salutar Checkup",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Início",
      href: "/",
    },
    {
      title: "Programas",
      href: "/",
    },
    {
      title: "Área de Atuação",
      href: "/",
    },
    {
      title: "Contatos",
      href: "/",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}