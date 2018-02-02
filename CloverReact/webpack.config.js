const webpack = require('webpack');
const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');

const bundleFolder = "wwwroot/bundle/";

module.exports = {
    entry: path.join(__dirname, 'wwwroot', 'js', 'clover-react', 'app-client.js'),
    output: {
            path: path.resolve(__dirname, bundleFolder),
        filename: 'clover-react.js'
    },
    module: {
        loaders: [{
            test: path.join(__dirname, 'wwwroot'),
            loader: "babel-loader",
            query: {
                presets: [
                    'es2015',
                    'react'
                ]
            }
        }, { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new CleanWebpackPlugin([bundleFolder])
        /*  new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false },babel-loader
            mangle: false,
            sourcemap: true,
            beautify: true,
            dead_code: true
        })*/
    ]
};