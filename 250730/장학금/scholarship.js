const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const score = input.split(" ").map(Number);

if (score[0] >= 90 && score[1] >= 95) {
    console.log(100000);
} else if (score[0] >= 90 && score[1] >= 90) {
    console.log(50000);
} else { 
    console.log(0)
}
