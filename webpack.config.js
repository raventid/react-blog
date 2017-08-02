/* eslint-disable */
const path = require('path');

const webpack = require('webpack');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.jsx'
  ],

  output: {
      path: path.join(process.cwd(), 'dist'),
      publicPath: '/assets/',
      filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?importLoaders=1'
        ]
      },
      { test: /\.(eot|png|ttf|svg|woff|woff2)$/, loader: 'url-loader' } 
    ]
  },

  resolve: {
      extensions: [".js", ".jsx"],
      modules: [
          "node_modules",
          './src',
          path.resolve(__dirname, "src")
      ]
  },


  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
