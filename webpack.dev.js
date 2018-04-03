const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ExtraneousFileCleanupPlugin = require('webpack-extraneous-file-cleanup-plugin');
const autoprefixer = require('autoprefixer')
const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style-dev.css'
    }),
    new ExtraneousFileCleanupPlugin({
      extensions: [ '.js' ],
      minBytes: 7000 // Minimum bytes to keep
    }),
    new LiveReloadPlugin()
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
});
