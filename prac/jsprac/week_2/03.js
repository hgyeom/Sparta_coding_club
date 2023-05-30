// 단축 속성명 : property shorthand
// 코드 해석을 위해 꼭 알아두자.

const name = "abc";
const age = "30";

// 객체의 key - value값이 같으면 생략이 가능하다.
const obj = {
    name, // name : name과 같다.
    age   // age : age와 같다.
};

// 전개 구문 : spread operator
// 구조분해 할당과 같이 가장 많이 사용되는 ES6 문법
// 배열

// let arr = [1, 2, 3];
// console.log(arr); // [ 1, 2, 3 ]
// console.log(...arr); // 1, 2, 3

// let newArr = [...arr,4];
// console.log(newArr);  // [ 1, 2, 3, 4]

// 객체
// let user = {
//     name: 'abc',
//     age: 30
// };

// let user2 = {...user};
// console.log(user);
// console.log(user2);

// 나머지 매개변수(rest parameter)
// function exampleFunc(a, b, c, ...args) {
//     console.log(a, b, c); // 1 2 3
//     console.log(args);    // [ 4, 5, 6, 7, 8 ]. 배열 형태로 들어온다.
//     console.log(...args); // 4 5 6 7 8 스프레드 문법.
// }

// exampleFunc(1, 2, 3, 4, 5, 6, 7, 8);

// 템플릿 리터럴(Template Literal)
// 백틱(``) 내부에는 자바스크립트 코드, 변수 등을 사용 가능하다.
const testTemplate = "안녕하세요"
console.log(`Hello World ${testTemplate}`);

// 멀티라인을 지원한다!!
console.log(`
    Hello
        My name is JS!!

        Nice to meet you!
`) 