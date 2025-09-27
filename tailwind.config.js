/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        maple: "#b75a3a",
        ember: "#d97c4a",
        amber: "#fdbb6f",
        moss: "#354f52",
        mist: "#efe7dc",
        bark: "#2f2621",
      },
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        body: ['"Inter"', "sans-serif"],
      },
      backgroundImage: {
        "fall-canopy":
          'linear-gradient(rgba(47, 38, 33, 0.35), rgba(47, 38, 33, 0.55)), url("https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2000&q=80")',
        "fall-paper": 'radial-gradient(circle at 1px 1px, rgba(217, 124, 74, 0.12) 1px, transparent 0)',
      },
      boxShadow: {
        leaf: "0 18px 45px -20px rgba(55, 25, 12, 0.55)",
        "leaf-soft": "0 14px 30px -18px rgba(55, 25, 12, 0.4)",
      },
    },
  },
  plugins: [],
};
