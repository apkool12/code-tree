const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let [a, b] = input;
let arr = [a];

while (true) {
    if (a % 2 === 0) {
        a += 3;
    } else {
        a *= 2;
    }

    if (a > b) break;

    arr.push(a);
}

console.log(arr.join(" "));
