const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const nums = input.split(" ").map(Number);
let total = nums[0];

for (let i = 0; i < nums[1]; i++) {
    total += nums[1];
    console.log(total);
}
