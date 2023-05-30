// 카운트 상태 변경 함수 #3

// increase 함수는 함수를 실행한 결과!
// increase는 return function을 반환한다!
// return ++num은 외부 환경의 변수를 참조한다!
const increase = (function () {
  // 카운트 상태 변수
  let num = 0;
  // 클로저, 카운트 상태 1 증가.
  return function () {
    return ++num;
  };
})();

// 이전 상태값을 유지

console.log(increase());
console.log(increase());
console.log(increase());

// 1. 위 코드가 실행되면 '즉시 실행 함수'가 호출 > 함수 반환 > increase에 할당
// 2. increase 변수에 할당된 함수는 자신이 정의된 위치에 의해 결정된
//  상위 스코프인 즉시 실행 함수의 '렉시컬 환경'을 기억하는 클로저이다.
// 3. 즉시 실행 함수는 즉시 소멸된다.
// > num 초기화 x, num은 외부에서 접근할 수 없는 은닉된 값이 된다.
// increase에서만 값 변경이 가능하기 때문에 의도하지 않은 값 변경도 걱정 X
