const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const num = Number(input);
var i = 0;
var total = 0;

while (total <= num) {
    i+=1
    total += i
}

console.log(i)