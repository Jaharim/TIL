const readLine = require("readline");

const rl=readLine.createInterface({
  input: process.stdin,
  output:process.stdout
});

let input = [];
let test = [];
let count = 0;
let answer = "";

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    arr = input[0].toLowerCase().split("");
    for(let a = 0 ; a < 123; a++){
        test[a] = 0;
    }
    for(let b = 0; b < arr.length; b++){
        let num = Number(arr[b].charCodeAt());
        test[num] += 1;
    }
    for(let c = 0; c < test.length ; c++){
        if(test[c]===Math.max(...test)){
            count++;
        }
    }
    if(count>1){
        console.log("?");
    } else {
        answer = String.fromCharCode(test.indexOf(Math.max(...test))).toUpperCase();
        console.log(answer);
    }
    
        
    process.exit();
})