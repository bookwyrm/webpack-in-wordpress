var cloneDeep = require('lodash.clonedeep');
var a = {
  b: [
    'c',
    {
      d: [ 1, 2, 3 ]
    }
  ]
};

var aa = cloneDeep(a);
console.log("a === aa? ", a === aa);
console.log("index.js")

