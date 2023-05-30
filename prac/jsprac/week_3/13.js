// bind
// this를 바인딩 하는 메서드
// call, apply와는 조금 다르다. 즉시 호출하지는 않는다.

// 목적
// 1. 함수에 this를 미리 적용한다.
// 2. 부분 적용 함수이다.

let func = function (a, b, c, d) {
    console.log(this, a, b, c, d);
};
func(1, 2, 3, 4);

// 함수에 this를 미리 적용 해 보자.
let bindFunc1 = func.bind({x: 1});
// bindFunc1(5, 6, 7, 8);

// 부분 적용
let bindFunc2 = func.bind({x: 1}, 4, 5);
// bindFunc2(6, 7);


// name 프로퍼티
// 'bound'라는 접두어가 붙어있다.
console.log(func.name);
console.log(bindFunc1.name);
console.log(bindFunc2.name);
