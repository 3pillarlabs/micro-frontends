require('dotenv').config();
const path = require('path');
const Dotenv = require('dotenv-webpack');
const WebpackShellPlugin = require('webpack-shell-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: path.join(__dirname, 'src', 'server.js'),
  target: 'node',
  module: {
    rules: [{
      test: /\.js?$/,
      include: path.join(__dirname, 'src'),
      loader: 'babel-loader'
    }, {
      test: /\.css$/,
      loader: 'ignore-loader'
    }, {
      test: /\.(png|svg|jpg|gif)$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: '/assets/',
          emitFile: false
        }
      }]
    }]
  },
  externals: [
    nodeExternals()
  ],
  plugins: [
    new Dotenv(),
    new CleanWebpackPlugin(path.join(__dirname, 'dist', 'server')),
    new WebpackShellPlugin({
      onBuildEnd: ['nodemon --watch dist/client dist/server/server.js']
    })
  ],
  output: {
    filename: 'server.js',
    path: path.join(__dirname, 'dist', 'server'),
    publicPath: `${process.env.PUBLIC_PATH}:${process.env.PORT}`
  }
};
