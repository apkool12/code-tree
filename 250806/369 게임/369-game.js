const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const num = Number(input);
const arr = [];


for (let i = 1; i <= num; i++) {
    if ( i < 10 ) {
        if ( i % 3 === 0) {
            arr.push(0);
        } else {
            arr.push(i);
        }
    } else {
        if ( i % 10 === 3 || i % 10 === 6 || i % 10 === 9 ) {
            arr.push(0);
        } else if ( i % 3 === 0) {
            arr.push(0);
        } else {
            arr.push(i);
        }
    }
}

console.log(arr.join(" "))