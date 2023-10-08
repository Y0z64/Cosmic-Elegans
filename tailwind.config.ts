import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'spacebg' : "url('/complete.png')",
        'frame1' : "url('/frame1.png')",
        'frame2' : "url('/frame2.png')",
        'frame3' : "url('/frame3.png')",
      },
      fontFamily: {
        'oswald': ['var(--font-oswald)', "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
