<br/>

---

<br/>
<br/>

CSS grid 레이아웃은 웹페이지를 위한 이차원 레이아웃 시스템이다.

이 기능을 통해 콘텐츠를 행과 열에 배치할 수 있으며,

복잡한 레이아웃을 직접 직관적으로 구축할 수 있는 많은 기능이 있다.

이후에 VanillaJS로 계산기를 만들 때 활용할 수 있을 것 같다.

CSS가 공부하면 할수록 재밌는 것 같다.

<br/>

---

<br/>
<br/>
<br/>
<br/>

# CSS Grid

<br/>
<br/>
<br/>

## grid 문법

<br/>
<br/>

- **_display : grid_**;

  : container를 grid로 사용하겠다고 선언

- 길이 단위나 백분율을 사용하여 column을 만들 수 있다.<br/>

  <img src="https://user-images.githubusercontent.com/83650872/121315154-093e4600-c943-11eb-852e-eef0ded37e8d.png"/><br/>

  ```javascript
  .container {
      display: grid;
      grid-template-columns: 50px 50px 50px;
  }
  ```

<br/>
<br/>

- 길이 단위나 백분율을 사용하여 column을 생성하는 것 외에도

  **_fr_** 단위를 사용하여 grid 행과 열을 가변적으로 조정할 수 있다.<br/>

  <img src="https://user-images.githubusercontent.com/83650872/121315427-4a365a80-c943-11eb-8745-96c78128e0e4.png"/><br/>

  ```javascript
  .container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
  }
  ```

<br/>
<br/>

- 트랙 사이 간격

  : 트랙 사이 간격을 생성하려면  
   열 사이 간격에 대해선 **_grid-column-gap_** 속성을 사용하고,  
   행 사이 간격에 대해선 **_grid-row-gap_** 속성을 사용하고,  
   한 번에 둘 다 설정하려면 **_grid-gap_** 속성을 사용한다.

  ( cf. gap 속성은 예전에는 grid- 접두사를 사용하곤 했지만, 해당 CSS 규격은 변경되었다.  
   현재 마이크로소프트 에지와 파이어폭스는 해당(grid-) 접두사가 없는 버전을 지원하며  
   접두사 버전은 별칭으로 유지되므로 한동안 사용하는 데 지장이 없을 것이다.  
   안전한 쪽을 택하려면 완전무결한 코드를 담보하기 위해 두 가지 속성을 이중으로 추가할 수 있다. )

  <img src="https://user-images.githubusercontent.com/83650872/121315491-59b5a380-c943-11eb-8397-7ad005fbdaf6.png"/><br/>

  ```javascript
  .container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 20px;
      gap: 20px;
  }
  ```

<br/>
<br/>

- 트랙 목록의 반복

  : 반복 표기법을 사용하여 트랙 목록의 전체 또는 한 섹션을 반복할 수 있다.  
   반복 함수에 전달되는 첫 번째 값은 원하는 트랙 목록의 반복 횟수가 되며,  
   두 번째 값은 하나의 트랙 목록, 이는 반복되길 원하는 트랙 또는 여러 트랙이 될 수도 있다.

  <img src="https://user-images.githubusercontent.com/83650872/121315491-59b5a380-c943-11eb-8397-7ad005fbdaf6.png"/><br/>

  ```javascript
  .container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 20px;
  }
  ```

<br/>
<br/>

- **_grid-template-areas_** 로 배치하기

  : 문자열을 이용해서 직접 배치를 작성하고 선택자를 이용해서 요소에 문자열을 할당해 준다.

  <img src="https://user-images.githubusercontent.com/83650872/121315555-6afeb000-c943-11eb-96f8-bf2b9118c80d.png"/><br/>

  ```javascript
  .container {
      display: grid;
      grid-template-columns: repeat(3, 50px);
      grid-template-rows: 1fr 1fr 1fr;
      grid-template-areas:
          "a a a"
          "b c c"
          "b c c";
      grid-gap: 20px;
  }

  .item:nth-child(1) {
      grid-area: a;
  }

  .item:nth-child(2) {
      grid-area: b;
  }

  .item:nth-child(3) {
      grid-area: c;
  }
  ```

