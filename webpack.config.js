/* eslint-disable */
 const NODE_ENV = process.env.NODE_ENV || 'development'

 var path = require('path');
 const { resolve } = require('path');

 var webpack = require('webpack');

 var root = path.join(process.cwd(), 'src');

 module.exports = {
   context: resolve(__dirname, 'src'),

   entry: [
     'react-hot-loader/patch',
     'webpack-dev-server/client?http://localhost:8080',
     'webpack/hot/only-dev-server',
     "./index.jsx"
   ],

   output: {
     filename: 'bundle.js',
     path: resolve(__dirname, 'dist'),
     publicPath: '/'
   },

   devtool: 'inline-source-map',

   devServer: {
     hot: true,
     contentBase: resolve(__dirname, 'dist'),
     disableHostCheck: true,
     publicPath: '/'
   },

   module: {
     rules: [
       {
         test: /\.jsx?$/,
         use: [ "babel-loader", ],
         exclude: /node_modules/
       },
       {
         test: /\.(woff|woff2)$/,
         use: {
           loader: 'url-loader',
         },
       }, {
         test: /\.(html|ttf|eot|svg)$/,
         use: {
           loader: 'file-loader',
         },
       },
       {
         test: /\.css$/,
         use: [
           {
             loader: 'style-loader',
           },
           {
             loader: 'css-loader',
             options: {
               importLoaders: 1,
               sourceMap: true,
             },
           },
         ],
       },
     ]
   },

   resolve: {
     extensions: [".js", ".jsx"],
     modules: [
       "node_modules",
       './src',
       path.resolve(__dirname, "dist")
     ]
   },

   plugins: [
     new webpack.DefinePlugin({
       'process.env': {
         'NODE_ENV': JSON.stringify(NODE_ENV)
       }
     }),

     new webpack.HotModuleReplacementPlugin()
   ]
 };
