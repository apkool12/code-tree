const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const a = input[0].split(' ').map(Number);
const b = input[1].split(' ').map(Number);

const result = (a[0] > b[0] && a[1] > b[1]) ? 1 : 0;

console.log(result);
