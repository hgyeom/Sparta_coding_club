// 조건문의 중첩
let age = 20;
let gender = "여성";

// 미성년자 구분
// if (age >= 18) {
//     console.log("성인입니다.");
// } else {
//     console.log("미성년자입니다.");
// }

// 미성년자, 성별 구분

if (age >= 18) {
    if (gender === "여성") {
        console.log("성인 여성입니다.");
    } else {
        console.log("성인 남성입니다.");
    }
} else {
    if (gender === "여성") {
    console.log("미성년자 여성입니다.");
    } else {
    console.log("미성년자 남성입니다.");
    }
}