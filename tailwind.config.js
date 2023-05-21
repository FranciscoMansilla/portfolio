// @type {import('tailwindcss').Config} 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        'layout': '80px 1.5fr .2fr 1fr 200px',
        'layout-lg': '80px 1.5fr .2fr 1fr 200px',
        'layout-mobile': '80px 1.5fr .2fr .5fr 150px',

      },
      colors:{
        'great-blue': {  DEFAULT: '#2A669F',  '50': '#F7FDFD',  '100': '#DCF4F6',  '200': '#A8DCE8',  '300': '#74BDDA',  '400': '#3F96CC',  '500': '#2A669F',  '600': '#234B83',  '700': '#1B3366',  '800': '#14204A',  '900': '#0C102E'},
      },
      backgroundImage: {
        'theme-1': "url('/src/assets/bgFran.png')",
        'theme-2': "url('/src/assets/bg1.jpg')",
        'theme-3': "url('/src/assets/bg1Dark.png')",
        'gradient1': "url('/src/assets/gif/gradient.gif')"
      },
      fontFamily: {
        'F-Medium': ['F-Medium'],
        'F-Bold': ['F-Bold'],
        'F-SemiBold': ['F-SemiBold'],
        'F-Italic': ['F-Italic'],
        'F-LightItalic': ['F-LightItalic'],
        'F-Light' : ['F-Light'],
        'F-Logo' : ['FredokaOne-Regular']
      },
      screens:{
        'iphone': '500px'
      },
    },
  },
  plugins: [],
}
