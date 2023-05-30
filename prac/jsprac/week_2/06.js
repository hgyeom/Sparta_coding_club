// 일급객체로서의 함수(3)
// 배열의 요소로 함수를 할당

const myArr = [
    function (a,b) {
        return a + b;
    }, 
    function (a,b) {
        return a - b;
    }
]

// 배열의 0번째 요소에 1,2를 매개변수로 접근한다.
console.log(myArr[0](2,2))

// 배열의 1번째 요소에 4,2를 매개변수로 접근한다.
console.log(myArr[1](4,2))