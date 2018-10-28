var webpack = require('webpack');
var UnminifiedWebpackPlugin = require("unminified-webpack-plugin");
var path = require("path");
var VueLoaderPlugin = require("vue-loader/lib/plugin");

var config = {
  entry: {
    jsonview: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].min.js",
    library: "Jsonview",
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.css$/,
        loader: ["style-loader", "css-loader", "postcss-loader"]
      }
    ]
  },
  devtool: "#source-map",
  plugins: [
    new VueLoaderPlugin(),
    new UnminifiedWebpackPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      sourceMap: true
    })
  ]
};

module.exports = config;