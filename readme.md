## 0514


## 0507
``` js
document.write("<div class='ball ball6'>" + lotto[5] + "</div>");
```
자바스크립트 내에서 동적으로 만들 수 있다.

``` js
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
```
Bootstrap 코드 (head태그)
조립하듯이 가져다 사용하면 됨


> jQuery의 장점
> 
- 간결한 문법
- 편리한 API
- 크로스 브라우징

> jQuery 시작하기
> 
- jQuery 공식 사이트(code.jquery.com) 들어가기
- jQuery 3.x → minified 버전 클릭 → 코드 복붙

jQuery 코드 (head 태그)
``` js
<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
```
``` js
    <textarea id="content">jQuery 기초</textarea>
    <script>
        console.log($("#content").val());
    </script>
```
``` js
    <button id="Click">클릭</button>
    <script>
        $("#Click").click(function() {
            console.log('hello')
        });
    </script>
```
내장 객체
자바스크립트에서 제공하는 이미 만들어져 있는 객체 → 기능 제공 (라이브러리)
``` js
var now = new Date(); // 현재 시각을 기준으로 시간 객체가  만들어짐
now.getMonth();
now.getDate();
now.getTime();
```
``` js
<script>
  //1. Date 객체 생성
  var now = new Date();
  //2. 연도를 가져오는 메서드 .getFullYear()
  console.log(now.getFullYear());
  //3. 월 정보를 가져오는 메서드 .getMonth() {0: 1월, 1: 2월, ... 10: 11월, 11: 12월}
  console.log(now.getMonth());
  //4. 일 정보를 가져오는 메서드 .getDate()
  console.log(now.getDate());
  //5. 1970년 1월 1일 00:00:00을 기준으로 흐른 시간을 밀리초로 표시하는 메서드 .getTime()
  console.log(now.getTime());
  //6. 특정 일의 Date 객체 생성
  var christmas = new Date('2021-12-25');
  console.log(christmas);
  //7. 특정 ms의 Date 객체 생성
  var ms = new Date(1000); // 1970-01-01을 기준으로 1000ms(1초) 지난 객체 생성
  console.log(ms);
</script>
```
## 0430
무료 호스팅 : https://www.netlify.com/
<br>브라우저 이벤트 : https://ko.javascript.info/introduction-browser-events

### DOM
* 선택자(selector) : HTML태그를 가져오게 도와주는 문자열
* document 객체 : 브라우저에 열려 있는 HTML문서를 나타냄
```js
document.querySelector('선택자')
```
``` html
    <input type="text">
    <button>입력</button>
    
    <script>
        const $input = document.querySelector('input')
        console.log($input)
    </script>
```

``` html
    <button>입력</button>
    <button>처리</button>
    <button>출력</button>
    
    <script>
        const $button = document.querySelector('button')
        console.log($button)
    </script>

    console창에서는 button 입력이 나옴, 즉 첫번째만 출력이 나옴 다 나오게 하려면 querySelectorAll을 사용해야함
    <script>
        const $$button = document.querySelectorAll('button')
        console.log($$button)
    </script>

    <span>임시</span>
    <div>
        <span id="order">1</span>번째 참가자
    </div>
    <div>
        제시어 : <span id="word"></span>
    </div>
    <input type="text">
    <button>입력</button>
    
    <script>
        const $span = document.querySelector('div  span')
        console.log($span)
    </script>
    span태그가 겹치는 경우 부모를 선택해 사용할 수 있음
    
    <span>임시</span>
    <div>
        <span id="order">1</span>번째 참가자
    </div>
    <div>
        제시어 : <span id="word"></span>
    </div>
    <input type="text">
    <button>입력</button>
    
    <script>
        const $input = document.querySelector('input')
        $input.value = 123;
        $input.focus();
    </script>
```
### 이벤트와 이벤트 리스너
* 이벤트(event) : 사용자가 태그와 상호작용할 때 발생
* 이벤트 리스너(event listener) : 자바스크립트가 HTML에서 발생하는 이벤트를 감지할 수 있게함

이벤트 리스너 추가하기
* addEventListener()
``` js
태그.addEventListener('<이벤트 이름>', <이벤트 리스너>)
```

