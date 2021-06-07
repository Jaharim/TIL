const readLine = require("readline");

const rl=readLine.createInterface({
  input: process.stdin,
  output:process.stdout
});

let input = [];
let arr = [];
let phoneBtn = [];
let answer = 0;

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    phoneBtn =[["1"],["2","A","B","C"],["3","D","E","F"],["4","G","H","I"],["5","J","K","L"],["6","M","N","O"],["7","P","Q","R","S"],["8","T","U","V"],["9","W","X","Y","Z"],["0"]]; 
    arr = input[0].split("");
    
    for(let a = 0; a < arr.length; a++){
    for(let b = 0; b < phoneBtn.length ; b++){
        if(phoneBtn[b].indexOf(arr[a]) !== -1){
            answer+= b+2;
        }
    }
} console.log(answer);
    
    process.exit();
})