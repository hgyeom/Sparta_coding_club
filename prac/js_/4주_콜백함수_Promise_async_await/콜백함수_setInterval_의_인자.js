// 아래 타이머 함수를 요구사항에 맞게 완성해 보세요.

let count = 0;

const timerId = setInterval(callbackFunc, 1000);

function callbackFunc() {
  console.log(++count);
  if (count === 7) {
    clearInterval(timerId);
  }
}
/*
출력 결과:
1
2
3
4
5
6
7
*/
