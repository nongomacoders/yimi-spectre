const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin=require('copy-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.html$/,
      use: [{
        loader: "html-loader",
        options: {
          minimize: true
        }
      }]
    }]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new CopyWebpackPlugin([

      { from: 'src/assets', to: 'assets' },
      { from: 'src/css' , to : 'css'}
     

  ]), 
    new HtmlWebPackPlugin({template: './src/index.html'})
  ]
};