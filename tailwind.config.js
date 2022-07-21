module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        blur: "inset 20px 20px white"
      },
      animation: {
        "fade-in": "fade 700ms linear 1",
        "fade-in2": "fade2 700ms linear 1"
      },
      keyframes: {
        fade: {
          "0%,100% ": { color: "white" },
          "50%": { color: "gray" }
        },
       fade2: {
          "0% ": { color: "gray" },
          "100%": { color: "white" }
        }
      }
    }
  },
  plugins: []
};
