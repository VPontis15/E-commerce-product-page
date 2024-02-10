/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'heading-clr': 'hsl(220, 13%, 13%)',
        main: 'hsl(219, 9%, 45%)',
        'nav-items-color': 'hsl(220, 14%, 75%)',
        'accent-clr': 'hsl(26, 100%, 55%)',
        'accent-light': 'hsl(25, 100%, 94%)',
      },
      fontFamily: {
        'ff-main': ['Kumbh Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
