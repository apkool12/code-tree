const fs = require("fs");
var input = fs.readFileSync(0).toString().trim();
var money = Number(input)

if (money >= 1000 && money < 3000) {
  console.log("mask");
} else if (money >= 3000) {
  console.log("book");
} else {
  console.log("no");
}
