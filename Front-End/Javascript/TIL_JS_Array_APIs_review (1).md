<br/>

---

<br/>
<br/>

Javascript Array Challenge의 문제를 풀 때 사용했던 Array API들에 대해서 다시 한 번 공부하며 글로 정리했다.

<br/>

---

<br/>
<br/>
<br/>
<br/>

# Javascript Array APIs

<br/>
<br/>

- ## filter()

  - 콜백 함수에 지정된 조건을 충족하는 배열의 모든 요소를 모아 새로운 배열로 반환합니다
  - ### syntax

    ```javascript
    arr.filter(callback(element[, index[, array]])[, thisArg])

    filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];
    filter(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[];
    ```

  - callback : 각 요소를 시험할 함수. true를 반환하면 요소를 유지하고, false를 반환하면 버립니다.

  - 다음 세 가지 매개변수를 받습니다.

    - element : 처리할 현재 요소.
    - index ( Optional ) : 처리할 현재 요소의 인덱스.
    - array ( Optional ) : filter()를 호출한 배열.
    - thisArg ( Optional ) : callback을 실행할 때 this로 사용하는 값.
    - 반환 값 : 테스트를 통과한 요소로 이루어진 새로운 배열.

  - 어떤 요소도 테스트를 통과하지 못했으면 빈 배열을 반환합니다.

<br/>
<br/>

- ## reduce()

  - 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환합니다.
  - 리듀서 함수는 네 개의 인자를 가집니다.  
    　`누산기accumulator (acc)`  
     　`현재 값 (cur)`  
     　`현재 인덱스 (idx)`  
     　`원본 배열 (src)`  
    리듀서 함수의 반환 값은 누산기에 할당되고, 누산기는 순회 중 유지되므로 결국 최종 결과는 하나의 값이 됩니다.

  - ### syntax

    ```javascript
    arr.reduce(callback[, initialValue])

    * reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
    * reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
    * reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;
    ```

  - callback : 배열의 각 요소에 대해 실행할 함수.
  - 다음 네 가지 인수를 받습니다.
    - accumulator : 누산기 accmulator는 콜백의 반환값을 누적합니다.  
      　　　　　　콜백의 이전 반환값 또는, 콜백의 첫 번째 호출이면서 initialValue를 제공한 경우에는 initialValue의 값입니다.
    - currentValue : 처리할 현재 요소.
    - currentIndex ( Optional ) : 처리할 현재 요소의 인덱스. initialValue를 제공한 경우 0, 아니면 1부터 시작합니다.
    - array ( Optional ) : reduce() 를 호출한 배열.
  - initialValue ( Optional ) : callback의 최초 호출에서 첫 번째 인수에 제공하는 값. 초기값을 제공하지 않으면 배열의 첫 번째 요소를 사용합니다.  
    　　　　 　　　　　　빈 배열에서 초기값 없이 reduce()를 호출하면 오류가 발생합니다.
  - 반환 값 : 누적 계산의 결과 값.
  - 빈 요소를 제외하고 배열 내에 존재하는 각 요소에 대해 callback 함수를 한 번씩 실행합니다.
  - 콜백의 최초 호출 때 accumulator와 currentValue는 다음 두 가지 값 중 하나를 가질 수 있습니다.  
    만약 reduce() 함수 호출에서 initialValue를 제공한 경우, accumulator는 initialValue와 같고,  
     currentValue는 배열의 첫 번째 값과 같습니다.  
    initialValue를 제공하지 않았다면, accumulator는 배열의 첫 번째 값과 같고 currentValue는 두 번째와 같습니다.

  - 참고 : initialValue를 제공하지 않으면, reduce()는 인덱스 1부터 시작해 콜백 함수를 실행하고  
    　　 첫 번째 인덱스는 건너
    뜁니다. initialValue를 제공하면 인덱스 0에서 시작합니다.
  - 배열이 비어있는데 initialValue도 제공하지 않으면 TypeError가 발생합니다.
  - 배열의 요소가 (위치와 관계없이) 하나 뿐이면서 initialValue를 제공되지 않은 경우,  
    또는 initialValue는 주어졌으나 배열이 빈 경우엔 그 단독 값을 callback 호출 없이 반환합니다.
  - 보통 초기값을 주는 것이 더 안전합니다.

<br/>
<br/>

- ## indexOf()

  - 배열에서 지정된 요소를 찾을 수 있는 첫 번째 인덱스를 반환하고, 존재하지 않으면 -1을 반환합니다.

  - ### syntax

    ```javascript
    arr.indexOf(searchElement[, fromIndex])

    * indexOf(searchElement: T, fromIndex?: number): number;
    ```

  - searchElement : 배열에서 찾을 요소입니다.
  - fromIndex Optional : 검색을 시작할 색인입니다.  
    　　　　　　　　　인덱스가 배열의 길이보다 크거나 같은 경우 -1이 반환되므로 배열이 검색되지 않습니다.  
    　　　　　　　　　제공된 색인 값이 음수이면 배열 끝에서부터의 오프셋 값으로 사용됩니다.
  - 참고 : 제공된 색인이 음수이면 배열은 여전히 앞에서 뒤로 검색됩니다. 계산 된 인덱스가 0보다 작 으면 전체 배열이 검색됩니다.
  - 기본값 : 0 (전체 배열 검색).

<br/>
<br/>

- ## some()

  - 배열 안의 어떤 요소라도 주어진 판별 함수를 통과하는지 테스트합니다.

  - ### syntax

    ```javascript
    arr.some(callback[, thisArg])

    * some(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean;
    ```

  - callback : 각 요소를 시험할 함수. 다음 세 가지 인수를 받습니다.
    - currentValue : 처리할 현재 요소.
    - index ( Optional ) : 처리할 현재 요소의 인덱스.
    - array ( Optional ) : some을 호출한 배열.
  - thisArg ( Optional ) : callback을 실행할 때 this로 사용하는 값.
  - 반환 값 : callback이 어떤 배열 요소라도 참인 값을 반환하는 경우 true, 그 외엔 false.

<br/>
<br/>

- ## forEach()

  - 주어진 함수를 배열 요소 각각에 대해 실행합니다.

  - ### syntax

    ```javascript
    arr.forEach(callback(currentvalue[, index[, array]])[, thisArg])

    * forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
    ```

  - callback : 각 요소를 시험할 함수. 다음 세 가지 매개변수를 받습니다.
    - currentValue : 처리할 현재 요소.
    - index ( Optional ) : 처리할 현재 요소의 인덱스.
    - array ( Optional ) : forEach()를 호출한 배열.
  - thisArg ( Optional ) : callback을 실행할 때 this로 사용하는 값.
  - 반환 값 : undefined

<br/>
<br/>
