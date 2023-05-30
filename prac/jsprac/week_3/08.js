// 명시적 this 바인딩
// call, apply, bind
// call
let func = function (a, b, c) {
    console.log(this, a, b, c);
};

// no binding
// func(1,2,3);

// 명시적 binding
// func.call({x:1}, 1,2,3); // html의 클래스, id 에 사용 가능한지 시험해보기

// call과 apply는 동일한 역할(즉시 실행하는 메서드)이다.
// apply는 매개변수를 대괄호로 묶어줘야 한다.
// func.apply({x:1}, [1,2,3]);



