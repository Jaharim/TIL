const readLine = require("readline");

const rl=readLine.createInterface({
  input: process.stdin,
  output:process.stdout
});

let input = [];
let testCase = 0;
let repeatCount = 0;
let arr = [];

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    testCase = Number(input[0]);
    for(let num = 1 ; num <= testCase ; num++){
        let answer = "";
        repeatCount = Number(input[num].split(" ")[0]);
        arr = input[num].split(" ")[1].split("");
        for(let a = 0; a < arr.length; a++){
            for(let b = 0; b < repeatCount; b++){
            answer += arr[a];       
            }        
        }
        console.log(answer);
    }
    
    
    process.exit();
})