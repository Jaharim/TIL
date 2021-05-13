<br/>

---

<br/>
<br/>

유튜브를 통해 ES6와 ES11에서 새롭게 추가된 문법 중 유용한 문법에 대해서 공부했다.  
이전 버전의 문법들보다 훨씬 간편하고, 간략하고 가독성 좋게 코드를 작성할 수 있어 좋은 것 같다.

<br/>

---

<br/>
<br/>
<br/>
<br/>

# ES6

<br/>
<br/>

- ## Shorthand property names

  - object에서 key 값과 value 값이 동일한 경우에 한 번만 작성해주면 된다.

  ```javascript
  const user = {
    name: "jaharim",
    hobby: "🎧",
  };

  const name = "jaharim";
  const hobby = "🎧";

  const user2 = {
    name,
    hobby,
  };

  console.log(user, user2);
  //  {name: "jaharim", hobby: "🎧"} {name: "jaharim", hobby: "🎧"}
  ```

<br/>
<br/>

- ## Destructuring Assignment

  - 특정 object, array의 요소들을 이용해 변수를 선언할 때,  
    매 번 `objectName.`을 써주지 않아도 된다.

  ```javascript
  //object
  const user = {
    name: "jaharim",
    hobby: "🎧",
  };
  //array
  const sports = ["⚽", "⚾"];

  // 기존의 변수 선언 방식
  {
    const name = user.name;
    const hobby = user.hobby;
    console.log(name, hobby);
    //  jaharim 🎧

    const first = sports[0];
    const second = sports[1];
    console.log(first, second);
    // ⚽ ⚾
  }

  // ▼ Destructuring Assignment ▼

  {
    const { name, hobby } = user;
    console.log(name, hobby);
    //  jaharim 🎧

    const [first, second] = sports;
    console.log(first, second);
    // ⚽ ⚾
  }

  // 다른 이름을 지정해줄 수도 있다.
  {
    const { name: userName, hobby: userHobby } = user;
    console.log(userName, userHobby);
    // jaharim 🎧
  }
  ```

<br/>
<br/>

- ## Spread Syntax

  - object, array를 copy, concat, merge 할 때 사용하는 문법

  ```javascript
  {
    const obj1 = {
      key: "key1",
      brand: "nike",
    };
    const obj2 = { key: "key2" };
    const array = [obj1, obj2];

    //    ****    object copy    ****

    const obj3 = { ...obj1 };
    console.log(obj3);
    // {key: "key1", brand: "nike"}

    // obj1의 값을 변경해도 obj3의 값은 바뀌지 않았다.
    obj1.key = "key change";
    console.log(obj1); // {key: "key change", brand: "nike"}
    console.log(obj3); // {key: "key1", brand: "nike"}

    //    ****    object merge    ****

    const dog1 = { dog: "🐕" };
    const dog2 = { dog: "🐶" };
    const dog = { ...dog1, ...dog2 };
    console.log(dog);
    // {dog: "🐶"}
    // 뒤에 있는 값에 의해서 덮어씌워진다.

    //    ****    array copy    ****

    const arrayCopy = [...array];
    console.log(array, arrayCopy);
    // (2) [{…}, {…}]                          (2) [{…}, {…}]
    // 0: {key: "key change", brand: "nike"}    0: {key: "key change", brand: "nike"}
    // 1: {key: "key2"}                         1: {key: "key2"}

    // obj1.key의 값을 변경했을 때 모든 복사된 array의 obj1.key 값도 변경되었다.
    const arrayCopy2 = [...array, { key: "key3" }];
    obj1.key = "newKey";
    console.log(array, arrayCopy, arrayCopy2);
    // (2) [{…}, {…}]                          (2) [{…}, {…}]
    // 0: {key: "newKey", brand: "nike"}        0: {key: "newKey", brand: "nike"}
    // 1: {key: "key2"}                         1: {key: "key2"}
    // (3) [{…}, {…}]
    // 0: {key: "newKey", brand: "nike"}
    // 1: {key: "key2"}
    // 2: {key: "key3"}

    //    ****    array concatenation    ****

    const fruits1 = ["🍑", "🍓"];
    const fruits2 = ["🍌", "🥝"];
    const fruits = [...fruits1, ...fruits2];
    console.log(fruits);
    // ["🍑", "🍓", "🍌", "🥝"]
  }
  ```

<br/>
<br/>

- ## Default parameters

  - 함수의 파라미터에 아무값도 받아오지 않았을 때 적용할 Default 값을 설정해줄 수 있다.

  ```javascript
  function PrintMessage(message = "Default message") {
    console.log(message);
  }

  PrintMessage("Nice to meet you"); // Nice to meet you
  PrintMessage(); // Default message
  ```

<br/>
<br/>

