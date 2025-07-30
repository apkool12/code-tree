const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const nums = input.split(" ").map(Number);

if (nums[1] > nums[0] && nums[1] < nums[2]) {
    console.log(1);
} else {
    console.log(0);
}