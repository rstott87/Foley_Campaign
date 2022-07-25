module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        blur: "inset 20px 20px white"
      },
      animation: {
        "fade-in": "fade 700ms linear 1",
        "fade-in2": "fade2 700ms linear 1",
        "slide-ltr": "slide 100ms linear 1"
      },
      keyframes: {
        fade: {
          "0%,100% ": { color: "white" },
          "50%": { color: "gray" }
        },
       fade2: {
          "0% ": { color: "gray" },
          "100%": { color: "white" }
        },
        "slide" : {
          "0%" : { "margin-left": "100%"},
          "100%" : { "margin-left": "50%"}
        }
      }
    }
  },
  plugins: []
};
