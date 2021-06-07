let arr = [];
let temp = [];
let selfNumber = 0;
let i = 1;
function solution() {
    for(let a = 0; a < 10000 ; a++){
        arr[a] = false;
    }
    for(let i =1; i <= 10000; i++){
        selfNumber = i+i.toString().split("").map(el=>parseInt(el)).reduce((prev,curr)=>prev+curr);
        arr[selfNumber] = true;
        
    }
    
    for(let b = 1; b <= 10000; b++){
         if(arr[b] === false){
             console.log(b);
         }   
    }
        
        
        
}

solution();