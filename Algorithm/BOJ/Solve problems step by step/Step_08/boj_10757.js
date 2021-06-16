const readLine = require("readline");

const rl=readLine.createInterface({
  input: process.stdin,
  output:process.stdout
});

let input = [];

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    let x = BigInt(input[0].split(" ")[0]);
    let y = BigInt(input[0].split(" ")[1]);
    console.log((x+y).toString());
    
    process.exit();
})