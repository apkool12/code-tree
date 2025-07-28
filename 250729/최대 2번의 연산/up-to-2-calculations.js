const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let num = Number(input);

if (num % 2 === 0) {
    num = num / 2;
    if (num % 2 !== 0){
        num = (num + 1) / 2;
    }
} else {
    num = (num + 1) / 2;
}

console.log(num);