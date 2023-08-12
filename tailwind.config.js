/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      blue1: '#4FC2E7',
      blue2: '#181D48',
      blue3: '#05011E',
    },
    extend: {
      width: {
        0.25: '1px',
        4.5: '18px',
      },
    },
  },
  plugins: [],
};
