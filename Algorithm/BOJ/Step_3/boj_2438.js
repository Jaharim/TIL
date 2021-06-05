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
        let answer='';
        for( let b = 0 ; b < a ; b++){
            answer += '*';
        }
        console.log(answer);
    }
    
	process.exit();
})