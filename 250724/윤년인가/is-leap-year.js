const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const year = Number(input);
var bool = false;

if (year % 4 === 0) {
    if (year % 100 === 0 && year % 400 !== 0) {
        bool = false;
    } else {
        bool = true;
    }
}

console.log(bool)