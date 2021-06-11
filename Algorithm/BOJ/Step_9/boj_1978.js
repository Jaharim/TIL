const readLine = require("readline");

const rl=readLine.createInterface({
  input: process.stdin,
  output:process.stdout
});

let input = [];
let round = 0;
let arr = [];
let num = 0;
let count = 0;

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    round = Number(input[0]);
    arr = input[1].split(" ").map(el=>parseInt(el));
    for(let a = 0 ; a < round ; a++){
        for(let b = 1; b <= arr[a]; b++ ){
            if(arr[a] % b === 0){
                count++;    
            } 
        }
        count === 2 ? (num++, count = 0) : count = 0; 
    }
    console.log(num);
    process.exit();
})