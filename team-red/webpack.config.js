require('dotenv').config();
const path = require('path');
const Dotenv = require('dotenv-webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HashOutput = require('webpack-plugin-hash-output');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: path.join(__dirname, 'src', 'client', 'index.js'),
  module: {
    rules: [{
      test: /\.js?$/,
      include: path.join(__dirname, 'src'),
      loader: 'babel-loader'
    }, {
      test: /\.css$/,
      loaders: ['style-loader', 'css-loader']
    }, {
      test: /\.(png|svg|jpg|gif)$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: '/assets/'
        }
      }]
    }]
  },
  externals: {
    react: ['React'],
    'react-dom': ['ReactDOM']
  },
  plugins: [
    new Dotenv(),
    new CleanWebpackPlugin(path.join(__dirname, 'dist')),
    new HtmlWebpackPlugin({
      teamRed: '<%- teamRed %>',
      spaceships: '<%- spaceships %>',
      template: path.join(__dirname, 'src', 'client', 'public', 'index.ejs'),
      filename: 'index.ejs'
    }),
    new HashOutput()
  ],
  output: {
    filename: '[name].[chunkhash].js',
    path: path.join(__dirname, 'dist'),
    publicPath: `${process.env.PUBLIC_PATH}:${process.env.PORT}`
  }
};
