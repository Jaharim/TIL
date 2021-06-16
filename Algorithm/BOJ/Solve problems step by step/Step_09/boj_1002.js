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
    for(let a = 1; a <= round; a++){
        let x1 = Number(input[a].split(" ")[0]);
        let y1 = Number(input[a].split(" ")[1]);
        let r1 = Number(input[a].split(" ")[2]);
        
        let x2 = Number(input[a].split(" ")[3]);
        let y2 = Number(input[a].split(" ")[4]);
        let r2 = Number(input[a].split(" ")[5]);
        
        let d = Math.sqrt(Math.pow(x1-x2,2)+Math.pow(y1-y2,2));
        if( Math.abs(r1-r2) < d && d < r1+r2 ){
            console.log(2);
            continue;
        }
        if( (d !== 0 && Math.abs(r1-r2) === d) || r1+r2 === d ){
            console.log(1);
            continue;
        }
        if( d === 0 && r1 === r2){
            console.log(-1);
            continue;
        }
        if( r1+r2 < d  || Math.abs(r1-r2) > d ){
            console.log(0);
            continue;
        }
    }
    
    process.exit();
})