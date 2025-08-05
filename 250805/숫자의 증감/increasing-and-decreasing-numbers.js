const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

const str = input[0];
const num = Number(input[1]);
const arr = []

if (str === "A") {
    for (let i = 1; i <= num; i++) {
        arr.push(i);
    }
    console.log(arr.join(" "));
}
if (str === "D") {
    for (let i = num; i >= 1; i--) {
        arr.push(i);
    }
    console.log(arr.join(" "));
}