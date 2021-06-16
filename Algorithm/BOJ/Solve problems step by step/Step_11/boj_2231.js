const readLine = require("readline");

const rl=readLine.createInterface({
  input: process.stdin,
  output:process.stdout
});

let input = [];
let flag = 0;
let _string = "";
let arr = [];
let answer = 0;
let num = 0;
function hap(num) {
    _string += num;
    arr = _string.split("").map(el=>parseInt(el));
    answer = Number(num) + arr.reduce((prev,curr)=> prev+curr,0);
}

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    let N = Number(input[0]);
    while(flag === 0){
        hap(num);
        if(answer === N){
            console.log(num);
            break;
        }
        if(num === N){
            console.log(0);
            break;
        }
        num++;
        _string = "";
        arr = [];
        answer = 0;
    }
    
    process.exit();
})