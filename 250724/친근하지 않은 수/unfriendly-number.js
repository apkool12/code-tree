const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const number = Number(input);
const arr = [];

for (let i = 1; i <= number; i++) {
  if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0) {
    arr.push(i);
  }
}

console.log(arr.length);
