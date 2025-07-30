const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let nums = input.split(" ").map(Number);
let max = -100;

for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= max) {
        max = nums[i];
    }
}

console.log(max);