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
    mkdir dev-scripts
    cp dev-scripts/webpack.common.js "$PWD"
    cp dev-scripts/webpack.dev.js "$PWD"
    cp dev-scripts/webpack.prod.js "$PWD"
    cp dev-scripts/.gitignore "$PWD"
        
    # basic setup for react to build a basic app
    mkdir src
    cp src/index.js "$PWD/src"
    cp src/App.js "$PWD/src"
    cp src/template.html "$PWD/src"
    cp src/app.test.js "$PWD/src"
`;

const rboil = exec(cmd, (error) => { 
    console.log(argv);
    if (error) {
        throw error;
    };
});

exec('yarn --version', (error, stdout) => {
    if (error) {
        throw error;
    };

    // if (stdout === null) {
    //     return rboil('npm', npmOptions);
    // };

    // return rboil('yarn', yarnOptions);
    return rboil;
});

