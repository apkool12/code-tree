const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const n = Number(input);

let line = '';

for (let i = n; i <= n*5; i ++) {
    if (i % n == 0) {
        line += i + " ";
    }
}

console.log(line);