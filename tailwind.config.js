/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base : '#F7F7F7',
        primary: '#2E3196',    
        secondary: '#FD5D14',  
        accent: '#F4F9FD',
        blue: {
          base: '#00186F',
        },
        gray : {
          base: '#6F6F6F',
        }
      },
    },
  },
  plugins: [],
}
