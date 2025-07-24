const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const arr = input.split(" ");
const reverse = [];

for (let i = arr.length - 1; i >= 0; i--) {
    reverse.push(arr[i]);
}

console.log(reverse.join(""));
