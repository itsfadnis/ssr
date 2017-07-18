var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: './client/index.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('css-loader!sass-loader')
    }]
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ],
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
