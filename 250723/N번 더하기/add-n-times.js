const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');

const a = Number(input[0])
const n = Number(input[1])
var total = 0

for (i = 0; i < n; i++) {
    if (total == 0) {
        total = a+n
    } else {
        total += n
    }
    console.log(total)
}