const readLine = require("readline");

const rl=readLine.createInterface({
  input: process.stdin,
  output:process.stdout
});

let input = [];
let round = 0;
let prev = 0;
let curr = 0;
let temp = 0;
let start = 1;
function _sum(start,prev,curr) {
            if(round === 0){
                console.log(0);
                return;
            }
            if(round === 1){
                console.log(1);
                return;
            }
            temp = curr;
            curr = prev+curr;
            prev = temp;
            start++;
            if(round === start){
                console.log(curr);
            } else {
                _sum(start,prev,curr);
            }
            
        }

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    round = Number(input[0]);
    _sum(start,0,1);
	process.exit();
})