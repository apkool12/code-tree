const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const nums = input.split(" ").map(Number);
const start = nums[0];
const end = nums[1];

let factor = 0

for (let i = start; i <= end; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
        if (i % j === 0) {
            count++;
        }
    }
    if (count === 3) {
        factor +=1
    }
}

console.log(factor)