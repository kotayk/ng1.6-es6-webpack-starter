const path = require('path');
const webpack = require('webpack');
const ROOT = path.resolve( __dirname, 'src' );
const DESTINATION = path.resolve( __dirname, '.tmp' );

/**
 * Webpack Plugins
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');

module.exports = {
    context: ROOT,

    resolve: {
        extensions: ['.js']
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'eslint-loader',
                enforce: 'pre',

            },

            {
                test: /\.js$/,
                exclude: [ /node_modules/ ],
                use: [
                    'babel-loader',
                ]
            },

            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },

            {
                test: /\.(jpg|png|gif|svg|woff|woff2|eot|ttf)$/,
                use: 'file-loader'
            },

            {
                test: /.html$/,
                exclude: /index.html$/,
                use: 'html-loader'
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'AngularJS - Webpack',
            template: 'index.html',
            inject: true
        }),

    ],

    devtool: 'cheap-module-source-map',

    devServer: {
        historyApiFallback: {
            index: 'index.html'
        },
        contentBase: path.join(__dirname, ".tmp"),
        compress: true,
        port: 9000
    },

    entry: './index.js',
    output: {
        path: DESTINATION,
        filename: 'index.js'
    },
};
