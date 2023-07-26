'use strict';
const fs = require('fs');
const upath = require('upath');
const sh = require('shelljs');

module.exports = function renderCNAME() {
    const sourcePath = upath.resolve(upath.dirname(__filename), '../src/cname/CNAME');
    const destPath = upath.resolve(upath.dirname(__filename), '../dist/.');

    console.log("source path", sourcePath)
    console.log("dest path", destPath)
    
    sh.cp(sourcePath, destPath)
};