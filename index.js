#!/usr/bin/env node
const { exec } = require('child_process');
const { argv } = require('process');

const cmd = `
    # basic npm structure
    $PWD = pwd;

    yarn init -y

    yarn add --dev style-loader css-loader node-sass sass-loader html-loader file-loader
    yarn add --dev  webpack webpack-cli webpack-merge webpack-dev-server
    yarn add --dev mini-css-extract-plugin clean-webpack-plugin  html-webpack-plugin
    yarn add --dev @babel/core @babel/preset-env @babel/preset-react babel-loader
    yarn add react react-dom
    yarn add --dev jest

    # webpack and babel basic build
    cp /Users/alastair/Documents/shell__commands/webpack.common.js "$PWD"
    cp /Users/alastair/Documents/shell__commands/webpack.dev.js "$PWD"
    cp /Users/alastair/Documents/shell__commands/webpack.prod.js "$PWD"
    cp /Users/alastair/Documents/shell__commands/.gitignore "$PWD"
        
    # basic setup for react to build a basic app
    mkdir src
    cp /Users/alastair/Documents/shell__commands/src/index.js "$PWD/src"
    cp /Users/alastair/Documents/shell__commands/src/App.js "$PWD/src"
    cp /Users/alastair/Documents/shell__commands/src/template.html "$PWD/src"
    cp /Users/alastair/Documents/shell__commands/src/app.test.js "$PWD/src"
`;

exec(cmd, (error) => { 
    console.log(argv);
    if (error) {
        throw error
    };
});