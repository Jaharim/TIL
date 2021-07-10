class Deque {
  constructor() {
    this.data = [];
    this.rear = 0;
  }

  push_front(element) {
    this.data.unshift(element);
    this.rear = this.rear + 1;
  }

  push_back(element) {
    this.data[this.rear] = element;
    this.rear = this.rear + 1;
  }

  pop_front() {
    if (this.isEmpty() === false) {
      this.rear = this.rear - 1;
      return this.data.shift();
    }

    return -1;
  }

  pop_back() {
    if (this.isEmpty() === false) {
      this.rear = this.rear - 1;
      return this.data.pop();
    }

    return -1;
  }

  length() {
    return this.rear;
  }

  isEmpty() {
    return this.rear === 0;
  }

  getFront() {
    if (this.isEmpty() === false) {
      return this.data[0];
    }

    return -1;
  }

  getLast() {
    if (this.isEmpty() === false) {
      return this.data[this.rear - 1];
    }

    return -1;
  }

  print() {
    for (let i = 0; i < this.rear; i++) {
      console.log(this.data[i]);
    }
  }
}

let solution = (inputLines) => {
  let deque = new Deque();
  let n = inputLines.shift();
  let answer = "";

  for (let i = 0; i < n; i++) {
    let [command, arg] = inputLines[i].split(" ");

    if (command === "push_front") {
      deque.push_front(arg);
    }

    if (command === "push_back") {
      deque.push_back(arg);
    }

    if (command === "pop_front") {
      answer += deque.pop_front() + "\n";
    }

    if (command === "pop_back") {
      answer += deque.pop_back() + "\n";
    }

    if (command === "size") {
      answer += deque.length() + "\n";
    }

    if (command === "empty") {
      answer += (deque.isEmpty() ? 1 : 0) + "\n";
    }

    if (command === "front") {
      answer += deque.getFront() + "\n";
    }

    if (command === "back") {
      answer += deque.getLast() + "\n";
    }
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
