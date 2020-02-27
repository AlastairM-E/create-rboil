const process = require('process');

const { readSubFilesFrom, testFilesOnly, outputDirContentOf } = require('create-rboil-utils');

const templateFiles = readSubFilesFrom(`${process.cwd()}/src`);
const testFiles = testFilesOnly(templateFiles);

outputDirContentOf(testFiles, `${process.cwd()}/src`, `${process.cwd()}/test`);

