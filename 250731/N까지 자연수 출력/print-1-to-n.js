const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const num = Number(input);
let line = '';

let i = 1;

while (i <= num) {
    line += i + ' ';
    i++;
}

console.log(line);