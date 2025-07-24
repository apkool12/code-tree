const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const numbers = input[1].split(" ").map(x => Number(x) ** 2);

console.log(numbers.join(" "));
