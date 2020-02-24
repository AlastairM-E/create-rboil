#!/usr/bin/env node
const { execSync } = require('child_process');
const { argv } = require('process');

const cmd = `
    # basic npm structure
    $PWD = pwd;

    # yarn init -y

    # yarn add --dev style-loader css-loader node-sass sass-loader html-loader file-loader
    # yarn add --dev  webpack webpack-cli webpack-merge webpack-dev-server
    # yarn add --dev mini-css-extract-plugin clean-webpack-plugin  html-webpack-plugin
    # yarn add --dev @babel/core @babel/preset-env @babel/preset-react babel-loader
    # yarn add react react-dom
    # yarn add --dev jest

    mkdir dev-scripts
    mkdir src
    mkdir public
`;

execSync(cmd);

