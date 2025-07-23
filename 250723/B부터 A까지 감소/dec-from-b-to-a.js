const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

const a = Number(input[0]);
const b = Number(input[1]);

var text = ''

for (i=b; i>=a; i--) {
    text += i + " "
}

console.log(text)