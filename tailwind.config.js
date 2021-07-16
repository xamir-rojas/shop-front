 
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    fontFamily:{
      sans:['Josefin Sans', 'sans-serif'],
      display:['Bungee', 'cursive'],
    },
    extend: {
      animation: ['motion-safe'],
    },
  },
  variants: {
    opacity: ['responsive', 'hover', 'focus', 'disabled'],
  },
  plugins: [],
}

