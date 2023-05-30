var obj = {
	logThis: function () {
		console.log(this);
	},
	logThisLater1: function () {
		// 0.5초를 기다렸다가 출력. 정상동작하지 않는다.
		// 콜백함수도 함수이기 때문에 this를 bind해주지 않아서 잃어버렸다.(유실)
		setTimeout(this.logThis, 500);
	},
	logThisLater2: function () {
		// 1초를 기다렸다가 출력. 정상동작.
		// 콜백함수에 this를 bind 해주었기 때문.
		setTimeout(this.logThis.bind(this), 1000);
	}
};

obj.logThisLater1();
obj.logThisLater2();