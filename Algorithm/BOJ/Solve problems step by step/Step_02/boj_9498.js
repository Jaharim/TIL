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
        input[0] > 89 ? console.log("A") : 
        input[0] > 79 ? console.log("B") : 
        input[0] > 69 ? console.log("C") : 
        input[0] > 59 ? console.log("D") : console.log("F")
    };
    answer();
	process.exit();
})