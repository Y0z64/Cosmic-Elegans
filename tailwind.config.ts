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
        sans: ['var(--font-inter)'],
        mono: ['var(--font-roboto-mono)'],
      },
    },
  },
  plugins: [],
} satisfies Config;
