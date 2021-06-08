const readLine = require("readline");

const rl=readLine.createInterface({
  input: process.stdin,
  output:process.stdout
});

let input = [];
let targer = 0;
let index = 0;
let range = 1;
let flag = 0;

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    target = Number(input[0]);
    while(flag===0){
        range += (index * 6);
        index++
        if(target <= range) flag = 1;
    } console.log(index);
    
    process.exit();
})
