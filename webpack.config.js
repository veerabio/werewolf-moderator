const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const srcPath = path.join(__dirname, 'src');
const buildPath = path.join(__dirname, 'docs');

module.exports = {
  context: srcPath,
  entry: path.join(srcPath, 'js', 'client.js'),
  output: {
      path: buildPath,
      filename: "bundle.js"
  },
  module: {
      loaders: [
          {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: {
              presets: ['react', 'es2015']
            }
          },
          { test: /\.json$/, loader: "json" }
      ]
  },
  plugins:[
     new CopyWebpackPlugin([
       {from: 'index.html'},
       {from: 'html/vendors', to: 'vendors'},
     ])
  ]
};