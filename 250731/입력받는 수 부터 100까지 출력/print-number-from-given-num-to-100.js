const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const num = Number(input);

let line = ''

for (let i = num; i <= 100; i++) {
    line += i + ' ';
}

console.log(line)