- ## Ternary Operator

  - if 명령문의 단축 형태로 쓰인다.

  ```javascript
  const isSoccer = true;

  //기존 if 명령문을 사용한 코드
  {
    let component;
    if (isSoccer) {
      component = "⚽";
    } else {
      component = "⚾";
    }
    console.log(component);
    // ⚽
  }

  // Ternary Operator를 사용한 코드
  {
    const component = isSoccer ? "⚽" : "⚾";
    console.log(component);
    // ⚽

    //console.log 괄호 안에서 바로 사용이 가능하다.
    console.log(isSoccer ? "⚽" : "⚾");
    // ⚽
  }
  ```

<br/>
<br/>

- ## Template Literals

  - 내장된 표현식을 허용하는 문자열 리터럴이다. 여러 줄로 이뤄진 문자열과 문자 보간기능을 사용할 수 있다.
  - 템플릿 리터럴은 이중 따옴표나 작은 따옴표 대신 백틱(` `) (grave accent) 을 이용한다.

  ```javascript
  const hobby1 = "⚽";
  const hobby2 = "🎧";

  //기존 명령문을 사용한 코드
  {
    console.log("My hobby is " + hobby1 + " and " + hobby2);
  } // My hobby is ⚽ and 🎧

  // Template Literals 을 사용한 코드
  {
    console.log(`My hobby is ${hobby1} and ${hobby2}`);
  } // My hobby is ⚽ and 🎧
  ```

<br/>
<br/>
<br/>
<br/>

# ES11

<br/>
<br/>

- ## Optional Chaining

  - 연산자 `?.` 는 체인의 각 참조가 유효한지 명시적으로 검증하지 않고,
    연결된 객체 체인 내에 깊숙이 위치한 속성 값을 읽을 수 있다.
    `?.` 연산자는 `.` 체이닝 연산자와 유사하게 작동하지만, 만약 참조가 nullish (null 또는 undefined)이라면
    `에러`가 발생하는 것 대신에 표현식의 리턴 값은 `undefined`로 단락된다.
    함수 호출에서 사용될 때, 만약 주어진 함수가 존재하지 않는다면 undefined를 리턴한다.

  ```javascript
  {
    const user = {
      name: "jaharim",
      hobby: {
        first: "⚽",
        second: "🎧",
      },
    };

    const user2 = {
      name: "David",
    };

    //기존 " . " 연산자를 사용한 코드
    {
      function printUser(userNum) {
        console.log(userNum.hobby.first);
      }
      printUser(user); // ⚽
      //printUser(user2); // error 발생
    }

    //기존 " . " 연산자를 사용한 코드 2
    {
      function printUser(userNum) {
        console.log(userNum.hobby ? userNum.hobby.first : undefined);
      }
      printUser(user); // ⚽
      printUser(user2); // undefined
    }

    //기존 " && " 연산자를 사용한 코드
    {
      function printUser(userNum) {
        console.log(userNum.hobby && userNum.hobby.first);
      }
      printUser(user); // ⚽
      printUser(user2); // undefined
    }

    //Optional Chaining을 사용한 코드
    {
      function printUser(userNum) {
        console.log(userNum.hobby?.first);
      }

      printUser(user); // ⚽
      printUser(user2); // undefined
    }
  }
  ```

<br/>
<br/>

- ## Nullish Coalescing Operator

  - 널 병합 연산자 "`??`"는 왼쪽 피연산자가 `null` 또는 `undefined`일 때 오른쪽 피연산자를 반환하고,
    그렇지 않으면 왼쪽 피연산자를 반환하는 논리 연산자이다.
  - 왼쪽 피연산자가 `null` 또는 `undefined` 뿐만 아니라
    `falsy 값`에 해당할 경우 오른쪽 피연산자를 반환하는 논리 연산자 "`OR (||)`"와는 대조된다.
    다시 말해 만약 어떤 변수 foo에게 `falsy 값( '' 또는 0)`을 포함한 값을 제공하기 위해
    "`||`"을 사용하는 것을 고려했다면 예기치 않는 동작이 발생할 수 있다.

  - 다시 말해, 변수에 `falsy 값( '' 또는 0)`을 할당해주고 싶을 때,
    제한을 갖는 "`OR (||)`" 논리 연산자보다 유용하다.

  ```javascript
  // `OR (||)` 논리 연산자를 사용한 코드들

  //왼쪽 피연산자가 true 값일 때
  {
    const name = "jaharim";
    const userName = name || "Guest";
    console.log(userName);
    // jaharim
  }

  // [ false, '', 0, null, undefined ] 모두
  // false로 보고 오른쪽 피연산자를 리턴
  {
    const name = null;
    const userName = name || "Guest";
    console.log(userName);
    // 'Guest'
  }

  {
    const name = "";
    const userName = name || "Guest";
    console.log(userName);
    // 'Guest'

    const num = 0;
    const message = num || "undefined";
    console.log(message);
    // 'undefined'
  }

  // `??` 널 병합 연산자를 사용한 코드들
  {
    const name = "";
    const userName = name ?? "Guest";
    console.log(userName);
    // ' ' (공백)

    const num = 0;
    const message = num ?? "undefined";
    console.log(message);
    // 0
  }
  ```

<br/>
<br/>
