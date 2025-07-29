const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const nums = input.split("\n").map(Number);

if (nums[0] >= 1.0 && nums[1] >= 1.0) {
    console.log("High");
} else if (nums[0] >= 0.5 && nums[1] >= 0.5) {
    console.log("Middle");
} else {
    console.log("Low");
}
