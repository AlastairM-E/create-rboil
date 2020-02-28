#!/usr/bin/env node
const { execSync } = require('child_process');
const process = require('process');
const fs = require('fs');
const path = require('path');

const { readSubFilesFrom, outputDirContentOf } = require('create-rboil-utils');

const cmd = `
    # basic npm structure
    $PWD = pwd;

    yarn init -y

    yarn add --dev style-loader css-loader node-sass sass-loader html-loader file-loader
    yarn add --dev  webpack webpack-cli webpack-merge webpack-dev-server
    yarn add --dev mini-css-extract-plugin clean-webpack-plugin  html-webpack-plugin
    yarn add --dev @babel/core @babel/preset-env @babel/preset-react @babel/plugin-transform-runtime @babel/plugin-syntax-dynamic-import babel-loader
    yarn add --dev jest
    yarn add --dev @testing-library/react
    yarn add --dev create-rboil-utils
    yarn add react react-dom
`;

const pathOfCmd = process.cwd().split('/')
const nameOfCmdDir = pathOfCmd[pathOfCmd.length - 1].toLowerCase();

const templateFiles = readSubFilesFrom(path.join(__dirname, 'template'));

outputDirContentOf(templateFiles, path.join(__dirname, 'template'), `${process.cwd()}`);

execSync(cmd);

fs.writeFileSync(`${process.cwd()}/.gitignore`, 
`# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/dist
/.pnp
/yarn.lock
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*`
);

fs.writeFileSync(`${process.cwd()}/package.json`, `{
  "name": "${nameOfCmdDir}",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "devDependencies": {
    "@babel/core": "^7.8.4",
    "@babel/plugin-syntax-dynamic-import": "^7.8.3",
    "@babel/plugin-transform-runtime": "^7.8.3",
    "@babel/preset-env": "^7.8.4",
    "@babel/preset-react": "^7.8.3",
    "babel-loader": "^8.0.6",
    "clean-webpack-plugin": "^3.0.0",
    "create-rboil-utils": "^1.1.0",
    "css-loader": "^3.4.2",
    "file-loader": "^5.1.0",
    "html-loader": "^0.5.5",
    "html-webpack-plugin": "^3.2.0",
    "jest": "^25.1.0",
    "mini-css-extract-plugin": "^0.9.0",
    "node-sass": "^4.13.1",
    "sass-loader": "^8.0.2",
    "style-loader": "^1.1.3",
    "webpack": "^4.41.6",
    "webpack-cli": "^3.3.11",
    "webpack-dev-server": "^3.10.3",
    "webpack-merge": "^4.2.2"
  },
  "dependencies": {
    "react": "^16.12.0",
    "react-dom": "^16.12.0"
  },
  "scripts": {
    "start": "webpack-dev-server --config ./dev-scripts/webpack.dev.js --open",
    "build": "webpack --config ./dev-scripts/webpack.prod.js", 
  },
  "jest": {
    "transform": {
      "^.+\\\\.[t|j]sx?$": "babel-jest"
    }
  }
}
`);

//testing - "test": "node ./dev-scripts/bundleTests.js && jest ./test && rm -rf test/*"
