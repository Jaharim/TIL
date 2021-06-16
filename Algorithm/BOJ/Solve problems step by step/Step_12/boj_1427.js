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
    arr = input[0].split("").map(el=>parseInt(el));
    let answer = arr.sort((a,b)=>b-a).join("");
    console.log(answer);
    
    process.exit();
})