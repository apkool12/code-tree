const fs = require("fs");
var input = fs.readFileSync(0).toString().trim().split(" ");

var a = Number(input[0]);
var b = Number(input[1]);
var c = Number(input[2]);

console.log(`${a+b+c}`);
console.log(`${(a+b+c)/3}`);
console.log(`${((a+b+c)-(a+b+c)/3)}`);