'use strict';
var path = require('path');

module.exports = {
  entry: {
    app: [
      './index.js'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/public/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
