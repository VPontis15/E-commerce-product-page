/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'text-heading-clr': 'hsl(220, 13%, 13%)',
      'text-clr': 'hsl(220, 14%, 75%)',
      'text-nav-items-color': 'hsl(223, 64%, 98%)',
      'text-accent-clr': 'hsl(26, 100%, 55%)',
      'text-accent-light': 'hsl(25, 100%, 94%)'

    },},
  },
  plugins: [],
}

