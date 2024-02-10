/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'heading-clr': 'hsl(220, 13%, 13%)',
      'text-clr': 'hsl(220, 14%, 75%)',
      'nav-items-color': 'hsl(223, 64%, 98%)',
      'accent-clr': 'hsl(26, 100%, 55%)',
      'accent-light': 'hsl(25, 100%, 94%)'

    },},
  },
  plugins: [],
}

