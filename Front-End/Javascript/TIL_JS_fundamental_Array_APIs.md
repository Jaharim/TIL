<br/>

---

<br/>

## Dreamcoding by ellie - Javascript 기초

### Array-APIs 실습

<br/>

---

<br/>
<br/>

## **Q1. make a string out of an array**

```javascript
//problem
{
  const fruits = ["apple", "banana", "orange"];
}
//solve
{
  const fruits = ["apple", "banana", "orange"];
  const result = fruits.join(",");
  console.log(result);
}
//  answer : apple,banana,orange
//  join() : 배열에 있는 모든 것들을 string으로 리턴,
//          전달해준 separator 문자열로 구분자를 넣어서 만들어준다.
```

<br/>
<br/>

## **Q2. make an array out of a string**

```javascript
//problem
{
  const fruits = "🍎, 🥝, 🍌, 🍒";
}
//solve
{
  const fruits = "🍎,🥝,🍌,🍒";
  const result = fruits.split(",");
  console.log(result);
}
//  answer : ["🍎", "🥝", "🍌", "🍒"]
//  split() : string을 전달된 separator를 받아와서
//           여러가지 문자열로 나눠준다.
//  limit : 배열의 크기를 지정해 줄 수 있다.
```

<br/>
<br/>

## **Q3. make this array look like this: [5, 4, 3, 2, 1]**

```javascript
//problem
{
  const array = [1, 2, 3, 4, 5];
}
//solve
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
}
//  answer : [5, 4, 3, 2, 1]
//  cf.) console.log(array); -> [5, 4, 3, 2, 1]
//  reverse()
```

<br/>
<br/>

## **Q4. make new array without the first two elements**

```javascript
//problem
{
  const array = [1, 2, 3, 4, 5];
}
//solve #1
{
  const result = array.slice(2, 5);
  console.log(result);
  //console.log(array); // {1,2,3,4,5}
}
//solve #2
{
  const array = [1, 2, 3, 4, 5];
  const result = array.splice(0, 2);
  console.log(array);
  //console.log(result); // {1,2}
}
//  answer : {3,4,5}
//  slice() : 배열에서 원하는 부분만 리턴해서 받아옴
//  splice() : 배열 자체를 수정
```

<br/>
<br/>

## **Q5 ~ Q10**

```javascript
class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}

const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];
```

<br/>

### **Q5. find a student with the score 90**

```javascript
//solve
{
  const result = students.find((student) => student.score === 90);
  console.log(result);
}
//  answer : Student {name: "C", age: 30, enrolled: true, score: 90}
//  find() : 첫 번째로 찾아진 요소를 리턴한다. 전달된 콜백함수가 true 일 때,
//          찾지못하면 undefined
```

<br/>

### **Q6. make an array of enrolled students**

```javascript
//solve
{
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}
//  answer :
//  (3) [Student, Student, Student]
//  0: Student {name: "A", age: 29, enrolled: true, score: 45}
//  1: Student {name: "C", age: 30, enrolled: true, score: 90}
//  2: Student {name: "E", age: 18, enrolled: true, score: 88}

//  filter() : 콜백함수가 true인 것들을 전달
```

<br/>

### **Q7. make an array containing only the students' scores**

- result should be: [45, 80, 90, 66, 88]

```javascript
//solve
{
  const result = students.map((student) => student.score);
  console.log(result);
}
//  answer : [45, 80, 90, 66, 88]

//  콜백함수로 전달되는 인자는 최대한 이해하기 쉽게 쓰는 것이 중요하다.
//  map() : 배열안에 들어있는 모든 요소들을 콜백함수로 가공된 값들로 대체하여 리턴하는 것
```

<br/>

### **Q8. check if there is a student with the score lower than 50**

```javascript
//solve
{
  console.clear();
  const result = students.some((student) => student.score < 50);
  console.log(result);
}
//  answer : true
//  some() : 배열의 요소중에서 콜백함수가 리턴이 트루가 되는 애가 있는지 확인해주는 것
//  every() : 배열의 모든 요소들이 콜백함수가 리턴이 트루가 되는 것을 만족해야 트루가 리턴이 됨
```

<br/>

### **Q9. compute students' average score**

```javascript
//solve
{
  console.clear();
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result / students.length);
}
//  answer : 73.8
//  reduce() : 배열에 있는 모든 요소들의 값을 누적시키는 것
//  reduceRight() : 뒤에서 부터 누적시키는 것
```

<br/>

### **Q10. make a string containing all the scores**

- result should be: '45, 80, 90, 66, 88'

```javascript
//solve
{
  const result = students.map((student) => student.score).join();
  console.log(result);
}
//  answer : 45,80,90,66,88
```

<br/>

### **Bonus! do Q10 sorted in ascending order**

- result should be: '45, 66, 80, 88, 90'

```javascript
//solve
{
  const result = students.map((student) => student.score).sort((a, b) => a - b);
  // 오름차순
  console.log(result);
}
//  answer : [45, 66, 80, 88, 90]
//  cf.)
//  const result = students.map((student) => student.score).sort((a,b)=> (b-a));
//  내림차순
```

<br/>
