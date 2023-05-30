// Set
// 고유한 값을 저장하는 자료구조다.
// 키를 저장하지 않고 값만 저장한다.
// 값이 중복되지 않는 유일한 요소로만 구성된다.
// 기능 > 값 추가, 검색, 삭제, 모든 값 제거, 존재 여부 확인

// Set 생성
// const mySet = new Set();

// 추가
// mySet.add('value1');
// mySet.add('value2');
// mySet.add('value2'); // 중복값이기 때문에 추가되지 않는다.

// console.log(mySet.size); // 2.
// console.log(mySet.has('value1')); // true
// console.log(mySet.has('value2')); // true
// console.log(mySet.has('value3')); // false

// mySet.add('value3')
// mySet.add('value5')
// mySet.add('value6')
// mySet.add('value8')

// // Iterator.
// for (const value of mySet.values()) {
//     console.log(value);
// }