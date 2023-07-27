/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'textColor': '#324FA2',
        'orange1040': '#FF602E',
        'darkblue': '#392C7D',
        'lineblue': '#324FA2',
        'green1920': '#1E7115',
        'colortextcategory': '#392C7D',

      },
      screens: {
        '1041': '1041px',
        '1920': '1920px',
        '1618': '1618px',
        '1162': '1162px',
        '1040': '1040px',
        '900': '900px',
        '768': '768px',
        '700': '700px',
        '600': '600px',
        '460': '460px',
        '390': '390px',
      },
    }
  },
  plugins: []
}
