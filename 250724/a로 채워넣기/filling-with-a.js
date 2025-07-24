const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();
const arr = [];

for (let i = 0; i < input.length; i++) {
    if (i === 1 || i === input.length - 2) {
        arr.push("a");
    } else {
        arr.push(input[i]);
    }
}

console.log(arr.join(""));
