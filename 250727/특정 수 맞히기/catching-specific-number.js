// 정수 25를 맞춰야함 ... 
// if n > 25라고하면 higher, < 25라고 한다면 lower 일치하면 good.

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n").map(Number);
let inx = 0;

while (true) {
    let num = input[inx];
    if (num > 25) { 
        console.log("Lower");
    } else if (num === 25) {
        console.log("Good");
        break;
    } else {
        console.log("Higher")
    }

    inx += 1
}