const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const nums = input.split(" ").map(Number);

let min = 100;
let max = -100;

for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= min) {
        min = nums[i]
    }
    if (nums[i] >= max) {
        max = nums[i]
    }
}

for (let i = 0; i < nums.length; i++) {
    if (nums[i] > min) {
        if (nums[i] < max) {
            console.log(nums[i])
        }
    }
}
