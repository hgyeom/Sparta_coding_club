// 배열

// 1. 생성
// 1-1. 기본 생성
// let fruits = ["사과", "바나나", "오렌지"];

// 1-2. 크기 지정
// let numbers = new Array(5); // 크기가 5인 배열 생성
// console.log(numbers) // [ <5 empty items> ]. 비어있다.

// 2. 요소 접근
// index를 사용한다.
// console.log(fruits[0]); // 사과
// console.log(fruits[1]); // 바나나
// console.log(fruits[2]); // 오렌지

// 3. 배열의 메소드
// 3-1. push()
// let fruits = ["사과", "바나나"]; // 요소 2개
// fruits.push("오렌지"); // 배열 끝에 오렌지를 추가한다.
// console.log(fruits); // 오렌지가 추가됐다. 요소 3개.

// 3-2. pop()
// let fruits = ["사과", "바나나", "오렌지"]; // 요소 3개.
// fruits.pop(); // 배열 끝의 요소를 삭제한다.
// console.log(fruits); // 바나나가 삭제됐다. 요소 2개.

// 3-3. shift()
// let fruits = ["사과", "바나나", "오렌지"]; // 요소 3개.
// fruits.shift(); // 배열 첫번째 요소를 삭제한다.
// console.log(fruits); // 사과가 삭제됐다. 요소 2개.

// 3-4. unshift()
// let fruits = ["사과", "바나나", "오렌지"]; // 요소 3개.
// fruits.unshift("포도"); // 배열 첫번째에 요소를 추가한다.
// console.log(fruits); // 포도가 추가됐다. 요소 4개.

// 3-5. splice().
// let fruits = ["사과", "바나나", "오렌지"]; // 요소 3개.
// let start = 1;
// let end = 1;
// fruits.splice(start, end, "포도"); // start부터 시작해서 end까지의 요소를 "포도"로 변경한다.
// console.log(fruits); // 바나나가 포도가 됐다. 요소 3개.

// 3-6. slice()
// let fruits = ["사과", "바나나", "오렌지"]; // 요소 3개.
// let start = 0;
// let end = 2;
// let slicedFruits = fruits.slice(start,end); // start부터 end 전 까지의 요소를 새로운 배열로 반환한다.
// console.log(slicedFruits); // start = 0이니 0인 사과부터 end=2이니 2인 오렌지 "전" 요소인 바나나까지 반환한다. 요소 2개.

// 4. forEach, map, filter, find
// 4-1. forEach(). 배열의 요소를 모두 반복한다.
let numbers = [3, 6, 3, 2, 5];

// 매개변수 자리에 함수를 넣는 것 : 콜백 함수
numbers.forEach(function(item) {
    console.log("item입니다 => ", item)
});

// 4-2. map(). 배열을 가공해서 새로운 배열을 만든다. 항상 원본 배열의 길이만큼 반환한다.
let newNumbers = numbers.map(function(item) {
    return item * 2;
});
console.log(newNumbers);

// 4-3. filter(). 조건에 해당하는 요소를 배열로 반환한다.
let filterdNumbers = numbers.filter(function(item) {
    return item === 5;
});
console.log(filterdNumbers);

// 4-4. find(). 조건에 해당하는 요소중 첫번째 요소를 반환한다.
let result = numbers.find(function(item) {
    return item > 2;
});
console.log(result);
