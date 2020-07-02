// [[함수]] 

// js 는 return type을 명시하지않음 

// 선언
function plus(a, b) {
    var sum = a + b;
    return sum;
}

// 호출 

plus(3, 5);

// javaScript 함수 내부에서 선언한 변수는 외부에서 참조할 수 없다. 함수도 동일 

function outerFunc() {
    var outerVer = 'a';

    function innerFunc() {
        var innerVar = 'b';
        console.log(outerVer);
        console.log(innerVar);
    }

    innerFunc();
    console.log(innerVar); // Nope
    console.log(outerVer);
}

outerFunc();
innerFunc(); // Nope

// first-class object 

// js에서 함수는 first-class object(citizen)로 취급된다.

/*
    변수나 데이터 구조안에 담을수 있다.
    파라미터로 전달 할 수 있다.
    반환값으로 사용할 수있다.
    할당에 사용된 이름과 관계없이 고유한 구별이 가능하다.
    동적으로 할당이 가능하다.
*/

// 함수 조차 이와 같은 객체로 취급 

var plusFunc = function(a, b) {
        return a + b;
    } // 익명함수로  plusFunc 변수에 대입

plusFunc(3, 5);

function a(x) {
    var b = function(y) {
        return x + y;
    };
    return b;
} // 함수 자체 반환가능 

a(3)(4); // 7

var jacob = {
    'age': 18,
    'run': function() {
        alert('Jacob is running');
    },
    'sleep': function() {
        alert('jacob sleeps');
    },
};

// 즉시 실행 함수 
// 함수의 클로저 개념과 first-class object 개념을 이용하며 비슷한 효과 ok
(function() {
    var a = 10;
    var b = 20;
    console.log(a + b); // 30
})();

console.log(a); // undifined

var tempFunction = (function() {
    var a = 10;
    var b = 20;
    console.log(a + b); // 30
});

tempFunction() // 동일

// 요론식으로도 사용 가능 
(function(b) {
    b.getElementById('content');

})(document.body);