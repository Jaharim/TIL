const readLine = require("readline");

const rl=readLine.createInterface({
  input: process.stdin,
  output:process.stdout
});

let input = [];
let count = 0;


rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    let N = Number(input[0]);
    function check(num) {
    let every = [];
    if(num < 100){
        count++;
    } else {
        let arr = [];
        arr = num.toString().split("").map(el=>parseInt(el));
        if( (arr[0] - arr[1]) === (arr[1] - arr[2]))
        {
            count++;
        }
    }
    
}
    for(let i = 1; i<=N; i++){
        check(i);
    }
    console.log(count);
	process.exit();
})