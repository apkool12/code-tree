const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const num = Number(input);
const arr = [];

for (let i = 1; i <= num; i++) {
    if (i % 2 == 0 || i % 3 == 0) {
        arr.push(1);
    } else {
        arr.push(0);
    }
}

console.log(arr.join(" "));