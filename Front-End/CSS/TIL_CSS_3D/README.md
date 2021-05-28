<br/>

---

<br/>
<br/>

유튜브 알고리즘 덕분에 유튜버 "수코딩" 님의 CSS 3D 강의 영상을 우연히 보게되었다.

처음에는 Flip Button을 만드는 영상을 봤고, 그 다음으로 Cube Banner를 만드는 영상을 봤다.

HTML, CSS 에 있는 많은 기능들을 다 사용해보지 못해 늘 아쉬웠기에 좋은 공부를 했다.

이번에 유튜브를 통해 CSS 3D에 대해서 가볍게 공부해 보면서,

아직 나는 모르는 것이 정말 많구나 하는 생각과 그렇기 때문에

하루빨리 또 다른 강의와 탐구를 통해 나만의 결과물을 만들어보고 싶다는 생각이 들었다.

<br/>

---

<br/>
<br/>
<br/>

# CSS 3D

<br/>
<br/>

## Flip Button

<br/>

- 박스에 커서를 올리면 박스가 회전하며 박스의 다른 면이 나온다.

<br/>

<video src="https://user-images.githubusercontent.com/83650872/120025424-9d4b0c00-c02b-11eb-9342-52232ceceffa.mp4" width="600" autoplay loop></video>

<br/>
<br/>

## Cube Banner

<br/>

- 여러 SNS, YOUTUBE의 로고 이미지가 회전하며 나타난다.

<br/>

<video src="https://user-images.githubusercontent.com/83650872/120025797-2e21e780-c02c-11eb-94b0-e48a9ed6119a.mp4" width="600" autoplay loop></video>

<br/>
<br/>

## 알게된 점

<br/>

- perspective : 3D 위치 요소에 시야를 제공하기 위해 z=0 평면과 사용자 사이의 거리를 결정한다.

- transform-style: preserve-3d : 요소의 하위 항목이 3D 공간에 배치되어야 함을 나타낸다.

  ( cf. transform-style: flat : 요소의 하위 항목이 요소 자체의 평면에 놓여 있음을 나타낸다. )

- nth-child(number) : 자식들 중 몇번 째 자식을 선택할 것인지 결정해줄 수 있다.

- rotate X,Y,Z : X,Y,Z 축을 따라서 회전

- translate X,Y,Z : X,Y,Z 축을 따라서 이동

- setInterval() : 함수를 반복적으로 호출하거나 코드 조각을 실행하며, 각 호출 사이에 고정된 시간 지연을 사용한다.  
  　　　　　　간격을 고유하게 식별하는 간격 ID를 반환하므로 나중에 clearInterval()을 호출하여 제거할 수 있다.
