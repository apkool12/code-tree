const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const num1 = Number(input[0]);
const num2 = Number(input[1]);
const num3 = Number(input[2]);

console.log(num1.toFixed(3));
console.log(num2.toFixed(3));
console.log(num3.toFixed(3));
