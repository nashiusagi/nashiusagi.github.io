import type { Config } from 'tailwindcss'

export default {
  content: [],
  theme: {
    fontFamily: {
      sans: ["Avenir", "Helvetica", "Arial", "sans-serif"],
      zenKurenaido: ["Zen Kurenaido", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
} satisfies Config;
