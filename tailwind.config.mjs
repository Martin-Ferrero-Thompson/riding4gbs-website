import tailwindcss from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Lato', 'sans-serif'],
        'display': ['Montserrat', 'sans-serif'],
      },
      colors: {
        'brand-blue': '#2563eb',
        'brand-teal': '#14b8a6',
      },
      animation: {
        'slide-in-left': 'slide-in-from-left 1s ease-out forwards',
        'infinite-scroll': 'infinite-scroll 40s linear infinite', 

      },
      keyframes: {
        'slide-in-from-left': {
          'from': { 
            transform: 'translateX(-50px)',
            opacity: '0',
          },
          'to': { 
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        'infinite-scroll': { 
          'from': { transform: 'translateX(0)' },
          'to': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
}