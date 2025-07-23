const fs = require("fs");
var input = fs.readFileSync(0).toString().trim().split(' ');

var a = Number(input[0])
var b = Number(input[1])

console.log(`${a} ${b} ${a+b}`)