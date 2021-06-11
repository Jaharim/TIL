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
    let x = input[0].split(" ")[0];
    let y = input[0].split(" ")[1];
    let w = input[0].split(" ")[2];
    let h = input[0].split(" ")[3];
    
    let toTop = h-y;
    let toRight = w - x;
    
    arr.push(x,y,toTop,toRight);
    console.log(Math.min(...arr));
    
    process.exit();
})