#!/usr/bin/env node
const { exec, } = require('child_process');

const cmd = `
    # basic npm structure
    $PWD = pwd;
    # webpack and babel basic build
    cp /Users/alastair/Documents/shell__commands/webpack.common.js "$PWD"
    cp /Users/alastair/Documents/shell__commands/webpack.dev.js "$PWD"
    cp /Users/alastair/Documents/shell__commands/webpack.prod.js "$PWD"
    cp /Users/alastair/Documents/shell__commands/.gitignore "$PWD"
        
    # basic setup for react to build a basic app
    mkdir src
    cp /Users/alastair/Documents/shell__commands/src/index.js "$PWD/src"
    cp /Users/alastair/Documents/shell__commands/src/App.js "$PWD/src"
    cp /Users/alastair/Documents/shell__commands/src/template.html "$PWD/src"
    cp /Users/alastair/Documents/shell__commands/src/app.test.js "$PWD/src"
`

exec(cmd, (error) => { 
    if (error) {
        throw error
    };
});