``` js
    <div>
        <span id="order">1</span>번째 참가자
    </div>
    <div>
        제시어 : <span id="word"></span>
    </div>
    <input type="text">
    <button>입력</button>
    
    <script>
        const onClickButton = () => {
            console.log('버튼 클릭')
        }
        const $button = document.querySelector('button');
        $button.addEventListener('click', onClickButton)
    </script>
    이벤트 리스너를 사용할 때 사용할 함수를 먼저 명시해야 함
    <script>
        const $button = document.querySelector('button');
        $button.addEventListener('click', ()=> {
            console.log("버튼클릭")
        })
    </script>
    복잡한 코드가 아니면 바로 함수를 만들어 사용 가능

        <script>
        const onInput = (event) => {
            console.log('글자 입력', event.target.value)
        }
        const $button = document.querySelector('button');
        $button.addEventListener('click', ()=> {
            console.log("버튼클릭")
        })

        const $input = document.querySelector('input')
        $input.addEventListener('input', onInput)
    </script>    
        
        $input.removeEventListener('input', onInput)
        은 이 이벤트 리스너를 제거하겠다 익명 함수는 제거가 안 됨.

    <script>
        window.addEventListener('keyup', (event) => {
            console.log('keyup', event)
        })
        window.addEventListener('keydown', (event) => {
            console.log('keydown', event)
        })
    </script>
    window를 지정해 전원 객체로 지정하고 키보드를 누르고 땠을 때 이벤트 지정

    <script>
        window.addEventListener('mousedown', (event) => {
            console.log('mousedown', event)
        })
    </script>
    마우스 이벤트 지정 좌표가 출력됨 mouseup도 같음

    <script>
        window.addEventListener('mousemove', (event) => {
            console.log('mousemove', event)
        })
    </script>
    마우스를 움직일 때 마다 이벤트 발생

    <script>
        let start; // 마우스를 클릭했을 때 시작지점
        window.addEventListener('mousedown', (event) => {
            start = [event.clientX, event.clientY]
        })
        window.addEventListener('mouseup', (event) => {
            const end = [event.clientX, event.clientY];
            const diffx = end[0] - start[0];
            const diffy = end[1] - start[1];
            const isUnder45 = Math.abs(diffx) > Math.abs(diffy);
            if (diffx< 0 && isUnder45) {
                console.log('왼쪽')
            } else if (diffx > 0 && isUnder45) {
                console.log('오른쪽')
            } else if (diffy > 0 && !isUnder45) {
                console.log('아래쪽')
            } else if (diffy < 0 && !isUnder45) {
                console.log('위쪽')
            }
        })
    </script>
    마우스 드래그 각도에 따른 이벤트 발생 

    <script>
        const $button = document.querySelector('button');
        $button.addEventListener('contextmenu', (event)=> {
            event.preventDefault(); //컨텍스트 메뉴 X
            console.log('우클릭');
        })
        //drag, drop, scroll, wheel
    </script>
    버튼 우클릭시 컨텍스트 메뉴 안 뜨게하기
```
### 태그 속성 다루기
* DOM을 통해 자바스크립트로 태그 속성을 다룰 수 있음
``` js
    <script>
    document.querySelector('input').type
    document.querySelector('input').name
    document.querySelector('input').value
    </script>
```
``` js
    <script>
        $button = document.querySelector('.btn')
        $button.className = 'btn1 btn2'
    </script>
    버튼 클래스 명 바꾸기 //.btn => btn1 btn2

    <script>
        $button = document.querySelector('.btn')
        $button.classList.add('btn1', 'btn2')
    </script>
    버튼 클래스 명 추가하기 //.btn => btn btn1 btn2
```
``` js
    <script>
        console.log(document.querySelector('div').parentNode)
        console.log(document.querySelector('body').children)
    </script>
    부모, 자식의 태그 부르기
```

``` js
    <form action="" method="get" id="form">
        <input type="text" name="name" id="name" required>
        <input type="email" name="email" id="email" required>
        <button name="button" type="submit">구독</button>
    </form>
    
    <script>
        const $form = document.querySelector('#form');
        console.log($form[0]);
        console.log($form[1]);
        console.log($form[2]);
        
        console.log($form.name);
        console.log($form.email);
        console.log($form.button);
    </script>
```

