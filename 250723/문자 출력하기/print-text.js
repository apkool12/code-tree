const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

var repeat = "";

for (i=0; i < 8; i++) {
    repeat += input;
}

console.log(repeat);