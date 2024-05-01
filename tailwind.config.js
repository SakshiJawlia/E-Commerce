/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 5px 15px rgba(0,0,0,0.6)',
        'cardShadow':'10px 10px 5px whitesmoke , -10px -10px 5px whitesmoke',
        'cardShadowHover':'5px 5px 5px whitesmoke, -5px -5px 5px whitesmoke',
      },
      transitionProperty:{
        'transition':'0.3s ease',
      },
    },
  },
  plugins: [],
}

