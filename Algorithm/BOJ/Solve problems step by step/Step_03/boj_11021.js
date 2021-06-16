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
        let sum = Number(caseNum[0]) + Number(caseNum[1]);
        console.log(`Case #${a}: ${sum}`);
    }
	process.exit();
})