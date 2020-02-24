const fs = require('fs');
const path = require('path');

function readSubFilesFrom(targetDirectory) {
    return fs.readdirSync(path.join(__dirname, targetDirectory))
        .map((file) => {
            if (file.match(/^.*\..*$/)) {
                return file;
            };
            
            return { 
                directory : file, 
                subFiles : readSubFilesFrom(`../template/${targetDirectory}/${file}`)
            };
        });
};

module.exports = {
    readSubFilesFrom
};
    