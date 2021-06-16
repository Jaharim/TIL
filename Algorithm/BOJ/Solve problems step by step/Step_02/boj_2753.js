const readLine = require("readline");

const rl=readLine.createInterface({
  input: process.stdin,
  output:process.stdout
});

let input = [];

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    let answer = () => {
        input[0] % 4 !== 0 ? console.log(0) : 
        ( input[0] % 100 !== 0 || input[0] % 400 === 0 ) ?
            console.log(1) : console.log(0)
    };
    answer();
	process.exit();
})