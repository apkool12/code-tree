const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

var num = Number(input);
var text = ""

for (i = 1; i < 6; i++) {
    text += num*i + ' '
}

console.log(text)