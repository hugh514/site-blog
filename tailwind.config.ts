import type { Config } from "tailwindcss";
export default {
  content: [
    "./src/pages/**/*.{jsx,js,tsx,mdx,ts}",
    "./src/components/**/*.{jsx,js,tsx,mdx,ts}",
    "./src/app/**/*.{jsx,js,tsx,mdx,ts}",
    "./src/**/*.{jsx,js,tsx,mdx,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
