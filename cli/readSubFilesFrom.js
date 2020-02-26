const fs = require('fs');

function readSubFilesFrom(targetDirectory) {
    return fs.readdirSync(targetDirectory)
        .map((file) => {
            if (file.match(/^.*\..*$/)) {
                return file;
            };
            
            return { 
                directory : file, 
                subFiles : readSubFilesFrom(`${targetDirectory}/${file}`)
            };
        });
};

module.exports = {
    readSubFilesFrom
};
    