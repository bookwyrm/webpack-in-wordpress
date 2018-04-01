const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ExtraneousFileCleanupPlugin = require('webpack-extraneous-file-cleanup-plugin');
const autoprefixer = require('autoprefixer')

module.exports = {
  entry: {
    bundle: './src/js/index.js',
    style: './src/sass/style.scss'
  },
  devtool: 'inline-source-map',
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
          'css-loader?sourceMap=true',
          {
            loader: 'postcss-loader', options: {
              sourceMap: true,
              plugins() {
                return [
                  autoprefixer({
                    browsers: ['last 2 versions']
                  })
                ]
              }
            }
          },
          'sass-loader?sourceMap=true'
        ]
      }
    ]
  }
};
