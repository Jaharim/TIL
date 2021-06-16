const readLine = require("readline");

const rl=readLine.createInterface({
  input: process.stdin,
  output:process.stdout
});

let input = [];
let arr = [];
let cha = 0;
let BEP = 0;

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    arr = input[0].split(" ").map(el=>parseInt(el));
    cha = arr[2] - arr[1];
    BEP = Math.floor(arr[0] / cha) + 1;
    if(cha < 1) BEP = -1;
    console.log(BEP);
    
    process.exit();
})