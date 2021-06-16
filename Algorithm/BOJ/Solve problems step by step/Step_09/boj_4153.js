const readLine = require("readline");

const rl=readLine.createInterface({
  input: process.stdin,
  output:process.stdout
});

let input = [];
let arr = [];
let round = 0;

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    round = input.length-1;
    for(let a = 0; a < round; a++){
        arr = input[a].split(" ").map(el=>parseInt(el));
        arr = arr.sort((a,b)=>a-b);
        let line1 = Math.pow(arr[0],2);
        let line2 = Math.pow(arr[1],2);
        let line3 = Math.pow(arr[2],2);
        line1 + line2 === line3 ? console.log("right") : console.log("wrong");
    }
    
    process.exit();
})