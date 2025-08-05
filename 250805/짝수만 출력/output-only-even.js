const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let nums = input.split(" ").map(Number);
let arr = [];

while (nums[0] <= nums[1]) {
    if (nums[0] % 2 === 0) {
        arr.push(nums[0]);
    }
    nums[0] += 1;
}

console.log(arr.join(" "));