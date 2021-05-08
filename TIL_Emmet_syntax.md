<br/>

---

<br/>

오늘은 HTML문서를 마크업할 때, 태그 작성을 빠르고 간단하게 할 수 있는 Emmet에 대해서 공부했다.  
많이 사용해보지 않아서 익숙하지 않아 그냥 직접 태그를 입력하는 것이 더 빠른 것 같기도 하지만  
사용법을 완전히 숙지하고 Emmet을 사용해 마크업 하는 것에 적응한다면
생산성이 좋아질 것 같다.

<br/>

---

<br/>
<br/>
<br/>

# Emmet Syntax

<br/>
<br/>

### HTML 문서 작성에 필요한 기본적인 틀 생성

<br/>

- `html:5` 작성 후 tab key 입력

  - 출력

    ```
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>

    </body>
    </html>
    ```

<br/>
<br/>

### 태그 생성하기

<br/>

- ' `>` ' 이용하기

  - 입력 예

    ```
    header>div>p
    ```

  - 결과

    ```
    <header>
        <div>
            <p></p>
        </div>
    </header>
    ```

<br/>

- ' `^` ' 이용하기

  - 입력 예

    ```
    header>div>p^div
    ```

  - 결과

    ```
    <header>
        <div>
            <p></p>
        </div>
        <div></div>
    </header>
    ```

<br/>

- ' `+` ' 이용하기

  - 입력 예

    ```
    header>div>p^p
    ```

  - 결과

    ```
    <header>
        <div>
            <p></p>
            <p></p>
        </div>
    </header>
    ```

<br/>

- ' `*` ' 이용하기

  - 입력 예

    ```
    header>div>ul>li*3
    ```

  - 결과

    ```
    <header>
        <div>
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </header>
    ```

<br/>

- ' `( )` ' 이용하기

  - 입력 예

    ```
    (header>div>ul>li*3)+footer>div>p
    ```

  - 결과

    ```
    <header>
    <div>
        <ul>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
    </header>
    <footer>
        <div>
            <p></p>
        </div>
    </footer>
    ```

<br/>
<br/>

### 태그 생성과 동시에 내용 입력하기

<br/>

- ' `{ }` ' 기호를 이용한다.

  - 입력 예

    ```
    header>div>p{헤더에 입력되는 내용}
    ```

  - 결과

    ```
    <header>
        <div>
            <p>헤더에 입력되는 내용</p>
        </div>
    </header>
    ```

<br/>
<br/>

### 태그 생성과 동시에 ID, Class 선언해주기

<br/>

- ID를 선언할 때는 ' `#` ' 기호를 이용한다.

  - 입력 예

    ```
    header>div#head
    ```

  - 결과

    ```
    <header>
        <div id="head"></div>
    </header>
    ```

<br/>

- Class를 선언할 때는 ' `.` ' 기호를 이용한다.

  - 입력 예

    ```
    header>div.head
    ```

  - 결과

    ```
    <header>
        <div class="head"></div>
    </header>
    ```

<br/>

- 같은 이름의 Class에 순서대로 숫자를 붙여 선언할 때는 ' `.` ', ' `$` ', ' `*` ' 기호를 이용한다.

  - 입력 예

    ```
    header>div>ul>li.number$*4
    ```

  - 결과

    ```
    <header>
        <div>
            <ul>
                <li class="number1"></li>
                <li class="number2"></li>
                <li class="number3"></li>
                <li class="number4"></li>
            </ul>
        </div>
    </header>
    ```