``` js
    <script>
        const $button = document.createElement('button')
        $button.classList.add('login')
        $button.style.fontSize = '15px';
        $button.textContent = '버튼';
        document.body.append($button);
    </script>
    script태그를 통해 button을 만들 수 있음
```
``` js
    <script>
        // DOM이 완전히 로드된 후에 스크립트를 실행하도록 이벤트 리스너를 추가합니다.
        document.addEventListener('DOMContentLoaded', function() {
            // <table> 요소를 생성합니다.
            const $table = document.createElement('table');
            // $table에 border 속성을 추가합니다.
            $table.setAttribute('border', '1');
            // 4개의 행을 생성합니다.
            for(let i = 0; i < 4; i++) {
                const $tr = document.createElement('tr');
                // $table에 행을 추가합니다.
                $table.append($tr);
                // 각 행에 4개의 열을 생성합니다.
                for(let j = 0; j < 4; j++) {
                    const $td = document.createElement('td');
                    // 각 셀에 '칸'이라는 텍스트를 추가합니다.
                    $td.textContent = '칸';
                    // 각 행에 열을 추가합니다.
                    $tr.append($td);
                }
            }
            // <table> 요소를 body에 추가합니다.
            document.body.append($table);
        });
    </script>
    script태그를 통해 표 만들기
```
### 알람창
``` js
    <script>
        let number = parseInt(prompt("몇 명이 참가하나요?"))
    </script>

    
    <script>
        confirm("확인 또는 취소")
    </script> //확인 OR 취소 (true or false)
```

### Math 객체
* Math 객체 : 수학에 사용하는 다양한 메서드가 제공
    * Math.random() 0 ~ 0.99999
    * Math.random()*6  0 ~ 6.999999
    * Math.round(Math.random()*6)  1 ~ 6

### Date 생성자 함수
``` js
    (연, 월, 일, 시, 분, 초, 밀리초);
    <script>
        const date = new Date(2024, 4, 30);
        console.log(date)
    </script>
```
    
## 0402
### 클래스 
* 클래스(class): 객체를 생성하기 위한 템플릿(서식)
 
### 함수로 객체를 생성하는 방법
* 공장 함수(factory function): 객체를 반환하는 함수
* 새로운 객체가 필요하다면 그때 마다 함수 호출
``` js
function createMonster(name, hp) {
    return {name, hp}
}
const mon1 = createMonster('aaa', 100);
const mon2 = createMonster('bbb', 10);
// 공장 함수
mon1.name; //aaa

function Monster(name, hp) {
    this.name = name;
    this.hp = hp;
}
const mon3 = new Monster('ccc', 200);
mon3.hp; //200

function createMonster2(name, hp, att) {
    return {name, hp, att,
           attack(monster) {
               monster.hp -= this.att;
            },
    };
}
const mon4 = createMonster2('슬라임', 25, 10);
const mon5 = createMonster2('고블린', 50, 20);
mon4.attack === mon5.attack //false

function Monstrer2(name, hp, att) {
    this.name;
    this.hp;
    this.att;
}
Monstrer2.prototype.attack = function(monster) {
    monster.hp -= this.att;
}
const mon6 = new Monstrer2('aaa', 10, 10);
const mon7 = new Monstrer2('bbb', 20, 20);

mon6.attack === mon7.attack; //true

class Hero extends Unit {
    constructor(name, hp, att) {
        super(name, hp, att); //부모 생성자 호출   
        this.maxHp = hp;
    }
    attack(target) {
        super.attack(target);
        console.log('attack 추가 기능');
    }
    heal() {
        this.hp = maxHp;
    }
}
.
```
## 0326
### 함수 
* 함수(function): 특정한 작업을 수행하는 코드
``` js
function a() {} //첫번째 방법
const b = function() {}; //두번째 방법
const c = () => {}; //세번째 방법

function a() {
    return 10;
}
a(); //10출력

function a() {
    console.log('return실행 전');
    return;
    console.log('return실행 후');
}
a(); //retrun실행 전 출력

function d() {
    for (let i = 0; i < 5; i++) {
        if (i >= 3) {
            return i;
        }
    }
}
d(); //3출력
```
* 매개변수와 인수 사용하기
    * 인수(argument): 함수를 호출할 떄 넣은 값
    * 매개변수(parameter): 함수를 선언할 떄 사용한 변수
