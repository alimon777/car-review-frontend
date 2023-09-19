/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { //custom font style
        'Outfit-Light': "Outfit-Light",
        'Outfit-Regular': "Outfit-Regular",
        'Outfit-Medium': "Outfit-Medium",
        'Outfit-Bold': "Outfit-Bold",
        "Ethnocentric": "Ethnocentric",
        "Ferretface": "FerretFace",
        "heading": "heading"
      },
      backgroundImage: {
        'login-signup': "url('/src/assets/bg.jpeg')",
      }
    },
  },
  plugins: [],

}