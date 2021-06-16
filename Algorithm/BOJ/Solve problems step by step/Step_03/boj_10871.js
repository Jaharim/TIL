const readLine = require("readline");

const rl=readLine.createInterface({
  input: process.stdin,
  output:process.stdout
});

let input = [];

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    let fullIndex = input[0].split(" ")[0];
    let max = input[0].split(" ")[1];
    let answer = "";
    let arr = input[1].split(" ").map(el=>parseInt(el));
    
    for(let a = 0; a < fullIndex ; a++){
        if(Number(arr[a]) < max){
            answer += `${arr[a]} `;
        }    
    }
    console.log(answer);
    
	process.exit();
})