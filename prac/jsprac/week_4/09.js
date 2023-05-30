// 비 동기적 코드

setTimeout(function() {
    console.log("위에가 먼저 일까?")
}, 1000);

console.log("아래가 먼저 일까?");