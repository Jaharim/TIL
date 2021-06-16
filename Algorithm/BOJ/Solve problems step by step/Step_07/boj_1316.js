const readLine = require("readline");

const rl=readLine.createInterface({
  input: process.stdin,
  output:process.stdout
});

let input = [];
let round = 0;
let arr = [];
let check = [];
let count = 0;


rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {

    round = Number(input[0]);
    for(let a = 1 ; a <= round ; a++){
        
        let flag = 0;
        arr = input[a].split("");
        check = [arr[0]];
        for(let b = 0; b < arr.length-1; b++){
            if(arr[b]===arr[b+1]){
                continue;
            }
            check.indexOf(arr[b+1]) === -1 ? check.push(arr[b+1]) :
                                                            flag = 1;
            if(flag === 1) break;
        } if(flag ===0) count++;
    } console.log(count);
    
    
    process.exit();
})