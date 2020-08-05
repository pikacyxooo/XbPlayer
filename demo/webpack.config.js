const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',

  entry: path.resolve(__dirname, 'index.js'),

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]_[hash].js',
    publicPath: '/',
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
    }),
  ],

  // devServer: {
  //   compress: true,
  //   contentBase: path.resolve(__dirname, '..', 'demo'),
  //   open: true,
  // },
};
