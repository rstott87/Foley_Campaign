module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        'blur': 'inset 20px 20px white',
      },
      backgroundImage: theme => ({
        'hero-pattern': "url('src/images/Dave_headshot.jpeg')",
        'footer-texture': "url('/img/footer-texture.png')",
      })
    },
  },
  plugins: [],
}
