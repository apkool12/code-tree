const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const numbers = input.split(" ").map(Number);

numbers.sort((a, b) => a - b);
console.log(numbers[1]);