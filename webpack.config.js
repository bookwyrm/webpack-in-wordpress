module.exports = {
  entry: './src/js/index.js',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'css-loader' ]
      }
    ]
  }
};
