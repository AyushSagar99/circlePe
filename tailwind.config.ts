import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundImage: {
          'custom-radial': 'radial-gradient(35.19% 35.19% at 50% 50%, rgba(59, 149, 255, 0.17) 0%, rgba(28, 106, 197, 0) 100%)',
        },
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
