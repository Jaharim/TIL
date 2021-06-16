const readLine = require("readline");

const rl=readLine.createInterface({
  input: process.stdin,
  output:process.stdout
});

let input = [];
let minute = 0;

rl.on("line", function(line) {
    input = line.split(" ").map(el=>parseInt(el));
}).on("close", function() {
                   
        if((input[1] - 45) >= 0){
            minute = input[1] - 45;
            console.log(`${input[0]} ${minute}`);
        }
        else if((input[1] - 45) < 0){
            minute = ( 60 + input[1] ) - 45;
            input[0] > 0 ? input[0]-- : input[0] = 23 ;
            console.log(`${input[0]} ${minute}`);
        }
   
	process.exit();
})