// 스코프, 전역변수, 지역변수
// 스코프 = 변수의 영향 범위
// 전역변수 = 전체 영역
// 지역변수 = 함수 내부

// 전역변수
let x = 10;
function printX() {
    console.log(x);
}

console.log(x);
printX();