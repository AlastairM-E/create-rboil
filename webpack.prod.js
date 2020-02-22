const path = require('path');
const common = require('./webpack.common');
const webpackMerge = require('webpack-merge');
const { CleanWebpackPlugin, } = require('clean-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = webpackMerge(common, {
    mode : 'production',
    output : {
        filename : '[name].[contentHash].bundle.js',
        path : path.resolve(__dirname, 'dist'),
    },
    optimization : {
        minimizer : [
            new TerserWebpackPlugin(),
            new HtmlWebpackPlugin({ 
                emplate : './src/template.html',
                minify : {
                    removeAttributeQuotes : true,
                    collapseWhitespace : true,
                    removeComments : true,
                },
            }),
        ],
    },
    module : {
        rules : [
            {
                test : /\.scss$/,
                use : [MiniCSSExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                        ],
                        plugins : [
                            '@babel/plugin-syntax-dynamic-import',
                            '@babel/plugin-transform-runtime',
                        ],
                    },
                },
            },
        ],
    },

    plugins : [
        new MiniCSSExtractPlugin({ filename : '[name].[contentHash].css', }),
        new CleanWebpackPlugin()
    ]
});