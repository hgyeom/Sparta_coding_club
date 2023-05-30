// while
// while => ~동안 : 반복문
// while(조건) {
//     로직
// }

// let i = 0;
// while(i < 10) {
//     console.log("while 실행중 => ",i);
//     i++;
// };

// while문으로 3초과 100 미만의 숫자중 5의 배수만 출력
// let i = 3;
// while (i < 100) {
//     if (i >= 5 && i % 5 === 0) console.log(i,"는 5의 배수입니다.");
//     i++;
// }

// do ~ while문
// 한번 실행 후 조건 검사.

// let i = 0;
// do {
//     console.log("do 실행중 => ", i);
//     i++;
// } while (i < 10){
//     console.log("while 실행중 => ",i);
//     i++;
// }

// break, continue
for (let i = 0; i < 10; i++) {
    if(i === 5) { // i가 5라면
        break; // 실행을 멈추고 for문을 빠져나간다.
    }
    if(i === 3) { // i가 3이라면
        continue; // 아래 코드를 무시하고 다음 반복으로 넘어간다.
    }
    console.log(i);
}