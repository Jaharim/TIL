const readLine = require("readline");

const rl=readLine.createInterface({
  input: process.stdin,
  output:process.stdout
});

let input = [];
let round = 0;
let arr = [];
let count = 0;
let num = 0;
let min = 0;

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    let M = Number(input[0]);
    let N = Number(input[1]);
    round = M-N-1;
    for(let a = M ; a <= N ; a++){
        for(let b = 1 ; b <= a ; b++){
            a % b === 0 ? count++ : count+=0;
        } count === 2? (arr.push(a),count=0) : count = 0;
    }
    sum = arr.reduce((prev,curr)=>prev+curr,0);
    min = Math.min(...arr);
    arr.length !== 0 ? (console.log(sum), console.log(min)) : console.log(-1);
    process.exit();
})