const readLine = require("readline");

const rl=readLine.createInterface({
  input: process.stdin,
  output:process.stdout
});

let input = [];
let answer = "";
function lower_bound(arr,n,key){
    let start = 0;
    let end = n;
    let mid = 0;
    
    while(end - start >0){
        mid = Math.floor((start+end)/2);
 
        if(arr[mid] < key){
            start = mid + 1;
        }else{
            end = mid;
        }
 
    }
    return end;
}

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    let N = Number(input.shift());
    let arr = input[0].split(" ").sort((a,b)=>a-b).map(el=>parseInt(el));
    let arr2 = input[0].split(" ").map(el=>parseInt(el));
    let arrSet = new Set(arr);
    arr = [...arrSet];
    for(let a = 0 ; a < N ; a++){
        answer += `${lower_bound(arr,arr.length,arr2[a])} `;
    }

    console.log(answer);

    
    process.exit();
})