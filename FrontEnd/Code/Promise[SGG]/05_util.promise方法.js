let mineReadFile = require('util').promisify(require('fs').readFile)

mineReadFile('./resource/content.txt').then(value => {
    console.log(value.toString());
}, reason => {
    console.log(reason);
})