/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['var(--font-lora)', 'serif'],
        'body': ['var(--font-roboto)', 'sans-serif'],
      },
      colors: {
        'primary-off-white': '#F5F5F5',
        'secondary-charcoal': '#333333',
        'accent-taupe': '#8B8A80',
        'accent-gold': '#B8860B',
      }
    },
  },
  plugins: [],
}