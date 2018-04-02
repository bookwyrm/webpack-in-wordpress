const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: {
    bundle: './src/js/index.js',
    style: './src/sass/style.scss'
  },
  plugins: [
    new CleanWebpackPlugin(['dist'])
  ]
}
