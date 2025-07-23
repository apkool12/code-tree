const fs = require("fs");
var input = fs.readFileSync(0).toString().trim().split(" ");

var a = Number(input[0]);
var b = Number(input[1]);

var less = a < b ? 1 : 0;
var equal = a == b ? 1 : 0;

console.log(`${less} ${equal}`);