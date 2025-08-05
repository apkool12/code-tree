const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let num = Number(input);
const str = "LeebrosCode";

while (num > 0) {
    console.log(str);
    num -= 1;
}