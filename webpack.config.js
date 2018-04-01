const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ExtraneousFileCleanupPlugin = require('webpack-extraneous-file-cleanup-plugin');
const autoprefixer = require('autoprefixer')

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
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader', options: {
              plugins() {
                return [
                  autoprefixer({
                    browsers: ['last 2 versions']
                  })
                ]
              }
            }
          },
          'sass-loader'
        ]
      }
    ]
  }
};
