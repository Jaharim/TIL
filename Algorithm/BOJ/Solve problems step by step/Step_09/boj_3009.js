const readLine = require("readline");

const rl=readLine.createInterface({
  input: process.stdin,
  output:process.stdout
});

let input = [];
let setX = [];
let setY = [];
let arrX = [];
let arrY = [];
let needX = 0;
let needY = 0;
let flagX = 0;
let flagY = 0;

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    
    let checkX = new Set();
    let checkY = new Set();
    
    for(let a = 0 ; a < input.length ; a++){
        let x = Number(input[a].split(" ")[0]);
        let y = Number(input[a].split(" ")[1]);
        arrX.push(x);
        arrY.push(y);
        checkX.add(x);
        checkY.add(y);
    }
    setX.push(...checkX);
    setY.push(...checkY);
    setX.sort((a,b)=> a-b);
    setY.sort((a,b)=> a-b);        
    
    for(let b = 0 ; b < input.length ; b++){
        if(arrX.filter(el=>el === setX[b]).length !== 2 && flagX === 0){
            needX = setX[b];
            flagX = 1;
        }
        if(arrY.filter(el=>el === setY[b]).length !== 2 && flagY === 0){
            needY = setY[b];
            flagY = 1;
        }
    }
    console.log(`${needX} ${needY}`);
    
    process.exit();
})