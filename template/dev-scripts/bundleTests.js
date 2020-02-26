const process = require('process');

const { readSubFilesFrom, testFilesOnly, outputDirContentOf } = require('create-rboil-utils');

// const { readSubFilesFrom } = require('../../cli/readSubFilesFrom');
// const { testFilesOnly } = require('../../cli/testFilesOnly');
// const { outputDirContentOf } = require('../../cli/outputDirContentOf');

const templateFiles = readSubFilesFrom('../');
const testFiles = testFilesOnly(templateFiles);

outputDirContentOf(testFiles, __dirname, `${process.cwd()}/test`);

