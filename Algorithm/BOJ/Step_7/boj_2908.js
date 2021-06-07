const readLine = require("readline");

const rl=readLine.createInterface({
  input: process.stdin,
  output:process.stdout
});

let input = [];

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    let num1 = input[0].split(" ")[0].split("").reverse().join("");
    let num2 = input[0].split(" ")[1].split("").reverse().join("");
    num1 > num2 ? console.log(num1) : console.log(num2);
    
    process.exit();
})