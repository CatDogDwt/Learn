//使用包
const uniq = require('uniq');//相当于↓
// const uniq = require('./node_modules/uniq/uniq.js')

let arr = [1, 2, 3, 4, 5, 5, 4, 3, 2, 1]

const result = uniq(arr);
console.log(result);