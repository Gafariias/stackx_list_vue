/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{html,js,vue"],
  theme: {
    extend: {},
    colors: {
      'white-900': '#FFFFFF',
      'white-600': '#F0F0F0',
      'white-400': '#EDEDED',
      
      'grey-300': '#C6C6D3',
      'grey-400': '#A1A1AA',
      
      'dark-300': '#179C17',
      'dark-400': '#116F11',
      'dark-500': '#0F4F0F',
      'dark-600': '#0F360F',
      'dark-700': '#091909',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Merriweather', 'serif']
    }
  },
  plugins: [],
}
