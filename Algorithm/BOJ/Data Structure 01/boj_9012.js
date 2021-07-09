const readLine = require("readline");

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function solution(s) {
  let answer = "YES";
  stack = [];
  for (let x of s) {
    if (x === "(") stack.push(x);
    else {
      if (stack.length === 0) return "NO";
      stack.pop();
    }
  }
  if (stack.length > 0) return "NO";
  return answer;
}

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  for (let i = 1; i < input.length; i++) {
    let a = input[i];
    console.log(solution(a));
  }
  process.exit();
});
