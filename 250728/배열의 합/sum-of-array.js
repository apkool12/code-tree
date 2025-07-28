const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

for (let i = 0; i < 4; i++) {
    let total = 0;
    const nums = input[i].split(" ").map(Number);
    for (let j = 0; j < 4; j++) {
        total += nums[j]
    }
    console.log(total);
}