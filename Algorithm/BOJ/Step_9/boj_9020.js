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
    round = Number(input[0]);
    for(let a = 1 ; a <= round ; a++){
        let arr = [];
        let sosoo = [];
        let answer = [];
        let min = 9999;
        let n = Number(input[a]);
        for(let b = 0 ; b <= n ; b++){
            arr[b] = b
        }
        for(let c = 2; c <= n ; c++){
            if(arr[c]===0) continue;
            for(let d = c+c; d <= n; d+=c){
                arr[d] = 0;
            }
        }
        for(let e = 2; e <= n; e++){
            if(e!==1 && arr[e]!==0) sosoo.push(arr[e]);
        }
        for(let a = sosoo.length-1 ; a >= 0; a--){
            
            for(let b = sosoo.length-1 ; b >= 0 ; b--){
                
                if(n === sosoo[a]+sosoo[b] && 0 <= sosoo[a]-sosoo[b] && sosoo[a]-sosoo[b] < min){
                    answer = [`${sosoo[b]} ${sosoo[a]}`];
                    min = sosoo[a]-sosoo[b];
                    }
                }
            }
        console.log(answer[0]);
        
        }
   
    
    process.exit();
})