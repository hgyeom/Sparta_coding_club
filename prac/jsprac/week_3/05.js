// var n = null;
// console.log(typeof n); // object

// //동등연산자(equality operator)
// console.log(n == undefined); // true
// console.log(n == null); // true

// //일치연산자(identity operator)
// console.log(n === undefined);
// console.log(n === null);

// ---- 1번
var a = 1;
function outer() {
	function inner() {
		console.log('1번 :',a); //undefined. 바로 밑에서 a를 재 선언 하였기에 undefined가 나온다.
		var a = 3;
	}
	inner(); // ---- 2번
	console.log('2번 :',a);
}
outer(); // ---- 3번
console.log('3번 :',a);