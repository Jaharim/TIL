const readLine = require("readline");

const rl=readLine.createInterface({
  input: process.stdin,
  output:process.stdout
});

let input = [];
let arr = [];

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    for(let a = 0; a<input.length;a++){
      arr.push(input[a].split(" "));
    }
    for(let b = 0; b<input.length;b++){
           
            let x = Number(arr[b][0]);
            let y = Number(arr[b][1]);
            console.log(x+y);
    }
	process.exit();
})