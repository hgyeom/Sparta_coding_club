// 함수, function. 기능.
// input, output을 가진 기능의 단위

// 1. 함수 선언문. 
// 함수의 input > 매개변수. return문 뒤의 값 = output > 반환값
// function add(매개변수) {
//     // 함수 내부에서 실행할 로직
// }

// 두 개의 숫자를 입력 받아서 덧셈을 한 후 내보내는 함수
function add (x,y) {
    return x + y;
}

// 2. 함수 표현식
let add2 = function (x,y) {
    return x + y;
}

// 3. 함수 호출하기(사용하기)
// 함수명() -> add(입력값)
// console.log(add(1,2));
// console.log(add2(1,2));

// let functionResult = add(3,4);
// console.log(functionResult)

// let functionResult2 = add2(10,20);
// console.log(functionResult2)