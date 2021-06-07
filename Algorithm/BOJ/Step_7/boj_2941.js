const readLine = require("readline");

const rl=readLine.createInterface({
  input: process.stdin,
  output:process.stdout
});

let input = [];
let temp = "";

let arr = [];


rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    
    temp = "0"+input[0];
    arr= temp.split("");
    if(input[0].length < 2){
        console.log(input[0].trim().length);
    }    
    if(input[0].length >= 2 ){
        let count = 0;
        let wordCount = 0;
        for(let a = 1; a < arr.length-1; a++){
            let index = arr[a]+arr[a+1];
            index === "c=" ? (wordCount+=1,count+=2) :
            index === "c-" ? (wordCount+=1,count+=2) :
            index === "d-" ? (wordCount+=1,count+=2) :
            index === "lj" ? (wordCount+=1,count+=2) :
            index === "nj" ? (wordCount+=1,count+=2) :
            index === "s=" ? (wordCount+=1,count+=2) :
            index === "z=" ? 
                arr[a-1]+arr[a]+arr[a+1] === "dz=" ? (wordCount+=1,count+=3) : (wordCount+=1,count+=2) : count+=0;
        }
         console.log(input[0].length - count + wordCount);
    }
    


    process.exit();
})