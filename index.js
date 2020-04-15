#!/usr/bin/env node
const { exec, execSync } = require('child_process');
const process = require('process');
const fs = require('fs');
const copydir = require('copy-dir');
const { packageJson } = require('./manual_templates');

const [nameOfFolder] = process.argv.splice(2);
const currentDir = `${process.cwd()}/${nameOfFolder}`;

exec('yarn --version', err => {

  console.log('This may take a couple of minutes, sorry for the delay');

  const cmdInit = !err ? 'yarn init -y' : 'npm init -y';
  const addDevDependencies = !err ? 'yarn add --dev' : 'npm install --save-dev';
  const addProductionDependencies = !err ? 'yarn add' : 'npm install';

  copydir.sync('./template', currentDir);
  console.log(`cding to ${nameOfFolder}`);

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

  //execSync : cmdInit
  execSync(cmdInit, { cwd: currentDir });

  devDependencies.forEach((yarnPackage, index, source) => {
    console.log(`installing ${yarnPackage}`);
    console.log(`${index + 1}/${source.length}`);
    //Dev dependencies
    execSync(`${addDevDependencies} ${yarnPackage}`, { cwd: currentDir });
  });

  console.log(`installing ${productionDependecies}`);

  // production dependencies
  execSync(`${addProductionDependencies} ${productionDependecies}`, { cwd: currentDir });

  // Write package.json file
  fs.writeFileSync(`${currentDir}/package.json`, packageJson);

  console.log('complete');
});