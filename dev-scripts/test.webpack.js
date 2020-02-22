const path = require('path');

module.exports = {
    mode : 'development',
    entry : {
        main : './src/index.test.js'
    },
    //output - outputs a main js file
    output : {
        filename : '[name].[contentHash].test.js',
        path : path.resolve(__dirname, 'test')
    },

    module : {
        rules : [
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
};