const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const num = Number(input);
let i = 1;
let line = '';

while (i <= num) {
    if (i % 3 === 0) {
        line += i+ " ";
    }
    i++;
}

console.log(line);