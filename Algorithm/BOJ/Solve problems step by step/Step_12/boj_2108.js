const readLine = require("readline");

const rl=readLine.createInterface({
  input: process.stdin,
  output:process.stdout
});

let input = [];
let arr = [];
let rankArr = [];
function ranking(input,arr,N){
    let maxNum = Math.max(...arr);
    for(let a = 0 ; a < N ; a++){
        if(Number(input[a]) >= 0 ){
            if(arr[Number(input[a])] === maxNum){
            rankArr.push(Number(input[a]));
            }
        } else{
            if(arr[4000+Math.abs(Number(input[a]))] === maxNum){
            rankArr.push(Number(input[a]));
            }
        }
    }
    let rankSet = new Set();
    rankArr.sort((a,b)=>a-b).forEach(el=> rankSet.add(el));
    rankArr = [...rankSet];
    if(rankArr.length === 1){
        return rankArr[0];
    } else {
        return rankArr[1];                
    }
}
rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    const N = Number(input.shift());
    const avrg = Math.round(input.map(el=>parseInt(el)).reduce((prev,curr)=>prev+curr,0) / input.length) ;
    const sortedInput = input.sort((a,b)=>a-b);
    const middleIndex = Math.floor((sortedInput.length-1)/2);
    const middle = Number(input[middleIndex]);
    const max = input.map(el=>parseInt(el)).sort((a,b)=>b-a)[0];
    const min = input.map(el=>parseInt(el)).sort((a,b)=>a-b)[0];
    const range = max - min ;
    for(let i = 0 ; i <= 8000 ; i++){
        arr[i] = 0;
    }
    for(let a = 0 ; a < N ; a++){
        if(Number(input[a]) >= 0 ){
            arr[Number(input[a])]+=1;
        } else{
            arr[4000+Math.abs(Number(input[a]))]+=1;
        }
    }
    const mostFreq = ranking(input,arr,N);
    
    console.log(avrg);
    console.log(middle);
    console.log(mostFreq);
    console.log(range);
    
    process.exit();
})