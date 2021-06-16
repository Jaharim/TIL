const readLine = require("readline");

const rl=readLine.createInterface({
  input: process.stdin,
  output:process.stdout
});

let input = [];
let round = 0;
let answer = "";
let count = 0;
function move(n,x,y){
    
    if(n>1){
        move(n-1,x,6-x-y);
    }
    
    answer += `${x} ${y}\n`;
    count++;
    
    if(n>1){
        move(n-1,6-x-y,y);
    }
}

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    round = Number(input[0]);
    move(round,1,3);
    console.log(count);
    console.log(answer);
    
    process.exit();
})
