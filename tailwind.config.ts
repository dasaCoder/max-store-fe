import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "@/components/**/*.{js,ts,jsx,tsx,mdx}",
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
      },
      gray: {
        10: '#f7f7f7',
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827',
      },
      blue: {
        50: '#ebf8ff',
        100: '#bee3f8',
        200: '#90cdf4',
        300: '#63b3ed',
        400: '#4299e1',
        500: '#3182ce',
        600: '#2b6cb0',
        700: '#2c5282',
        800: '#2a4365',
        900: '#1A365D',
      },
      red: {
        500: '#AA0000'
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
