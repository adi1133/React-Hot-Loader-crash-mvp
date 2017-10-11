const webpack = require('webpack');
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  target: 'web',
  entry: [
    'react-hot-loader/patch',
    './main.jsx',
  ],
  output: {
    path: path.join(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: ['react-hot-loader/babel'],
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlPlugin({
      template: 'index.ejs',
    }),
    new webpack.NamedModulesPlugin(),
  ],
};
