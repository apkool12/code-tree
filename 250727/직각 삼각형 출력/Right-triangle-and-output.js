const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();
const n = Number(input);

for (let i = 1; i <= n; i++) {
    let line = "";
    const starCount = 2 * i - 1;
    for (let j = 0; j < starCount; j++) {
        line += "*";
    }
    console.log(line);
}
