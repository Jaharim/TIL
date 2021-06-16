const readLine = require("readline");

const rl=readLine.createInterface({
  input: process.stdin,
  output:process.stdout
});

let input = [];
let round = 0;
let result = "";
function drawing(x,y,round) {
    if(x % 3 === 1 && y % 3 === 1){
        result += " ";
    } else {
        if(round === 1){
            result += "*";
        } else {
            drawing(Math.floor(x/3),Math.floor(y/3),Math.floor(round/3));
        }
    }
}    

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    round = Number(input[0]);
    for(let i = 0 ; i < round ; i++){
        for(let j = 0; j < round; j++){
            drawing(i,j,input);
        }
        result +="\n";
    }
    console.log(result);
    
    process.exit();
})
