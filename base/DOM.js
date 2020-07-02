// DOM == Document Object Model  객체 지향 모델 구조화된 문서를 표현하는 형식 W3C의 공식 표준 

/*
    동적으로 HTML 문서의 내용, 구조, 스타일에 접근하고 변경하는 수단으로, 
    같은 코드가 여러 브라우저에서 동일하게 동작하도록 설립된 표준입니다.
*/

// QuerySelector -- 제어대상(문서객체를 찾기위한 함수)

/*
    함수 이름	요약	반환값	IE 지원
    
    getElementById	id 속성으로 검색	객체(한개)	IE 7+
    getElementsByClassName	class 속성으로 검색	배열(여러개)	IE 9+
    getElementsByTagName	태그 이름으로 검색	배열(여러개)	IE 7+
    querySelector	jQuery-유사 셀렉터	객체(한개)	IE 8+
    querySelectorAll	jQuery-유사 셀렉터	배열(여러개)	IE 8+
*/

var mytext1 = document.getElementById('mytext1');
var containers = document.getElementsByClassName('container');
var images = document.getElementsByTagName('image');
var mytest1_1 = document.querySelector('#mytext1');
var continers = document.querySelector('.container');


//[문서 객체의 속성]
/*  
    id	        id값	           if (myBox.id == “my-box”)
    className	class값	           myBox.className = “box red-box”
    tagName	    태그의 이름         if (myBox.tagName == “div”)
    value	    value값	           nameInputArea = “홍길동”
    style	    style 오브젝트	    myBox.style.color = “red”
    innerHTML	태그 내부 HTML값	myBox.innerHTML = “ok”
*/

// 사용자 정의 속성 제어 

getAttribute(name);
setAttribute(name, value);
hasAttribute(name);
removeAttribute(name);

// ex 
var user = document.getElementById("user");
var monster = document.getElementById("monster");
user.setAttribute("HP", 100);
user.style.left = "50px";

if (parseInt(user.style.left) < parseInt(monster.style.left))
    user.setAttribute("HP", user.getAttribute("HP") - 10);

// [innerHTML 속성] 
// QuerySelector로 가져온 도큐먼트 오브젝트의 내용이나, 내부 HTML 코드를 javascript 코드에서 변경가능 


// [style 속성]
// QuerySelector로 가져온 노드에서 style 속성을 참고하여 css 속성을 적용시킬 수 있다. 

// 예시
var box = docuemnt.getElementById("box");
box.style.backgroundColor = "red";


// [jQuery]
/** 
    javascript 함수를 지원 하지 않는 것이 있어 코드가 제대로 동작하지 않는 경우도 많음 
    jQuery 호환성을 해결하고 자주 사용하는 코드를 재 사용 할 수 있도록 만들어진 라이브러리
*/

//usaer

var spans = $('span');
var box = $('#my-box');
var cb = $('.common-button');

box.html('<strong>content</strong>');
box.css('background-color', '#ff3300');