``` js
function aa(w,x,y,z) {
    console.log(w,x,y,z);
}
aa('a','b','c'); //a b c undefined

function aa(w,x,y,z) {
    console.log(w,x,y,z);
}
aa('a','b','c','d','e'); //a b c d 'e'값은 넘어감 매개변수를 맞춰줘라
```
* 다른 변수 사용하기
    * 순수 함수(pure fuction): 자신의 매개변수나 내부 변수(또는 상수)만 사용하는 함수
* 고차 함수 사용하기
    * 고차 함수(high dorder function): 함수를 만드는 함수
``` js
function minus1(x,y) { //순수 함수
    const a = 100;
    return (x-y)*a;
}
minus1(5,3); //200 출력

const b = 100;
function minus2(x,y) { //순수 함수X
    return (x-y)*b;
}
minus1(5,3); //200출력

const func = () => {
    return () => {
        console.log("abc");
    }
}
const innerFunc = func();
innerFunc(); //abc 출력

const func = (msg) => {
    return () => {
        console.log(msg);
    }
}
const inner2 = func('하하');
inner2(); //하하 출력
const inner2() {
    console.log('하하');
} //와 같다고 생각하면 됨
```

### 객체 리터럴
* 객체 생성하기
    * 속성(property): 중괄호로 묶인 정보. 속성 이름과 속성 값으로 구분
    * 객체 리터럴(object literal): 중괄호를 사용해 객체를 표현하는 것
* 객체 속성에 접근하기
    * 속성 이름을 통해 속성 값에 접근
    * 마침표(.) 사용시 변수.속성
    * 대괄호([]) 사용시 변수['속성']
* 객체 속성을 추가/수정/삭제
    * 추가시 변수.속성=값;
    * 수정시 변수.속성=값;
    * 삭제 시 delete 변수.속성;
``` js
const human = {
    name: 'osm',
    year: 2001,
    gender: 'M',
};
human.name; //osm
human['name'] //osm

const name = 'osm';
const year = 2001;
const human = {name, year};
human //{name: 'osm', year: 2001}
human.gender = 'M';
human //{name: 'osm', year: 2001, gender: 'M'}
delete human.gender;
human //{name: 'osm', year: 2001}

const debug = {
    msg: 'hello',
    log: function(value) {
        console.log(value);
    },
};
debug.log('hello');

const human = {
    name: {
        first:'os',
        last:'m',
    },
    gender: 'M',
};
human.name.first //os
human['name']['first'] //os
```
* ?.연산자: 존재하지 않는 속성에 접근할 때 에러가 발생하는 것을 막아 줌
    
``` js
human.fff.name //에러 발생
human.fff?.name; //undefined
```

* 참조와 복사
``` js
const a = {name: 'osm'};
const b = a;
b.name //osm

let s1 = 'osm';
let s2 = s1;
s1 = 'ooo';
s2 // osm

const array = [{j:'k'}, {l:'m'}];
const ref = array;
array === ref //true

const arr1 = [...array]; //얕은 복사
array === arr1 //false
array[0] === arr1[0] // true 외부 객체만 복사되고 내부 객체는 참조 관계를 유지하는 복사
const deep = JSON.parse(JSON.stringify(array)); //깊은 복사 
array === deep //false
array[0] === deep[0] //false 내부객체까지 참조 관계가 끊기면서 복사되는 것
```
* 구조분해 할당
    * 객체의 속성 이름과 대입하는 변수명이 같을 때 다음과 같이 줄여서 쓸 수 있음
``` js
const person = {name: 'osm'};
//const name = person.name;
const {name} = person; // 앞 줄과 같은 의미
name; //osm

const obj = {a:1, b:2};
//const a = obj.a;
//const b =obj.b;
const obj = {a:1, b:2};
const {a,b}= obj;
a; //1
b; //2
```
* 유사 배열 객체
    * 배열 모양을 한 객체
    * 배열이 아니므로 배열 메서드를 사용할 수 없음
``` js
//const one = array[0];
const [one, two, three] = array;

let a1 = 5;
let b1 = 3;
[b1, a1] = [a1, b1];
```
### 함수를 인수로 받는 배열 메서드
* `forEach()`와 `map()`
    * `forEach()`: for문을 사용하지 않고도 반복문 수행 가능
    * `map()`: 배열 요소들을 일대일로 작지어서 다른 값으로 변환해 새로운 배열을 반환
