const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);

let x = Math.min(n,m)

function func(n, m) {
    let x = 1
    while(true){
      if((x % n == 0) && (x % m == 0)){
        break;
      }
      x++;
    }
  	return x
}

console.log(func(n,m))