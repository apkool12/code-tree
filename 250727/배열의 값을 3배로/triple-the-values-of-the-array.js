const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let arr = [];

const row = input.length;
const col = input[0].split(" ").length;

for (let i = 0; i < row; i++) {
    const nums = input[i].split(" ").map(Number);
    arr.push(nums);
}

for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
        arr[i][j] *= 3;
    }
}

for (let i = 0; i < row; i++) {
    console.log(arr[i].join(" "));
}
