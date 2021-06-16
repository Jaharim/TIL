const readLine = require("readline");

const rl=readLine.createInterface({
  input: process.stdin,
  output:process.stdout
});

let input = [];
let arr = [];
let N = 0;
let temp = 0;
let count = 0;
let num = 2;
let flag = 0;

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    N = Number(input[0]);
       
    while(N > 1){
        
        if(N % num === 0){
            arr.push(num);
            N = Number(N/num);
        }
        if(N % num !== 0){
            num === 2 ? num++ : num+=2;
        }
    }
   
        arr.sort((a,b)=>a-b);
        for(let b = 0; b <arr.length; b++){
            console.log(arr[b]);
        }
    

    
    process.exit();
})