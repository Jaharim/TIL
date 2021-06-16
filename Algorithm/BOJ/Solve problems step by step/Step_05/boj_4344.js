const readLine = require("readline");

const rl=readLine.createInterface({
  input: process.stdin,
  output:process.stdout
});

let input = [];
let arr = [];
let filtering = [];

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    let round = Number(input[0]);
    for(let a = 1 ; a <= round ; a++){
        arr = input[a].split(" ").map(el=>parseInt(el));
        let length = arr.shift();
        let average = arr.reduce((a,b)=>a+b) / length;
        filtering = arr.filter(el=>el > average);
        let percentage = (filtering.length / length) * 100 ;
        console.log(`${percentage.toFixed(3)}%`);
    }
    
	process.exit();
})