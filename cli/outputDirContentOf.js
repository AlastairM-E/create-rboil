const fs = require('fs');

function outputDirContentOf(dir, sourceDir, toNewDir) {

    if (dir.length !== 0) {
        dir.forEach((file) => {
 
            if (typeof(file) === 'string' && file !== '.DS_Store') {
                fs.copyFileSync(
                    `${sourceDir}/${file}`, 
                   `${toNewDir}/${file}`
                );
            };
    
            if (typeof(file) === 'object') {
                fs.mkdirSync(`${toNewDir}/${file.directory}`);
                outputDirContentOf(file.subFiles, `${sourceDir}/${file.directory}`, `${toNewDir}/${file.directory}`);
            };
        });
    };

    return null;
};


module.exports = {
    outputDirContentOf
};