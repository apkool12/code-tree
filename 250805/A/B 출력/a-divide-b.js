const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const nums = input.split(" ").map(Number);

console.log((nums[0]/nums[1]).toFixed(21));