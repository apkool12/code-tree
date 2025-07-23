const fs = require("fs");
var input = fs.readFileSync(0).toString().trim();

var num = Number(input);

if (num >= 80) {
    console.log("pass")
} else {
    console.log(`${80-num} more score`)
}