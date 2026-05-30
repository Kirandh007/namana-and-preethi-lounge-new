export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Cinzel", "serif"],
        sans: ["Inter", "sans-serif"]
      },
      colors: {
        gold: "#D4AF37",
        espresso: "#3E2723",
        cream: "#FFF8E1",
        blackwood: "#1A1A1A",
        saffron: "#FF9800"
      },
      boxShadow: {
        premium: "0 22px 60px rgba(0,0,0,.28)",
        gold: "0 16px 36px rgba(212,175,55,.28)"
      }
    }
  },
  plugins: []
};
