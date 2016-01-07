var fs = require('fs');
var file = process.argv[2];

var totalLines = fs.readFileSync(file).toString().split('\n').length;

console.log(totalLines-1);

