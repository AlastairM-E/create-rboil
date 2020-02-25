const fs = require('fs');
const path = require('path');
const { readSubFilesFrom } = require('../cli/readSubFilesFrom');

function outputDirContentOf(dir, sourceDir, toNewDir) {
    //go through the target directory
    // if is a string
        //copy the relevant file from said directory 
        // to be the name of file looped over
    // else
        //recall the function passing the in the dir + the file name as established.
    if (dir.length !== 0) {
        dir.forEach((file, index) => {
            console.log(index, file, __dirname);
            if (typeof(file) === 'string' && file !== '.DS_Store') {
                fs.copyFileSync(
                    path.join(__dirname, `${sourceDir}/${file}`), 
                    path.join(__dirname, `${toNewDir}/${file}`)
                );
            };
    
            if (typeof(file) === 'object') {
                fs.mkdirSync(path.join(__dirname, `${toNewDir}/${file.directory}`));
                outputDirContentOf(file.subFiles, `${sourceDir}/${file.directory}`, `${toNewDir}/${file.directory}`);
            };
        });
    };

    return null;
};

outputDirContentOf(
    readSubFilesFrom('../template/'),
    '../template/',
    '../test-area'
);

module.exports = {
    outputDirContentOf
};