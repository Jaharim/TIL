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
    arr = input[1].split("").map(el=>parseInt(el)).reduce((prev,curr)=>prev+curr,0);
    console.log(arr);
    process.exit();
})