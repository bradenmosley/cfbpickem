import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        DEFAULT:
          "0 4px 6px -1px rgb(30 41 59 / 0.4), 0 2px 4px -2px rgb(30 41 59 / 0.4);",
      },
    },
  },
  plugins: [],
};
export default config;
