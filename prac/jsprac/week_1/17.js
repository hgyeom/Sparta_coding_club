// for문
// for => ~동안 : 반복문

// for (초기값; 조건식; 증감식) {}
// i = 0인데 i가 10이 될때까지 i에 1을 더한다
// for (let i = 0; i < 10; i++) {
//   console.log("for문 실행중 => ", i);
// }

// 배열과 for문은 짝꿍이다.
// const arr = ["one", "two", "three", "four", "five"];
// for (let i = 0; i < arr.length; i++) {
//   console.log("for문 실행중 => ", i);
//   console.log("arr => ", arr[i]);
// }

// 1부터 10까지의 수 중에 2의 배수만 출력. 좋은 예시는 아님.
// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) console.log(i,"는 2의 배수");
// }

// for ~ in 문
// 객체의 속성을 출력하는 문법
let person = {
  name: "John",
  age: 30,
  gender: "male"
};

for (let key in person) {
  console.log(key + ": " + person[key])
}
