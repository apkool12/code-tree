const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const A = input[0];
const B = input[1];

for (let i = 0; i < A; i++) {
    let line = "";
    for (let j = 0; j < B; j++) {
        line += "*";
        if (j < B - 1) line += " ";
    }
    console.log(line);
}
