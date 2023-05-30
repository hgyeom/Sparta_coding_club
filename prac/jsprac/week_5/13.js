// 카운트 상태 변경 함수 #2

const increase = function () {
  // 카운트 상태 변수
  let num = 0;
  // 카운트 상태 1 증가
  return ++num;
};

// 이전 상태값을 유지하지 못함.
console.log(increase());
console.log(increase());

// 1. num 변수는 increase 함수의 지역변수로 선언 > 변경 방지.
// 2. 하지만 increase가 호출될 때 마다 num이 초기화됨.
// 의도치 않은 변경을 방지하면서 이전 상태를 유지해야 한다. => closure 사용
