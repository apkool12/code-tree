const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let n = 0;

for (let i = 0; i < 4; i++) {
    const nums = input[i].split(" ").map(Number);
    for (let j = 0; j < 4; j ++) {
        if (nums[j] % 5 === 0) {
            n += 1
        }
    }
}

console.log(n)