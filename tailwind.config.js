module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        blur: "inset 20px 20px white"
      },
      animation: {
        "fade-in": "wiggle 400ms linear 1"
      },
      keyframes: {
        wiggle: {
          "0%, ": { color: "white" },
          "50%": { "color": "black" }
        }
      }
    }
  },
  plugins: []
};
