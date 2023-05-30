// user 객체 생성
var user = {
    name: "kim",
    gender: "male"
};

// 이름을 변경하는 함수, 'changeName'을 정의
// 입력값 : 변경대상 user 객체, 변경하고자 하는 이름
// 출력값 : 새로운 user 객체
// 특징 : 객체의 프로퍼티(속성)에 접근하는것이 아닌 아예 새로운 객체를 반환 -> 불변
var changeName = function (user, newName) {
    return {
        name: newName,
        gender: user.gender
    };
};

// 변경한 user정보를 user2 변수에 할당
// 불변이기 때문에 user1에 영향이 없다.
var user2 = changeName(user, "jejukim");

// 아래 로직이 수행 된다.
if(user !== user2) {
    console.log("유저 정보가 변경되었습니다.");
};

console.log(user.name, user2.name);
console.log(user === user2);