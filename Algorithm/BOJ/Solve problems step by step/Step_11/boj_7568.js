const readLine = require("readline");

const rl=readLine.createInterface({
  input: process.stdin,
  output:process.stdout
});

let input = [];
let arr = [];
let rank = [];

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    for(let a = 0 ; a < Number(input[0]); a++){
        rank[a] = 1;
    }
    for(let i = 0 ; i < Number(input[0]); i++){
        let newInput = input.slice();
        newInput.shift();
        arr = newInput[i];
        newInput.splice(newInput.indexOf(arr),1);
        for(let j = 0 ; j < Number(input[0]-1); j++){
            if(Number(arr.split(" ")[0]) < newInput[j].split(" ").map(el=>parseInt(el))[0]){
                if(Number(arr.split(" ")[1]) < newInput[j].split(" ").map(el=>parseInt(el))[1]){
                    rank[i]++;
                }
            }  
        }
    }
    let answer = rank.join(" ");
    console.log(answer);
    
    process.exit();
})