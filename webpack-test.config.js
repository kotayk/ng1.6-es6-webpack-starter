const path = require('path');
const webpack = require('webpack');
const ROOT = path.resolve( __dirname, 'src' );
const DESTINATION = path.resolve( __dirname, 'dist' );

/**
 * Webpack Plugins
 */
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
                exclude: [ /node_modules/ ],
                use: 'babel-loader'
            },
            
            {
                test: /\.js$/,
                exclude: [ 
                    /node_modules/,
                    /\.spec\.js$/
                ],
                use: 'istanbul-instrumenter-loader',
                enforce: 'post'
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
                use: 'html-loader'
            }
        ]
    },

    plugins: [


    ],

    devtool: 'cheap-module-source-map',
    devServer: {}
};
