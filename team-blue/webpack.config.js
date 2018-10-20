require('dotenv').config();
const path = require('path');
const Dotenv = require('dotenv-webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HashOutput = require('webpack-plugin-hash-output');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: path.join(__dirname, 'src', 'client', 'index.js'),
  module: {
    rules: [{
      test: /\.js?$/,
      include: path.join(__dirname, 'src'),
      loader: 'babel-loader'
    }]
  },
  plugins: [
    new Dotenv(),
    new CleanWebpackPlugin(path.join(__dirname, 'dist')),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'client', 'public', 'index.ejs'),
      filename: 'index.ejs'
    }),
    new HashOutput(),
    new CopyWebpackPlugin([
      {
        from: 'src/client/assets/*',
        to: path.join(__dirname, 'dist', 'assets'),
        flatten: true
      }
    ])
  ],
  output: {
    filename: '[name].[chunkhash].js',
    path: path.join(__dirname, 'dist'),
    publicPath: `${process.env.PUBLIC_PATH}:${process.env.PORT}`
  }
};
