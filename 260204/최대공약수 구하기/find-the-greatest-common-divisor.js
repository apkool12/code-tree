const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
let n = Number(input[0]);
let m = Number(input[1]);
// Please Write your code here.

function gcd(n,m) {
    let z = Math.min(n,m);
    let answer = ''
    for (let i = 0; i < z; i++) {
        if (n % i === 0 && m % i === 0) {
            answer = i;
        }
    }
    console.log(answer);
}

gcd(n,m)