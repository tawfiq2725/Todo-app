/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      fontFamily:{
        body:["Poppins","sans-serif"]
      },
    },
  },
  plugins: [],
}

