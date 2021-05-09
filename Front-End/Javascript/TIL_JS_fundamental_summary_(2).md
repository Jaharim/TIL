<br/>

---

<br/>

## Dreamcoding by ellie - Javascript 기초

### 공부 요약정리 (2)

#### function ~ class

<br/>

---

<br/>

## Default parameters

<br/>

- 파라미터 값을 입력해주지 않아도 디폴트로 설정되어 있는 값으로 설정된다.

```javascript
function test(talk, person = "unknown") {
  console.log(`${talk} by ${person}`);
}
test("hello"); // hello by unknown
```

<br/>

## Rest parameters

<br/>

- 파라미터에 배열 값을 전달한다.

```javascript
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}

printAll("java", "script", "jaharim");
// java
// script
// jaharim
// 3번 반복 출력
```

  <br/>

## Local Scope

<br/>

- { } 안에 코드를 가두면 밖에서 보이지 않고 안에서만 보인다. 밖에서는 안을 볼 수 없고 안에서만 밖을 볼 수 있다.

```javascript
let globalMessage = "global"; // global variable
function printMessage() {
  let message = "hello";
  console.log(message); // local variable
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = "hello";
  }
  // console.log(childMessage); //error
}

printMessage();
// hello
// global
```

<br/>

## Early return, early exit

<br/>

- 조건이 맞지 않을 때는 빠르게 return 해주고 필요한 로직을 그 뒤에 작성하는 것이 좋다.

```javascript
// bad
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
  }
}

// good
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // long upgrade logic...
}
```

<br/>

## 함수 표현

<br/>

### anonymous function

```javascript
const print = function () {
  console.log("print");
};

print();
//print
```

<br/>

### Callback function using function expression

```javascript
function randomQuiz(answer, printYes, printNo) {
  if (answer === "love you") {
    printYes();
  } else {
    printNo();
  }
}
// anonymous function

const printYes = function () {
  console.log("yes!");
};

const printNo = function print() {
  console.log("no!");
};
// named function
// better debugging in debugger's stack traces
// recursions

randomQuiz("wrong", printYes, printNo); // no!
randomQuiz("love you", printYes, printNo); // yes!
```

<br/>

### Arrow function

- always anonymous

```javascript
// Arrow function
// always anonymous
const simplePrint = function () {
  console.log("simplePrint!");
};
             ▼
const simplePrint = () => console.log('simplePrint!');

const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
  // do something more
  return a * b;
};
```

<br/>

### IIFE: Immediately Invoked Function Expression

- 함수를 선언함과 동시에 호출

```javascript
(function hello() {
  console.log("IIFE");
})();
//IIFE
```

<br/>

---

<br/>

## Class

<br/>

### 클래스 선언

```javascript
class Person {
  // constructor
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const jaharim = new Person("jaharim", 20);
console.log(jaharim.name); // jaharim
console.log(jaharim.age); // 20
jaharim.speak(); // jaharim: hello!
```

<br/>

### Getter and Setters

```javascript
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    // this.age 부분에서 호출된다.
    return this._age;
    // 변수 이름을 age와 다르게 해줘야 한다.
  }

  set age(value) {
    // = age 부분에서 호출된다.
    // if (value < 0) {
    //   throw Error('age can not be negative');
    // }
    this._age = value < 0 ? 0 : value;
    // 마찬가지로 변수 이름을 age와 다르게 해줘야 한다.
  }
}

const user1 = new User("Java", "Script", -1);
console.log(user1.age); // 0
```

<br/>

### Static properties and methods

- object 마다 선언이 되는 것이 아니라 class 자체에 붙어있는 것이다.
- object에 상관없이, 들어오는 data에 상관없이  
  공통적으로 클래스에서 쓸 수 있는 것이라면 static 으로 작성해주는 것이  
  메모리 사용을 줄여줄 수 있다.

```javascript
class Article {
  static publisher = 'Javascript';
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); // undefined
console.log(Article.publisher); // Javascript
Article.printPublisher(); // Javascript
}
```

<br/>

### 상속

```javascript
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color!`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {} // Shape class 를 상속받겠다.
class Triangle extends Shape {
  //오버라이딩
  draw() {
    super.draw(); // 부모의 draw() 호출
    console.log("🔺");
  }
  getArea() {
    return (this.width * this.height) / 2;
  }

  toString() {
    return `Triangle: color: ${this.color}`;
  }
}

const rectangle = new Rectangle(20, 20, "blue"); // drawing blue color!
rectangle.draw();
console.log(rectangle.getArea()); // 400
const triangle = new Triangle(20, 20, "red");
triangle.draw();
// drawing red color!
// 🔺
console.log(triangle.getArea()); // 200
```

<br/>

### Class checking: instanceOf

```javascript
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof Object); // true
console.log(triangle.toString()); // Triangle: color: red

let obj = { value: 5 };
function change(value) {
  value.value = 7;
}
change(obj);
console.log(obj); // { value: 7 }
```

<br/>

### Javascript References

- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)

<br/>
