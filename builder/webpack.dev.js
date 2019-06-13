const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: '#inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '..', 'build'),
    historyApiFallback: true,
    port: 9000,
    hot: true,
    open:true,
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', 'example', 'index.html')
    }),
  ],
});
