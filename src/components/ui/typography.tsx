import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

const typographyVariants = cva(
  "font-medium leading-6 tracking-wide",
  {
    variants: {
      variant: {
        h1: "text-4xl leading-10 tracking-normal font-bold",
        h2: "text-3xl leading-10 tracking-normal font-bold",
        h3: "text-2xl leading-8 tracking-normal font-semibold",
        h4: "text-xl leading-6 font-semibold",
        h5: "text-lg leading-6 font-normal",
        h6: "text-base",
        body1: "text-base font-normal leading-6 tracking-normal",
        body2: "text-sm",
        link: "text-base font-normal leading-6 tracking-normal overflow-hidden relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-1 before:transition-all before:duration-300 before:z-10 hover:before:translate-x-0 before:-translate-x-[calc(101%)] before:bg-white px-1",
        caption: "text-xs",
        "special-title": "text-7xl leading-tighter tracking-tighter font-bold drop-shadow-md",
      },
      color: {
        primary: "text-primary",
        secondary: "text-secondary",
        accent: "text-accent",
        destructive: "text-destructive",
        white: "text-white",
        black: "text-black",
        foreground: "text-foreground",
        "primary-foreground": "text-primary-foreground",
        "secondary-foreground": "text-secondary-foreground",
        "accent-foreground": "text-accent-foreground",
        "destructive-foreground": "text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "body1",
      color: "foreground",
    },
  }
);

export type TypographyProps = React.HTMLAttributes<HTMLParagraphElement>
  & VariantProps<typeof typographyVariants>
  & { asChild?: boolean; }

const Typography = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ className, variant, color, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : determineComp(variant);
    return (
      <Comp
        className={cn(typographyVariants({ variant, className, color }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Typography.displayName = "Typography";

export { Typography, typographyVariants };

//@TODO: Investigate why this approach generates a hydration error when using the variant prop with an mapped value
//See the programs section for an example
function determineComp(variant: string | undefined | null) {
  const variantMap: { [key: string]: string } = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    body1: "p",
    body2: "span",
    link: "p",
    caption: "p",
    "special-title": "h1",
  };

  if (variant) {
    return variantMap[variant];
  }
  return "p";
}
