// 대량의 데이터를 처리하기 위해 반복을 위한 메소드가 여러 개 있다.
// keys, values, entries

const myMap = new Map();
myMap.set('one',1);
myMap.set('two',2);
myMap.set('three',3);

// console.log(myMap.keys()); // [Map Iterator] { 'one', 'two', 'three' }
// for (const key of myMap.keys()) {
//     console.log(key); // one two three
// };

// console.log(myMap.values()); // [Map Iterator] { 1, 2, 3 }
// for (const value of myMap.values()) {
//     console.log(value); // 1 2 3
// };

// console.log(myMap.entries()); //[Map Entries] { [ 'one', 1 ], [ 'two', 2 ], [ 'three', 3 ] }
// for (const entrie of myMap.entries()) {
//     console.log(entrie); // [ 'one', 1 ][ 'two', 2 ][ 'three', 3 ]
// }; 


// Map의 크기와 존재 여부 확인하기
console.log(myMap.size); // 3. Map의 사이즈(길이,크기)
console.log(myMap.has('two')); // true. key 기반 검색
console.log(myMap.has('twoo')); // false. key 기반 검색