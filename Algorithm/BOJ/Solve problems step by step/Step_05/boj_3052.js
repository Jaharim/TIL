const readLine = require("readline");

const rl=readLine.createInterface({
  input: process.stdin,
  output:process.stdout
});

let input = [];

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    let mySet = new Set();
    input.map(el=>parseInt(el)).forEach((el)=>{
        mySet.add(el % 42);
    })
    console.log(mySet.size);
	process.exit();
})