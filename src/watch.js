'use strict';
const fs = require('fs');
const shelljs = require('shelljs');

function init(arg){
    if(!shelljs.which('sass')){
        console.error('[Error] Sorry, but Sculptor Watcher querires SASS');
        console.error('You can checkout how to install on http://sass-lang.com');
        process.exit(1);
    }

    const source = arg[1] || 'sass/sculptor.scss';
    const build  = arg[2] || 'css/sculptor.css';
    if(!fs.existsSync(source)){
        console.log(`[Error] directory ${source} doesn't exists.`);
        process.exit(1);
    }
    if(!fs.existsSync(build)){
        console.log(`[Error] directory ${build} doesn't exists.`);
        process.exit(1);
    }

    console.log(`Starting to watch file ${source} to generate ${build}`);
    shelljs.exec(`sass --watch ${source}:${build}`);
    process.exit(1);
}

function check(arg) {
    return (arg.indexOf('watch') !== -1 || arg.indexOf('w') !== -1);
}

exports.init = init;
exports.check = check;
