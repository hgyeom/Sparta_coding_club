// 일급객체로서의 함수 (2)
// 객체의 프로퍼티로 함수 할당
// this를 사용한다. 스코프 내부의 this는 항상 자기 자신을 가리킨다.
const person = {
    name : 'Kim',
    age : 31,
    job : true,
    sayHello : function () {
        // console.log("Hello, My name is", this.name);
        console.log(`Hello, My name is ${this.name}`);
    },
    // sayHello : () => { // 화살표 함수는 this를 바인딩하지 않는다.
    //     console.log(`Hello, My name is ${this.name}`);
    // },
};

person.sayHello();

