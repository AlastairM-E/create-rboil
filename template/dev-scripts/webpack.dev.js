const path = require('path');
const common = require('./webpack.common');
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge(common, {
    mode : 'development',
    output : {
        filename : '[name].[contentHash].bundle.js',
        path : path.resolve(__dirname, 'dist'),
    },
    module : {
    rules : [
            {
                test : /\.scss$/,
                use : ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-react',
                        ],
                        plugins : [
                            '@babel/plugin-syntax-dynamic-import',
                        ],
                    },
                },
            },
        ],
    },
});