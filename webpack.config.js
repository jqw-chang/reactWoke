const webpack = require ('webpack');

module.exports = {
 entry: __dirname + "/src/App.jsx",
 output: {
     path: __dirname + "/dist",
     filename: "bundle.js"
 },
 module: {
     loaders: [{
         test: /\.jsx?/, 
         loader:"babel-loader",
         exclude:/node_modules/
     }]
 }
};