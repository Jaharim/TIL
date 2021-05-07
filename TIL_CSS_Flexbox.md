<br/>
<br/>

# CSS Flexbox

오늘은 Flexbox에 대해서 공부를 해보았다.  
 Flexbox를 잘 사용하면 CSS에서 레이아웃을 구성하는 데에 아주 유용하다.

---

<br/>
<br/>

## Flexbox 문법

<br/>

- display : flex;  
  : container를 flexbox로 사용하겠다고 선언

<br/>

- flex-direction  
  : flexbox를 정렬할 방향을 지정
  - 기본적으로 X축 ( row )가 default
  - 종류 :
    - flex-direction : row ;
    - flex-direction : row-reverse ;
    - flex-direction : column ;
    - flex-direction : column-reverse ;

<br/>

- flex-wrap  
  : flex item 들을 정렬 해준다. ( wrap으로 감싼다고 생각하기 )
  - 종류 :
    - flex-wrap : wrap ;
    - flex-wrap : wrap-reverse ;

<br/>

- flex-flow  
  : flex-direction과 flex-wrap을 한 줄에 사용할 수 있다.
  - 예시 :
    - flex-flow : row, wrap ;

<br/>

- justify-content  
  : flex item 들을 row 에서 정렬해주는 방법
  - 종류 :
    - justify-content : flex-start ;
    - justify-content : flex-end ;
    - justify-content : center ;
    - justify-content : space-around ;
    - justify-content : space-between ;

<br/>

- align-items  
  : flex item 들을 column 에서 정렬해주는 방법
  - 종류 :
    - align-items : flex-start;
    - align-items : flex-end;
    - align-items : center;
    - align-items : baseline;
    - align-items : stretch;

<br/>

- align-content  
  : column 에 여분의 공간이 있는 경우 flex container 사이의 간격을 조절
  - 종류 :
    - align-content : flex-start ;
    - align-content : flex-end ;
    - align-content : center ;
    - align-content : space-around ;
    - align-content : space-between ;
    - align-content : stretch ;

<br/>

- align-self  
  : 지정된 align-items 를 무시하고 flex item 들을 column 에서 정렬해주는 방법
  - 종류 :
    - align-items : flex-start ;
    - align-items : flex-end ;
    - align-items : center ;
    - align-items : baseline ;
    - align-items : stretch ;

<br/>
