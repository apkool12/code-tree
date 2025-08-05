const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let n = Number(input);
const arr = []

while (n >= 1) {
    arr.push(n);
    n -= 1;
}

console.log(arr.join(" "));