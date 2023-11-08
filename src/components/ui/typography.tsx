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
        h4: "text-xl leading-8 font-semibold",
        h5: "text-lg",
        h6: "text-base",
        body1: "text-base",
        body2: "text-sm",
        caption: "text-xs",
        "special-title": "text-7xl leading-tighter tracking-tighter font-bold",
      },
      color: {
        primary: "text-primary",
        secondary: "text-secondary",
        accent: "text-accent",
        destructive: "text-destructive",
        white: "text-white",
        black: "text-black",
        "primary-foreground": "text-primary-foreground",
        "secondary-foreground": "text-secondary-foreground",
        "accent-foreground": "text-accent-foreground",
        "destructive-foreground": "text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "body1",
      color: "white",
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
    caption: "p",
    "special-title": "h1",
  };

  if (variant) {
    return variantMap[variant];
  }
  return "p";
}
