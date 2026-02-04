const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const N = Number(input[0]);
// Please write your code here.

function square(N) {
    let n = 0;
    for (let i = 0; i < N; i++) {
        let str = '';
        for (let j = 0; j < N; j++) {
            if (n >= 9) {
                n = 0
            }
            n+=1;
            str += (n + " ");
        }
        console.log(str);
    }
}

square(N)