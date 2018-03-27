const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ExtraneousFileCleanupPlugin = require('webpack-extraneous-file-cleanup-plugin');

module.exports = {
  entry: {
    bundle: './src/js/index.js',
    style: './src/sass/style.scss'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
    new ExtraneousFileCleanupPlugin({
      extensions: [ '.js' ],
      minBytes: 4000 // Minimum bytes to keep
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  }
};
