const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const arr = [];

for (let i = 0; i < 2; i++) {
    const nums = input[i].split(" ").map(Number);
    arr.push(nums);
}

if (arr[0][0] > arr[1][0]) {
    console.log("A");
} else if (arr[0][0] === arr[1][0]) {
    if (arr[0][1] > arr[1][1]) {
        console.log("A");
    } else {
        console.log("B");
    }
} else {
    console.log("B");
}