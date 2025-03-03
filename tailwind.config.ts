import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xl: "1366px",
        xxl: "1920px",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      colors: {
        dark: {
          DEFAULT: "#18181B",
        },
        white: {
          DEFAULT: "#FFF",
          purple: "#FEF4FF",
        },
        gradient: {
          DEFAULT: "linear-gradient(180deg, #000 0%, #191A1D 67.04%)",
          red: "linear-gradient(180deg, #FF0000 0%, #8B0000 67.04%)",
        },
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(180deg, #000 0%, #191A1D 67.04%)",
        "red-gradient": "linear-gradient(180deg, #FF0000 0%, #8B0000 67.04%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
