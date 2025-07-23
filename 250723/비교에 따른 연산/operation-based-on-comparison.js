const fs = require("fs");
var input = fs.readFileSync(0).toString().trim().split(" ");

var a = Number(input[0]);
var b = Number(input[1]);

if (a > b) {
    console.log(`${a*b}`)
} else {
    console.log(`${Math.floor(b/a)}`)
}