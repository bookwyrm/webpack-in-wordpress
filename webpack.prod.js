const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ExtraneousFileCleanupPlugin = require('webpack-extraneous-file-cleanup-plugin');
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style-prod.css'
    }),
    new ExtraneousFileCleanupPlugin({
      extensions: [ '.js' ],
      minBytes: 600 // Minimum bytes to keep
    })
  ],
  module: {
    rules: [
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
                  }),
                  cssnano()
                ]
              }
            }
          },
          'sass-loader?sourceMap=true'
        ]
      }
    ]
  }
});

