const readLine = require("readline");

const rl=readLine.createInterface({
  input: process.stdin,
  output:process.stdout
});

let input = [];
let killogram = 0;
let check = 0;
let newMin = 9999;

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    killogram = Number(input[0]);
    
    for(let a = 0; a <= killogram; a++){
        for(let b = 0; b <= killogram; b++){
            if(a*5 + b*3 === killogram && a+b < newMin )
                {
                    newMin = a+b;
                    check = 1;
                }
        }
    }
    check === 1 ? console.log(newMin) : console.log(-1);
    
    process.exit();
})