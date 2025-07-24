const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const nums = input.split(" ").map(Number);
const arr = new Array();

arr[0] = nums[0]
arr[1] = nums[1]

for (var i = 2; i < 10; i++) {
    arr[i] = (arr[i-2] + arr[i-1]) % 10
}

console.log(arr.join(" "))