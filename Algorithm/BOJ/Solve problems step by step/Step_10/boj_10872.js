const readLine = require("readline");

const rl=readLine.createInterface({
  input: process.stdin,
  output:process.stdout
});

let input = [];
let round = 0;
let temp = 1;
function factorial(round) {
            temp *= round;
            round--;
            if(round === 0){
                console.log(temp);
            } else {
                factorial(round);
            }
        }

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    round = Number(input[0]);
    if(round === 0){
        console.log(1);
    } else{
        factorial(round);
    }
	process.exit();
})