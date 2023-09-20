import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark_primary: '#D7A3D5',
        dark_secondary: '#271126',
        dark_text: '#f1dff0',
        dark_background: '#190b18',
        dark_accent: '#b159ad',
        text: '#190b18',
        background: '#f1dff0',
        primary: '#D7A3D5',
        secondary: '#f1dff0',
        accent: '#4d244b',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
export default config;
