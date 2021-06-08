const readLine = require("readline");

const rl=readLine.createInterface({
  input: process.stdin,
  output:process.stdout
});

let input = [];
let index = 0;
let num = 1;
let hap = 0;
let flag = 0;
let cha = 0;

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {

    let target = Number(input[0]);
    while(flag === 0){
        if(target < num){
            cha = num - target
            if(index % 2 === 0){
                flag = 1;
                console.log(`${index-cha+1}/${cha}`);
            } else {
                flag = 1;
                console.log(`${cha}/${index-cha+1}`);
            }
        } else {
            hap++;
            index++;
            num += hap;
        }
    }
    
    process.exit();
})