// 구조분해할당 : destructuring(de + structure + ing)
// de = not
// structure = 구조
// 배열, 객체의 속성을 분해해서 변수에 담을 수 있게 해줌.

// 1. 배열
// 1은 value1에 "new"는 value2에 각각 할당된다. 
// 배열이 아니다! 각각의 변수 let value1, let value2 이다.
// let [value1, value2] = [1, "new"] 

// 각각의 변수 a에 "value1", b에 "value2", c에 "value3"이 할당된다.
// d는 기본적으로 undefined가 되는데, 방지하기 위해 초기값을 4로 주었다.
// let arr = ["value1", "value2", "value3"];
// let [a, b, c, d = 4] = arr;


// console.log(a); // value1
// console.log(b); // value2
// console.log(c); // value3

// 2. 객체
// 기존 이름으로 할당

// let user = {
//     name : "kim",
//     age : 30
// };

// 변수 name, age에 같은 이름의 key name의 value와 age의 value가 할당된다.
// let {name, age} = {
//     name : "kim",
//     age : 30
// };

// console.log(name); // kim, string
// console.log(age);  // 30, number

// 새로운 이름으로 할당

let user = {
    name : "kim",
    age : 30,
    birthday : "02월12일"
};

// let {
//     name: newName, // newName에 name값을 넣는다.
//     age: newAge    // newAge에 age값을 넣는다.
// } = user;          // user객체의 값을 넣는다.

// console.log("newName =>",newName); // kim, string
// console.log("newAge =>",newAge);  // 30, number

// name, age, birthday를 user에서 받아오는데 birthday의 초기값은 "03월12일"로 준다.
let { name, age, birthday = "03월12일"} = user; 
console.log(name);      // kim, string
console.log(age);       // 30, number
console.log(birthday);  // 02월12일, string. 초기값을 주어도 user에 birthday가 있어서.