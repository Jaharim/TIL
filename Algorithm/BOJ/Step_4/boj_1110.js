const readLine = require("readline");

const rl=readLine.createInterface({
  input: process.stdin,
  output:process.stdout
});

let input = [];

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    let startNum = Number(input[0]);
    let count = 0;
    let flag = 0;
    let check = startNum;
    
    while(flag === 0){
        let tenNum = Math.floor(check / 10);
        let oneNum = check % 10 ;
        let sum = tenNum + oneNum ;
        let newOne = (oneNum * 10) + (sum % 10);
        count++;
        check = newOne;
        if(check === startNum)
            {
                console.log(count);
                flag = 1;
            }
            
        }
	process.exit();
})