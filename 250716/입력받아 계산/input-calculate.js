const fs = require("fs");
var a = Number(fs.readFileSync(0).toString().trim());

console.log(a+2)