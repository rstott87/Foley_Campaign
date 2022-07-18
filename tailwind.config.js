module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        blur: "inset 20px 20px white"
      },
      animation: {
        "fade-in": "wiggle 400ms linear 1",
        "fade-in2": "wiggle2 300ms linear 1"
      },
      keyframes: {
        wiggle: {
          "0% ": { color: "gray" },
          "100%": { color: "white" }
        },
        wiggle2: {
          "0% ": { color: "gray" },
          "100%": { color: "white" }
        }
      }
    }
  },
  plugins: []
};
