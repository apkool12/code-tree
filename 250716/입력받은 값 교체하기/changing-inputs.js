const fs = require("fs");
var input = fs.readFileSync(0).toString().trim().split(' ');

var a = Number(input[0]);
var b = Number(input[1]);
var temp;

temp = a;
a = b;
b = temp;

console.log(`${a} ${b}`)