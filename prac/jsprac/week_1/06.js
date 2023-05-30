// 연산자

// 1. 더하기 연산자
// console.log(1 + 1); // 2
// console.log(1 + "1"); // 11

// 2. 빼기 연산자
// console.log(1 - "2"); // -1
// console.log(1 - 2); // -1

// 3. 곱하기 연산자(*)
// console.log(2 * 3); // 6
// console.log("2" * 3); // 6

// 4. 나누기 연산자(/)
// console.log(4 / 2); // 2
// console.log("4" / 2); // 2

// 5. 나누기 연산자(/) vs 나머지 연산자(%)
// console.log(5 / 2); // 2.5
// console.log(5 % 2); // 1

// 6. 할당 연산자(assignment)
// 6-1. 등호 연산자(=)
// let x = 10;
// console.log(x);

// 6-2. 더하기 등호 연산자(+=)
// x += 5;
// console.log(x);

// 6-3. 빼기 등호 연산자(-=)
// x -= 5;
// console.log(x);

// 6-4. 곱하기 등호 연산자(*=)
// x *= 5;
// console.log(x);

// 6-5. 나누기 등호 연산자(/=)
// x /= 5;
// console.log(x);

// 6-6. 나머지 등호 연산자(%=)
// x %= 3;
// console.log(x);

// 비교 연산자. true 또는 false를 반환한다.
// 1. 일치 연산자(===). 타입까지 일치해야 true를 반환한다.
// console.log(2 === 2);   // true
// console.log("2" === 2); // false
// console.log(2 === "2"); // false

// 2. 불일치 연산자(!==). 타입까지 일치해야 false를 반환한다.
// console.log(2 !== 2);   // false
// console.log("2" !== 2); // true
// console.log(2 !== "2"); // true

// 3. 관계 연산자.
// console.log(2 < 3); // true
// console.log(2 > 3); // false
// console.log(3 > 2); // true
// console.log(2 <= 2);// true
// console.log(3 <= 2);// false
// console.log(3 >= 2);// true

// 4. 논리 연산자.
// 4-1. 논리곱 연산자(&&). 둘 모두 true일때 true 반환
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// 4-2. 논리합 연산자(||). 둘중 하나라도 true라면 true 반환
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// 4-3. 논리부정 연산자(!). 값을 반대로 바꿈
// console.log(!true);
// console.log(!false);
// let a = true;
// console.log(!a);

// 5. 삼항 연산자.
// 조건에 따라 값을 선택한다.
let x = 10;
console.log((x > 5) ? "크다" : "작다");

let y = 20;
console.log((x < y) ? "작다" : "크다");

// 6. 타입 연산자(typeof)
console.log(typeof "5");