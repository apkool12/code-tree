const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const num = Number(input);
let line = '';

for (let i = 1; i <= num; i++) {
    line += i + ' ';
}

console.log(line);