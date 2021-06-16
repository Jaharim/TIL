const readLine = require("readline");

const rl=readLine.createInterface({
  input: process.stdin,
  output:process.stdout
});

let input = [];

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    const num = Number(input[0]);
    for(let a = 1 ; a <= num ; a++){
        let caseNum = input[a].split(' ');
        let A = Number(caseNum[0]);
        let B = Number(caseNum[1]);
        let sum = A + B ;
        console.log(`Case #${a}: ${A} + ${B} = ${sum}`);
    }
	process.exit();
})