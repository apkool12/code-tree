const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let total = 0;

for (let i = 0; i < 4; i++) {
    const nums = input[i].split(" ").map(Number);
    for (let j = 0; j <= i; j++) {
        total += nums[j]
    }
}

console.log(total);