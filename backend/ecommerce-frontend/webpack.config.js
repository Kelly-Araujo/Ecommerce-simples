const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.js', '.json'],
    fallback: {
      path: require.resolve('path-browserify'),  // Certifique-se de que esta linha está aqui
      fs: require.resolve('browserify-fs'),
      stream: require.resolve('stream-browserify'),
      querystring: require.resolve('querystring-es3'),
      http: require.resolve('stream-http'),
      net: require.resolve('net-browserify'),
      crypto: require.resolve('crypto-browserify'),
      zlib: require.resolve('browserify-zlib'),
      buffer: require.resolve('buffer')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    })
  ],
  mode: 'development'
};