<br/>
<br/>

## 생활코딩 React (03)

<br/>
<br/>

- **CRUD**
  - Create, Read, Update, Delete 의 약자
  - Create, Read 가 핵심적인 operation 이다.

<br/>

- input 의 placeholder 속성 : 아무것도 입력되지않았을 때 보여지는 내용

<br/>

- #### **form 태그**

  - form 태그는 웹에서 데이터를 어디에 전송할건지 action 값을 줘야한다
  - `<form action="/create_process" method="post" onSubmit~~~>`
    - /create_process 라는 page로 사용자가 입력한 정보를 전송할 것이다 라는 뜻
    - method 를 post 방식으로 설정하면 url에 제출된 내용들이 노출되지 않는다.
    - onSubmit : submit 버튼을 클릭했을 때 onSubmit 이벤트가 실행되도록 약속되어있다.  
      (form 태그가 가지고있는 고유 기능이다.)

<br/>

- data를 추가할 때 UI 에 영향을 주지 않는 것들은 state 값으로 하지 않아도 된다.

<br/>

- push는 원본을 바꾸지만 concat은 원본을 바꾸지 않는다.

  ```javascript
  let arr = [1, 2];
  arr.push(3);
  // arr = [1,2,3];

  let arr2 = [1, 2];
  let result = arr2.concat(3);
  // result = [1,2,3];
  // arr2 = [1,2];
  ```

<br/>

- 오리지널 data를 변경하지 않고 새로운 data를 추가하는 방법을 사용하는 것이 좋다.

  - 전혀 상관없는 실행이 일어나도 render 되는 component 들이 있기 때문이다.
  - render 이전에 실행되는 shouldComponentUpdate() 라는 함수가 있다.  
    shouldComponentUpdate() 함수는 return 값이 true 면 render 함수가 실행되고  
    false 면 render 함수가 실행되지 않는다.
  - shouldComponentUpdate( newProps, newState) 라는 2개의 매개변수가 있다.  
    이를 이용해 새롭게 바뀐 값과 이전 값에 접근할 수 있다.

    ```javascript
    shouldComponentUpdate(newProps, newState){
      if(newProps.data === this.props.data){
        return false;
        }
        return true;
    }
    ```

  - push로 데이터를 추가하게되면 newProps.data 와 this.props.data 가 같아서 활용할 수 없다.  
     그래서 concat으로 데이터를 추가하라는 것이다.  
     (소프트웨어가 작다면 push를 쓰든 concat을 쓰던 상관없다.)

<br/>

- 원본을 바꾸지 않고 setState 를 사용하는 것

  ```javascript
  // 배열의 경우
  let a = [1,2];
  let b = Array.from(a); //a === b : false;
  b.push(3);
  a = [1,2] b = [1,2,3] //a === b : false;

  // 객체의 경우
  // 1.
  let a = { name : 'egoing' };
  let b = Object.assign({},a); //a === b : false;
  b.name = 'leezche';
  a = {name: 'egoing'} , b = {name: 'leezche'}; //a === b : false;
  // 2.
  let a = { name : 'egoing' };
  let b = Object.assign({ left:1, right:2 },a); //a === b : false;
  b.name = 'leezche';
  a = {name: 'egoing'} , b = {left : 1, rigth: 2, name: 'leezche'}; //a === b : false;

  // React 에서의 예시
  if (this.state.mode === "create") {
      _article = (
        <CreateContent
            onSubmit={function (_title, _desc) {

            this.max_content_id = this.max_content_id + 1;

            let _contents = Array.from(this.state.contents);

            _contents.push({
              id: this.max_content_id,
              title: _title,
              desc: _desc,
            });

            this.setState({
              contents: _contents,
              mode: "read",
              selected_content_id: this.max_content_id,
            });
          }.bind(this)}
        ></CreateContent>
      );
  }
  // 원본을 바꾸지 않고 _contents라는 새로운 배열을 만들어
  // 그 배열에 push 하고 setState를 해준다.
  ```

<br/>

- immutable.js 라는 라이브러리 검색해보기 (모든 명령어들이 원본 불변, 일관성있는 코드를 작성할 수 있다.)

<br/>

- props 값을 value 값에 넣으면 props는 read only기 때문에 수정이 안된다.  
  -> onChange를 사용해준다.

  ```javascript
  inputFormHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  <p>
    <textarea
    name="desc"
    placeholder="description"
    value={this.state.desc}
    onChange={this.inputFormHandler}
    ></textarea>
  </p>
  ```

<br/>

- 이 외에도 CRUD 기능 구현을 배우고 페이지에 적용해보았다.  
  추후에 페이지를 정리해서 올리거나 스스로 작업물을 만들어서 올릴 예정이다.

<br/>
<br/>
