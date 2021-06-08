const readLine = require("readline");

const rl=readLine.createInterface({
  input: process.stdin,
  output:process.stdout
});

let input = [];
let floor = [];
let temp = "";
let string = "";    
let ho = 0;
let under = [];

let round = 0;

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
 
    for(let a = 0; a <= 14 ; a++){
        string += `${a} `;
    }
    floor.push(string);
    
    for(let N = 1 ; N<=14; N++){
        for(let b = 0; b <= 14 ; b++){
            ho += Number(floor[N-1].split(" ")[b]);
            temp += `${ho.toString()} `;
        }
        floor[N] = temp;
        ho = 0;
        temp = ""; 
    }
     
    round = Number(input[0]);
    for(let c = 1 ; c <= round*2 ; c+=2){
        let cheung = Number(input[c]);
        let number = Number(input[c+1]);
        let peopleNum = Number(floor[cheung].split(" ")[number]);
        console.log(peopleNum);
    }

    process.exit();
})