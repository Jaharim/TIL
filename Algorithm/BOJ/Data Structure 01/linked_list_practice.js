class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class linkedList {
  constructor() {
    this.head = null;
    this.size = 0;
    this.index = 0;
  }

  // insertAtIndex data
  insertAt(data) {
    //if (index > 0 && index > this.size) return;

    if (this.index === 0) {
      this.head = new Node(data, this.head);
      this.size++;
      this.index++;
      return;
    }

    const node = new Node(data);
    let current, previous;

    current = this.head;
    let count = 0;

    while (count < this.index) {
      count++;
      previous = current;
      current = current.next;
    }

    previous.next = node;
    node.next = current;

    this.size++;
    this.index++;
    // console.log(index);
  }

  // delete data
  deleteData() {
    //if (index > 0 && index > this.size) return;

    if (this.index === 0) return;

    //const node = new Node();
    let current, previous;

    current = this.head;
    let count = 0;

    if (this.index - 1 === 0) this.head = current.next;
    else {
      while (count < this.index - 1) {
        count++;
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }

    this.size--;
    this.index--;
  }
  // leftMoveCursor
  leftMoveCursor() {
    if (this.index > 0) {
      this.index--;
      return;
    }
  }

  // rightMoveCursor
  rightMoveCursor() {
    if (this.index < this.size) {
      this.index++;
      return;
    }
  }

  // print data
  printData() {
    let answer = "";
    let current = this.head;
    while (current) {
      answer += current.data;
      current = current.next;
    }
    console.log(answer);
  }
}

const str = ["a", "b", "c", "d"];
const ll = new linkedList();

for (let i = 0; i < str.length; i++) {
  ll.insertAt(str[i]);
  console.log(ll.head);
}

ll.insertAt("x");

ll.insertAt("y");

ll.printData();
