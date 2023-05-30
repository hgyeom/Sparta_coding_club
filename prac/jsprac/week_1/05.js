// 형 변환
// 명시적 형 변환, 암시적 형 변환

// 1. 암시적 형 변환 (자동 변환)
// 1-1. 문자열. 더하기 연산자는 문자열이 우선시 된다.
let result1 = 1 + "2";
// console.log(result1);
// console.log(typeof result1);

let result2 = "1" + null;
// console.log(result2);
// console.log(typeof result2);

// 1-2. 숫자. 더하기 연산자가 아닌 다른 연산자는 숫자가 우선시 된다.
let result3 = 1 - "2";
// console.log(result3);
// console.log(typeof result3);

let result4 = "2" * "3";
// console.log(result4);
// console.log(typeof result4);

// 2. 명시적 형 변환
// 2-1. Boolean
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(NaN));
// console.log('-----------------');
// console.log(Boolean("false")); // 문자열로 인식하여 true.
// console.log(Boolean({})); // 객체는 값이 비어도 true.

// 2-2. 문자열
let result5 = String(123);
// console.log(result5);
// console.log(typeof result5);

let result6 = String(true);
// console.log(result6);
// console.log(typeof result6);

let result7 = String(false);
// console.log(result7);
// console.log(typeof result7);

let result8 = String(null);
// console.log(result8);
// console.log(typeof result8);

let result9 = String(undefined);
// console.log(result9);
// console.log(typeof result9);

// 2-3. 숫자
let result10 = Number("123");
// console.log(result10);
// console.log(typeof result10);