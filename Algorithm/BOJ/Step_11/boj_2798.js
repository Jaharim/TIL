const readLine = require("readline");

const rl=readLine.createInterface({
  input: process.stdin,
  output:process.stdout
});

let input = [];
let round = 0;
let min = 300001;
let M = 0;
let answer = 0;

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    round = Number(input[0].split(" ")[0]);
    M = Number(input[0].split(" ")[1]);
    for(let i = 0 ; i < round - 2 ; i++){
        for(let j = i+1 ; j < round-1 ; j++){
            for(let k = j+1 ; k < round ; k++){
                let one = Number(input[1].split(" ")[i]);
                let two = Number(input[1].split(" ")[j]);
                let three = Number(input[1].split(" ")[k]);
                if(M - (one + two + three) < min && M >= (one + two + three)){
                    min = M - (one + two + three);
                    answer = (one + two + three);
                };
            }
        }
    }
    console.log(answer);
            
    process.exit();
})
