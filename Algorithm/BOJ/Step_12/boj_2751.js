const readLine = require("readline");

const rl=readLine.createInterface({
  input: process.stdin,
  output:process.stdout
});

let input = [];

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    input.shift();

    let results = '';
    input.sort((a, b) => a - b).forEach(num => (results += `${num}\n`));

    console.log(results);
    
    process.exit();
})