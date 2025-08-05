const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const arr = []

for (let i = 0; i < 8; i++) {
    arr.append(input);
}

console.log(arr.join(""));