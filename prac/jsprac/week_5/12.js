// 클로저
// 카운트 상태 변경 함수 #1
// 함수가 호출될 때마다 호출된 횟수를 누적하여 출력하는 카운터

// 카운트 상태 변수
let num = 0;

const increase = function () {
  // 카운트 상태 1 증가
  return ++num;
};

console.log(increase());
num = 100; // 변수가 은닉되지 않았기 때문에 치명적 단점이 있다.
console.log(increase());
console.log(increase());

// 보완해야 할 사항.
// 1. 카운트 상태 => increase함수가 호출되기 전까지는 변경X
// 2. 이를 위해 count 상태는 increase 함수만이 변경할 수 있어야 한다.
// 3. 전역변수 num이 문제이다.
