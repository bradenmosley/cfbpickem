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
          "0 1px 3px 0 rgb(248 250 252 / 0.1), 0 1px 2px -1px rgb(248 250 252 / 0.1)",
        md: "0 4px 6px -1px rgb(248 250 252 / 0.1), 0 2px 4px -2px rgb(248 250 252 / 0.1)",
        lg: "0 10px 15px -3px rgb(248 250 252 / 0.1), 0 4px 6px -4px rgb(248 250 252 / 0.1)",
      },
      animation: {
        logo: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [require("@tailwindcss/forms")],
};

export default config;
