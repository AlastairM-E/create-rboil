#!/usr/bin/env node
const { execSync } = require('child_process');
const path = require('path');
const process = require('process');

const { readSubFilesFrom } = require('./cli/readSubFilesFrom');
const { outputDirContentOf } = require('./cli/outputDirContentOf');

// const cmd = `
//     # basic npm structure
//     $PWD = pwd;

//     # yarn init -y

//     # yarn add --dev style-loader css-loader node-sass sass-loader html-loader file-loader
//     # yarn add --dev  webpack webpack-cli webpack-merge webpack-dev-server
//     # yarn add --dev mini-css-extract-plugin clean-webpack-plugin  html-webpack-plugin
//     # yarn add --dev @babel/core @babel/preset-env @babel/preset-react babel-loader
//     # yarn add react react-dom
//     # yarn add --dev jest
// `;

// execSync(cmd);

const templateFiles = readSubFilesFrom('../template');
outputDirContentOf(templateFiles, '../template', process.cwd())


