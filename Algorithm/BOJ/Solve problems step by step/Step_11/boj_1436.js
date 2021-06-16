const readLine = require("readline");

const rl=readLine.createInterface({
  input: process.stdin,
  output:process.stdout
});

let input = [];
let arr1 = [];
let arr2 = [];
let N = 0;
rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    N = Number(input[0]);
    for(let a = 666; a < 3000666 ; a++){
        arr1.push(a.toString());
    }
    arr2 = arr1.filter(el=>el.includes("666"));
    console.log(arr2[N-1]);
    
    process.exit();
})