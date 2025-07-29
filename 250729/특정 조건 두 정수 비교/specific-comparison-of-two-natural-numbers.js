const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const nums = input.split(" ").map(Number);

let str = ""

if (nums[0] < nums[1]) {
    str += 1 + " "
} else {
    str += 0 + " " 
}

if (nums[0] === nums[1]) {
    str += 1
} else {
    str += 0
}

console.log(str)