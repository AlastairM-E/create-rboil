function testFilesOnly(dir) {
    return dir.filter((file) => {
        if (typeof file === 'object' && file !== null) {
            return testFilesOnly(file.subFiles).subFiles;
        };

        if (file.match(/.*\.test\.js/)) {
            return file;
        };

        return false;
    });
};

module.exports = {
    testFilesOnly
};