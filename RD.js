const fs = require('fs');
const path = require('path');

function getSubFilesFromDirectory(targetDirectory, nextDir) {
    const listOfSubFiles = [];
    fs.readdir(path.join(__dirname, targetDirectory), (err, files) => {
        try {
            //go through all the files, checking whether they have a dot in them
            //if they do:
                //push into the listOfSubFiles
            //else 
                //create an object
        } catch {
            console.error(err);
        };
    });
};
    