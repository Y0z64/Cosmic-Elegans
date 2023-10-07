import { type Config } from "tailwindcss";



export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'spacebg' : "url('/background.jpg')",
        'page1' : "url('/screen_1.jpg')",
        'page2' : "url('/screen_2.jpg')",
      },
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        Lato: ['Lato', 'sans-serif'],
      }
    },
  },
  plugins: [],
} satisfies Config;
