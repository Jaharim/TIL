<br/>
<br/>

## 생활코딩 React (02)

<br/>
<br/>

- Component 안에서의 props 는 **read only** 이다.

<br/>

- #### **state 에서 알아야할 중요한 사실**

  - react에서는 props나 state 의 값이 바뀌면  
    그 props나 state를 가지고 있는 component의 render 함수가 다시 호출된다.  
    그에 따라 render함수 하위에 있는 각 component들의 render 함수들도 다시 호출된다.  
    render 함수 안에 console.log 를 작성해서 확인해볼 수 있다.
  - 어떤 HTML을 그릴 것인가를 결정하는 함수가 render이다.

<br/>

- #### **preventDefault()**

  - HTML의 tag에 이벤트를 걸 때,  
    이벤트 태그가 가지고있는 기본적인 동작을 못하게 할 때 사용한다.

<br/>

- 이벤트가 호출됐을 때 실행되는 함수 안에서는  
  this의 값이 component 자기 자신을 가리키지 않고 값이 셋팅되어있지 않다.

<br/>

- render 함수 안에서 this 는 그 component 자체을 가리킨다.  
  render 함수 안의 함수는 this가 아무것도 없다.  
  this값이 없을 때 **bind(this값)** 를 이용해 강제로 this값을 주입하는 방법이 있다.
  ```javascript
  let obj = { name: "egoing" };
  function bindTest() {
    console.log(this.name);
  }
  bindTest(); // undefined
  bindTest.bind(obj);
  // 이렇게 해주면 bindTest함수 안의 this는 obj가 된다.
  // 함수 내부에서 obj 값이 this가 된다.
  // 아래와 같이 작동한다.
  let bindTest2 = bindTest.bind(obj);
  bindTest2(); // egoing
  ```

<br/>

- render 함수 안에서 `this.state.mode = 'welcome'` 대신

  ```javascript
  this.setState({
      mode: 'welcome'
      });
  .bind(this)
  ```

  이렇게 선언해야하는 이유

  - constructor에서는 `this.state.mode = 'welcome` 이렇게 선언해도 되지만  
    생성이 끝난 다음에 동적으로 state 값을 바꿀때는 이렇게 선언하면 안된다.  
    react 입장에서 this.state.mode = 'welcome' 는 몰래 바꾸는 것과 같다.

  - ```javascript
    this.setState({
      mode: "welcome",
    });
    ```

    `this.setState` 함수에 변경하고싶은 값을 객체 형태로 주는 것으로 바꿔야한다.

    constructor에서는 편하게 작성해도 된다.

<br/>

- #### **이벤트 만들기**

  컴포넌트의 생산자 입장에서  
  컴포넌트를 사용할 때 사용자가 link를 클릭했을 때의 이벤트를 설치하고 싶다면  
  ex) 컴포넌트에 onChangePage 라는 props를 만들고 그 속에 함수를 작성한다.  
   그 다음 컴포넌트에서 event가 발생되었을때  
   props로 전달된 onChangePage 라는 함수를 호출하도록 코드를 작성하면 된다.

  ```javascript
  // main
  class App extends Component {
    constructor(props) {
      super(props); // 여기까지가 초기화
      this.state = {
        mode: "read",
      };
    }
    render() {
      return (
        <div className="App">
          <Subject
            onChangePage={function () {
              this.setState({ mode: "welcome" });
            }.bind(this)}
          ></Subject>
        </div>
      );
    } // 컴포넌트에 onChangePage 라는 props를 만들고 그 속에 함수를 작성
  }

  // Subject component
  class Subject extends Component {
    render() {
      return (
        <header>
          <h1>
            <a
              href="/"
              onClick={function (e) {
                e.preventDefault();
                this.props.onChangePage();
              }.bind(this)}
            >
              {this.props.title}
            </a>
          </h1>
          {this.props.sub}
        </header>
      );
    }
  } // 컴포넌트에서 event가 발생되었을때 props로 전달된 onChangePage 라는 함수를 호출하도록 코드
  ```

<br/>

- bind의 두번 째 인자로 들어온 값을 함수의 첫번째 매개변수 값으로 넣어준다.  
  기존에 있던 것들은 뒤로 밀려난다.

<br/>

- **data-** 라는 접두사로 시작되는 html 속성은 dataset 이라고 하는 것으로 접근할 수 있다.  
  ex) `data-id` 는 `dataset.id` 로 접근할 수 있다.

<br/>

- 상위->하위 컴포넌트로 값을 전달할 때는 props 로 전달  
  하위->상위 컴포넌트의 값을 바꾸고싶다 이벤트를 통해서 한다.

  **redux** : 하나의 data 저장소에 값들이 저장되어있어서 redux의 값이 바뀌면 그와 관련된 모든 값이 바뀐다.<br/>

  <img src="https://user-images.githubusercontent.com/83650872/124623567-0f2e3500-deb7-11eb-9deb-6a903d60a272.png" width="500"/>

<br/>
<br/>
