const fs = require('fs');
const path = require('path');

function readSubFilesFrom(targetDirectory) {

    fs.readdir(path.join(__dirname, targetDirectory), (err, files) => {
        try {
            //go through all the files, checking whether they have a dot in them
                //if they do then push them to the array.
                //else return the unread folder into a different array.
                //return the read files.
                const readFiles = files.map((file) => {
                    if (file.match(/^.*\..*$/)) {
                        return file;
                    } else {
                        return readSubFilesFrom(`../template/${targetDirectory}/${file}`);
                    };
                });
                return readFiles;
        } catch {
            console.error(err);
        };
    });
};

console.log(readSubFilesFrom('../template/src'));
    