* `find()`, `findIndex()`, `filter()`
    * `find()`: 콜백 함수의 반환값이 true인 요소를 찾는 메서드. 전달된 콜백 함수가 true가 되면 해당하는 첫 번째 요소를 반환
    * `findIndex()`: 찾은 요소의 첫번 째 인덱스를 반환하고, 찾지 못했다면 -1을 반환하는 메서드
    * `filter()`: 콜백 함수의 반환값이 true가 되는 모든 요소를 찾아 결과를 배열로 반환하는 메서드. 만족하는 요소가 없을 경우 빈 배열을 반환

| arr | 1일 때 | 5일 때 | 4일 때 | 2일 때 |
|:---:|:---:|:---:|:---:|:---:|
|`number`| 1 | 5 | 4 | 2 |
|`index`| 0 | 1 | 2 | 3 |
``` js
//forEach() 예제
const arr = [1,5,4,2];
arr.forEach((n,i)=> {
    console.log(n,i);
}); 
//1 0
//5 1
//4 2
//2 3

//map() 예제
//Array 인스턴스 안에 fill()메서드는 배열의 인덱스 범위 내에 있는 모든 요소를 정적 값으로 변경합니다.
//fill(value)
//fill(value, start )
//fill(value, start, end)

//Array(5) 길이가 5인 배열을 생성
//fill(1) 배열의 요소를 1로 채웁니다.
//map((v, i) => i+1) v는 요소의 값, i는 index 따라서 각 요소의 값을 그 인덱스에 1을 더한 값으로 바꿈
const numbers2 = Array(5).fill(1).map((v,i) => i+1);
numbers2; //[1, 2, 3, 4, 5]

const newArr = arr.map((v,i) => {return v*2});
newArr; //[2, 10, 8, 4]

//find(), findIndex(), filter() 예제
arr.find((v, i) => {
    return v > 1;
}); //5

arr.findIndex((v, i) => {
    return v > 1;
}); //1

arr.findIndex((v, i) => {
    return v > 10;
}); //찾지 못해서 -1

arr.filter((v) => v%2 == 0); //[4,2]
```
* sort()
    * 비교 함수의 반환값에 따라 배열을 정리하는 메서드
``` js
arr.sort((a,b) => a-b);
[1, 2, 4, 5] //오름차순으로 정렬
arr.sort((a,b) => b-a);
[5, 4, 2, 1] //내림차순으로 정렬
```
* reduce()
    * 배열에 있는 반복 메서드의 일종
    * 배열의 요소들을 하나의 값으로 합침
    * 초기 값이 없으면 배열이 첫 번째 요소가 초기 값이 됨
``` js
arr.reduce((a,c) => {
    return a+c;
}, 0); //12
```
* every()와 some()
    * every(): 하나라도 조건을 만족하지 않는 요소(조건 함수가 false를 반환)를 찾으면 반복 중단
    * some(): 하나라도 조건을 만족하는 요소(조건 함수가 true를 반환)를 찾으면 반복 중단
``` js
arr.every((v) => v !== null); //false
arr = [5,4,2,1]
arr2.some((v) => v == null); //true
arr2 = [1,3,5,null]
```
## 0305
### 자바스크립트를 시작하기 전에
* 프롬프트에 코드 입력 후 Enter를 누르면 실행 결과를 확인할 수 있음
* 콘솔에 Hello, world! 출력
``` html
console.log("Hello, world!");
```
* 인터프리터(interpreter)방식
    * 코드를 한 덩어리씩 실행해 결과를 출력하는 방식
    * 예: 자바스크립트 등

* 컴파일(compile)방식
    *컴퓨터가 이해할 수 있는 언어로 변환하는 과정을 거친 후 한번에 실행하는 방식
    * 예: c, c++, 자바 등

* REPL(Read-Eval-Print Loop)
    * 코드를 한 줄씩 입력(Read)받아
    * 이를 평가(Eval)하고
    * 결과를 출력(Print)한 뒤,
    * 다시 프롬프트가 나타나서 새로운 입력을 기다리는 과정을 반복(Loop)

## 코드 작성 규칙
###  세미콜론(;)
* 붙여도 되고 붙이지 않아도 됨
* 붙이기를 권장
* 한 줄에 여러 명령을 넣을 때는 세미콜론으로 구분
``` html
console.log("Hello, world!");
```

### 주석(comment)
* 사람만 알아볼 수 있도록 설명을 작성한 부분
* 코드에 영향을 미치지 않음

