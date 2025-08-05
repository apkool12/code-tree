const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const nums = input.split(" ").map(Number);
const arr = [];

if (nums[0] > 0) {
    for (let i = 0; i < nums[1]; i++) {
        arr.push(nums[0]);
    }
    console.log(arr.join(""))
} else {
    console.log(0)
}