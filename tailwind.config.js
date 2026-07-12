/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Mono"', "monospace"],
        serif: ['"Space Mono"', "monospace"],
        mono: ['"Space Mono"', "monospace"],
        display: ['"Anton"', "sans-serif"],
      },
      colors: {
        lsc: {
          navy: "#003767",
          red: "#C8102E",
          gold: "#FDB515",
        },
        bio: {
          cyan: "#38E1FF",
          pulse: "#FF3B6B",
        },
      },
    },
  },
  plugins: [],
};
