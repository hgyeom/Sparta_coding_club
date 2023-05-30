// 일급객체로서의 함수

// 1. 변수에 함수를 할당할 수 있다.
// 함수가 값으로 취급된다.
// 함수를 나중에 사용할 수 있다.
// const sayHello = function () {
//     console.log("hello");
// }


// 2. 함수를 인자로 다른 함수에 전달할 수 있다.
// 1) 콜백함수 : 매개변수로 쓰이는 함수
// 2) 고차함수 : 함수를 인자로 받거나 return하는 함수
// function callFunction (func) {
//     // 매개변수로 받은 변수가 함수이다.
//     func();
// }

// const sayHello = function () {
//     console.log("hello");
// }

// callFunction(sayHello);

// 3. 함수를 반환할 수 있다.

function createAdder (num) {
    return function (x) {
        return x + num;
    }
}

const addFive = createAdder(5); // 아래의 코드와 같다.

// const addFive = return function (x) {
//     return x + 5;
// }

console.log(addFive(10));