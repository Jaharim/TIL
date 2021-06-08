const readLine = require("readline");

const rl=readLine.createInterface({
  input: process.stdin,
  output:process.stdout
});

let input = [];
let round = 0;
let destination = 0;
let departure = 0;
let distance = 0;


rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    round = Number(input[0]);
    for(let a = 1 ; a <= round ; a++){
        departure = Number(input[a].split(" ")[0]);
        destination = Number(input[a].split(" ")[1]) ;
        distance = destination - departure;
        let sqrt = 0;
        let roundSqrt = 0;
        sqrt = Math.sqrt(distance);
        roundSqrt = Math.round(sqrt);
        sqrt <= roundSqrt ? console.log((2*roundSqrt)-1) : console.log(2*roundSqrt);
    }
    process.exit();
})