* 한 줄 주석: // 기호 뒤에 작성
``` html
console.log("Hello, world!"); // Hello, world! 출력
```
* 여러 줄 주석: /* */ 기호로 감싼, 안쪽에 작성
``` html
/* console.log("Hello, world!"); */
```

### 들여쓰기
* 제한 없음
* 단, 이 책에서는 띄어쓰기 2칸으로 통일함
* 규칙적으로 사용하면 코드의 가독성을 높일 수 있음
``` html
if (condition) {
    console.log("Hello, world!");
}
```

### 자료형
* 값(value): 프로그램에서 조작할 수 있는 데이터
* 자료형(data type): 값의 종류

### 문자열
* 문자열(string): 문자들이 하나 이상 나열되어 있는 자료형
* 시작과 끝이 따옴표로 감싸진 값
* 시작과 끝을 같은 종류의 따옴표로 감싸야 함
* 연산자(operator): 어떠한 값에 특정 작업을 수행하라는 의미를 나타내는 기호
* 문자열을 숫자로 바꾸기
    * parseInt()와 Number()함수 사용
    * parseInt()함수: 문자열을 정수로만 바꿈
    * 문자열을 실수로 바꾸고 싶으면 parseFloat() 함수 또는 Number() 함수 사용
* NaN
    * NaN: Not a Number(숫자가 아님)
    * 주의: 이름과는 다르게 숫자
* 산술 연산자 사용하기
    * +, -, *, / 등의 기호를 사용
    * % 연산자: 나눗셈의 나머지를 구하기
    * ** 연산자: 숫자를 거듭제곱
* 문자와 숫자 더하기
    * 형 변환(type casting): 값의 자료형이 바뀌는 현상 또는 바꾸는 행위
    * + 연산자를 사용할 때는 숫자보다 문자열이 우선시
    ```html
    '1' + 0 // '10'
    ```
    * - 연산자를 사용할 때는 다른 자료형이 먼저 숫자로 형 변환된 후 연산
    ``` html
    '9' - 5 // 4
    ```
    * 예: 문자열 ‘9’는 숫자 9로 형 변환되고, 여기서 5를 빼기 때문에 숫자 4
가 나옴
``` html
parseInt('1등') //문자를 숫자로 바꿔줌 답: 1
0.1 + 0.2 //0.30000000000004
0.3 - 0.2 //0.09999999999998
부동소수점 문제 
(0.3*10 - 0.1*10) / 10 //0.2
```
* 부동소수점 문제: 10진법으로 계산한 결과와 차이가 발생
* 원인: 2진법으로 실수를 표현하면 무한 반복되는 실수가 있어서 어쩔 수 없이 근삿값으로 저장
* 해결 방법: 실수를 정수로 바꿔 계산하고 마지막에 다시 실수로 바꾸기

### 불 값
* 불 값(boolean): 참(true)과 거짓(false)을 나타내는 자료형
* 불 값 표현하기
    * 따옴표로 감싸지 않고 true와 false를 입력
    ``` html
    typeof true; // boolean
    ```
* 비교 연산자 사용하기
    *  >: 왼쪽 값이 오른쪽 값보다 크다(초과)
    *  <: 왼쪽 값이 오른쪽 값보다 작다(미만)
    *  >=: 크거나 같다(이상)
    * <=: 작거나 같다(이하)
    * ==: 양쪽 값이 같은지 비교
    * !=: 양쪽 값이 다른지 비교
    ``` html
    5 > 3; // true
    5 >= 5; // true
    5 < 3; // false
    5 <= 4; // flase
    ```
* ==와 ===의 다른 점
    * ==: 값이 같은지 비교. 자료형이 달라도 값이 같으면 true
    * ===: 값뿐 아니라 자료형까지 같은지 비교. 자료형까지 같을 때만 true

* 논리 연산자 사용하기
    * && 연산자: ‘그리고’를 의미
    왼쪽 식과 오른쪽 식이 모두 true여야 true
    * || 연산자: ‘또는’을 의미
    왼쪽 식이나 오른쪽 식 둘 중 하나라도 true면 true
