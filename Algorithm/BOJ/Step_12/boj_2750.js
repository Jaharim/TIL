const readLine = require("readline");

const rl=readLine.createInterface({
  input: process.stdin,
  output:process.stdout
});

let input = [];
let answer = [];

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    input.shift();
    answer = input.sort((a,b)=>a-b);
    for(let a = 0 ; a < answer.length ; a++){
        console.log(answer[a]);
    }
    
    process.exit();
})