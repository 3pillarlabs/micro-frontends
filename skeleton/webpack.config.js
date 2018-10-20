require('dotenv').config();
const path = require('path');
const webpack = require('webpack');
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
      use: ['style-loader', 'css-loader']
    }]
  },
  plugins: [
    new CleanWebpackPlugin(path.join(__dirname, 'dist')),
    new HtmlWebpackPlugin({
      fragments: {
        blue: '<%- teamBlue %>',
        red: '<%- teamRed %>',
        green: '<%- teamGreen %>'
      },
      template: path.join(__dirname, 'src', 'client', 'public', 'index.ejs'),
      filename: 'index.ejs',
      inject: false
    }),
    new HashOutput(),
    new webpack.ProvidePlugin({
      react: 'React',
      'react-dom': 'ReactDOM'
    })
  ],
  output: {
    filename: '[name].[chunkhash].js',
    path: path.join(__dirname, 'dist'),
    publicPath: `${process.env.PUBLIC_PATH}:${process.env.PORT}`
  }
};
