const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const nums = input.split(" ").map(Number);
const arr = [];

let i = nums[0];

while (true) {
    if (i <= nums[1]) {
        if ( i % 2 === 0) {
            arr.push(i);
            i+=3;
        } else {
            arr.push(i);
            i*=2;
        }
    } else {
        break;
    }
}

console.log(arr.join(" "))