<br/>
<br/>

- 암시적 grid와 명시적 grid

  : 명시적 grid는 **_grid-template-columns_** 또는 **_grid-template-rows_** 를 사용하여 생성하는 것,  
   열 트랙만 지정했지만, 콘텐츠를 저장하기 위해 행도 만들어지는 것이
  명시적 grid, 암시적 grid의 한 예다.  
   암시적 grid 트랙에 크기를 지정하려면 **_grid-auto-rows_** 와 **_grid-auto-columns_** 속성을 사용할 수 있다.

  <img src="https://user-images.githubusercontent.com/83650872/121315610-76ea7200-c943-11eb-8da5-310bb0f137ef.png"/><br/>

  ```javascript
  .container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: 40px;
      grid-gap: 20px;
  }
  ```

<br/>
<br/>

- minmax() 함수

  : **_minmax()_** 함수는 트랙의 최소 및 최대 크기를 설정할 수 있게 해준다.  
   예를 들어 **_minmax( 100px, auto )_** 는 최소 크기는 100 픽셀이지만,  
   최대 크기는 auto 로써
  콘텐츠에 맞게 자동으로 조정된다.

  <img src="https://user-images.githubusercontent.com/83650872/121315610-76ea7200-c943-11eb-8da5-310bb0f137ef.png"/><br/>

  ```javascript
  .container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: minmax(40px, auto);
      grid-gap: 20px;
  }
  ```

<br/>
<br/>

- 라인 기반 배치

  - 라인 기반 배치라고 하는 것이 맞는지 모르겠다.  
    grid에서는 각 행과 열 사이에 공백이 있는데, 이를 일컬어 **_gutters_** 라고 부른다.  
    라인 기반 배치라는 것은 이 **_gutters_** 에 번호를 매기고 그 번호에
    맞게 배치를 하는 것을 말한다.

  - 번호는 1부터 시작하며 열은 가장 왼쪽이 1번, 행은 가장 위쪽이 1번이며 가장 마지막은 -1 이다.

  - 시작 라인과 끝 라인을 지정하여 사물을 배치할 수 있다.  
    **_grid-column-start / grid-column-end_**  
    **_grid-row-start / grid-row-end_**  
    이 속성들은 모두 라인 번호를 값으로 가질 수 있다.  
    **_grid-column / grid-row_**  
    이 속성들은 시작과 끝 라인을 한 번에 지정할 수 있다. 슬래시( " **/** " ) 문자로 구분한다.

  <img src="https://user-images.githubusercontent.com/83650872/121315711-8ff32300-c943-11eb-91b0-c46cab1fff70.png"/><br/>

  ```javascript
  .container {
      display: grid;
      grid-template-columns: repeat(3, 50px);
      grid-auto-rows: minmax(50px, auto);
      grid-gap: 20px;
  }

  .item:nth-child(1) {
      grid-column-start: 1;
      grid-column-end: 4;
  }

  .item:nth-child(4) {
      grid-row-start: 2;
      grid-row-end: 4;
      grid-column-start: 3;
  }

  .item:nth-child(5) {
      grid-row: 3 / 5;
      grid-column: 1 / 3;
  }
  ```

<br/>
<br/>

- 아이템 배치

  : grid도 flexbox 처럼 **_justify , align_** 을 이용해서 item 들을 정렬할 수 있다.  
   **_justify-items , align-items_** : start, center, end  
   **_justify-self , align-self_** : start, center, end

  <img src="https://user-images.githubusercontent.com/83650872/121319022-c67e6d00-c946-11eb-9545-dd377c1ae720.png"/><br/>

  ```javascript
  .container {
      display: grid;
      grid-template-columns: repeat(3, 50px);
      grid-auto-rows: minmax(50px, auto);
      grid-gap: 20px;
  }

  .item:nth-child(1) {
      justify-self: start;
      align-self: start;
  }

  .item:nth-child(5) {
      justify-self: center;
      align-self: center;
  }

  .item:nth-child(9) {
      justify-self: end;
      align-self: end;
  }
  ```

<br/>
<br/>
