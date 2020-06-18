// [[자료형 Primitive (기본형) Object (객체) type]]

// Primitive type 자료형 
// Boolean, null, undefined, Number, String 

// Object type 자료형 Reference 타입 
// Object 배열, 함수, 사용자 정의 클래스 모두 Object 포함


//[ 숫자형 변수 ]             16 진수 8 진수 2진수
var a = [40, -8, 0, 0.5, -3.2, 0x1af, 0o1, ob11, Infinity, -Infinity]


// NaN 숫자가 아님 Infinity 무한대 


// [문자형 변수] 
// char x all String so '' "" 동일
var a = "Hello";
var b = 'world';

// 이스케입 문자  -- 문자열 안에 여러줄의 글을 입력할 수 없음 

var myString = "first line\nsecond line\nthird line"; // 요론식으로 표현되어야함 


// \n = 줄바꿈  | \t = 수평탭 | \\ = 문자 \ | \' = 문자 ' | \"" = 문자 "

// 문자열 연결 + 연산자 이용

var c = a + b; 
print(c[0]) // char 형태 접근 처럼 배열 형식으로 접근 가능 


// [배열]  -- 동적 타입언어 특 배열에도 타입이 정해저 있지 않다.
var emptyArray = [];
var oddNumbers = [1, 3, 4, 7, 9];
var evenNumbers = new Array(2, 4, 6, 8, 10);
var mixedArray = ['a', 1, new Date(), "today"];

// 항목 접근 시 
console.log(mixedArray[2]);

// 자주 쓰는 속성과 메소드
var colors = ['red', 'blue'];
console.log(colors.length); // 길이

colors.push('green');
colors.pop();

colors.unshift('white'); // 앞에 항목 추가 
colors.shift(); // 앞 항목 제거

console.log(colors.indexOf('red')) // 배열 내부 값의 위치 찾기 

// 인덱스 위치에서 부터 n개의 항목제거 

var fruits = colors + ['green', 'yellow']
var removedItem = fruits.splice(1, 2);
// fruits : ['red', 'yellow']
// removedItem : ['blue', 'green']


// [객체] Primitive 타입이외의 모든 변수느 객체 타입
// 두 타입의 가장 큰 차이점은 Reference (참조)에 있다.
// 객체는 메모리 주소를 복사시키며 값자체는 복사되지 않아 같은 객체를 참조 
// js에서 좁은 의미의 객체는 키-값형태의 쌍을 저장할 수 있는 딕셔너리를 의미한다.

var me = {
    'name':'young',
    'birth':'1996',
    'sex':'m'
}

// 중괄호 {} 를 이용해 생성하며 :와 ,를 이용해 중괄호 내부에서 키 값 쌍을 설정할 수 있다.
// {} 대신 new Object() 생성자 사용도 가능 인덱스 접근자 [i] 를 사용하여 키 값을 설정할 수 도 있음

var me = {};
me['name'] = 'young';
me['birth'] = 1996;
me['sex'] = 'm';


me.birth = 1996;


