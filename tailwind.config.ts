import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    " /src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", // Custom Blue
        secondary: "#9333EA", // Custom Purple
        accent: "#FACC15", // Custom Yellow
        dark: "#1F2937", // Custom Gray
      },
    },
  },
  plugins: [],
};

export default config;
