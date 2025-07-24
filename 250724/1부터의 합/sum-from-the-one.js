const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const num = Number(input);
let i = 0;
let total = 0;

while (total < num) {
  i += 1;
  total += i;
}

console.log(i);
