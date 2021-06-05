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
    arr = input[1].split(" ").map(el=>parseInt(el));
    let max = arr.reduce(function(a, b) {
                            return Math.max(a, b);
                           });
    let min = arr.reduce(function(a, b) {
                            return Math.min(a, b);
                            });
    console.log(`${min} ${max}`);
    
	process.exit();
})