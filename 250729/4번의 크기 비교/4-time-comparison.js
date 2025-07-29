const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0])

const nums = input[1].split(" ").map(Number);

for (let i = 0; i < nums.length; i++) {
    if (n > nums[i]) {
        console.log(1);
    } else {
        console.log(0);
    }
}