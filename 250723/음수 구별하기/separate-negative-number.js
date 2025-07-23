const fs = require("fs");
var input = fs.readFileSync(0).toString().trim();

let num = Number(input);

console.log(num);
if (num < 0) {
    console.log("minus")
};