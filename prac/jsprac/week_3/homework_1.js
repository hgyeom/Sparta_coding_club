// var user = {
//     name: "john",
//     age: 20,
// }

// var getAged = function (user, passedTime) {
// 	// 빈 객체 생성
// 	let agedUser = {}
//     // for..in문으로 user의 요소를 result에 복사한다.
//     for (let prop in user){
//         agedUser[prop] = user[prop]
//     }
//     agedUser.age += passedTime;
//     return agedUser;
// }


// var agedUser = getAged(user, 6);

// var agedUserMustBeDifferentFromUser = function (user1, user2) {
//     if (!user2) {
// 		    console.log("Failed! user2 doesn't exist!");
// 	  } else if (user1 !== user2) { 
//         console.log("Passed! If you become older, you will be different from you in the past!")
//     } else {
//         console.log("Failed! User same with past one");
//     }
// }

// agedUserMustBeDifferentFromUser(user, agedUser);
var obj = {
	outer: function () {
		console.log(this);
		var innerFunc = () => {
			console.log(this);
		};
		innerFunc();
	}
};
obj.outer();