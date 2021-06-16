const readLine = require("readline");

const rl=readLine.createInterface({
  input: process.stdin,
  output:process.stdout
});

let input = [];

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    console.log(input[0]*(input[1]%10));
    console.log(Math.floor((input[0]*((input[1]%100)-(input[1]%10)))/10));
    console.log(Math.floor((input[0]*(input[1]-(input[1]%100)))/100));
    console.log(input[0]*input[1]);
	process.exit();
})