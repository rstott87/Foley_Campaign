module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        'blur': 'inset 20px 20px white',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite reverse',
      }
    },
  },
  plugins: [],
}
