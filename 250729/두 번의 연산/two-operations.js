const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let num = Number(input);

if (num % 2 !== 0) {
    num += 3;
    if (num % 3 === 0) {
        num /= 3;
    }
} else if (num % 3 === 0) {
    num /= 3;
}

console.log(num);