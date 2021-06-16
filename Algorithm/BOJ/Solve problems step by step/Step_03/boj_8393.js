const readLine = require("readline");

const rl=readLine.createInterface({
  input: process.stdin,
  output:process.stdout
});

let input = [];

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    
    const toNum = parseInt(input[0]);
    let sum = 0;
    for(let a = 0 ; a <= toNum ; a++){
        sum += a;
    }
    
    console.log(sum);
    
	process.exit();
})