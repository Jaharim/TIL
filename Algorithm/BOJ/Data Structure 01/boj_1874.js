class Stack {
  constructor() {
    this.data = [];
    this.top = 0;
  }

  push(element) {
    this.data[this.top] = element;
    this.top += 1;
  }

  length() {
    return this.top;
  }

  peek() {
    return this.data[this.top - 1];
  }

  isEmpty() {
    return this.top === 0;
  }

  pop() {
    if (this.isEmpty() === false) {
      this.top = this.top - 1;
      return this.data.splice(-1)[0];
    }
  }

  print() {
    this.data.map((element) => {
      console.log(element);
    });
  }

  reverse() {
    this._reverse(0);
  }

  _reverse(index) {
    if (index < this.top - 1) {
      this._reverse(index + 1);
    }
    console.log(this.data[index]);
  }
}

let answer = "";

let solution = (inputLines) => {
  let N = inputLines.splice(0, 1)[0];
  let cnt = 0;
  let stack = new Stack();
  for (let i = 0; i < N; i++) {
    cur = +inputLines[i];
    while (cur > cnt) {
      stack.push(++cnt);
      answer += "+\n";
    }

    if (stack.pop() !== cur) {
      return "NO";
    }

    answer += "-\n";
  }

  return answer;
};

(function () {
  let inputLines = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .split("\n");

  console.log(solution(inputLines));
})();
