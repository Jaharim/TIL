const readLine = require("readline");

const rl=readLine.createInterface({
  input: process.stdin,
  output:process.stdout
});

let input = [];
let arr = [];



rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    let M = Number(input[0].split(" ")[0]);
    let N = Number(input[0].split(" ")[1]);
    
    for(let a = 0 ; a <= N ; a++){
        arr[a] = a
    }
    for(let b = 2; b <= N ; b++){
        if(arr[b]===0) continue;
        for(let c = b+b; c <= N; c+=b){
            arr[c] = 0;
        }
    }
    for(let d = M; d <= N; d++){
        if(d!==1 && arr[d]!==0) console.log(arr[d]);
    }
    
    
    process.exit();
})