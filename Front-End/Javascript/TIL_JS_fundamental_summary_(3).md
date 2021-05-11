<br/>

---

<br/>

## Dreamcoding by ellie - Javascript 기초

### 공부 요약정리 (3)

#### object ~ array

<br/>

---

<br/>
<br/>

## **Object**

<br/>

- one of the JavaScript's data types.
- a collection of related data and/or functionality.
- Nearly all objects in JavaScript are instances of Object
- object = { key : value };

```javascript
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const jaharim = { name: "jaharim", age: 20 };
print(jaharim);
// jaharim
// 20
```

<br/>

### **Computed properties**

<br/>

- key should be always string

```javascript
console.log(jaharim.name); // jaharim
console.log(jaharim["name"]); // jaharim
jaharim["hasJob"] = true;
console.log(jaharim.hasJob); // true

function printValue(obj, key) {
  console.log(obj[key]);
}

printValue(jaharim, "name"); // jaharim
printValue(jaharim, "age"); // 20
// 동적으로 key의 value를 받아올 때 좋다.
```

  <br/>

### **in operator: property existence check (key in obj)**

<br/>

```javascript
console.log("name" in jaharim); // ture
console.log("age" in jaharim); // true
console.log("random" in jaharim); //false
console.log(jaharim.random); // undefined
```

<br/>

### **for..in vs for..of**

<br/>

```javascript
// for...in (key in obj)
console.clear();
for (let key in jaharim) {
  console.log(key);
}
//name
//age
//hasJob

// for...of (value of iterable)
const array = [1, 2, 4, 5];
for (let value of array) {
  console.log(value);
}
//1
//2
//4
//5
```

<br/>

### **Cloning**

- Object.assign(dest, [obj1, obj2, obj3...])

```javascript
const user = { name: "jaharim", age: "20" };
const user2 = user;
user2.name = "java";
console.log(user); // { name: 'java', age: '20' };
// user2 의 이름을 바꾸면 user의 이름까지 바뀐다.
// 같은 참조

// ▼ 그 대안

// old way
const user3 = {};
for (let key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

// new way
const user4 = Object.assign({}, user);
user4.name = "C++";
console.log(user4); // { name: 'C++', age: '20' };
console.log(user); // { name: 'java', age: '20' };
// user4 만 바뀐다.

// another example
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); // blue
console.log(mixed.size); // big
// 뒤에 오는 것으로 덮어 쓰여진다.
```

<br/>

## **Array**

- Declaration

```javascript
const arr1 = new Array();
const arr2 = [1, 2];
```

<br/>

### **Index position**

- Index position 배열 인덱스를 기준으로 데이터가 저장이 되기때문에  
  인덱스를 활용해서 삽입 정렬 검색 삭제 하는지 정확하게 아는 것이 중요하다.

```javascript
const fruits = ["사과", "바나나"];
console.log(fruits); // ["사과","바나나"]
console.log(fruits.length); // 2
console.log(fruits[0]); // 사과
console.log(fruits[1]); // 바나나
console.log(fruits[2]); // undefined
console.log(fruits[fruits.length - 1]); // 바나나
```

<br/>
<br/>

### **Looping over an array**

- print all fruits

  - a. for

  ```javascript
  for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
  }
  //사과
  //바나나
  ```

  <br/>

  - b. for of

  ```javascript
  for (let fruit of fruits) {
    console.log(fruit);
  }
  //사과
  //바나나
  ```

  <br/>

  - c. forEach
    - forEach 는 배열안에 들어있는 밸류들마다 내가 전달한 함수를 출력한다.

  ```javascript
  fruits.forEach((fruit) => console.log(fruit));
  //사과
  //바나나
  ```

<br/>
<br/>

### **Addition, deletion, copy**

<br/>

- push : add an item to the end

```javascript
fruits.push("딸기", "복숭아");
console.log(fruits);
//["사과", "바나나", "딸기", "복숭아"]
```

<br/>

- pop : remove an item from the end

```javascript
fruits.pop(); // "복숭아"
fruits.pop(); // "딸기"
console.log(fruits); // ["사과", "바나나"]
```

<br/>

- unshift : add an item to the beginning

```javascript
fruits.unshift("딸기", "레몬");
console.log(fruits); // ["딸기", "레몬", "사과", "바나나"]
```

<br/>

- shift : remove an item from the beginning

```javascript
fruits.shift(); // "딸기"
fruits.shift(); // "레몬"
console.log(fruits); // ["사과", "바나나"]
```

<br/>

#### **note!! shift, unshift are slower than push, pop**

```
맨 뒤에서 단순하게 넣고 빼고만 하지만
앞에서부터 넣으려면 원래 있던 데이터들을 한칸 씩 뒤로 미룬 다음에 집어넣어야하고
반대로 삭제하려면 첫 번째 아이템을 지우고 나머지 아이템들을 한 칸씩 당겨와야하기 떄문에..
가능하면 push 와 pop을 사용하는 것이 좋다.
```

<br/>

- splice : remove an item by index position

```javascript
fruits.push("딸기", "복숭아", "레몬");
console.log(fruits); // ["사과", "바나나", "딸기", "복숭아", "레몬"]

//fruits.splice(1);
//console.log(fruits);
// 몇개를 지울지 지정하지 않으면 지정한 인덱스부터 모든 데이터를 다 지운다.

//fruits.splice(1,1);
//console.log(fruits);
// 지정해준 인덱스부터 1개를 지운다.

fruits.splice(1, 1, "사과", "수박");
console.log(fruits);
// 지정해준 인덱스부터 1개를 지우고 '사과'와 '수박'을 추가한다.
// ["사과", "사과", "수박", "딸기", "복숭아", "레몬"]
```

<br/>

- concat : combine two arrays

```javascript
//  fruits : ["사과", "수박"]
const fruits2 = ["라임", "모과"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits); // ["사과", "수박", "라임", "모과"]
```

<br/>
<br/>

### **Searching**

- indexOf : find the index

```javascript
console.log(fruits); // ["사과", "수박"]
console.log(fruits.indexOf("사과")); // 0
console.log(fruits.indexOf("수박")); // 1
console.log(fruits.indexOf("코코넛")); // -1
// 배열 안에 해당하는 값이 없을 때는 -1 이 출력된다.
```

<br/>

- includes

```javascript
console.log(fruits.includes("수박")); // true
console.log(fruits.includes("코코넛")); // false
```

<br/>

- lastIndexOf

```javascript
console.clear();
fruits.push("사과");
console.log(fruits); // ["사과", "수박", "사과"]
console.log(fruits.indexOf("사과")); // 첫 번째로 해당하는 값을 만나면 그 값의 인덱스를 리턴
// 0
console.log(fruits.lastIndexOf("사과")); // 제일 마지막에 나온 값의 인덱스를 리턴
// 2
```
