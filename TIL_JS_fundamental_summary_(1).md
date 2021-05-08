<br/>

---

<br/>

## Dreamcoding by ellie - Javascript 기초

### 공부 요약정리 (1)

<br/>

---

<br/>

## Use strict

<br/>

- 비상식적인 문법을 더이상 사용할 수 없다.

  ex ) 선언하지 않은 변수에 값을 넣는 행위

- 문서의 상단에 `'use strict'` 를 작성해 준다.

<br/>

## 변수 선언 ( read/write )

<br/>

- let 을 이용한다.

```javascript
let name = "Jaharim";
```

  <br/>

- { } 안에 코드를 가두면 밖에서 보이지 않고 안에서만 보인다.

```javascript
let globalName = "global name";
{
  let name = "Jaharim";
}
console.log(name);
console.log(globalName);

// 실행 시 console.log(name)의 결과는 출력되지 않고
// console.log(globalName)의 결과만 출력된다.
```

<br/>

## Constant, ( read only )

<br/>

- 값을 할당한 다음 다시는 변경되지 않는 값을 사용해라

  - 보안
  - thread safety
  - 실수를 줄일 수 있다.

```javascript
const daysInWeek = 7;
const maxNumber = 5;
```

<br/>

## 변수의 타입들

<br/>

- 더 이상 작은 단위로 나누어질 수 없는 한 가지의 아이템  
  : number, string, boolean, null, undefined, symbol

- 싱글 아이템들을 여러개 묶어서 한 단위로, 박스로 관리할 수 있게 해주는 것

- function : first-class function
  - 다른 data type 처럼 변수에 할당 가능, 함수의 파라미터로 전달 가능, 함수에서 return type으로 함수를 return 할 수 있다.

<br/>

### number - speicla numeric values

- infinity, -infinity, NaN

```javascript
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
```

<br/>

### string

```javascript
const char = "a";
const jaharim = "jaharim";
const greeting = "hello " + jaharim;

console.log(`value: ${greeting}, type: ${typeof greeting}`);
// value: hello jaharim, type: string

const helloJ = `hi ${jaharim}!`; //template literals (string)

console.log(`value: ${helloJ}, type: ${typeof helloJ}`);
// value: hi jaharim!, type: string
// ` ` 기호 안에 코드를 작성할 경우 '+' 기호를 사용하지 않고 위와 같은 형태로 작성 가능

console.log("value: " + helloJ + " type: " + typeof helloJ);
// value: hi jaharim!, type: string
// ` ` 기호를 사용하지 않고 코드를 작성할 경우 '+' 기호를 사용하여 위와 같은 형태로 작성
```

<br/>

### symbol, create unique identifiers for objects

- map 이나 자료구조에서 고유한 식별자가 필요하거나  
  동시 다발적으로 일어날 수 있는 코드에서 우선순위를 주고 싶을 때 사용한다.

```javascript
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2); //false

const gSymbol1 = Symbol.for("id");
const gSymbol2 = Symbol.for("id");
console.log(gSymbol1 === gSymbol2); // true

console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);
// value: id, type: symbol
```

<br/>

### Dynamic typing: dynamically typed language

- runtime, 프로그래밍이 동작할 때 할당된 값에 따라서 type이 변경될 수 있다.

```javascript
let text = "hello";
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
// value: hello, type: string

text = 3;
console.log(`value: ${text}, type: ${typeof text}`);
// value: 3, type: number

text = "3" + 5;
console.log(`value: ${text}, type: ${typeof text}`);
// value: 35, type: string

text = "6" / "3";
console.log(`value: ${text}, type: ${typeof text}`);
// value: 2, type: number

console.log(text.charAt(0)); // error 발생
```

<br/>

---

<br/>

## Operator

<br/>

### String Concatenation

```javascript
console.log("my" + " dog"); // my dog
console.log("3" + 1); // 31
console.log(`string literals: 2 + 5 = ${2 + 5}`);
// string literals: 2 + 5 = 7
// ` ` 기호 안에 코드를 작성할 경우 위와 같은 형태로 작성 가능
```

<br/>

### 논리 연산자 : || (or), && (and), ! (not)

```javascript
const value1 = true;
const value2 = 3 < 1;

function fire() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log("🔥");
  }
  return true;
}

// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || fire()}`);
// 💡 tip: 연산이 오래 걸리는 무거운 것을 뒤에 배치하는 것이 효율적이다.
```

<br/>

### Equality

```javascript
const stringFive = "5";
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false

// === strict equality, no type conversion
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true

// object equality by reference
const jaharim1 = { name: "jaharim" };
const jaharim2 = { name: "jaharim" };
const jaharim3 = jaharim1;
console.log(jaharim1 == jaharim2); // false
console.log(jaharim1 === jaharim2); // false
console.log(jaharim1 === jaharim3); // true

// equality - puzzler
console.log(0 == false); // true
console.log(0 === false); // false
console.log("" == false); // true
console.log("" === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false
```

<br/>
