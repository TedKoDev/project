/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: '#ff6347',
      },
      backgroundImage: {
        banner: "url('../public/images/banner.jpg')",
      }
    },
  },
  plugins: [],
}

