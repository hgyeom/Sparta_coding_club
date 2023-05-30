// 렉시컬 스코프
// JS엔진은 함수를 어디서 호출했는지가 아닌
// 어디서 정의했는지에 따라 스코프를 결정한다.

// 외부 렉시컬 환경에 대한 참조값 (outer)는
// 함수 정의가 평가되는 시점에 결정된다
const x = 1;

// outerFunc 내부에서 innerFunc를
// 호출하고 있음에도
function outerFunc() {
  const x = 2;
  innerFunc();
}

// inner와 outer는 서로 다른 스코프를 가지고 있다.
function innerFunc() {
  console.log(x); // 1
}

outerFunc();
