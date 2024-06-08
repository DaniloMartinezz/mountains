/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        header: {
          whiteHeader:'#FFFFFF'
        },
        textColor: {
          yellow: '#FBD784',
          whiteMain: '#FFFFFF',
          dark: '#4A47CC',
        },
      },
      fontFamily: {
        cactus: ['"Cactus Classical Serif"', 'serif'],
        inter: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
