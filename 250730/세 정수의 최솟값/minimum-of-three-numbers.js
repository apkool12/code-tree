const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const nums = input.split(" ").map(Number);

if (nums[0] > nums[1] && nums[0] > nums[2]) {
    if (nums[1] > nums[2]) {
        console.log(nums[2]);
    } else {
        console.log(nums[1]);
    }
}

if (nums[1] > nums[0] && nums[1] > nums[2]) {
    if (nums[0] > nums[2]) {
        console.log(nums[2]);
    } else {
        console.log(nums[0]);
    }
}

if (nums[2] > nums[0] && nums[2] > nums[1]) {
    if (nums[0] > nums[1]) {
        console.log(nums[1]);
    } else {
        console.log(nums[0]);
    }
}