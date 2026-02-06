const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

function func(n) {
    let total = 0
    for (let i = 1; i <= n; i++) {
        total += (i / 10)
    }
    
    return total
}

console.log(func(n))