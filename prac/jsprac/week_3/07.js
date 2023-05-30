// var obj1 = {
//     outer: function() {
//         console.log(this); // 1
//         var innerFunc = function () {
//             console.log(this); // 2, 3
//         };
//         innerFunc();

//         var obj2 = {
//             innerMethod : innerFunc
//         };
//         obj2.innerMethod();
//     }
// };
// obj1.outer();

// var obj = {
// 	method: function (x) { console.log(this, x) }
// };
// obj.method(1); // { method: f } 1
// obj['method'](2); // { method: f } 2

// var obj = {
// 	outer: function() {
// 		console.log(1, this); // (1) obj
// 		var innerFunc = () => {
// 			console.log(2, this); // (2) obj
// 		};
// 		innerFunc();
// 	}
// }

// obj.outer();

var Cat = function (name, age) {
	this.bark = '야옹';
	this.name = name;
	this.age = age;
};

var choco = new Cat('초코', 7); //this : choco
var nabi = new Cat('나비', 5);  //this : nabi

console.log(choco);
console.log(nabi);
