const path = require('path');
const webpack = require('webpack-stream').webpack;

module.exports = {
  devtool: 'cheap-module-inline-source-map',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx$/,
      loaders: ['babel-loader'],
      include: path.join(__dirname, '../../js'),
      exclude: /node_modules/
    }]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: true
  }
};

