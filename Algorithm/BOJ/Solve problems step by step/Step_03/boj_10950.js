const readLine = require("readline");

const rl=readLine.createInterface({
  input: process.stdin,
  output:process.stdout
});

let input = [];


rl.on("line", function(line) {
    input.push(line);
    
}).on("close", function() {
    const round = parseInt(input[0]);
    for(let a = 0 ; a < round ; a++){
            let cal = [];
            cal = input[a+1].split(" ").map((el)=>parseInt(el));
            console.log(cal[0]+cal[1]);     
        }
    
	process.exit();
})