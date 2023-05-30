const x = 1;

// 1
function outer() {
  const x = 10;
  const inner = function () {
    console.log(x);
  };
  return inner;
}

// outer함수를 실행해서 innerFunc에 담는다.
// => outer함수의 return값을 innerFunc에 담는다.
const innerFunc = outer();
// 여기서 outer함수의 실행 컨텍스트는 사라진다.
innerFunc();
