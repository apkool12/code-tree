const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const nums = input.split(" ").map(Number)
const arr = [];

if (nums[0] > nums[1]) {
    for (let i = nums[0]; i >= nums[1]; i--) {
        arr.push(i);
    }
    console.log(arr.join(" "));
} else {
    for (let i = nums[1]; i >= nums[0]; i--) {
        arr.push(i);
    }
    console.log(arr.join(" "));
}