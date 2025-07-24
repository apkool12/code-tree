const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const num = Number(input[0]);
const numbers = input[1].split(' ').map(Number);
const answer = new Array();

for (let i = (num-1); i >= 0; i--) {
    if (numbers[i] % 2 === 0) {
        answer.push(numbers[i])
    }
}

console.log(answer.join(" "))