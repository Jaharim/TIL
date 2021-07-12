const readLine = require("readline");

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let stack = [];
let round = 0;
let answer = "";

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  round = 2 * Number(input.shift());
  input = input.map((el) => parseInt(el));
  let i = 0;
  let num = 0;
  while (input.length > 0 && num <= round) {
    if (input[0] !== stack[stack.length - 1]) {
      i++;
      stack.push(i);
      answer += `+\n`;
    } else {
      input.shift();
      stack.pop();
      answer += `-\n`;
    }
    num++;
  }

  if (num === round) console.log(answer);
  else console.log("NO");

  process.exit();
});
