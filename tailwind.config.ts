import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        "lg-custom": "1336px", // Custom breakpoint at 1336px (desktop-first)
        md: "1336px", // Medium screens (e.g., tablets)
        sm: "640px",
      },
    },
  },
  plugins: [],
};
export default config;
