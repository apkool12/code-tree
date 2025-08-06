const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const num = Number(input);
const arr = [];

for (let i = num; i <= 100; i++) {
    if (i >= 90) {
        arr.push("A");
    } else if (i >= 80) {
        arr.push("B");
    }  else if (i >= 70) {
        arr.push("C");
    } else if (i >= 60) {
        arr.push("D");
    } else {
        arr.push("F");
    }
}

console.log(arr.join(" "));