// 문(state. if, else if, switch 등)
// 조건문 - if, else if, else, switch
// 1. if문
let x = 10;
// 1-1. true일때

// if (x > 0) { // true
//     console.log('x는 양수입니다.'); // 실행 O
// }

// 1-2. false일때
// if (x < 0) { // false
//     console.log('x는 양수입니다.'); // 실행 X
// }

// 1-3.
let y = "hello world";

// y의 길이가 5보다 크거나 같으면 길이를 console.log로 출력하라
// if (y.length >= 5) {
//     console.log(y.length);
// }


// 2. if - else문
// x = -3;

// if (x > 0) {
//     console.log("x는 양수입니다.");
// } else { 
//     console.log("x는 음수입니다.");
// }

x = 10;
// 3. if - else if - else문
// if (x < 0) {
//     console.log("1");
// } else if (x >= 0 && x < 10) { 
//     console.log("2");
// } else {
//     console.log("3");
// }


// 4. switch문
// 변수의 값에 따라 여러개의 경우(case) 중 하나를 선택
// default
let fruit = "사과";

switch (fruit) {
    case "사과":
        console.log("사과 입니다.");
        break;
    case "바나나":
        console.log("바나나 입니다.");
        break;
    case "키위":
        console.log("키위 입니다.");
        break;
    default:
        console.log('아무것도 아닙니다.');
        break;
}