<br/>

---

<br/>
<br/>

생활코딩에서 React 기초 강의를 듣기 시작했다.  
원래 Udemy에서 구매한 React 와 Node 강의를 들으려 했지만 영어로 진행되는 강의이다보니  
영어듣기도 하랴 내용도 이해하랴 조금 오래 걸리는거 같았다.  
그래서 기초적인 내용들은 한국어로 빠르게 먼저 듣고 Udemy 강의를 듣기로 했다.

<br/>

---

<br/>
<br/>

## 생활코딩 React (01)

<br/>

- #### **component**

  - 사용자가 정의해서 태그를 만드는 것
  - Component를 작성하면...
    1.  가독성
    2.  재사용성
    3.  유지보수 용이
  - Component를 중심으로 현대적인 웹 앱 UI 만드는 방법 탐구

<br/>

- #### **npm** : Node.js의 앱스토어 같은 역할

<br/>

- #### **npx vs npm**

  - npm 은 프로그램을 설치하는 프로그램
  - npx 는 프로그램을 임시로 설치해서 딱 한번만 실행시키고 지운다.  
    공간을 낭비 하지 않는다. 항상 최신 상태를 유지

<br/>

- #### **build**

  - 실제 배포, 서비스 할 때는 build 안에 있는 파일들을 쓴다.
  - 웹 서버의 document root ( 웹 서버가 문서를 찾는 최상위 directory )에다가  
    빌드 directory 안쪽에 있는 파일들을 위치시키면 된다.

<br/>

- #### **public directory** : npm run start 했을 때 파일을 찾는 document root

<br/>

- Component를 만들 때 Component는 하나의 최상위 태그로 시작해야한다.

<br/>

- 태그들을 자바스크립트처럼 작성하는게 까다롭기 때문에 페이스북에서 만든 언어가 JSX,  
  JSX로 코드를 작성하면 create-react-app 이 javascript 언어로 컨버팅을 해준다.

<br/>

- React의 Component를 정리정돈의 도구로 바라봐라. - Component의 이름에만 집중하게 함으로써 복잡도를 획기적으로 낮추고  
  다시 더 많은 복잡도에 도전할 수 있는 여지가 생기는 것.

<br/>

- Component로 만든 것은 언제나 같은 결과, 가치가 떨어진다.  
  그래서 속성(props)을 붙여서 내용을 결정해줄 수 있다.  
  props -> HTML 의 attribute 라고 생각하기.  
  Component 선언부에서 this.props 활용

<br/>

- #### **Component 파일로 저장하기**

  js 파일을 만들고 그 안에
  Component 선언, export default Component이름;

  ```javascript
  class Subject extends Component {
    render() {
      return (
        <header>
          <h1> {this.props.title} </h1>
          {this.props.sub}
        </header>
      );
    }
  }

  export default Subject;
  ```

<br/>

- Component를 사용하는 외부의 props,  
  props에 따라서 Component를 실제로 구현하는 내부의 state 라는 정보.

<br/>

- Component를 실행할때 render 보다 먼저 실행이 되면서 Component를  
  초기화 시켜주고 싶은 코드는 컨스트럭터 안에다가 작성한다.

<br/>

- 상위 Component의 state 값을 하위 Component의 props의 값으로 전달하는 것은
  얼마든지 가능하다.

<br/>

- **key**

  - 여러개의 목록을 자동으로 생성할때는  
    각각의 목록을 다른것들과 구별할 수 있는 식별자를 적어줘야한다.  
    리액트 내부적 필요로 인해 요청되는 것.

    ```javascript
    class Navigator extends Component {
      render() {
        let lists = [];
        let data = this.props.data;
        let i = 0;
        while (i < data.length) {
          lists.push(
            <li key={data[i].id}>
              <a href={`/content/${data[i].id}`}>{`${data[i].title}`}</a>
            </li>
          );
          i = i + 1;
        }
        return (
          <nav>
            <ul>{lists}</ul>
          </nav>
        );
      }
    }

    export default Navigator;
    ```

<br/>
<br/>
