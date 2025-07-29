const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const nums = input.split(" ").map(Number);

if (nums[0] % 2 === 0) {
    console.log("even");
} else {
    console.log("odd");
}

if (nums[1] % 2 === 0) {
    console.log("even");
} else {
    console.log("odd");
}