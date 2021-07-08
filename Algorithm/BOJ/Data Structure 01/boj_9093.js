const readLine = require("readline");

const rl=readLine.createInterface({
  input: process.stdin,
  output:process.stdout
});

let input = [];
let answer = [];
rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    let round = Number(input[0]);
    for(let i = 1; i <= round; i++){
        let temp = input[i].split(" ");
        //console.log(temp);
        for(let j = 0; j < temp.length; j++){
            //console.log(temp[j]);
            //if(temp[j].length!==1)
            answer += temp[j].split("").reverse().join("");
            answer += " ";
            //console.log(temp[j]);
        }
        answer += `\n`;
    }
    console.log(answer);
	process.exit();
})