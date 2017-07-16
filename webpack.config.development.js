var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './client/index.js',
  output: {
    filename: 'client.js',
    path: path.resolve(__dirname, 'dist', 'javascripts'),
    publicPath: 'http://localhost:8081/assets/'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: 'http://localhost:8081/assets/',
    inline: true,
    port: 8081,
    host: 'localhost',
    stats: {
      colors: true
    }
  }
};
