module.exports = {
  entry: {
    bundle: './src/js/index.js',
    style: './src/css/style.css'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'css-loader' ]
      }
    ]
  }
};
