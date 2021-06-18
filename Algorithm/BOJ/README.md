<br/>
<br/>

# Algorithm

### Algorithm solved by Javascript

<br/>
<br/>
<br/>

#### Javascript로 코딩 테스트를 보기 위해서 백준 알고리즘 사이트에서 문제를 풀기 시작했다. ( 2021.06.02 ~ )

<br/>
<br/>

백준 알고리즘 사이트에서 입출력 받는 방법 ( 1 )

```javascript
let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("입력값에 따라 구분자를 다르게 입력");
// ▼ ▼ ▼ 답안 작성 ▼ ▼ ▼
```

<br/>

백준 알고리즘 사이트에서 입출력 받는 방법 ( 2 )

```javascript
const readLine = require("readline");

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  // ▼ ▼ ▼ 답안 작성 ▼ ▼ ▼

  process.exit();
});
```

<br/>

공지사항에 따르면 첫 번째 방법 보다는 두 번째 방법을 사용하는 것이 에러 발생을 줄일 수 있다.

<img src="https://user-images.githubusercontent.com/83650872/120660141-fc909c80-c4c1-11eb-8961-529562131bdb.png" width="750"><br/>

주로 두 번째 방법으로 문제를 풀고 있지만,
첫 번째 방법으로 풀어야 시간초과 없이 풀리는 문제가 있었다.  
백준에서 Javascript로 문제를 푸는 것에 적응이 필요할 것 같다.  
프로그래머스나 leetcode 같은 다른 사이트에서도 문제를 풀어봐야 할 것 같다.
