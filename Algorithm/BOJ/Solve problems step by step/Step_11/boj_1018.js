const readLine = require("readline");

const rl=readLine.createInterface({
  input: process.stdin,
  output:process.stdout
});

let input = [];
let countArr = [];
let ltWcount = 0;
let ltBcount = 0;
let answer = 0;
function lefttopW(arr,lineNum,y){
    if(lineNum % 2 === 0 && y % 2 === 0){
        if(arr[y] !== "W"){
            ltWcount++;
        }
    }
    if(lineNum % 2 === 0 && y % 2 === 1){
        if(arr[y] !== "B"){
            ltWcount++;
        }
    }
    if(lineNum % 2 === 1 && y % 2 === 0){
        if(arr[y] !== "B"){
            ltWcount++;
        }
    }
    if(lineNum % 2 === 1 && y % 2 === 1){
        if(arr[y] !== "W") {
            ltWcount++;
        }
    }
}

function lefttopB(arr,lineNum,y){
    if(lineNum % 2 === 0 && y % 2 === 0){
        if(arr[y] !== "B") {
            ltBcount++;
        }
    }
    if(lineNum % 2 === 0 && y % 2 === 1){
        if(arr[y] !== "W") {
            ltBcount++;
        }
    }
    if(lineNum % 2 === 1 && y % 2 === 0){
        if(arr[y] !== "W") {
            ltBcount++;
        }
    }
    if(lineNum % 2 === 1 && y % 2 === 1){
        if(arr[y] !== "B") {
            ltBcount++;
        }
    }
}

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    let xSize = Number(input[0].split(" ")[0]);
    let ySize = Number(input[0].split(" ")[1]);
    input.shift();
    for(let b = 0 ; b <= ySize - 8; b++){
        for(let a = 0 ; a <= xSize - 8 ; a++){
            let lineNum = 0;
            for(let x = a ; x < a+8 ; x++){
                let arr = input[x].split("");
                for(let y = b ; y < b+8 ; y++){
                    lefttopW(arr,lineNum,y);
                    lefttopB(arr,lineNum,y);
                    
                    
                }
                lineNum++; 
            }
            countArr.push(ltWcount);
            countArr.push(ltBcount);
            ltWcount = 0;
            ltBcount = 0;
        } 
        
    } 
    answer = Math.min(...countArr);
    console.log(answer);
    process.exit();
})