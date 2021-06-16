const readLine = require("readline");

const rl=readLine.createInterface({
  input: process.stdin,
  output:process.stdout
});

let input = [];
let arr = [];

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    let result = Number(input[0]) * Number(input[1]) * Number(input[2]);
    let change = result.toString().split("");
    for(let a = 0; a < 10 ; a++){
        arr.push(0);
        }
    change.forEach((el) => {
        let num = Number(el);
        arr[num]++;
        });
    for(let a = 0; a<arr.length;a++){
        console.log(arr[a]);
        }
    
	process.exit();
})