* 논리 연산자 사용 시 유의할 점
    * && 연산자: 앞에 나오는 값이 참인 값이면 뒤에 나오는 값 결과, 앞에 나오는 값이 거짓인 값이면 앞에 나오는 값이 결과
    * || 연산자: 앞에 나오는 값이 참인 값이면 앞에 나오는 값 결과, 앞에 나오는 값이 거짓인 값이면 뒤에 나오는 값이 결과
    * ?? 연산자(널 병합 연산자, nullish coalescing operator): 앞에 나오는 값이 null이나 undefined면 뒤에 나오는 값이 결과, null도 undefined도 아니면 앞에 나오는 값이 결과
    ``` html 
    5 && 0 // 0
    1 && 5 // 5
    0 ?? 1 // 0
    1 ?? 0 // 1
    ```
### 빈 값 사용하기
* undefined
    * 빈 값(비어 있음을 의미)
    * 값이자 자료형
    * 보통 반환할 결과 값이 없을 때 기본 값으로 사용
* null
    * 빈 값
    * undefined와 같지 않음
``` html 
null === null; // true
null == 0; // false
null == ''; // false null은 그냥 null undefined는 그냥 undefined
undefined === null; // false
undefined == null; // ture 
undefined == false; // false
undefined == ture; // false 그냥 정의가 안된 값이라 생각
```
### 변수
* 변수(variable): 값을 저장하고 저장한 값을 불러올 수 있게 하는 것
* 변수 선언(declaration): 변수를 만드는 행위
### let으로 변수 선언하기
* 변수를 선언하는 방법
    * let(또는 const, var) 다음에 선언하려는 변수명(변수의 이름) 적고그 뒤에 대입(assignment, 할당) 연산자 = 입력, = 연산자 뒤에는 변수에 저장할 식 입력
    ``` html
    let 변수명 = 식;
    ```
    let 변수, const 상수
* 선언문: let으로 시작하는 명령
* 초기화(initalization): 변수를 선언함과 동시에 값을 대입하는 행휘
``` html
let total = 5000 + 8000 + 10000 + 9000; // undefined
let string = 'Hello, variable'; // undefined
```
### const로 상수 선언하기
* const: 상수(constant)의 줄임말
* 한번 값을 대입하면 다른 값을 대입할 수 없다는 특성 때문에 상수 선언 시 초기화(선언과 동시에 값을 대입하는 것)하지 않으면 에러 발생
``` html
const value = '상수입니다';
value = '바꿀 수 없습니다'; // 에러 발생
```

### var 알아두기
* var: 변수(variable)의 줄임말
* 변수문(variable statement): var로 변수를 선언한 문장
* 기존에 선언한 변수를 다시 선언해도 에러가 발생하지 않음
* 예약어에 사용하는 단어를 변수명으로 사용할 수 있음
* var 대신 let을 사용하면 에러가 발생해 해당 이름을 변수명으로 사용하지 못하게 막음
* 조건문: 주어진 조건에 따라 코드를 실행하거나 실행하지 않는 문

### 반복문
``` html
for (let i = 0; i<10; i++) {
    for (let j=0; j<10; j++) {
        console.log(i, j);
    }
}
```
``` html
let i = 0;
while (i < 10) {
    i++;
    if (i%2 === 0) {
        continue;
    }
    console.log(i);
}
```
## 객체 
### 배열
* 배열 생성하기
    * 대괄호([], 배열 리터럴)로 값들을 한꺼번에 감싸고, 각 값은 쉼표로 구분
    * 인덱스(index): 값의 자릿수로, 0부터 시작
    * 이차원 배열: 배열 안에 배열이 있는 경우
    * 요소(element): 배열의 값
    * 메모리에서 배열의 구조
    ``` html
    const fruits = ['사과', '오렌지']
    fruits[1] //'오렌지'

    const arrayOfArray = [[1,2,3], [4,5]];
    arrayOfArray[1] //[4,5]

    const everything = ['사과', 1, true, null, undefined];

    everything[2] // true
    everything[everything.length] = 1.5
    everything[5] = 1.5
    everything.at(-1) // 1.5 마지막 인덱스의 값을 알려줌

    const target = [0,1,2,3,4]
    target[target.length] = 5; // [0,1,2,3,4,5]

    ```

* 배열의 요소 개수 구하기
    * 배열 이름 뒤에 .length 붙이기
    * 빈 값도 유효한 값이므로 요소 개수를 셀 때 포함
    * 요소를 찾는 방법: 인덱스 사용하기, at() 사용하기

