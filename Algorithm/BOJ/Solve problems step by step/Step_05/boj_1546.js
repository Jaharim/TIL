const readLine = require("readline");

const rl=readLine.createInterface({
  input: process.stdin,
  output:process.stdout
});

let input = [];
let arr = [];
let newScore = [];

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    arr = input[1].split(" ").map(el=>parseInt(el));
    let max = Math.max(...arr);
    newScore = arr.map(el=>el/max*100);
    let average = newScore.reduce((a,b)=>a+b,0) / Number(input[0]);
    console.log(average);
    
	process.exit();
})