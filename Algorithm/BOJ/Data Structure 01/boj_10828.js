const readLine = require("readline");

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let round = 0;
let answer = "";
let one = 1;
let minus1 = -1;
let zero = 0;

class Stack {
  constructor() {
    this.arr = [];
    this.index = 0;
  }

  push(x) {
    this.arr[this.index] = x;
    this.index++;
  }

  pop() {
    if (this.index === 0) answer += `${minus1}\n`;
    else {
      answer += `${this.arr[this.index - 1]}\n`;
      this.index--;
    }
  }

  size() {
    answer += `${this.index}\n`;
  }

  empty() {
    if (this.index === 0) answer += `${one}\n`;
    else answer += `${zero}\n`;
  }

  top() {
    if (this.index === 0) answer += `${minus1}\n`;
    else answer += `${this.arr[this.index - 1]}\n`;
  }
}

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let stack = new Stack();
  round = Number(input[0]);
  for (let i = 1; i <= round; i++) {
    let [command, num] = input[i].split(" ");
    switch (command) {
      case "push":
        stack.push(Number(num));
        break;
      case "pop":
        stack.pop();
        break;
      case "size":
        stack.size();
        break;
      case "empty":
        stack.empty();
        break;
      case "top":
        stack.top();
        break;
    }
  }
  console.log(answer);

  process.exit();
});
