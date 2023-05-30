// ES6

// ES5(2015년)까지는 var 사용
// 1. e6 => let(변수), const(상수)

// 2. arrow function
// 함수 선언문
function add () {

}

// 함수 표현식
var add = function () {

}

// 화살표 함수.
var add = (x) => {
    return 1;
}

// return문이 한줄이면 중괄호 생략 가능.
var add = (x) => 1;

// 매개변수가 하나이면 소괄호 생략 가능.
var add = x => 1;


// 3. 삼항 연산자
// condition ? true인 경우 : false인 경우
// console.log(true ? "true" : "false")  // true
// console.log(false ? "true" : "false") // false