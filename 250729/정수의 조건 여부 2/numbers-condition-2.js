const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const num = Number(input);

if (num === 5) {
    console.log("A")
} else if (num % 2 === 0) {
    console.log("B")
}