const readLine = require("readline");

const rl=readLine.createInterface({
  input: process.stdin,
  output:process.stdout
});

let input = [];
let arr = [];
let answer = "";

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    let N = Number(input.shift());
    let arrSet = new Set(input);
    arr = [...arrSet];
    arr = arr.sort((a,b)=>{
        if(a.length!==b.length){
            return a.length - b.length;
        }
        else if( a < b ){
            return -1;
        }
    });
    for(let a = 0 ; a < arr.length ; a++){
        answer+= `${arr[a]}\n`;
    }
    console.log(answer);
    
    process.exit();
})