const readLine = require("readline");

const rl=readLine.createInterface({
  input: process.stdin,
  output:process.stdout
});

let input = [];
const number = [1,2,3,4,5,6,7,8,9]

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    const num = parseInt(input[0]);
    
    number.forEach(el=>{
        console.log(`${num} * ${el} = ${num*el}`);
    })
    
	process.exit();
})