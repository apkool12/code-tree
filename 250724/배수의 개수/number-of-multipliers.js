const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const nums = input.split("\n").map(Number);

let multiple_3 = 0;
let multiple_5 = 0;

for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 3 === 0 && nums[i] % 5 === 0) {
        multiple_3 += 1
        multiple_5 += 1
    } else if (nums[i] % 3 === 0) {
        multiple_3 += 1
    } else if (nums[i] % 5 === 0) {
        multiple_5 += 1
    } else {
        continue
    }
}

console.log(`${multiple_3} ${multiple_5}`)