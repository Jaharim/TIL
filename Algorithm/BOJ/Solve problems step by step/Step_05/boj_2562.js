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
    arr = input.map(el=>parseInt(el));
    let max = arr.reduce((a,b)=>Math.max(a,b));
    let index = arr.indexOf(max);
    
    console.log(max);
    console.log(index+1);
    
	process.exit();
})