const readLine = require("readline");

const rl=readLine.createInterface({
  input: process.stdin,
  output:process.stdout
});

let input = [];
let count = 0;
let height = 0;
let width = 0;
let number = 0;
let floor = 0;
let ho = 0;

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    // 세로 가로 몇번째
    // for 가로 for 세로 
    count = Number(input[0]);
    for(let a = 1 ; a <= count ; a++ ){
        height = Number(input[a].split(" ")[0]);
        width = Number(input[a].split(" ")[1]);
        number = Number(input[a].split(" ")[2]);
        
        floor = number % height;
        if(floor === 0){
            floor > number ? floor = number : floor = height ;
        } 
        ho = Math.ceil(number / height);
        
        let answer = "";
        ho < 10 ? answer = `${floor}0${ho}` : answer = `${floor}${ho}`;
        console.log(answer);
    }

    
    process.exit();
})