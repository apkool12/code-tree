const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const nums = input.split(" ").map(Number);
let total = 0;

for (let i = nums[0]; i <= nums[1]; i++) {
  if (i % 2 === 0) {
    total += i;
  }
}

console.log(total);