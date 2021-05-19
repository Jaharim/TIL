<br/>

---

<br/>
<br/>

Javascript Array Challenge의 문제를 풀 때 사용했던 Array API들에 대해서 다시 한 번 공부하며 글로 정리했다. (2)

<br/>

---

<br/>
<br/>
<br/>
<br/>

# Javascript Array APIs (2)

<br/>
<br/>

- ## map()

  - 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.
  - ### syntax

    ```javascript
    arr.map(callback(currentValue[, index[, array]])[, thisArg])

    map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
    ```

  - callback : 각 요소를 시험할 함수. 다음 세 가지 매개변수를 받습니다.

    - currentValue : 처리할 현재 요소
    - index ( Optional ) : 처리할 현재 요소의 인덱스.
    - array ( Optional ) : map()을 호출한 배열.

  - thisArg ( Optional ) : callback을 실행할 때 this로 사용하는 값.

  - 반환 값 : 테스트를 통과한 요소로 이루어진 새로운 배열.  
    　　　　어떤 요소도 테스트를 통과하지 못했으면 빈 배열을 반환합니다.

<br/>
<br/>

- ## concat()

  - 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 반환합니다.
  - 기존배열을 변경하지 않고 추가된 새로운 배열을 반환합니다.

  - ### syntax

    ```javascript
    array.concat([value1[, value2[, ...[, valueN]]]])

    * concat(...items: ConcatArray<T>[]): T[];
    * concat(...items: (T | ConcatArray<T>)[]): T[];
    ```

  - value ( Optional ) : ​배열 또는 값, 만약 value1 ~ valueN 인자를 생략하면 기존배열의 얕은 복사본을 반환.
  - 반환값 : 새로운 Array 객체.

<br/>
<br/>

- ## join()

  - 배열의 모든 요소를 연결해 하나의 문자열로 만듭니다.

  - ### syntax

    ```javascript
    arr.join([separator])

    * join(separator?: string): string;
    ```

  - separator ( Optional ) : 배열의 각 요소를 구분할 문자열을 지정합니다. 이 구분자는 필요한 경우 문자  
    　　　　　　　　　　열로 변환됩니다. 생략하면 배열의 요소들이 쉼표로 구분됩니다.  
    　　　　　　　　　　 separator가 빈 문자열이면 모든 요소들이 사이에 아무 문자도 없이 연결됩니다.

  - 반환값 : 배열의 모든 요소들을 연결한 하나의 문자열을 반환합니다. 만약 arr​.length 가 0이라면,  
    　　　 빈 문자열을 반환합니다. ( 요소가 undefined 또는 null이면 빈 문자열로 변환합니다. )

<br/>
<br/>

- ## split()

  - String 객체를 지정한 구분자를 이용하여 여러 개의 문자열로 나눕니다.

  - ### syntax

    ```javascript
    str.split([separator[, limit]])

    * split(separator: string | RegExp, limit?: number): string[];
    ```

  - separator ( Optional ) : 원본 문자열을 끊어야 할 부분을 나타내는 문자열을 나타냅니다. 실제 문자열이나 정규표현식을 받을 수 있습니다.  
    　　　　　　　　　　문자열 유형의 separator가 두 글자 이상일 경우 그 부분 문자열 전체가 일치해야 끊어집니다. separator가 생략되거나  
    　　　　　　　　　　 str에 등장하지 않을 경우, 반환되는 배열은 원본 문자열을 유일한 원소로 가집니다.  
    　　　　　　　　　　 separator가 빈 문자열일 경우 str의 각각의 문자가 배열의 원소 하나씩으로 변환됩니다.

  - limit ( Optional ) : 끊어진 문자열의 최대 개수를 나타내는 정수입니다.  
    　　　　　　　　이 매개변수를 전달하면 split() 메서드는 주어진 separator가 등장할 때마다 문자열을 끊지만  
    　　　　　　　　배열의 원소가 limit개가 되면 멈춥니다.  
    　　　　　　　　지정된 한계에 도달하기 전에 문자열의 끝까지 탐색했을 경우 limit개 미만의 원소가 있을 수도 있습니다.  
    　　　　　　　　남은 문자열은 새로운 배열에 포함되지 않습니다.

  - 반환 값 : callback이 어떤 배열 요소라도 참인 값을 반환하는 경우 true, 그 외엔 false.

<br/>
