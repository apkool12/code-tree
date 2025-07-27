const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const num = Number(input);

for (let i = num; i >= 1; i--) {
    str = "";
    for (let j = 0; j < i; j ++) {
        str += "*" + " ";
    }
    console.log(str);
}