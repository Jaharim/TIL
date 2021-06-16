const readLine = require("readline");

const rl=readLine.createInterface({
  input: process.stdin,
  output:process.stdout
});

let input = [];
let arr = [];
let sortedArr = [];
let answer = "";

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    let N = Number(input.shift());
    arr = input.map(el=>el.split(" "));
    sortedArr = arr.sort((a,b)=>{
        if(a[1]!==b[1]){
            return a[1]-b[1];
        } else{
            return a[0]-b[0];
        }
    });
    for(let a = 0 ; a < N ; a++){
        answer += `${sortedArr[a].join(" ")}\n`;
    }
    console.log(answer);
    
    process.exit();
})