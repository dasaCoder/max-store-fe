import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: '#fdf8f3',
      secondary: '#7d7d7d',
      dark: '#191919',
      white: '#ffffff',
      peach: '#f9d9b3',
      black: '#000000',
      warmPeach: '#FFE6CA',
      paleLavender: '#ddd0e3',
      indigo: {
        500: '#374151',
        600: '#4f46e5',
        700: '#4338ca'
      }
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
