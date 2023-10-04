/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobile': '320px',
      'tablet': '768px',
      'laptop': '1024px',
      'desktop': '1440px',
    },
    extend: {
      colors: {
        'app-blue': {
          100: '#003049',
        },
        'app-orange': {
          100: '#f77f00',
        },
      },
      backgroundImage: {
        'home-main-background': "url('/src/assets/img/backgrounds/main-background-home.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
}

