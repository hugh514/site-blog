import type { Config } from "tailwindcss";
export default {
  content: [
    "./src/pages/**/*.{jsx,js,tsx,mdx,ts}",
    "./src/components/**/*.{jsx,js,tsx,mdx,ts}",
    "./src/app/**/*.{jsx,js,tsx,mdx,ts}",
    "./src/**/*.{jsx,js,tsx,mdx,ts}",
  ],
  theme: {
    extend: {
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        neutral: {
          black: "var(--neutral-black)",
          "d-grey": "var(--neutral-d-grey)",
          grey: "var(--neutral-grey)",
          "l-grey": "var(--neutral-l-grey)",
          "grey-blue": "var(--neutral-grey-blue)",
          silver: "var(--neutral-silver)",
          white: "var(--neutral-white)",
        },
        action: {
          info: "var(--info)",
          success: "var(--success)",
          warning: "var(--warning)",
          error: "var(--error)",
        },
        shade: {
          1: "var(--shade-1)",
          2: "var(--shade-2)",
          3: "var(--shade-3)",
          4: "var(--shade-4)",
          5: "var(--shade-5)",
        },
        tint: {
          1: "var(--tint-1)",
          2: "var(--tint-2)",
          3: "var(--tint-3)",
          4: "var(--tint-4)",
          5: "var(--tint-5)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
} satisfies Config;
