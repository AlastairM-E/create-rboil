#!/usr/bin/env node
const { exec, execSync } = require('child_process');
const process = require('process');
const fs = require('fs');
const path = require('path');

const { readSubFilesFrom, outputDirContentOf } = require('create-rboil-utils');

exec('yarn --version', (err, stdout) => {
  if (err) {
      throw err;
  };

  const cmdInit = stdout ? 'yarn init -y' : 'npm init -y'; 
  const addDevDependencies = stdout ? 'yarn add --dev' : 'npm install --save-dev';
  const addProductionDependencies = stdout ? 'yarn add' : 'npm install';

  // CLI part

  const devDependencies = [
    'webpack webpack-cli webpack-merge webpack-dev-server clean-webpack-plugin html-webpack-plugin',
    'style-loader css-loader node-sass sass-loader mini-css-extract-plugin', 
    'html-loader file-loader', 
    '@babel/core @babel/preset-env @babel/preset-react @babel/plugin-syntax-dynamic-import @babel/plugin-transform-runtime babel-loader',
    'jest @testing-library/react',
    'create-rboil-utils'
  ];

  const productionDependecies = 'react react-dom';

  execSync(cmdInit);

  devDependencies.forEach((yarnPackage, index, source) =>{
    console.log(`installing ${yarnPackage}`);
    console.log(`${index + 1}/${source.length}`);
    execSync(`${addDevDependencies} ${yarnPackage}`);
  });

  console.log(`installing ${productionDependecies}`);
  execSync(`${addProductionDependencies} ${productionDependecies}`);

  //output documents
  const pathOfCmd = process.cwd().split('/')
  const nameOfCmdDir = pathOfCmd[pathOfCmd.length - 1].toLowerCase();

  const templateFiles = readSubFilesFrom(path.join(__dirname, 'template'));

  outputDirContentOf(templateFiles, path.join(__dirname, 'template'), `${process.cwd()}`);


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
      "webpack-merge": "^4.2.2",
      "@testing-library/react": "^9.4.1"
    },
    "dependencies": {
      "react": "^16.12.0",
      "react-dom": "^16.12.0"
    },
    "scripts": {
      "start": "webpack-dev-server --config ./dev-scripts/webpack.dev.js --open",
      "build": "webpack --config ./dev-scripts/webpack.prod.js", 
      "test" : "jest ./src"
    },
    "jest": {
      "transform": {
        "^.+\\\\.[t|j]sx?$": "babel-jest"
      }
    }
  }
  `);

  console.log('complete');

});
