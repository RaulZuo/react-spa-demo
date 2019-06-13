const path = require('path');
let polyfills = require.resolve('./lib/polyfills.js');

module.exports = {
  entry: {
    home: [ polyfills, './src/pages/home/index.jsx' ],
  },
  output: {
    path: path.resolve(__dirname, '..', 'build'),
    filename: '[name].js',
    chunkFilename:'[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {},
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }, {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      }
    ],
  },
  plugins: [],
};
