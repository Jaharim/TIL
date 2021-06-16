const readLine = require("readline");

const rl=readLine.createInterface({
  input: process.stdin,
  output:process.stdout
});

let input = [];
let arr = [];

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {

    arr = input[0].split(" ").map(el=>parseInt(el));
    let height = arr[2];
    let day = arr[0];
    let night = arr[1];
    
    let spend = Math.ceil((height - day) / (day - night));
    console.log(spend+1);
    
    process.exit();
})