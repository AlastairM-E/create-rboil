const fs = require('fs');
const path = require('path');

function outputDirContentOf(dir, sourceDir, toNewDir) {
    console.log('dir', `${toNewDir}`);

    if (dir.length !== 0) {
        dir.forEach((file, index) => {
            console.log(index, file, __dirname);
            if (typeof(file) === 'string' && file !== '.DS_Store') {
                fs.copyFileSync(
                    path.join(__dirname, `${sourceDir}/${file}`), 
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