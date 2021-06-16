const readLine = require("readline");

const rl=readLine.createInterface({
  input: process.stdin,
  output:process.stdout
});

let input = [];
let arr = [];
let answer = 0;

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    arr = input[0].trim().split(" ");
    answer = arr.length;    
    input[0].trim() === "" ? console.log(0): console.log(answer);
    process.exit();
})