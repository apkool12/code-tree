const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();
const [a, b] = input.split(" ").map(Number);

let result = Math.floor(a / b).toString() + ".";
let remainder = a % b;

for (let i = 0; i < 20; i++) {
    remainder *= 10;
    const digit = Math.floor(remainder / b);
    result += digit.toString();
    remainder %= b;
}

console.log(result);