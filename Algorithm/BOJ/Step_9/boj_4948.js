const readLine = require("readline");

const rl=readLine.createInterface({
  input: process.stdin,
  output:process.stdout
});

let input = [];

let round = 0;


rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    round = input.length-1;
    for(let a = 0 ; a < round ; a++){
        let arr = [];
        let answer = [];
        let n = Number(input[a]);
        let n2 = 2*n;
        for(let b = 0 ; b <= n2 ; b++){
            arr[b] = b
        }
        for(let c = 2; c <= n2 ; c++){
            if(arr[c]===0) continue;
            for(let d = c+c; d <= n2; d+=c){
                arr[d] = 0;
            }
        }
        for(let e = n+1; e <= n2; e++){
            if(e!==1 && arr[e]!==0) answer.push(arr[e]);
        }
        console.log(answer.length);
    }    
    
    process.exit();
})