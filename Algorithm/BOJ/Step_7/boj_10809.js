const readLine = require("readline");

const rl=readLine.createInterface({
  input: process.stdin,
  output:process.stdout
});

let input = [];
let arr = [];
let zIndex = 122
let answer = "";

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    arr = input[0].split("");
    for(let a = 97 ; a <= zIndex ; a++){
    answer += `${arr.indexOf(String.fromCharCode(a))} `;    
    }
    console.log(answer);
    process.exit();
})