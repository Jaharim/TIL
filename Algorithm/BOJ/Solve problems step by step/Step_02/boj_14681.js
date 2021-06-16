const readLine = require("readline");

const rl=readLine.createInterface({
  input: process.stdin,
  output:process.stdout
});

let input = [];

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    let pointX = parseInt(input[0]);
    let pointY = parseInt(input[1]);
    
    if(pointX > 0){
        pointY > 0 ? console.log(1) : console.log(4) ;
    }
    if(pointX < 0){
        pointY > 0 ? console.log(2) : console.log(3) ;
    }
    
	process.exit();
})