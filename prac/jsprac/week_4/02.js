// 콜백 함수를 받은 코드는 무슨 제어권을 갖고있는가
// 1. 호출 시점에 대한 제어권
// setInterval : 반복해서 매개변수로 받은 콜백함수의 로직 실행.
let count = 1;
let cbFunc = function() {
    console.log(count);
    if (++count > 5) clearInterval(timer); // ++하고 나서 비교한다.
};
let timer = setInterval(cbFunc,1000);
