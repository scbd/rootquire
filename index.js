'use strict';
const fs   = require('fs');
const path = require('path');
var   rootPath = '.';

for(let node_modulesPath of require.main.paths) {

    if(fs.existsSync(node_modulesPath)) {
        rootPath = path.relative(path.join(require.main.filename, '..'), path.join(node_modulesPath, '..')) || '.';
        break;
    }
}

function rootquire(filePath) {

    if(/\.{1,2}\/|\/\.{1,2}|^\//.test(filePath)) {
        throw new Error("path cannot be absolute or contains relative references ./ or ../");
    }

    return require.main.require(rootPath + '/' + filePath);
}

rootquire.debug = function() {

  console.info("ROOT(Relative):", rootPath+'/');
  console.info("ROOT(Absolute):", path.join(path.join(require.main.filename, '..'), rootPath)+'/');

};

module.exports = rootquire;
