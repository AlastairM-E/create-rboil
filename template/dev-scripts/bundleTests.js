const process = require('process');

const { readSubFilesFrom } = require('../../cli/readSubFilesFrom');
const { testFilesOnly } = require('../../cli/testFilesOnly');
const { outputDirContentOf } = require('../../cli/outputDirContentOf');

const templateFiles = readSubFilesFrom('../');
const testFiles = testFilesOnly(templateFiles);

outputDirContentOf(testFiles, '../', `${process.cwd()}/test`);