const readLine = require("readline");

const rl=readLine.createInterface({
  input: process.stdin,
  output:process.stdout
});

let input = [];
let arr = [];
let store = 0;
let temp = 0;
let score = 0;

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    let round = Number(input[0]);
    
    for(let a = 1; a <= round; a++){
        arr = input[a].split("");
        for(let b = 0; b<arr.length;b++){
            if(arr[b] === "X"){
                store += temp;
                temp = 0;
                score = 0;
                continue;
                }
                score++;
                temp += score;
                if(b === arr.length-1){
                    store+=temp;
                }
       }
       console.log(store);
       store = 0;
       temp = 0;
       score = 0;
    }
        
	process.exit();
})