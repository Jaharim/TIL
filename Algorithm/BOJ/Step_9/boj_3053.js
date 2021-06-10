const readLine = require("readline");

const rl=readLine.createInterface({
  input: process.stdin,
  output:process.stdout
});

let input = [];

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    
    let R = Number(input[0]);
    let uCircle = Math.pow(R,2) * Math.PI ;
    let tCircle = Math.pow(R,2) * 2 ;
    
    console.log(uCircle);
    console.log(tCircle);
    
    process.exit();
})
