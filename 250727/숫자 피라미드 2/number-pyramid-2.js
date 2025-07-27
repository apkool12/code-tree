const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const n = Number(input);
let num = 0;

for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
        num += 1;
        line += num + " ";
    }
    console.log(line.trim());  // 공백 제거 후 출력
}
