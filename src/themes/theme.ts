export const theme = {
  container: {
    center: true,
    padding: "4rem",
    screens: {
      "2xl": "1400px",
    },
  },
  extend: {
    colors: {
      border: "#eff7f6",
      input: "hsl(var(--input))",
      ring: "hsl(var(--ring))",
      background: "#edf6f9",
      foreground: "#006d77",
      white: "#edf6f9",
      black: "#0b132b",
      primary: {
        DEFAULT: "#07bea3",
        foreground: "#042f2e",
      },
      secondary: {
        DEFAULT: "#573D1C",
        foreground: "hsl(var(--secondary-foreground))",
      },
      destructive: {
        DEFAULT: "#D1462F",
        foreground: "hsl(var(--destructive-foreground))",
      },
      muted: {
        DEFAULT: "hsl(var(--muted))",
        foreground: "hsl(var(--muted-foreground))",
      },
      accent: {
        DEFAULT: "#6fffe9",
        foreground: "hsl(var(--accent-foreground))",
      },
      popover: {
        DEFAULT: "hsl(var(--popover))",
        foreground: "hsl(var(--popover-foreground))",
      },
      card: {
        DEFAULT: "hsl(var(--card))",
        foreground: "hsl(var(--card-foreground))",
      },
    },
    borderRadius: {
      lg: "var(--radius)",
      md: "calc(var(--radius) - 2px)",
      sm: "calc(var(--radius) - 4px)",
    },
    keyframes: {
      "accordion-down": {
        from: { height: 0 },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: 0 },
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
    },
    transitionDuration: {
      '400': '400ms',
    },
    boxShadow: {
      'xl': '0 5px 10px 0px rgba(0, 0, 0, 0.4)',
    },
  },
};
