// 03.js의 패턴 적용하기

var copyObject = function (target) {
    var result = {};

    // for ~ in 구문을 사용해 객체의 모든 프로퍼티에 접근할 수 있다.
    // 하드코딩을 하지 않아도 된다.
    // copyObject로 복사를 한 다음 복사를 완료한 객체의 프로퍼티를 변경한다.
    for (var prop in target) {
        result[prop] = target[prop];
    };
    return result;
};

var user = {
    name: "kim",
    gender: "male",
};

var user2 = copyObject(user);
user2.name = "jejukim";

if (user !== user2) console.log("유저 정보가 변경되었습니다.");

console.log(user.name, user2.name);
console.log(user === user2);


// var copyObjectDeep = function(target) {
// 	var result = {};
// 	if (typeof target === 'object' && target !== null) {
// 		for (var prop in target) {
// 			result[prop] = copyObjectDeep(target[prop]);
// 		}
// 	} else {
// 		result = target;
// 	}
// 	return result;
// }

// //결과 확인
// var obj = {
// 	a: 1,
// 	b: {
// 		c: null,
// 		d: [1, 2],
// 	}
// };
// var obj2 = copyObjectDeep(obj);

// obj2.a = 3;
// obj2.b.c = 4;
// obj2.b.d[1] = 3;

// console.log(obj);
// console.log(obj2);



// console.log(sum(3, 4));

// 함수 표현식으로 짠 코드
// 함수 선언부만 위로 쭉!
// 이 이후부터의 코드만 영향을 받아요!
var sum = function (x, y) {
	return x + y;
}



var a = sum(1, 2);
console.log(a)

// 함수 표현식으로 짠 코드
// 함수 선언부만 위로 쭉!
// 이 이후부터의 코드만 영향을 받아요!
var sum = function (x, y) {
	return x + ' + ' + y + ' = ' + (x + y);
}

var c = sum(1, 2);

console.log(c);