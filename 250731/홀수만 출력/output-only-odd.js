const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const nums = input.split(" ").map(Number);

let line = '';

for (let i = nums[0]; i <= nums[1]; i++) {
    if (i % 2 === 1) {
        line += i + " ";
    }
}

console.log(line);