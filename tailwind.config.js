/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#f5f3ee",
        "paper-soft": "#f0ede7",
        ink: "#22201c",
        line: "#d8d2c8",
      },
      fontFamily: {
        display: ['"Newsreader"', "serif"],
        body: ['"Instrument Sans"', "sans-serif"],
      },
      transitionTimingFunction: {
        "soft-out": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
