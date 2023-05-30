// 객체
// key-value pair
// 하나의 변수에 여러개의 값을 넣을 수 있다.

// 1. 객체 생성 방법
// 1-1. 기본적인 객체 생성 방법
// let person = {
//     name: "홍길동",
//     age: 30,
//     gender: "남자"
// }

// 1-2. 생성자 함수를 이용한 객체 생성 방법
// function Person(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
// }

// let person1 = new Person("홍길동", 30, "남자");
// let person2 = new Person("콩순이", 30, "여자");

// 2. 객체에 접근하는 방법.
// console.log("1",person.name);
// console.log("2",person.age);
// console.log("3",person.gender);


// 3. 객체 메소드(객체가 가진 여러가지 기능 : Object.~~~)
// 3-1. Object.keys() : key를 가져오는 메소드
let person = {
    name: "홍길동",
    age: 30,
    gender: "남자"
};
// console.log(Object.keys(person));

// 3-2. Object.values() : value를 가져오는 메소드
// console.log(Object.values(person));

// 3-3. entries
// key, value를 묶어서 배열로 만든 배열. (2차원 배열)
// console.log(Object.entries(person));

// 3-4. assign
// 복사
// let newPerson = {}; //person을 복사할 새로운 객체
// Object.assign(newPerson, person, { age:31 });
// console.log(newPerson);

// 3-5. 객체 비교
// let person1 = {
//     name: "홍길동",
//     age: 30,
//     gender: "남자"
// };

// let person2 = {
//     name: "홍길동",
//     age: 30,
//     gender: "남자"
// };

// 객체는 메모리 주소를 참조하는데 person1과 person2는 서로 다른 주소를 가지고 있기에 false가 나온다.
// console.log(person1 === person2); // false. 
// console.log(JSON.stringify(person1) === JSON.stringify(person2)); // 문자열로 변환하여 비교한다.

// 3-6. 객체 병합

let person1 = {
    name: "홍길동",
    age: 30
};

let person2 = {
    gender: "남자"
};

/// ... : spread operator(스프레드 연산자)
let perfectMan = {...person1, ...person2};
console.log(perfectMan);