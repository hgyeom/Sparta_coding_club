// 고차 함수: 함수를 매개변수로 받거나 리턴하는 함수
// 아래 결과와 같이 출력되도록 고차 함수를 완성해 보세요.

function divideBy(num) {
  // 여기에 코드를 작성하세요.
  console.log(`1 num : ${num}`);
  return function (x) {
    console.log(`2 x : ${x}`);
    console.log(`3 num : ${num}`);
    return x / num;
  };
}

const divideBy100 = divideBy(100);
// console.log(divideBy100);
//  function (x) {
//     return x / 100;
//   };
const result = divideBy100(10);
console.log(result); // 출력 결과: 0.1