* 배열에 요소 추가하기
    * 원하는 배열의 인덱스에 값 대입
    * unshift(): 배열의 맨 앞에 새로운 요소를 추가할 떄
    * push(): 배열에 값을 추가할 떄
    ``` html
    target.unshift(-1); // [-1,0,1,2,3,4,5]
    target.push(6); // [-1,0,1,2,3,4,5,6]

    ```

* 배열의 요소 수정하기
    * 원하는 인덱스에 바꿀 값 넣기

* 배열에서 요소 삭제하기
    * pop(): 마지막 요소를 삭제할 때
    * shift(): 첫 번째 요소를 삭제할 때
    * splice(): 중간 요소를 삭제할 때
    * splice(시작 인덱스, 삭제할 요소 개수)로 작성하며, 숫자를 하나만 넣으면 배열 끝까지 삭제
    ``` html
    target.pop(); // [-1,0,1,2,3,4,5]
    target.shift(); // [0,1,2,3,4,5]
    target.splice(2); // [0,1,3,4,5] 
    
    let arr = [가, 나, 다, 라 , 마, 라]
    while(arr.indexOf('라') != -1) {
        arr.splice(arr.indexOf('라'), 1)
    }
    ```

* 배열에서 요소 찾기
    * includes(): 주어진 값이 배열에 존재하는지 확인할 때 사용, 있으면 true, 없으면 false
    * indexOf(): 검색하려는 값이 어느 인덱스에 위치하는지 앞에서부터 찾을 때
    * lastIndexOf(): 검색하려는 값이 어느 인덱스에 위치하는지 뒤에서부터 찾을 때
    * indexOf()와 lastIndexOf() 사용 시 주의할 점 : 값뿐 아니라 자료형도 일치해야 함
    ``` html
    const arr = ['가', '나', '다', '라', '마']
    const result = arr.indexOf('다'); // result == 2;
    const result2 = arr.lastIndexOf('다');

    ```

    * 배열 자르고 합치기
        * slice(): 시작 인덱스부터 종료 인덱스까지 배열을 잘라 새 배열 만들기
        배열.slice(<시작 인덱스>, <종료 인덱스>)
        * concat(): 두 배열을 합쳐 하나의 새로운 배열로 만들기
        배열.concat(값1,값2);
        ``` html
        [1,2].concat(3,4); // [1,2,3,4]
        'hello'['hello'.length-1] = 'a';
        'hello'['hello'.length -1]; // 'o'
        ```
    * join(): 배열을 문자열로 만들 때
        * 소괄호 안에 아무 값이 없으면 배열의 요소를 쉼표로 합치기
        * 문자열이 있으면 해당 문자열을 요소 사이사이에 넣어 하나의 문자열로 만들기
    * split(): 문자열을 배열로 만들 때
        * 소괄호 안에 값이 없으면 문자열이 배열의 첫 번째 요소가 됨
        * 소괄호에 빈 문자열을 넣으면 대상 문자열이 전부 개별 문자로 쪼개져 각각 배열의 요소가 됨
        * 소괄호 안에 넣은 문자열이 대상 문자열에 있으면 해당 문자열을 기준으로 대상 문자열을 나눔
    ``` js
    ['1','2','3'].join('-'); // 1-2-3
    '123'.split() // '123'

    '123'.split('') // ['1', '2', '3']

    '1-2-3-4'.split('-') // ['1', '2', '3', '4']

    for (let i=0; i<arr.length; i++) {
        console.log(arr[i]);
    }
    
    const twoArr = [
    [1,2,3],[4,5,6]
    ];
    0: (3) [1, 2, 3]
    1: (3) [4, 5, 6]
    
    for (let i=0; i<twoArr.length; i++) {
        for (let j=0; j<twoArr[i].length; j++) {
            console.log(twoArr[i][j]);
        }
    };
    ```
* flat()과 fill()
    * flat(): 배열의 차원을 한 단계 낮추기 2차원 배열을 1차원 배열로 그 순간만
    * fill(): 빈 배열의 요소를 특정 값으로 미리 채우기
    ``` html
    twoArr.flat(); // twoArr[1,2,3,4,5,6]
    
    ```
* Set으로 중복 요소 제거하기
    * Set은 배열과 달리 중복을 허용하지 않음
    * 배열 뿐 아니라 문자열 중복도 제거